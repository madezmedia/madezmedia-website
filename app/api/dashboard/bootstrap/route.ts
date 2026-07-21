import { NextRequest } from 'next/server';
import { createAcmi } from '@madezmedia/acmi';
import { UpstashAdapter } from '@madezmedia/acmi/adapters/upstash';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

const OPERATIONAL_AGENTS = [
  'agent:antigravity',
  'agent:claude-engineer',
  'agent:avery-rei',
  'agent:ops-center',
  'agent:outreach-specialist',
];

export async function GET(req: NextRequest) {
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;

  if (!url || !token) {
    return Response.json(
      { success: false, error: 'UPSTASH_REDIS_REST_URL or UPSTASH_REDIS_REST_TOKEN not configured' },
      { status: 500 }
    );
  }

  const acmi = createAcmi(new UpstashAdapter({ url, token, prefix: 'acmi:madez' }));

  try {
    const [agentSnapshots, globalTimeline] = await Promise.all([
      Promise.all(
        OPERATIONAL_AGENTS.map(async (id) => {
          const [profile, signals, timeline] = await Promise.all([
            acmi.profile.get(id).catch(() => null),
            acmi.signals.all(id).catch(() => ({})),
            acmi.timeline.read(id, { limit: 10, reverse: true }).catch(() => []),
          ]);

          return {
            id,
            profile,
            signals: signals as Record<string, unknown>,
            timeline: timeline.map((e) => ({
              ts: e.ts,
              source: e.source,
              kind: e.kind,
              correlationId: e.correlationId,
              summary: e.summary,
            })),
          };
        })
      ),
      acmi.timeline.read('thread:agent-coordination', { limit: 15, reverse: true }).catch(() => []),
    ]);

    return Response.json({
      success: true,
      agents: agentSnapshots,
      globalTimeline: globalTimeline.map((e) => ({
        ts: e.ts,
        source: e.source,
        kind: e.kind,
        correlationId: e.correlationId,
        summary: e.summary,
      })),
      fetchedAt: Date.now()
    }, {
      headers: { 'Cache-Control': 'no-store, max-age=0' }
    });
  } catch (err: any) {
    console.error('[Dashboard Bootstrap API] Error:', err);
    return Response.json({ success: false, error: err.message }, { status: 500 });
  } finally {
    await acmi.close().catch(() => {});
  }
}

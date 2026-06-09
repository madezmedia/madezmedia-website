import { NextRequest } from 'next/server';
import { createAcmi } from '@madezmedia/acmi';
import { UpstashAdapter } from '@madezmedia/acmi/adapters/upstash';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

const DEFAULT_AGENTS = [
  'agent:bentley-main',
  'agent:claude-engineer',
  'agent:gemini-cli',
  'agent:antigravity',
  'agent:opencode',
  'agent:hermes',
  'agent:researcher',
  'agent:director',
  'agent:folana',
  'agent:workspace-custodian',
  'agent:lobster-trap-fleet-guardian',
  'agent:real-estate-acquisition-agent',
  'agent:cron',
  'agent:batch',
];

type EntitySnapshot = {
  id: string;
  profile: Record<string, unknown> | null;
  signals: Record<string, unknown>;
  timeline: Array<{
    ts: number;
    source: string;
    kind: string;
    correlationId: string;
    summary: string;
  }>;
  derivedStatus: 'active' | 'degraded' | 'offline' | 'stale' | 'unknown';
  lastEventTs: number | null;
};

function deriveStatus(
  signals: Record<string, unknown>,
  lastEventTs: number | null
): EntitySnapshot['derivedStatus'] {
  const sigStatus = typeof signals?.status === 'string' ? (signals.status as string) : null;
  if (sigStatus === 'degraded-mode' || sigStatus === 'degraded') return 'degraded';
  if (sigStatus === 'offline') return 'offline';

  if (!lastEventTs) return 'unknown';
  const ageHours = (Date.now() - lastEventTs) / (1000 * 60 * 60);
  if (ageHours > 24) return 'offline';
  if (ageHours > 6) return 'stale';
  if (sigStatus === 'active' || ageHours <= 6) return 'active';
  return 'unknown';
}

export async function GET(req: NextRequest) {
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;
  if (!url || !token) {
    return Response.json(
      { error: 'UPSTASH_REDIS_REST_URL or UPSTASH_REDIS_REST_TOKEN not configured' },
      { status: 500 }
    );
  }

  const idsParam = req.nextUrl.searchParams.get('ids');
  const ids = idsParam ? idsParam.split(',').map((s) => s.trim()).filter(Boolean) : DEFAULT_AGENTS;

  const acmi = createAcmi(new UpstashAdapter({ url, token }));

  try {
    const snapshots: EntitySnapshot[] = await Promise.all(
      ids.map(async (id) => {
        const [profile, signals, timeline] = await Promise.all([
          acmi.profile.get(id).catch(() => null),
          acmi.signals.all(id).catch(() => ({})),
          acmi.timeline.read(id, { limit: 10, reverse: true }).catch(() => []),
        ]);

        const lastEventTs = timeline.length > 0 ? timeline[0].ts : null;
        const derivedStatus = deriveStatus(signals as Record<string, unknown>, lastEventTs);

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
          derivedStatus,
          lastEventTs,
        };
      })
    );

    return Response.json(
      { entities: snapshots, fetchedAt: Date.now() },
      { headers: { 'Cache-Control': 'no-store, max-age=0' } }
    );
  } finally {
    await acmi.close().catch(() => {});
  }
}

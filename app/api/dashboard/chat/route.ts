import { NextRequest, NextResponse } from 'next/server';
import { createAcmi } from '@madezmedia/acmi';
import { UpstashAdapter } from '@madezmedia/acmi/adapters/upstash';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

const OPENACP_API_URL = process.env.OPENACP_API_URL || 'http://127.0.0.1:21421';
const OPENACP_API_SECRET = process.env.OPENACP_API_SECRET || '';
const OPENACP_WORKSPACE = process.env.OPENACP_WORKSPACE || '/opt/app/openacp-fleet';

async function apiRequest(method: string, path: string, body?: any) {
  const url = `${OPENACP_API_URL}${path}`;
  const res = await fetch(url, {
    method,
    headers: {
      'Authorization': `Bearer ${OPENACP_API_SECRET}`,
      'Content-Type': 'application/json',
    },
    body: body ? JSON.stringify(body) : undefined,
  });

  if (!res.ok) {
    throw new Error(`OpenACP responded with status ${res.status}: ${await res.text()}`);
  }
  return res.json();
}

async function getOrNewSession(acmi: any, agentId: string): Promise<string> {
  let agentName = agentId;
  if (agentId.includes(':')) {
    const parts = agentId.split(':');
    agentName = parts[parts.length - 1];
  }
  const sessionKey = `chat:session-${agentName}`;
  
  // Try retrieving cached session
  const cachedSessionId = await acmi.signals.get(sessionKey, 'sessionId').catch(() => null);
  if (cachedSessionId) {
    try {
      const statusRes = await apiRequest('GET', `/api/v1/sessions`);
      const sessions = statusRes?.sessions || statusRes?.data || [];
      const active = sessions.find((s: any) => {
        const id = s.id || s.sessionId;
        const state = s.status || s.state;
        return id === cachedSessionId && !['finished', 'closed', 'error'].includes(state);
      });
      if (active) return cachedSessionId;
    } catch (e) {
      console.warn(`[Chat Proxy] Session validation check failed:`, e);
    }
  }

  // Create new session
  const created = await apiRequest('POST', '/api/v1/sessions', {
    agent: agentName,
    workspace: OPENACP_WORKSPACE,
    name: `madez-dashboard-${agentName}-${Date.now()}`
  });

  const newSessionId = created?.sessionId || created?.id || created?.data?.id || created?.data?.sessionId;
  if (!newSessionId) {
    throw new Error('Failed to extract session ID from OpenACP response');
  }

  await acmi.signals.set(sessionKey, 'sessionId', newSessionId).catch(() => null);
  return newSessionId;
}

export async function POST(req: NextRequest) {
  const redisUrl = process.env.UPSTASH_REDIS_REST_URL;
  const redisToken = process.env.UPSTASH_REDIS_REST_TOKEN;

  if (!redisUrl || !redisToken) {
    return NextResponse.json({ error: 'Database environment configuration not set' }, { status: 500 });
  }

  const acmi = createAcmi(new UpstashAdapter({ url: redisUrl, token: redisToken, prefix: 'acmi:madez' }));

  try {
    const { agentId, prompt } = await req.json();
    if (!agentId || !prompt) {
      return NextResponse.json({ error: 'Missing agentId or prompt' }, { status: 400 });
    }

    const sessionId = await getOrNewSession(acmi, agentId);

    // Send prompt to session
    await apiRequest('POST', `/api/v1/sessions/${sessionId}/prompt`, { prompt });

    // Poll for completion (max 2 minutes)
    const start = Date.now();
    const maxTimeout = 120000;
    let finalState = 'initializing';

    while (Date.now() - start < maxTimeout) {
      await new Promise((r) => setTimeout(r, 1500));
      const status = await apiRequest('GET', `/api/v1/sessions/${sessionId}`);
      const session = status?.session || status?.data?.session || {};
      const promptRunning = session.promptRunning ?? false;
      const state = session.status || session.state;
      finalState = state;

      if (state === 'initializing') {
        continue;
      }

      if (!promptRunning || ['finished', 'closed', 'error'].includes(state)) {
        break;
      }
    }

    // Retrieve history
    const hist = await apiRequest('GET', `/api/v1/sessions/${sessionId}/history`);
    const turns = hist?.history?.turns || hist?.turns || [];
    const lastTurn = turns.filter((t: any) => t.role === 'assistant').pop();

    if (!lastTurn) {
      return NextResponse.json({ response: '*(no response from agent)*', status: finalState });
    }

    // Extract text blocks
    let text = lastTurn.steps?.filter((s: any) => s.type === 'text')?.map((s: any) => s.content)?.join('\n') || '';
    if (!text.trim()) {
      const tools = lastTurn.steps?.filter((s: any) => s.type === 'tool_call')?.map((s: any) => `🔧 Executed tool: ${s.name}`)?.join('\n');
      text = tools || lastTurn.content || '*(task completed)*';
    }

    return NextResponse.json({
      success: true,
      response: text.trim(),
      status: finalState,
      sessionId
    });

  } catch (error: any) {
    console.error('[Dashboard Chat Proxy] POST error:', error);
    return NextResponse.json({ error: error.message || 'Proxy request failed' }, { status: 500 });
  } finally {
    await acmi.close().catch(() => {});
  }
}

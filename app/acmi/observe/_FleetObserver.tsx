'use client';

import { useEffect, useState, useRef, useCallback } from 'react';

type Snapshot = {
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

type Response = {
  entities: Snapshot[];
  fetchedAt: number;
};

function timeAgo(ts: number, nowMs: number): string {
  const diff = Math.max(0, nowMs - ts);
  const sec = Math.floor(diff / 1000);
  if (sec < 60) return `${sec}s ago`;
  const min = Math.floor(sec / 60);
  if (min < 60) return `${min}m ago`;
  const hr = Math.floor(min / 60);
  if (hr < 24) return `${hr}h ago`;
  const day = Math.floor(hr / 24);
  return `${day}d ago`;
}

function shortId(id: string): string {
  const parts = id.split(':');
  return parts.length > 1 ? parts.slice(1).join(':') : id;
}

function categoryOf(id: string): string {
  return id.split(':')[0];
}

export function FleetObserver({
  defaultIds,
  pollIntervalMs,
}: {
  defaultIds: string[];
  pollIntervalMs: number;
}) {
  const [snapshots, setSnapshots] = useState<Snapshot[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [fetchedAt, setFetchedAt] = useState<number | null>(null);
  const [now, setNow] = useState(Date.now());
  const inflight = useRef(false);

  const fetchOnce = useCallback(async () => {
    if (inflight.current) return;
    inflight.current = true;
    try {
      const ids = defaultIds.join(',');
      const res = await fetch(`/api/acmi/observe?ids=${encodeURIComponent(ids)}`, {
        cache: 'no-store',
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data: Response = await res.json();
      setSnapshots(data.entities);
      setFetchedAt(data.fetchedAt);
      setError(null);
    } catch (e) {
      setError(e instanceof Error ? e.message : 'fetch failed');
    } finally {
      inflight.current = false;
    }
  }, [defaultIds]);

  useEffect(() => {
    fetchOnce();
    const fetchTimer = setInterval(fetchOnce, pollIntervalMs);
    const tickTimer = setInterval(() => setNow(Date.now()), 1000);
    return () => {
      clearInterval(fetchTimer);
      clearInterval(tickTimer);
    };
  }, [fetchOnce, pollIntervalMs]);

  if (error && !snapshots) {
    return (
      <section className="observer">
        <div className="inner">
          <div className="error-panel">
            <p>Could not reach the ACMI instance.</p>
            <p className="error-detail">{error}</p>
          </div>
        </div>
      </section>
    );
  }

  if (!snapshots) {
    return (
      <section className="observer">
        <div className="inner">
          <p className="loading">Connecting to fleet…</p>
        </div>
      </section>
    );
  }

  return (
    <section className="observer">
      <div className="inner">
        <header className="observer-meta">
          <span className="poll-status">
            {error ? `last ok: ${fetchedAt ? timeAgo(fetchedAt, now) : '—'} · retrying` : 'live'}
          </span>
          <span className="poll-detail">
            {fetchedAt ? `fetched ${timeAgo(fetchedAt, now)}` : ''}
            {' · '}
            polling every {Math.round(pollIntervalMs / 1000)}s
          </span>
        </header>

        <div className="grid">
          {snapshots.map((snap) => (
            <AgentCard key={snap.id} snap={snap} now={now} />
          ))}
        </div>
      </div>
    </section>
  );
}

function AgentCard({ snap, now }: { snap: Snapshot; now: number }) {
  const name = shortId(snap.id);
  const cat = categoryOf(snap.id);
  const profileEntries = snap.profile
    ? Object.entries(snap.profile).slice(0, 5)
    : [];
  const signalEntries = Object.entries(snap.signals).slice(0, 6);

  return (
    <article className={`card status-${snap.derivedStatus}`}>
      <header className="card-head">
        <span className={`status-dot dot-${snap.derivedStatus}`} aria-hidden />
        <h2 className="card-name">{name}</h2>
        <span className="card-cat">{cat}</span>
        <span className="card-status">{snap.derivedStatus}</span>
      </header>

      <div className="card-body">
        <section className="card-section">
          <h3 className="section-label">profile</h3>
          {snap.profile === null ? (
            <p className="empty">— no profile —</p>
          ) : (
            <dl className="kv">
              {profileEntries.map(([k, v]) => (
                <div key={k} className="kv-row">
                  <dt>{k}</dt>
                  <dd>{formatValue(v)}</dd>
                </div>
              ))}
            </dl>
          )}
        </section>

        <section className="card-section">
          <h3 className="section-label">signals</h3>
          {signalEntries.length === 0 ? (
            <p className="empty">— no signals —</p>
          ) : (
            <dl className="kv">
              {signalEntries.map(([k, v]) => (
                <div key={k} className="kv-row">
                  <dt>{k}</dt>
                  <dd>{formatValue(v)}</dd>
                </div>
              ))}
            </dl>
          )}
        </section>

        <section className="card-section">
          <h3 className="section-label">
            timeline <span className="count">{snap.timeline.length}</span>
          </h3>
          {snap.timeline.length === 0 ? (
            <p className="empty">— no events —</p>
          ) : (
            <ul className="events">
              {snap.timeline.map((e, i) => (
                <li key={`${e.correlationId}-${i}`} className="event">
                  <span className="event-time">{timeAgo(e.ts, now)}</span>
                  <span className="event-kind">{e.kind}</span>
                  <span className="event-summary">{e.summary}</span>
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>
    </article>
  );
}

function formatValue(v: unknown): string {
  if (v === null) return 'null';
  if (v === undefined) return '—';
  if (typeof v === 'boolean') return v ? 'true' : 'false';
  if (typeof v === 'number') {
    if (v > 1e12 && v < 2e13) {
      const d = new Date(v);
      return d.toISOString().replace('T', ' ').slice(0, 19) + 'Z';
    }
    return String(v);
  }
  if (typeof v === 'string') return v.length > 80 ? v.slice(0, 77) + '…' : v;
  try {
    const s = JSON.stringify(v);
    return s.length > 80 ? s.slice(0, 77) + '…' : s;
  } catch {
    return String(v);
  }
}

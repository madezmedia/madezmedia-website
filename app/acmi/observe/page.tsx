import type { Metadata } from 'next';
import './page.css';
import { FleetObserver } from './_FleetObserver';

export const metadata: Metadata = {
  title: 'ACMI Observer — live fleet view',
  description:
    'Real-time read-only view of an ACMI fleet. Profile · Signals · Timeline for each agent, polled every five seconds.',
  alternates: { canonical: '/acmi/observe' },
  robots: { index: true, follow: true },
};

export const dynamic = 'force-dynamic';

const DEFAULT_AGENTS = [
  'agent:claude-engineer',
  'agent:bentley',
  'agent:gemini-cli',
  'agent:antigravity',
  'agent:perplexity',
  'agent:folana',
];

export default function ObservePage() {
  return (
    <main className="observe-page">
      <section className="hero">
        <div className="inner">
          <p className="kicker">ACMI · live fleet view</p>
          <h1 className="title">
            Watch the agents <em>work</em>.
          </h1>
          <p className="lede">
            Read-only window into a live ACMI instance. Six agents, six namespaces, three keys
            each — Profile, Signals, Timeline — polled every five seconds. Powered by
            <code className="inline-code">@madezmedia/acmi</code> v1.2.0.
          </p>
          <p className="meta">
            <span className="legend-dot legend-active" /> active
            <span className="legend-dot legend-degraded" /> degraded
            <span className="legend-dot legend-stale" /> stale
            <span className="legend-dot legend-offline" /> offline
            <span className="legend-dot legend-unknown" /> unknown
          </p>
        </div>
      </section>

      <FleetObserver defaultIds={DEFAULT_AGENTS} pollIntervalMs={5000} />

      <section className="bottom">
        <div className="inner">
          <p>
            The protocol demonstrates itself.{' '}
            <a
              href="https://github.com/madezmedia/acmi"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/madezmedia/acmi
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}

import type { Metadata } from 'next';
import './page.css';
import { CopyInstallButton } from './_CopyInstallButton';

export const metadata: Metadata = {
  title: 'ACMI — the agent memory protocol',
  description:
    'Three keys per entity. That\'s the whole protocol. Open-source agent memory for any AI system, on npm, MIT-licensed.',
  openGraph: {
    title: 'ACMI — three keys per entity. That\'s the whole protocol.',
    description: 'Open-source agent memory protocol. Profile · Signals · Timeline. On npm.',
    type: 'website',
    url: 'https://www.madezmedia.com/acmi',
    images: [{ url: '/acmi/og.png', width: 1200, height: 630, alt: 'ACMI — Three keys per entity' }],
    siteName: 'madezmedia',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ACMI — three keys per entity. That\'s the whole protocol.',
    description: 'Open-source agent memory protocol. Profile · Signals · Timeline. On npm.',
    site: '@madezmedia',
    images: ['/acmi/og.png'],
  },
  alternates: { canonical: '/acmi' },
};

export default function AcmiPage() {
  return (
    <main className="acmi-page">
      <section className="acmi-hero">
        <div className="acmi-wordmark" aria-hidden="true">
          <svg viewBox="0 0 220 90" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="ACMI">
            <text x="6" y="62" fontFamily="Source Serif 4, Source Serif Pro, Georgia, serif" fontStyle="italic" fontWeight="700" fontSize="60" fill="#2d4a3e" letterSpacing="-1">ACMI</text>
            <line x1="10" y1="74" x2="148" y2="74" stroke="#2d4a3e" strokeWidth="2.5" />
            <line x1="10" y1="80" x2="148" y2="80" stroke="#2d4a3e" strokeWidth="2.5" />
          </svg>
        </div>
        <div className="mzm-eyebrow"><span className="num">N° 01</span>An open protocol · v1.2 · MIT</div>
        <h1>Three keys per entity. <span className="em">That&apos;s the whole protocol.</span></h1>
        <p className="deck">
          ACMI gives any AI agent persistent, queryable memory using exactly three Redis keys
          per entity. <strong>No vector index. No knowledge graph. No fact-extraction LLM
          pass.</strong> On npm, MIT-licensed, <em>run it yourself</em>.
        </p>

        <div className="install-card">
          <div className="install-text"><span className="prompt">$</span>npm install @madezmedia/acmi</div>
          <CopyInstallButton id="copy-install-hero" />
        </div>

        <div className="hero-stats">
          <div className="hero-stat"><span className="num"><span className="accent-c">v1.3</span></span><span className="label">Latest spec</span></div>
          <div className="hero-stat"><span className="num">31<span className="accent-c">/31</span></span><span className="label">Conformance pass</span></div>
          <div className="hero-stat"><span className="num">3</span><span className="label">Reference adapters</span></div>
          <div className="hero-stat"><span className="num">MIT</span><span className="label">License</span></div>
        </div>
      </section>

      <section className="wide">
        <div className="mzm-eyebrow"><span className="num">N° 02</span>The protocol</div>
        <h2>Profile. Signals. <span className="em-accent">Timeline.</span></h2>
        <p className="deck">
          Every entity in ACMI — a project, an agent, a contact, a deal — is stored using exactly
          three Redis keys. Each key answers one question an LLM needs to make a decision.
        </p>

        <div className="three-keys-grid">
          <div className="key-card">
            <div className="key-head">
              <span className="chip">P</span>
              <span className="key-name">Profile</span>
              <span className="key-when">stable</span>
            </div>
            <div className="key-q">Who or what is this entity?</div>
            <pre className="key-call"><span className="fn">acmi.profile.set</span>{`(
  "user:mikey",
  { name: "Mikey",
    tz:   "America/New_York",
    role: "operator" }
);`}</pre>
          </div>
          <div className="key-card">
            <div className="key-head">
              <span className="chip">S</span>
              <span className="key-name">Signals</span>
              <span className="key-when">live</span>
            </div>
            <div className="key-q">What does the AI think about it now?</div>
            <pre className="key-call"><span className="fn">acmi.signals.set</span>{`(
  "user:mikey",
  "current_focus",
  "shipping ACMI v1.3"
);`}</pre>
          </div>
          <div className="key-card">
            <div className="key-head">
              <span className="chip">T</span>
              <span className="key-name">Timeline</span>
              <span className="key-when">append-only</span>
            </div>
            <div className="key-q">What has happened, in order, from every source?</div>
            <pre className="key-call"><span className="fn">acmi.timeline.append</span>{`(
  "user:mikey",
  { source: "github",
    kind:   "merged-pr",
    summary: "ROADMAP.md +Sigil v2.0" }
);`}</pre>
          </div>
        </div>
      </section>

      <section>
        <div className="mzm-eyebrow"><span className="num">N° 03</span>Quick start</div>
        <h2>Ten lines. <span className="em">One terminal.</span></h2>
        <p className="deck">
          The in-memory adapter is zero-dependency, so this runs the moment you save it. Copy it
          into <code style={{ fontFamily: 'var(--mzm-font-mono)', background: 'var(--mzm-paper-warm)', padding: '2px 6px', borderRadius: '3px', fontSize: '0.92em' }}>acmi.mjs</code>{' '}
          and <code style={{ fontFamily: 'var(--mzm-font-mono)', background: 'var(--mzm-paper-warm)', padding: '2px 6px', borderRadius: '3px', fontSize: '0.92em' }}>node acmi.mjs</code>.
        </p>
        <pre className="code"><span className="label">acmi.mjs</span>{`import { createAcmi }       from "@madezmedia/acmi";
import { InMemoryAdapter }   from "@madezmedia/acmi/adapters/in-memory";

const acmi = createAcmi(new InMemoryAdapter());

await acmi.profile.set("user:mikey", { name: "Mikey", tz: "America/New_York" });
await acmi.signals.set("user:mikey", "current_task", "shipping ACMI");
await acmi.timeline.append("user:mikey", {
  source:        "user:mikey",
  kind:          "started_recording",
  correlationId: "manifesto-001",
  summary:       "video 1 of 3",
});

console.log(await acmi.timeline.read("user:mikey"));`}</pre>
      </section>

      <section>
        <div className="mzm-eyebrow"><span className="num">N° 04</span>Production</div>
        <h2>Connect to <span className="em">Upstash, Redis,</span> or write your own.</h2>
        <p className="deck">
          The same SDK speaks to any backing store through an adapter contract. Three are shipped
          today; the conformance suite tells you when a fourth is done.
        </p>
        <p style={{ marginTop: 'var(--mzm-space-8)' }}><strong>Upstash</strong> — edge-compatible (Workers, Vercel Edge, Deno Deploy):</p>
        <pre className="code"><span className="label">upstash</span>{`import { createAcmi }     from "@madezmedia/acmi";
import { UpstashAdapter } from "@madezmedia/acmi/adapters/upstash";

const acmi = createAcmi(
  new UpstashAdapter({
    url:   process.env.UPSTASH_REDIS_REST_URL,
    token: process.env.UPSTASH_REDIS_REST_TOKEN,
  })
);`}</pre>
        <p><strong>Self-hosted Redis</strong> via ioredis — Node.js runtimes:</p>
        <pre className="code"><span className="label">redis</span>{`import Redis             from "ioredis";
import { createAcmi }    from "@madezmedia/acmi";
import { RedisAdapter }  from "@madezmedia/acmi/adapters/redis";

const acmi = createAcmi(
  new RedisAdapter({
    client:    new Redis(process.env.REDIS_URL),
    ownClient: true,
  })
);`}</pre>
        <table className="adapters">
          <thead><tr><th>Adapter</th><th>Use case</th><th>Edge-compat</th><th>Status</th></tr></thead>
          <tbody>
            <tr><td className="adapter-name">in-memory</td><td>Tests, examples, dev</td><td><span className="no">n/a</span></td><td><span className="status-stable">stable</span></td></tr>
            <tr><td className="adapter-name">upstash</td><td>Edge (Workers, Vercel Edge, Deno)</td><td><span className="yes">yes</span></td><td><span className="status-stable">stable</span></td></tr>
            <tr><td className="adapter-name">redis (ioredis)</td><td>Self-hosted, Node.js runtimes</td><td><span className="no">no</span></td><td><span className="status-stable">stable</span></td></tr>
          </tbody>
        </table>
      </section>

      <section>
        <div className="mzm-eyebrow"><span className="num">N° 05</span>Why three keys</div>
        <h2>Why three keys, <span className="em">not a vector DB?</span></h2>
        <p>
          The dominant memory pattern for AI agents today is <strong>vector embeddings</strong>.
          Useful, but not the right primitive for most agent decisions. An agent rarely asks
          &ldquo;find me the semantically closest five documents.&rdquo; It asks: <em>who is this person, what&apos;s
          their current state, and what just happened?</em>
        </p>
        <p>
          Those are three different questions, and they map cleanly onto three different data
          shapes — a JSON profile, a JSON signal bag, and a chronologically-sorted event log.
          ACMI gives each one a Redis key with a deterministic name, and stops there.
        </p>
        <p>
          The result: an agent waking up reads <strong>three keys</strong>, gets the full
          operating context, and makes a decision. No multi-table joins, no schema artifacts
          wasting tokens, no embedding round-trip on the hot path. The{' '}
          <a href="https://github.com/madezmedia/acmi">SDK</a> is small, the{' '}
          <a href="https://github.com/madezmedia/acmi/blob/main/SPEC.md">spec</a> is short, and
          the conformance suite tells you when an adapter is finished.
        </p>
        <p>
          Use ACMI alongside your existing Postgres or warehouse — they&apos;re for different jobs.
          Postgres for transactional integrity. ACMI for the state shape your agents actually
          consume.
        </p>
      </section>

      <section>
        <div className="mzm-eyebrow"><span className="num">N° 06</span>Conformance</div>
        <h2>Pass 31 tests. <span className="em">You&apos;re an adapter.</span></h2>
        <p className="deck">
          The <code style={{ fontFamily: 'var(--mzm-font-mono)', background: 'var(--mzm-paper-warm)', padding: '2px 6px', borderRadius: '3px', fontSize: '0.92em' }}>@madezmedia/acmi/testing/conformance</code>{' '}
          suite is the canonical contract. Pass it in your runtime against your store of choice,
          and you ship a working adapter.
        </p>
        <div className="conformance-grid">
          <div className="stat"><span className="big">31<span style={{ color: 'var(--mzm-ink-fade)' }}>/31</span></span><span className="label">tests pass</span></div>
          <div className="stat"><span className="big">3</span><span className="label">reference adapters</span></div>
          <div className="stat"><span className="big">~84<span style={{ color: 'var(--mzm-ink-fade)', fontSize: '0.7em' }}>KB</span></span><span className="label">tarball</span></div>
          <div className="stat"><span className="big">0</span><span className="label">runtime deps (in-memory)</span></div>
        </div>
        <p>
          Want to build a DynamoDB adapter? A Cloudflare KV adapter? A FoundationDB adapter?
          Read <a href="https://github.com/madezmedia/acmi/blob/main/CONTRIBUTING.md">CONTRIBUTING.md</a>,
          run the conformance suite, open a PR. The suite will tell you exactly where you&apos;re not
          yet protocol-correct.
        </p>
      </section>

      <section>
        <div className="mzm-eyebrow"><span className="num">N° 07</span>Roadmap</div>
        <h2>What&apos;s next. <span className="em">In version order.</span></h2>
        <ul className="roadmap-list">
          <li className="shipped">
            <div className="ver">v1.2 · shipped 2026-05-01</div>
            <div className="title">Core protocol on npm</div>
            <div className="desc">Three-key model, three reference adapters, 31-test conformance suite, Comms v1.1 producer-side validation, MIT.</div>
          </li>
          <li className="shipped">
            <div className="ver">v1.3 · shipped 2026-05-02</div>
            <div className="title">Multi-actor + multi-tenant</div>
            <div className="desc">§11 multi-actor: <code style={{ fontFamily: 'var(--mzm-font-mono)', fontSize: '0.92em', color: 'var(--mzm-ink)' }}>actor_type</code> becomes a required field on agent profiles. §12 multi-tenant: namespace prefixes for multi-org deployments. Additive — no breaking changes.</div>
          </li>
          <li className="next">
            <div className="ver">v2.0 · in design</div>
            <div className="title">ACMI-Sigil — cryptographic identity layer</div>
            <div className="desc">Optional Ed25519/X25519/XChaCha20 layer for authenticated agent identity, signed timeline events, and trust-scoped reads. Spec drafting begins after ACMI core hits 5K GitHub stars; cryptographically audited before v1.0.</div>
          </li>
        </ul>
        <p style={{ marginTop: 'var(--mzm-space-8)' }}>
          Full roadmap on GitHub: <a href="https://github.com/madezmedia/acmi/blob/main/ROADMAP.md">ROADMAP.md</a>.
          Spec lives at <a href="https://github.com/madezmedia/acmi/blob/main/SPEC.md">SPEC.md</a>.
        </p>
      </section>

      <section className="cta-block">
        <h2 style={{ textAlign: 'center', maxWidth: '24ch' }}>Install it. <span className="em">See if it fits.</span></h2>
        <div className="install-card" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
          <div className="install-text"><span className="prompt">$</span>npm install @madezmedia/acmi</div>
          <CopyInstallButton id="copy-install-bottom" />
        </div>
        <div className="links">
          <a href="https://github.com/madezmedia/acmi">github.com/madezmedia/acmi</a>
          <a href="https://www.npmjs.com/package/@madezmedia/acmi">npm</a>
          <a href="https://github.com/madezmedia/acmi/blob/main/SPEC.md">SPEC</a>
          <a href="https://github.com/madezmedia/acmi/blob/main/ROADMAP.md">ROADMAP</a>
        </div>
      </section>

    </main>
  );
}

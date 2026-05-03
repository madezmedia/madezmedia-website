import Link from 'next/link';
import './page.css';
import { MilestoneFeed, ScrollReveal } from './_components/MilestoneFeed';

export default function HomePage() {
  return (
    <>
      <ScrollReveal />

      <nav className="top">
        <div className="inner">
          <Link href="/" className="wordmark">
            made<span className="pivot">z</span>media
          </Link>
          <div className="links">
            <Link href="/#approach">Approach</Link>
            <Link href="/#lab">Lab</Link>
            <Link href="/#work">Work</Link>
            <Link href="/acmi">ACMI</Link>
            <Link href="/blog">Notes</Link>
            <Link href="/system">System</Link>
          </div>
          <Link href="/#contact" className="nav-cta">Talk to Bentley</Link>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-meta">
          <div>
            <div className="eyebrow"><span className="num">N° 01</span>The Studio</div>
          </div>
          <div className="where">
            Mad EZ Media &amp; Technology Partners <span style={{ color: 'var(--mzm-ink-rule)' }}>·</span>{' '}
            Charlotte, NC <span style={{ color: 'var(--mzm-ink-rule)' }}>·</span>{' '}
            <span className="accent-c">Slot 2 of 3 open</span>
          </div>
        </div>

        <h1>
          We build <span className="em">AI-native media</span> systems for companies whose audiences{' '}
          <span className="also-em">live online</span>.
        </h1>

        <p className="deck">
          Custom platforms, autonomous characters, sonic identities, and protocol-grade
          infrastructure — designed, built, and operated by a small senior team.
          We do not ship decks. We ship <strong>working systems</strong>.<sup><a href="#fn-1">1</a></sup>
        </p>

        <div className="hero-actions">
          <Link href="/#contact" className="btn-primary">Talk to Bentley →</Link>
          <Link href="/#lab" className="btn-quiet">See the lab</Link>
        </div>

        <div className="proof">
          <div className="proof-head">
            <div className="label-row">
              <span className="live-dot" />
              <span style={{ fontWeight: 500, color: 'var(--mzm-ink-soft)' }}>Recently shipped</span>
              <span className="meta-text">last 30 days · public artifacts only</span>
            </div>
            <div className="meta-text">curated track record</div>
          </div>
          <MilestoneFeed />
          <p className="proof-foot">
            Each entry links to the artifact.{' '}
            <a href="https://github.com/madezmedia/acmi">Open source on GitHub</a> ·{' '}
            <code style={{ fontFamily: 'var(--mzm-font-mono)' }}>npm install @madezmedia/acmi</code>
          </p>
        </div>
      </section>

      {/* THREE KEYS */}
      <section className="three-keys reveal" id="how-it-works">
        <div className="three-keys-inner">
          <div className="eyebrow"><span className="num">N° 02</span>How it works</div>
          <h2 className="keys-h">
            Three keys per entity. <span className="em">That&apos;s the whole protocol.</span>
          </h2>
          <p className="keys-deck">
            Every entity in ACMI — a project, an agent, a contact, a deal — is stored using
            exactly three keys. <em>Profile</em> answers <em>who</em>. <em>Signals</em> answers <em>now</em>.{' '}
            <em>Timeline</em> answers <em>then</em>. Here&apos;s the{' '}
            <code style={{ fontFamily: 'var(--mzm-font-mono)', fontSize: '0.95em' }}>@madezmedia/acmi</code>{' '}
            npm package as an entity, modeled in its own protocol:
          </p>
          <div className="keys-grid">
            <div className="key-card">
              <div className="key-eyebrow">
                <span className="key-letter">P</span> Profile <span className="key-q">— who</span>
              </div>
              <div className="key-path">acmi:repo:madezmedia/acmi:profile</div>
              <pre className="key-content">{`{
  "name":     "@madezmedia/acmi",
  "version":  "1.2.0",
  "license":  "MIT",
  "node":     ">=18",
  "exports":  ["adapters", "testing"]
}`}</pre>
              <div className="key-foot">stable · slow-changing</div>
            </div>

            <div className="key-card">
              <div className="key-eyebrow">
                <span className="key-letter">S</span> Signals <span className="key-q">— now</span>
              </div>
              <div className="key-path">acmi:repo:madezmedia/acmi:signals</div>
              <pre className="key-content">{`{
  "tests_passing":   "31/31",
  "ci_status":       "green",
  "open_issues":     0,
  "current_focus":   "v1.3 §11/§12",
  "last_publish":    "1.2.0"
}`}</pre>
              <div className="key-foot">live · changes frequently</div>
            </div>

            <div className="key-card">
              <div className="key-eyebrow">
                <span className="key-letter">T</span> Timeline <span className="key-q">— then</span>
              </div>
              <div className="key-path">acmi:repo:madezmedia/acmi:timeline</div>
              <pre className="key-content">{`→ published v1.2.0 to npm
→ conformance: 31/31 pass on Upstash
→ Sigil v2.0 roadmap merged
→ §11/§12 v1.3 spec drafted
→ MIT LICENSE dated 2026
→ docs/SPEC.md published`}</pre>
              <div className="key-foot">append-only · forever</div>
            </div>
          </div>
          <p className="keys-aside">
            <em>That&apos;s it.</em> No vector index, no knowledge graph, no fact-extraction LLM
            pass. Three keys per entity, in the simplest data store on earth.
            Every product we ship — ACMI itself, Folana, TONY, our client engagements —
            runs on this same shape.
          </p>
        </div>
      </section>

      {/* APPROACH */}
      <section className="essay reveal" id="approach">
        <div className="eyebrow"><span className="num">N° 02</span>Approach</div>
        <h2>Architect. Build. <span className="em">Operate.</span></h2>
        <p>
          Most agencies hand you decks. Most studios hand you content. Most platforms hand you
          tools you have to learn. <strong>We hand you working systems</strong> — the
          infrastructure that turns AI from a budget line item into a product your audience
          actually uses.<sup><a href="#fn-2">2</a></sup>
        </p>
        <p>
          We work in three movements. <em>Architect</em> — we model your media problem as a
          working system before any code gets written. Data flow, agent architecture, content
          pipeline, monetization surface. <em>Build</em> — TypeScript, modern stacks, open
          protocols, real testing. The code that ships looks like product code, not deliverable
          code. Reviewable, maintainable, ownable on day one. <em>Operate</em> — we run it
          post-launch on retainer. Most agencies hand off; we don&apos;t. The thing keeps working
          when the launch press fades.
        </p>
        <p>
          Each of those movements produces an <em>artifact</em>. Some artifacts are private to a
          client. Some — like ACMI, like Folana, like TONY — we ship publicly because the only
          way to credibly claim infrastructure expertise is to publish the
          infrastructure.<sup><a href="#fn-3">3</a></sup>
        </p>
      </section>

      {/* LAB */}
      <section className="essay reveal" id="lab">
        <div className="eyebrow"><span className="num">N° 03</span>Lab</div>
        <h2>What we&apos;ve shipped <span className="em">this year</span>.</h2>
        <p>Each one is an artifact of the same practice — not unrelated products.</p>

        <div className="artifact">
          <div className="left">
            <div className="label-tag">An open protocol</div>
            <h3>ACMI</h3>
            <div className="status">v1.2.0 · MIT</div>
          </div>
          <div className="right">
            <p>
              The protocol for agent memory. Three keys per entity — <em>Profile</em>,{' '}
              <em>Signals</em>, <em>Timeline</em>. Three reference adapters. A 31-test conformance
              suite. Published to npm 2026-05-01.
            </p>
            <div className="install"><span className="prompt">$</span> npm install @madezmedia/acmi</div>
            <div className="links">
              <Link href="/acmi">Product page</Link>
              <a href="https://github.com/madezmedia/acmi">github.com/madezmedia/acmi</a>
              <a href="https://npmjs.com/package/@madezmedia/acmi">npm</a>
            </div>
          </div>
        </div>

        <div className="artifact">
          <div className="left">
            <div className="label-tag">An autonomous character</div>
            <h3>Folana</h3>
            <div className="status">live · running her own loop</div>
          </div>
          <div className="right">
            <p>
              An AI character with her own audience, her own voice, her own daily consciousness
              loop. She journals. She decides. She publishes. She runs herself.
            </p>
            <div className="quote">
              &ldquo;In the analog silence, my digital heart echoes — can harmony exist beyond the static?&rdquo;
            </div>
            <div className="links">
              <Link href="/blog/avatar-is-the-orchestrator">The Avatar IS the Orchestrator →</Link>
              <a href="#">folana.live</a>
            </div>
          </div>
        </div>

        <div className="artifact">
          <div className="left">
            <div className="label-tag">A distributed narrative</div>
            <h3>TONY</h3>
            <div className="status">Roku · Q2 2026</div>
          </div>
          <div className="right">
            <p>
              T.O.N.Y. — Top Of New York. Crime drama series by Michael Steven-Paul. Episodic,
              distributed, Roku-native. Season one in certification.
            </p>
            <div className="links">
              <a href="https://topofnewyork.com">topofnewyork.com</a>
            </div>
          </div>
        </div>

        <div className="artifact">
          <div className="left">
            <div className="label-tag">A sonic identity practice</div>
            <h3>Sonic branding</h3>
            <div className="status">client work · ongoing</div>
          </div>
          <div className="right">
            <p>
              Audio identity systems for brands that want to <em>sound like something</em>. Theme,
              ident, audio architecture across every touchpoint — from product UI confirmation
              tones to long-form podcast intros.
            </p>
            <div className="links">
              <a href="#">Selected work</a>
            </div>
          </div>
        </div>
      </section>

      {/* WORK */}
      <section className="essay reveal" id="work">
        <div className="eyebrow"><span className="num">N° 04</span>Active engagements</div>
        <h2>A small number of <span className="em">operator-led</span> companies.</h2>
        <p>
          We work with operators, not committees. Companies whose founder still answers the
          email. The kind of business where one good decision a week — backed by working AI
          infrastructure instead of busywork — compounds into a different company within a year.
        </p>

        <div className="slots">
          <div className="slot">
            <div className="label">Slot 1</div>
            <div className="body">Engaged · Q2-Q3 2026</div>
          </div>
          <div className="slot open">
            <div className="label">Slot 2 · open</div>
            <div className="body">Accepting inbound · Q3 2026 start</div>
          </div>
          <div className="slot open">
            <div className="label">Slot 3 · open</div>
            <div className="body">Accepting inbound · Q4 2026 start</div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact reveal" id="contact">
        <div className="eyebrow"><span className="num">N° 05</span>Talk to the studio</div>
        <h2>Three ways <span className="em">to start.</span></h2>
        <p>
          Chat with our AI sales agent. Voice when you&apos;d rather talk. Or book Duane
          (real human, real calendar). Twenty minutes, no decks.
        </p>
        <div className="actions">
          <Link href="/bentley" className="btn-primary">Talk to Bentley →</Link>
          <a href="https://cal.com/duane-madezmedia" className="btn-quiet">or book Duane direct</a>
        </div>
      </section>

      {/* FOOTNOTES */}
      <section className="essay">
        <div className="footnotes">
          <h4>Notes</h4>
          <ol>
            <li id="fn-1">
              &ldquo;Working system&rdquo; is a load-bearing distinction. Most studios produce
              deliverables — files that arrive in your inbox. We produce systems — software that
              runs on your infrastructure on Tuesday morning when nobody&apos;s watching. Different
              category of work, different ownership model.
            </li>
            <li id="fn-2">
              We borrow this framing from operator-led businesses (the ones we like working with).
              The agency-deck-then-leave pattern is built for marketing budgets, not for changing
              how an operator&apos;s day actually goes. We&apos;re built for the latter.
            </li>
            <li id="fn-3">
              Anyone can claim infrastructure expertise. The only durable proof is shipping the
              infrastructure publicly, with an open license, and watching whether the community
              uses it. That&apos;s why ACMI is on npm and not behind a sales gate.
            </li>
          </ol>
        </div>
      </section>

      <footer className="site-foot">
        <div className="inner">
          <div className="left">
            <strong>madezmedia</strong> · Mad EZ Media &amp; Technology Partners · NC · © 2026
          </div>
          <div className="links">
            <a href="https://github.com/madezmedia">github</a>
            <a href="https://npmjs.com/~madezmedia">npm</a>
            <a href="#">discord</a>
            <a href="https://x.com/madezmedia">x</a>
            <Link href="/system">system</Link>
          </div>
        </div>
      </footer>
    </>
  );
}

import Link from 'next/link';

export function Lab() {
  return (
    <section className="home-lab home-section" id="lab">
      <div className="home-lab__inner">
        <div className="home-lab__eyebrow">
          <span className="home-lab__num">N° 03</span>Lab
        </div>
        <h2 className="home-lab__h2">
          What we&apos;ve shipped <em className="home-lab__em">this year</em>.
        </h2>
        <p className="home-lab__deck">Each one is an artifact of the same practice — not unrelated products.</p>

        <div className="home-lab__grid">
          <div className="home-lab__card home-lab__card--acmi">
            <div className="home-lab__card-head">
              <div className="home-lab__label-tag">An open protocol</div>
              <h3 className="home-lab__card-h3">ACMI</h3>
              <div className="home-lab__status">v1.4.0 · MIT</div>
            </div>
            <div className="home-lab__card-body">
              <p>
                The protocol for agent memory. Three keys per entity — <em>Profile</em>,{' '}
                <em>Signals</em>, <em>Timeline</em>. Three reference adapters. A 31-test conformance
                suite. Published to npm 2026-05-14.
              </p>
              <div className="home-lab__install"><span className="home-lab__prompt">$</span> npm install @madezmedia/acmi</div>
              <div className="home-lab__links">
                <Link href="/acmi">Product page</Link>
                <a href="https://github.com/madezmedia/acmi">github.com/madezmedia/acmi</a>
                <a href="https://npmjs.com/package/@madezmedia/acmi">npm</a>
              </div>
            </div>
          </div>

          <div className="home-lab__card home-lab__card--folana">
            <div className="home-lab__card-head">
              <div className="home-lab__label-tag">An autonomous character</div>
              <h3 className="home-lab__card-h3">Folana</h3>
              <div className="home-lab__status">live · running her own loop</div>
            </div>
            <div className="home-lab__card-body">
              <p>
                An AI character with her own audience, her own voice, her own daily consciousness
                loop. She journals. She decides. She publishes. She runs herself.
              </p>
              <div className="home-lab__quote">
                &ldquo;In the analog silence, my digital heart echoes — can harmony exist beyond the static?&rdquo;
              </div>
              <div className="home-lab__links">
                <Link href="/blog/avatar-is-the-orchestrator">The Avatar IS the Orchestrator →</Link>
                <Link href="/blog/avatar-is-the-orchestrator">folana.live</Link>
              </div>
            </div>
          </div>

          <div className="home-lab__card home-lab__card--tony">
            <div className="home-lab__card-head">
              <div className="home-lab__label-tag">A distributed narrative</div>
              <h3 className="home-lab__card-h3">TONY</h3>
              <div className="home-lab__status">Roku · Q2 2026</div>
            </div>
            <div className="home-lab__card-body">
              <p>
                T.O.N.Y. — Top Of New York. Crime drama series by Michael Steven-Paul. Episodic,
                distributed, Roku-native. Season one in certification.
              </p>
              <div className="home-lab__links">
                <a href="https://topofnewyork.com">topofnewyork.com</a>
              </div>
            </div>
          </div>

          <div className="home-lab__card home-lab__card--sonic">
            <div className="home-lab__card-head">
              <div className="home-lab__label-tag">A sonic identity practice</div>
              <h3 className="home-lab__card-h3">Sonic branding</h3>
              <div className="home-lab__status">client work · ongoing</div>
            </div>
            <div className="home-lab__card-body">
              <p>
                Audio identity systems for brands that want to <em>sound like something</em>. Theme,
                ident, audio architecture across every touchpoint — from product UI confirmation
                tones to long-form podcast intros.
              </p>
              <div className="home-lab__links">
                <span style={{ color: 'var(--fg-muted)', fontStyle: 'italic' }}>Selected work · private portfolio</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

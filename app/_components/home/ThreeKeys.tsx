export function ThreeKeys() {
  return (
    <section className="home-three-keys home-section" id="how-it-works">
      <div className="home-three-keys__inner">
        <div className="home-three-keys__eyebrow">
          <span className="home-three-keys__num">N° 02</span>How it works
        </div>
        <h2 className="home-three-keys__h2">
          Three keys per entity. <em className="home-three-keys__em">That&apos;s the whole protocol.</em>
        </h2>
        <p className="home-three-keys__deck">
          Every entity in ACMI — a project, an agent, a contact, a deal — is stored using
          exactly three keys. <em>Profile</em> answers <em>who</em>. <em>Signals</em> answers <em>now</em>.{' '}
          <em>Timeline</em> answers <em>then</em>. Here&apos;s the{' '}
          <code className="home-three-keys__code">@madezmedia/acmi</code>{' '}
          npm package as an entity, modeled in its own protocol:
        </p>
        <div className="home-three-keys__grid">
          <div className="home-three-keys__card home-three-keys__card--profile">
            <div className="home-three-keys__card-eyebrow">
              <span className="home-three-keys__pill home-three-keys__pill--profile">P</span> Profile{' '}
              <span className="home-three-keys__q">— who</span>
            </div>
            <div className="home-three-keys__path">acmi:repo:madezmedia/acmi:profile</div>
            <pre className="home-three-keys__content">{`{
  "name":     "@madezmedia/acmi",
  "version":  "1.2.0",
  "license":  "MIT",
  "node":     ">=18",
  "exports":  ["adapters", "testing"]
}`}</pre>
            <div className="home-three-keys__foot">stable · slow-changing</div>
          </div>

          <div className="home-three-keys__card home-three-keys__card--signals">
            <div className="home-three-keys__card-eyebrow">
              <span className="home-three-keys__pill home-three-keys__pill--signals">S</span> Signals{' '}
              <span className="home-three-keys__q">— now</span>
            </div>
            <div className="home-three-keys__path">acmi:repo:madezmedia/acmi:signals</div>
            <pre className="home-three-keys__content">{`{
  "tests_passing":   "31/31",
  "ci_status":       "green",
  "open_issues":     0,
  "current_focus":   "v1.3 §11/§12",
  "last_publish":    "1.2.0"
}`}</pre>
            <div className="home-three-keys__foot">live · changes frequently</div>
          </div>

          <div className="home-three-keys__card home-three-keys__card--timeline">
            <div className="home-three-keys__card-eyebrow">
              <span className="home-three-keys__pill home-three-keys__pill--timeline">T</span> Timeline{' '}
              <span className="home-three-keys__q">— then</span>
            </div>
            <div className="home-three-keys__path">acmi:repo:madezmedia/acmi:timeline</div>
            <pre className="home-three-keys__content">{`→ published v1.2.0 to npm
→ conformance: 31/31 pass on Upstash
→ Sigil v2.0 roadmap merged
→ §11/§12 v1.3 spec drafted
→ MIT LICENSE dated 2026
→ docs/SPEC.md published`}</pre>
            <div className="home-three-keys__foot">append-only · forever</div>
          </div>
        </div>
        <p className="home-three-keys__aside">
          <em>That&apos;s it.</em> No vector index, no knowledge graph, no fact-extraction LLM
          pass. Three keys per entity, in the simplest data store on earth.
          Every product we ship — ACMI itself, Folana, TONY, our client engagements —
          runs on this same shape.
        </p>
      </div>
    </section>
  );
}

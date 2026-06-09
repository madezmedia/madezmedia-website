import type { Metadata } from 'next';
import './page.css';

export const metadata: Metadata = {
  title: 'System — the design language behind madezmedia',
  description:
    'The design system. Five principles, locked tokens, reusable components, microinteractions catalog, anti-patterns. Public docs of how the studio looks.',
  openGraph: {
    title: 'System — madezmedia',
    description: 'The design language: principles, tokens, components, microinteractions, constraints.',
    type: 'website',
    url: 'https://www.madezmedia.com/system',
    siteName: 'madezmedia',
  },
  alternates: { canonical: '/system' },
};

const colors = [
  { name: '--mzm-paper', hex: '#faf9f5', use: 'page bg, warm ivory' },
  { name: '--mzm-paper-warm', hex: '#f4f2eb', use: 'elevated surfaces, code' },
  { name: '--mzm-ink', hex: '#1a1a1a', use: 'primary text, headlines' },
  { name: '--mzm-ink-soft', hex: '#2c2c2a', use: 'body copy under headlines' },
  { name: '--mzm-ink-mute', hex: '#4a4a48', use: 'secondary text' },
  { name: '--mzm-ink-fade', hex: '#7a7a76', use: 'meta, dates, captions' },
  { name: '--mzm-accent', hex: '#2d4a3e', use: 'voice color · deep forest' },
  { name: '--mzm-accent-soft', hex: '#5a7d6f', use: 'hover, halo' },
];

const principles = [
  { num: '01', title: 'Architectural, not decorative.', body: 'Visual choices feel like systems made visible — grids, structure, modularity, interaction-as-information — not stylistic flourish for its own sake.' },
  { num: '02', title: 'Kinetic, not static.', body: 'A studio that ships autonomous characters and protocol-grade infra should feel alive. Stillness is a choice, not the default.' },
  { num: '03', title: 'Coherent across artifacts.', body: 'Homepage, ACMI\'s GitHub README, Folana\'s feed, TONY\'s poster, sonic-branding deliverables, RevOps dashboards — all read as one practice.' },
  { num: '04', title: 'Sophisticated, not flashy.', body: 'No glassmorphism-gradient-blob AI-startup uniform. Ambition shows in restraint with intentional kinetic moments.' },
  { num: '05', title: 'Defensible at scale.', body: 'The system works at 5px (favicon) and 5000px (Vercel hero). At video frame rate. In dark and (eventually) light mode. Across every product surface.' },
];

const constraints = [
  { name: 'no_purple_gradient_hero', reason: 'Purple/blue gradient hero is the standard SaaS-marketing uniform. We refuse the visual default.' },
  { name: 'no_glassmorphism', reason: 'Frosted-glass blur is decorative and dates fast. Editorial layouts age better.' },
  { name: 'no_three_js_decoration', reason: 'Decorative 3D scenes signal "we want to look futuristic." Concept made visible typographically reads as confident.' },
  { name: 'no_custom_cursor_without_semantic_reason', reason: 'Custom cursors fight the user\'s OS. Only allowed when the cursor itself communicates state.' },
  { name: 'single_accent_color', reason: 'Deep forest #2d4a3e is the studio voice. Multiple signal colors dilute brand recognition.' },
  { name: 'live_acmi_feed_visibility', reason: 'Public feed must NOT be wired to raw coordination timeline (contains internal sales, ops, agent-routing). Curated rotation only.' },
];

const microinteractions = [
  { title: 'Live indicator · breathing pulse', note: '2s loop, opacity + scale + glow', demo: <span className="demo-pulse">Folana live</span> },
  { title: 'Link · underline grow', note: 'scaleX from left, 180ms ease-default', demo: <a href="#" className="demo-link">github.com/madezmedia</a> },
  { title: 'CTA hover · ring expand', note: 'accent-soft ring (180ms), gap +1px on arrow icon', demo: <span className="btn-primary" style={{ background: 'var(--mzm-ink)', color: 'var(--mzm-paper)', padding: '8px 16px' }}>Talk to Bentley →</span> },
  { title: 'Card hover · 2px lift', note: 'transform translateY(-2px), accent border', demo: <div style={{ padding: '12px 16px', background: 'var(--mzm-paper-warm)', border: '1px solid var(--mzm-ink-rule)', borderRadius: '4px', fontFamily: 'var(--mzm-font-mono)', fontSize: '11px', color: 'var(--mzm-ink-mute)' }}>hover me</div> },
];

export default function SystemPage() {
  return (
    <main className="system-page">
      <section className="system-hero">
        <div className="mzm-eyebrow"><span className="num">N° 00</span>The design language</div>
        <h1>The system that <span className="em">serves the doctrine.</span></h1>
        <p className="deck">
          Five principles, locked tokens, reusable components, microinteractions catalog,
          anti-patterns. <em>Public docs</em> of how the studio looks — auditable from outside,
          regression-resistant from inside.
        </p>
      </section>

      <section className="docs">
        <div className="mzm-eyebrow"><span className="num">N° 01</span>Principles</div>
        <h2>Five constraints, <span className="em">one practice.</span></h2>
        <p>
          If a visual choice violates one of these, it&apos;s wrong even if it looks good in
          isolation. Lifted from the v2 design experiments, codified for v3.
        </p>
        <div className="principles">
          {principles.map((p) => (
            <div className="principle" key={p.num}>
              <div className="num">{p.num}</div>
              <h4>{p.title}</h4>
              <p>{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="docs">
        <div className="mzm-eyebrow"><span className="num">N° 02</span>Color</div>
        <h2>One palette. <span className="em">No purple.</span></h2>
        <p>
          Single accent color (<code>#2d4a3e</code> deep forest). Everything else is the paper
          + ink scale. No gradient backgrounds, no purple, no second signal color. The discipline
          is the differentiation.
        </p>
        <div className="swatches">
          {colors.map((c) => (
            <div className="swatch" key={c.name}>
              <span className="chip" style={{ background: c.hex }} />
              <div className="meta">
                <span className="name">{c.name}</span>
                <span className="hex">{c.hex} · {c.use}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="docs">
        <div className="mzm-eyebrow"><span className="num">N° 03</span>Type</div>
        <h2>Three families. <span className="em">Restraint.</span></h2>
        <p>
          <code>Source Serif 4</code> for headlines + body. <code>Inter</code> for sans labels +
          UI. <code>JetBrains Mono</code> for data, code, timestamps. <em>Italic + double-underline</em> is
          the emphasis pattern.
        </p>
        <div className="type-specimen">
          <div className="label">Source Serif 4 · 64px italic 700</div>
          <div style={{ fontFamily: 'var(--mzm-font-serif)', fontSize: '64px', fontStyle: 'italic', fontWeight: 700, color: 'var(--mzm-ink)', lineHeight: 1.05 }}>
            Three keys per entity.
          </div>
        </div>
        <div className="type-specimen">
          <div className="label">Inter · 14px medium</div>
          <div style={{ fontFamily: 'var(--mzm-font-sans)', fontSize: '14px', fontWeight: 500, color: 'var(--mzm-ink-mute)' }}>
            Talk to Bentley · Approach · Lab · Work
          </div>
        </div>
        <div className="type-specimen">
          <div className="label">JetBrains Mono · 12px</div>
          <div style={{ fontFamily: 'var(--mzm-font-mono)', fontSize: '12px', color: 'var(--mzm-ink-soft)' }}>
            acmi:repo:madezmedia/acmi:profile
          </div>
        </div>
      </section>

      <section className="docs">
        <div className="mzm-eyebrow"><span className="num">N° 04</span>Microinteractions</div>
        <h2>The system <span className="em">in motion.</span></h2>
        <p>Each pattern below is reused across the site. Hover to see it.</p>
        <div className="micro-grid">
          {microinteractions.map((m) => (
            <div className="micro-card" key={m.title}>
              <h4>{m.title}</h4>
              <p className="note">{m.note}</p>
              <div className="ex">{m.demo}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="docs">
        <div className="mzm-eyebrow"><span className="num">N° 05</span>Constraints</div>
        <h2>Anti-patterns, <span className="em">explicitly out.</span></h2>
        <p>
          Locked in <code>tokens.json</code>. If a visual proposal touches one of these, it&apos;s
          rejected by construction. The constraints are how we keep the system tight.
        </p>
        <ul className="constraints-list">
          {constraints.map((c) => (
            <li key={c.name}>
              <span className="name">{c.name}</span>
              <span className="reason">{c.reason}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="docs">
        <div className="mzm-eyebrow"><span className="num">N° 06</span>Source</div>
        <h2>The tokens are <span className="em">the truth.</span></h2>
        <p>
          <code>app/tokens.css</code> + <code>app/components.css</code> are the single source of
          truth for color, typography, spacing, motion, and reusable component classes. Every
          surface (homepage, /acmi, /blog, this page) imports them. Changes cascade.
        </p>
        <p>
          Lock CID: <code>mikey-lock-v3-editorial-tech-1777742367520</code>. Strategy memo at{' '}
          <code>~/clawd/projects/madezmedia-rebrand/MADEZMEDIA-COM-MIGRATION-STRATEGY.md</code>.
          Migration map at <code>V2-V3-MIGRATION-MAP.md</code>.
        </p>
      </section>

    </main>
  );
}

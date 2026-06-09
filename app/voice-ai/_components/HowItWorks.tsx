const STEPS = [
  {
    n: '01',
    title: '30-min call',
    desc: 'We learn your services, hours, intake style, and the calls you absolutely can\'t miss.',
    accent: 'var(--ember)',
  },
  {
    n: '02',
    title: 'Voice + script',
    desc: 'We clone your voice, draft the agent\'s personality, and you approve every line before it goes live.',
    accent: 'var(--mist)',
  },
  {
    n: '03',
    title: 'Forward & go',
    desc: '5 days to deploy. Forward your business number, and the agent is answering calls by Friday.',
    accent: 'var(--moss)',
  },
  {
    n: '04',
    title: 'We watch first 48h',
    desc: 'You get a daily digest. We tune scripts in real time based on actual call transcripts.',
    accent: 'var(--ochre)',
  },
];

export function HowItWorks() {
  return (
    <section className="va-section" style={{
      background: 'linear-gradient(180deg, var(--paper) 0%, color-mix(in oklch, var(--moss) 6%, var(--paper)) 100%)',
    }}>
      <div className="va-container">
        <p className="va-eyebrow va-eyebrow--mist">How it ships</p>
        <h2 className="va-h2">
          Live in <em style={{ color: 'var(--mist)' }}>five days.</em>
        </h2>
        <p className="va-deck">
          No vendor portal. No 6-week discovery phase. You stay focused on the work; we ship the system.
        </p>

        <div style={{
          marginTop: 64,
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: 24,
        }}>
          {STEPS.map((step) => (
            <div key={step.n} style={{
              padding: 32,
              background: '#fff',
              borderRadius: 14,
              borderTop: `5px solid ${step.accent}`,
              boxShadow: '0 12px 32px rgba(0,0,0,0.05)',
              display: 'flex',
              flexDirection: 'column',
              gap: 14,
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                <span style={{
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 900, fontSize: 56,
                  color: step.accent,
                  opacity: 0.65,
                  letterSpacing: '-0.04em',
                  lineHeight: 1,
                }}>{step.n}</span>
              </div>
              <h3 style={{
                margin: 0,
                fontFamily: 'var(--font-heading)',
                fontWeight: 800, fontSize: 26,
                letterSpacing: '-0.02em',
                color: 'var(--forest-800)',
              }}>{step.title}</h3>
              <p style={{
                margin: 0,
                fontFamily: 'var(--font-body)',
                fontSize: 16, lineHeight: 1.55,
                color: 'var(--fg-muted)',
              }}>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

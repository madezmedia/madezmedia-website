const USE_CASES = [
  {
    name: 'HVAC + Trades',
    accent: 'var(--ember)',
    items: ['After-hours emergency intake', 'Tune-up reminder calls', 'Service-area screening', 'Mid-job dispatch follow-up'],
  },
  {
    name: 'Auto Repair',
    accent: 'var(--mist)',
    items: ['Appointment booking by VIN', 'Estimate confirmations', 'Pickup-ready callouts', 'Returning-customer recall'],
  },
  {
    name: 'Med / Dental',
    accent: 'var(--moss)',
    items: ['New-patient intake (HIPAA-safe handoff)', 'Reschedule + reminder calls', 'Insurance pre-check', 'Post-visit follow-up'],
  },
  {
    name: 'Legal / Accounting',
    accent: 'var(--ochre)',
    items: ['Discovery-call qualification', 'Existing-client routing', 'Document-status updates', 'After-hours overflow'],
  },
];

export function UseCases() {
  return (
    <section className="va-section" style={{ background: 'var(--paper)' }}>
      <div className="va-container">
        <p className="va-eyebrow">Where it earns</p>
        <h2 className="va-h2">
          Four shapes. <em>One agent each.</em>
        </h2>
        <p className="va-deck">
          The math is the same across industries: every missed call is somewhere between $80 and $960 of lost revenue. The agent recovers them.
        </p>

        <div style={{
          marginTop: 64,
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: 24,
        }}>
          {USE_CASES.map((uc) => (
            <div key={uc.name} style={{
              padding: 32,
              background: '#fff',
              border: '1px solid var(--border)',
              borderTop: `4px solid ${uc.accent}`,
              borderRadius: 12,
              display: 'flex',
              flexDirection: 'column',
              gap: 16,
            }}>
              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 800,
                fontSize: 24,
                letterSpacing: '-0.015em',
                margin: 0,
                color: 'var(--forest-800)',
              }}>{uc.name}</h3>
              <ul style={{
                margin: 0,
                padding: 0,
                listStyle: 'none',
                display: 'flex',
                flexDirection: 'column',
                gap: 10,
              }}>
                {uc.items.map((item) => (
                  <li key={item} style={{
                    fontFamily: 'var(--font-body-v14)',
                    fontSize: 15,
                    lineHeight: 1.5,
                    color: 'var(--fg-meta)',
                    paddingLeft: 18,
                    position: 'relative',
                  }}>
                    <span style={{
                      position: 'absolute',
                      left: 0, top: 8,
                      width: 8, height: 2,
                      background: uc.accent,
                    }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

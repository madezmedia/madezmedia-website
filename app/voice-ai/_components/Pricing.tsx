const TIERS = [
  {
    name: 'Starter',
    price: '$250',
    delivery: '5 days',
    accent: 'var(--mist)',
    features: ['1 agent · English-only', 'Business-hours fallback', 'Inbound calls', 'Transcript email digest', '14-day post-launch support'],
    featured: false,
  },
  {
    name: 'Standard',
    price: '$500',
    delivery: '7 days',
    accent: 'var(--ember)',
    features: ['Multilingual (EN + ES)', 'Custom voice clone', 'CRM webhook integration', 'Calendar booking (Google / Cal.com)', 'SMS + transcript handoff', '30-day post-launch support'],
    featured: true,
  },
  {
    name: 'Premium',
    price: '$1,000',
    delivery: '10 days',
    accent: 'var(--ochre)',
    features: ['Fleet of agents (up to 3 voices)', 'White-labeled in your brand', 'Dedicated phone routing', 'Outbound campaign ready', 'Live dashboard + analytics', '90-day post-launch support'],
    featured: false,
  },
];

export function Pricing() {
  return (
    <section
      id="pricing"
      className="va-section"
      style={{
        background: 'var(--ink-950)',
        color: '#fff',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        aria-hidden="true"
        style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'radial-gradient(#1f2937 1px, transparent 1px)',
          backgroundSize: '16px 16px', opacity: 0.4,
        }}
      />
      <div className="va-container" style={{ position: 'relative', zIndex: 1 }}>
        <p className="va-eyebrow">Three shapes · One system</p>
        <h2 className="va-h2" style={{ color: '#fff' }}>
          Pay for the system, <em style={{ color: 'var(--ember)' }}>not hours.</em>
        </h2>
        <p className="va-deck" style={{ color: 'rgba(255,255,255,0.7)' }}>
          Fixed price. Fixed delivery. Receipts in writing. Yes, we&apos;ll send you the call transcripts.
        </p>

        <div style={{
          marginTop: 64,
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 24,
          alignItems: 'stretch',
        }}>
          {TIERS.map((tier) => (
            <div key={tier.name} style={{
              position: 'relative',
              padding: 40,
              borderRadius: 18,
              background: tier.featured ? 'var(--ember)' : 'rgba(255,255,255,0.04)',
              border: tier.featured ? '0' : '1px solid rgba(255,255,255,0.1)',
              transform: tier.featured ? 'translateY(-12px)' : 'none',
              boxShadow: tier.featured ? '0 30px 80px rgba(194,86,112,0.35)' : 'none',
              display: 'flex',
              flexDirection: 'column',
              gap: 16,
            }}>
              {tier.featured && (
                <span style={{
                  position: 'absolute', top: 16, right: 16,
                  fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 11,
                  letterSpacing: '0.22em', textTransform: 'uppercase',
                  background: '#fff', color: 'var(--ember)',
                  padding: '6px 12px', borderRadius: 9999,
                }}>Best Value</span>
              )}
              <p style={{
                margin: 0,
                fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 14,
                letterSpacing: '0.22em', textTransform: 'uppercase',
                color: tier.featured ? 'rgba(255,255,255,0.85)' : tier.accent,
              }}>{tier.name}</p>
              <p style={{
                margin: 0,
                fontFamily: 'var(--font-heading)', fontWeight: 900, fontSize: 80,
                letterSpacing: '-0.04em', lineHeight: 1, color: '#fff',
              }}>{tier.price}</p>
              <p style={{
                margin: 0,
                fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 14,
                letterSpacing: '0.05em',
                color: tier.featured ? 'rgba(255,255,255,0.8)' : 'rgba(255,255,255,0.6)',
              }}>
                Delivered in {tier.delivery}
              </p>
              <ul style={{
                margin: '12px 0 0',
                padding: 0,
                listStyle: 'none',
                display: 'flex',
                flexDirection: 'column',
                gap: 10,
              }}>
                {tier.features.map((f) => (
                  <li key={f} style={{
                    fontFamily: 'var(--font-body)', fontSize: 15, lineHeight: 1.5,
                    color: tier.featured ? 'rgba(255,255,255,0.95)' : 'rgba(255,255,255,0.8)',
                    paddingLeft: 18, position: 'relative',
                  }}>
                    <span style={{
                      position: 'absolute', left: 0, top: 10,
                      width: 8, height: 2,
                      background: tier.featured ? '#fff' : tier.accent,
                    }} />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#intake"
                style={{
                  marginTop: 'auto',
                  display: 'inline-flex',
                  alignItems: 'center', justifyContent: 'center',
                  padding: '16px 24px', borderRadius: 10,
                  textDecoration: 'none',
                  background: tier.featured ? '#fff' : 'rgba(255,255,255,0.08)',
                  color: tier.featured ? 'var(--ember)' : '#fff',
                  fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 15,
                  border: tier.featured ? '0' : '1px solid rgba(255,255,255,0.15)',
                }}
              >
                Start {tier.name} →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

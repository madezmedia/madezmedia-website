export function IntakeCTA() {
  return (
    <section
      id="intake"
      className="va-section"
      style={{
        background: 'var(--ink-950)',
        color: '#fff',
        position: 'relative',
        overflow: 'hidden',
        textAlign: 'center',
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/brand/logo-splatter.png"
        alt=""
        aria-hidden="true"
        style={{
          position: 'absolute', inset: 0, margin: 'auto',
          width: 'min(60%, 1000px)',
          maxHeight: '70%',
          objectFit: 'contain',
          opacity: 0.35,
          mixBlendMode: 'screen',
          filter: 'saturate(0.7) blur(1px)',
          pointerEvents: 'none',
        }}
      />

      <div className="va-container" style={{ position: 'relative', zIndex: 1, maxWidth: 920 }}>
        <p className="va-eyebrow">Talk to the studio</p>
        <h2 className="va-h2" style={{ color: '#fff', fontSize: 'clamp(40px, 6vw, 80px)' }}>
          Answer tomorrow.<br />
          <em style={{
            fontStyle: 'italic',
            background: 'linear-gradient(90deg, var(--ember) 0%, var(--ochre) 100%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
            WebkitTextFillColor: 'transparent',
          }}>
            Order today.
          </em>
        </h2>
        <p className="va-deck" style={{
          color: 'rgba(255,255,255,0.75)',
          margin: '24px auto 0',
        }}>
          Talk to our AI agent first, or book a 20-minute intake with Duane (real human, real calendar). No decks. Just the build conversation.
        </p>

        <div style={{
          marginTop: 48,
          display: 'flex',
          justifyContent: 'center',
          gap: 16,
          flexWrap: 'wrap',
        }}>
          <a
            href="/bentley"
            style={{
              display: 'inline-flex',
              alignItems: 'center', gap: 12,
              padding: '22px 40px',
              borderRadius: 12,
              background: 'var(--ember)',
              color: '#fff',
              textDecoration: 'none',
              fontFamily: 'var(--font-body)',
              fontWeight: 700, fontSize: 18,
              boxShadow: '0 20px 60px rgba(194,86,112,0.45)',
            }}
          >
            Talk to Bentley →
          </a>
          <a
            href="https://cal.com/duane-madezmedia"
            style={{
              display: 'inline-flex',
              alignItems: 'center', gap: 12,
              padding: '22px 40px',
              borderRadius: 12,
              background: 'transparent',
              color: '#fff',
              textDecoration: 'none',
              fontFamily: 'var(--font-body)',
              fontWeight: 700, fontSize: 18,
              border: '1px solid rgba(255,255,255,0.25)',
            }}
          >
            Book Duane direct
          </a>
        </div>

        <p style={{
          marginTop: 36,
          fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 12,
          letterSpacing: '0.32em', textTransform: 'uppercase',
          color: 'rgba(255,255,255,0.5)',
        }}>
          From $250 · 5 day delivery · 24h response
        </p>
      </div>
    </section>
  );
}

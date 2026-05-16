'use client';

import { useState, useEffect } from 'react';

export function VoiceHero() {
  const [demoState, setDemoState] = useState<'idle' | 'dialing' | 'live'>('idle');

  useEffect(() => {
    if (demoState === 'dialing') {
      const t = setTimeout(() => setDemoState('live'), 1500);
      return () => clearTimeout(t);
    }
    if (demoState === 'live') {
      const t = setTimeout(() => setDemoState('idle'), 5000);
      return () => clearTimeout(t);
    }
  }, [demoState]);

  const start = () => demoState === 'idle' && setDemoState('dialing');

  return (
    <section
      style={{
        position: 'relative',
        padding: '160px 24px 120px',
        background: 'var(--ink-950)',
        color: '#fff',
        overflow: 'hidden',
      }}
    >
      <div
        aria-hidden="true"
        style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'radial-gradient(#1f2937 1px, transparent 1px)',
          backgroundSize: '16px 16px', opacity: 0.5,
        }}
      />

      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/brand/logo-splatter.png"
        alt=""
        aria-hidden="true"
        style={{
          position: 'absolute', top: '50%', right: '-10%',
          transform: 'translateY(-50%)',
          width: 'min(1100px, 70vw)',
          aspectRatio: '1.25',
          objectFit: 'contain',
          opacity: 0.4,
          mixBlendMode: 'screen',
          filter: 'saturate(0.6) blur(0.5px)',
          pointerEvents: 'none',
        }}
      />

      <div
        aria-hidden="true"
        style={{
          position: 'absolute', top: 0, right: 0, width: 700, height: 700,
          borderRadius: '50%', filter: 'blur(110px)', opacity: 0.25,
          background: 'radial-gradient(circle, var(--ember) 0%, transparent 70%)',
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: 'absolute', bottom: -80, left: -80, width: 600, height: 600,
          borderRadius: '50%', filter: 'blur(100px)', opacity: 0.2,
          background: 'radial-gradient(circle, var(--mist) 0%, transparent 70%)',
        }}
      />

      <div className="va-hero-grid" style={{
        position: 'relative', zIndex: 10,
        maxWidth: 1280, margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'minmax(0, 1.4fr) minmax(0, 1fr)',
        gap: 64, alignItems: 'center',
      }}>
        <div>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '6px 14px', borderRadius: 9999,
            background: 'rgba(194,86,112,0.15)',
            border: '1px solid rgba(194,86,112,0.35)',
            marginBottom: 32,
          }}>
            <span style={{
              width: 8, height: 8, borderRadius: '50%',
              background: 'var(--ember)',
              animation: 'va-pulse 2s ease-in-out infinite',
            }} />
            <span style={{
              fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 10,
              letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--ember)',
            }}>
              Voice AI · Now booking Charlotte builds
            </span>
          </div>

          <h1 style={{
            fontFamily: 'var(--font-heading)', fontWeight: 900,
            fontSize: 'clamp(40px, 6.5vw, 88px)',
            lineHeight: 1.05, letterSpacing: '-0.035em',
            margin: '0 0 28px', color: '#fff',
          }}>
            AI voice agents that answer your business{' '}
            <em style={{
              fontStyle: 'italic',
              background: 'linear-gradient(90deg, var(--ember) 0%, var(--ochre) 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
              WebkitTextFillColor: 'transparent',
            }}>
              24/7.
            </em>
          </h1>

          <p style={{
            fontFamily: 'var(--font-body)', fontWeight: 500,
            fontSize: 20, lineHeight: 1.55,
            color: 'rgba(203,213,225,0.92)',
            maxWidth: 560, margin: '0 0 40px',
          }}>
            Custom voice in your voice. Books appointments, qualifies leads, hands every transcript to your team — while you&apos;re on the job.
          </p>

          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <a href="#intake" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: '#fff', color: 'var(--ink-950)',
              padding: '20px 36px', borderRadius: 8, textDecoration: 'none',
              fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 17,
            }}>Book Intake Call</a>
            <a href="#pricing" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              border: '1px solid rgba(255,255,255,0.2)',
              background: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(8px)',
              color: '#fff', padding: '20px 36px', borderRadius: 8, textDecoration: 'none',
              fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 17,
            }}>See Pricing</a>
          </div>
        </div>

        <div style={{
          background: 'rgba(255,255,255,0.04)',
          border: '1px solid rgba(255,255,255,0.12)',
          borderRadius: 16, padding: 28,
          backdropFilter: 'blur(12px)',
        }}>
          <p style={{
            fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 10,
            letterSpacing: '0.2em', textTransform: 'uppercase',
            color: 'rgba(203,213,225,0.6)', margin: '0 0 18px',
            display: 'flex', alignItems: 'center', gap: 8,
          }}>
            <span style={{
              width: 7, height: 7, borderRadius: '50%',
              background: demoState === 'live' ? 'var(--moss)' : 'var(--ember)',
              animation: demoState === 'live' ? 'va-blink 1s ease-in-out infinite' : 'none',
            }} />
            Live Demo · No setup required
          </p>
          <p style={{
            fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 20,
            letterSpacing: '-0.01em', margin: '0 0 8px', color: '#fff',
          }}>
            Hear Bentley answer a call.
          </p>
          <p style={{
            fontFamily: 'var(--font-body)', fontSize: 14, lineHeight: 1.55,
            color: 'rgba(203,213,225,0.7)', margin: '0 0 22px',
          }}>
            One click. Sample call about an HVAC tune-up booking.
          </p>
          <button
            onClick={start}
            disabled={demoState !== 'idle'}
            style={{
              width: '100%', padding: '18px 22px', borderRadius: 10,
              cursor: demoState === 'idle' ? 'pointer' : 'default',
              background: demoState === 'live' ? 'var(--moss)' : 'var(--ember)',
              color: '#fff', border: 0,
              fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 15,
              transition: 'background 300ms',
            }}>
            {demoState === 'idle' && 'Start the demo call'}
            {demoState === 'dialing' && 'Dialing…'}
            {demoState === 'live' && '● Live · listening'}
          </button>
          {demoState === 'live' && (
            <div style={{ marginTop: 16, display: 'flex', gap: 4, height: 36, alignItems: 'center' }}>
              {Array.from({ length: 40 }).map((_, i) => (
                <span key={i} style={{
                  flex: 1,
                  height: `${20 + Math.sin(i * 0.7) * 16 + (i % 3) * 4}%`,
                  background: 'var(--moss)', borderRadius: 2,
                  animation: `va-bar 1.2s ease-in-out ${i * 0.04}s infinite`,
                }} />
              ))}
            </div>
          )}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .va-hero-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

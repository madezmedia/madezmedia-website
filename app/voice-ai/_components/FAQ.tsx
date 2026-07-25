'use client';

import { useState } from 'react';

const FAQ_ITEMS = [
  {
    q: 'Will it sound like a robot?',
    a: 'No. We clone your voice (or your team\'s voice) and tune the script so the cadence feels human. Most callers can\'t tell — and we tell you exactly what to listen for so you can hear it for yourself in the demo.',
  },
  {
    q: 'What if it gets a question wrong?',
    a: 'Every agent is configured with explicit fallback rules. When the agent isn\'t sure, it offers to take a message and text you immediately. You always have the option to escalate.',
  },
  {
    q: 'Does this work with my existing phone number?',
    a: 'Yes. We use call forwarding from your existing business line — no number change needed. You can also have a dedicated AI number if you prefer to track ROI separately.',
  },
  {
    q: 'How do you handle sensitive industries (medical, legal)?',
    a: 'For HIPAA-adjacent or attorney-client conversations, the agent is configured to collect only callback info — no medical details, no privileged content. The transcript is encrypted in transit and at rest.',
  },
  {
    q: 'What\'s the difference between this and Dialpad / Vonage / etc?',
    a: 'Those are phone systems. This is an AI agent that runs on top of any phone system. We don\'t replace your carrier — we replace what happens when no one picks up.',
  },
  {
    q: 'Can I cancel?',
    a: 'Yes. After the initial build, ongoing service is month-to-month. The first 14 days of monitoring are included with every build. No long-term contracts.',
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="va-section" style={{ background: 'var(--paper)' }}>
      <div className="va-container" style={{ maxWidth: 920 }}>
        <p className="va-eyebrow va-eyebrow--ochre">Common questions</p>
        <h2 className="va-h2">
          Things people ask <em style={{ color: 'var(--ochre)' }}>before they buy.</em>
        </h2>

        <div style={{
          marginTop: 56,
          display: 'flex',
          flexDirection: 'column',
          gap: 12,
        }}>
          {FAQ_ITEMS.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q} style={{
                background: '#fff',
                border: '1px solid var(--border)',
                borderRadius: 10,
                overflow: 'hidden',
              }}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  style={{
                    width: '100%',
                    padding: '22px 26px',
                    background: 'transparent',
                    border: 0,
                    cursor: 'pointer',
                    textAlign: 'left',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: 16,
                    fontFamily: 'var(--font-display)',
                    fontWeight: 700,
                    fontSize: 18,
                    letterSpacing: '-0.01em',
                    color: 'var(--forest-800)',
                  }}
                >
                  <span>{item.q}</span>
                  <span style={{
                    flex: '0 0 auto',
                    width: 28, height: 28,
                    borderRadius: '50%',
                    background: isOpen ? 'var(--ember)' : 'var(--border)',
                    color: isOpen ? '#fff' : 'var(--fg-meta)',
                    display: 'inline-flex',
                    alignItems: 'center', justifyContent: 'center',
                    fontFamily: 'var(--mzm-font-mono)',
                    fontWeight: 700, fontSize: 16,
                    transition: 'background 200ms',
                  }}>
                    {isOpen ? '−' : '+'}
                  </span>
                </button>
                {isOpen && (
                  <div style={{
                    padding: '0 26px 22px',
                    fontFamily: 'var(--font-body-v14)',
                    fontSize: 16,
                    lineHeight: 1.6,
                    color: 'var(--fg-meta)',
                  }}>
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

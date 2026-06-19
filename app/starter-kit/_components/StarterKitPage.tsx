'use client';

import { useState } from 'react';
import '../starter-kit.css';

export function StarterKitPage() {
  const [form, setForm] = useState({ firstName: '', email: '', businessType: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('/api/starter-kit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) setSubmitted(true);
    } catch {
      setSubmitted(true); // graceful fallback
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="starter-kit-page">
      {/* ── Hero ── */}
      <section className="sk-hero">
        <div className="sk-hero-inner">
          <span className="sk-eyebrow">Free Resource · No Fluff</span>
          <h1 className="sk-headline">
            The 7-Point Voice AI<br />
            <em>Evaluation Checklist</em>
          </h1>
          <p className="sk-subhead">
            Most &ldquo;AI phone assistants&rdquo; are auto-attendants with a new name. Use this checklist before you sign any contract — or you&rsquo;ll be paying $300&ndash;$2,000/month for something that just takes messages.
          </p>
          <div className="sk-hero-cta-group">
            <a href="#get-checklist" className="sk-btn-primary">
              Get the Free Checklist ↓
            </a>
            <a href="#checklist" className="sk-btn-ghost">
              See what&rsquo;s inside
            </a>
          </div>
          <div className="sk-social-proof">
            <div className="sk-proof-avatars">
              <div className="sk-avatar" style={{background:'var(--mzm-accent)'}}>H</div>
              <div className="sk-avatar" style={{background:'var(--mzm-accent-pink)'}}>M</div>
              <div className="sk-avatar" style={{background:'var(--mzm-accent-cyan)'}}>A</div>
            </div>
            <p>Used by operators at <strong>50+ businesses</strong> to evaluate AI phone systems before buying</p>
          </div>
        </div>
      </section>

      {/* ── The 7 Points ── */}
      <section className="sk-section" id="checklist">
        <div className="sk-container">
          <span className="sk-section-label">Part 01 · The 7 Evaluation Points</span>
          <h2 className="sk-h2">What your AI assistant <span className="sk-accent-pink">must actually do.</span></h2>

          <div className="sk-checklist">
            {[
              { n:'1', title:'Answer like a knowledgeable staff member',
                body:'The AI must handle real questions — not just transfer everything. It should answer FAQs about services, pricing, hours, and common objections without routing to a human.' },
              { n:'2', title:'Capture leads even when it can\'t help',
                body:'For questions it can\'t answer, it must collect the caller\'s info, reason about why they called, and hand off in structured format — not just "left a message."' },
              { n:'3', title:'Integrate with your existing tools',
                body:'CRM writes, calendar bookings, team notifications — without manual data entry after every call. If it just sends a transcript, that\'s not integration.' },
              { n:'4', title:'Handle multilingual and dialect variation',
                body:'In 2026, "we don\'t support that yet" isn\'t acceptable. The AI must handle accented English and other languages naturally, or you\'re losing 1-in-5 callers.' },
              { n:'5', title:'Sound like your business, not a robot',
                body:'Brand voice, industry terminology, the right tone. If a caller says "that sounds like an AI," you\'ve lost trust. The best AI assistants are indistinguishable from a well-trained receptionist.' },
              { n:'6', title:'Escalate with context — not blindly',
                body:'The AI must know when to escalate (angry customer, medical question, high-value prospect) and brief the human before the transfer — not just "transferring you."' },
              { n:'7', title:'Give you visibility into what\'s happening',
                body:'Dashboard with call volume, outcomes, peak hours, common questions, conversion rate. If you can\'t see it, you can\'t manage it — or improve it.' },
            ].map(item => (
              <div className="sk-check-item" key={item.n}>
                <div className="sk-check-num">{item.n}</div>
                <div className="sk-check-body">
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Questions ── */}
      <section className="sk-section sk-section-dark" id="questions">
        <div className="sk-container">
          <span className="sk-section-label" style={{color:'var(--mzm-accent-cyan)'}}>Part 02 · The Hard Questions</span>
          <h2 className="sk-h2" style={{color:'white'}}>Questions that <span className="sk-accent-cyan">expose the gaps.</span></h2>
          <p style={{color:'rgba(255,255,255,0.75)', marginBottom:'32px'}}>Ask every AI phone vendor these. The ones who can&rsquo;t answer clearly are selling marketing, not AI.</p>

          <div className="sk-q-grid">
            {[
              'What % of calls does your AI handle fully without human transfer?',
              'What happens when the AI doesn\'t know the answer?',
              'Can it book appointments directly into our calendar?',
              'How long does training take on our specific business?',
              'What does a "failed handoff" look like? How do we know?',
              'How does it handle heavy accents and background noise?',
              'Can we review and edit how it responds to specific questions?',
              'What\'s your actual uptime SLA?',
              'How do you measure success? What metrics do you share?',
              'What does onboarding look like and who owns it?',
            ].map((q, i) => (
              <div className="sk-q-item" key={i}>→ {q}</div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Lead Capture ── */}
      <section className="sk-section sk-section-capture" id="get-checklist">
        <div className="sk-container">
          <div className="sk-capture-grid">
            <div className="sk-capture-left">
              <span className="sk-section-label">Free Download</span>
              <h2 className="sk-h2">Get the full <span className="sk-accent-pink">checklist.</span></h2>
              <p>The 7 evaluation points, the 10 hard questions to ask any vendor, the 5 red flags that should make you walk away, and the real 5-day implementation timeline.</p>
              <div className="sk-kit-contents">
                <div className="sk-kit-item">✓ 7-point evaluation framework</div>
                <div className="sk-kit-item">✓ 10 hard questions for any AI vendor</div>
                <div className="sk-kit-item">✓ 5 red flags to watch for</div>
                <div className="sk-kit-item">✓ 5-day implementation timeline</div>
                <div className="sk-kit-item">✓ Real pricing ranges by tier</div>
              </div>
            </div>

            <div className="sk-capture-right">
              {!submitted ? (
                <form className="sk-form" onSubmit={handleSubmit}>
                  <h3>Send me the checklist</h3>
                  <p>Enter your email and I&rsquo;ll send you the full download — plus a 5-day email micro-course on evaluating AI phone systems.</p>
                  <div className="sk-form-field">
                    <label htmlFor="firstName">First Name</label>
                    <input
                      id="firstName"
                      type="text"
                      placeholder="Duane"
                      value={form.firstName}
                      onChange={e => setForm({...form, firstName: e.target.value})}
                      required
                    />
                  </div>
                  <div className="sk-form-field">
                    <label htmlFor="email">Email</label>
                    <input
                      id="email"
                      type="email"
                      placeholder="you@company.com"
                      value={form.email}
                      onChange={e => setForm({...form, email: e.target.value})}
                      required
                    />
                  </div>
                  <div className="sk-form-field">
                    <label htmlFor="businessType">What best describes your business?</label>
                    <select
                      id="businessType"
                      value={form.businessType}
                      onChange={e => setForm({...form, businessType: e.target.value})}
                    >
                      <option value="">Select one...</option>
                      <option>HVAC / Plumbing / Trades</option>
                      <option>Auto Repair / Dealer</option>
                      <option>Medical / Dental</option>
                      <option>Legal / Accounting</option>
                      <option>Real Estate</option>
                      <option>Home Services</option>
                      <option>Restaurant / Retail</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <button type="submit" className="sk-btn-submit" disabled={loading}>
                    {loading ? 'Sending…' : 'Send Me the Checklist →'}
                  </button>
                  <p className="sk-form-note">No spam. Unsubscribe anytime. Your data stays yours.</p>
                </form>
              ) : (
                <div className="sk-form-success">
                  <div className="sk-success-icon">✓</div>
                  <h3>Check your inbox!</h3>
                  <p>The full Voice AI Evaluation Checklist is on its way. While you wait — want to talk through what you&rsquo;re evaluating?</p>
                  <a href="https://cal.com/mad-ez-media/ai-automation-discovery" target="_blank" rel="noopener noreferrer" className="sk-btn-primary">
                    Book a Free 20-Min Strategy Call →
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="sk-cta-section">
        <div className="sk-container">
          <h2>Ready to stop losing calls to voicemail?</h2>
          <p>Book a free 20-minute strategy call. We&rsquo;ll map your current call flow, tell you exactly what Mad EZ Media can handle, and give you a straight answer on whether we&rsquo;re the right fit.</p>
          <div className="sk-cta-btns">
            <a href="https://cal.com/mad-ez-media/ai-automation-discovery" target="_blank" rel="noopener noreferrer" className="sk-btn-primary">
              Book a Free Strategy Call →
            </a>
            <a href="https://madezmedia.com" target="_blank" rel="noopener noreferrer" className="sk-btn-ghost">
              madezmedia.com →
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

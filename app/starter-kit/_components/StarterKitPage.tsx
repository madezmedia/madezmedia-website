'use client';

import { useState } from 'react';
import '../starter-kit.css';

const CHECKLIST_ITEMS = [
  {
    n: '1',
    title: 'Answer calls the way a knowledgeable staff member would',
    body: 'The AI must handle real questions — not just transfer everything. It should answer FAQs about services, pricing, hours, and common objections without routing to a human.',
    why: 'The whole point is eliminating call volume. If it transfers 80% of calls, your staff is still answering the phone.',
  },
  {
    n: '2',
    title: 'Capture leads even when it can\'t help',
    body: 'For questions it can\'t answer, it must collect the caller\'s info, reason about why they called, and hand off in structured format — not just "left a message."',
    why: 'Most callers hang up if they can\'t get answers. The AI should be better at capturing the lead than a missed call would be.',
  },
  {
    n: '3',
    title: 'Integrate with your existing tools automatically',
    body: 'CRM writes, calendar bookings, team notifications — without manual data entry after every call. If it just sends a transcript, that\'s not integration.',
    why: 'Manual follow-up is where leads die. If your staff has to enter call notes by hand, the AI is adding work, not removing it.',
  },
  {
    n: '4',
    title: 'Handle multilingual and dialect variation',
    body: 'In 2026, "we don\'t support that yet" isn\'t acceptable. The AI must handle accented English and other languages naturally.',
    why: 'If 20% of your callers hang up because they can\'t communicate with the AI, you\'re losing 1 in 5 potential customers.',
  },
  {
    n: '5',
    title: 'Sound like your business, not a robot',
    body: 'Brand voice, industry terminology, the right tone. If a caller says "that sounds like an AI," you\'ve already lost trust.',
    why: 'The best AI assistants are indistinguishable from a well-trained receptionist.',
  },
  {
    n: '6',
    title: 'Escalate with context — not blindly',
    body: 'The AI must know when to escalate (angry customer, medical question, high-value prospect) and brief the human before the transfer.',
    why: 'Blind transfers create the worst customer experience. A good AI briefs the human first.',
  },
  {
    n: '7',
    title: 'Give you visibility into what\'s happening',
    body: 'Dashboard with call volume, outcomes, peak hours, common questions, conversion rate. If you can\'t see it, you can\'t manage it.',
    why: 'Running blind is worse than not running at all.',
  },
];

const QUESTIONS = [
  'What percentage of calls does your AI handle fully without human transfer?',
  'What happens when the AI doesn\'t know the answer?',
  'Can it book appointments directly into our scheduling system?',
  'How long does it take to train on our specific business?',
  'What does a "failed handoff" look like? How do you notify us?',
  'How does it handle heavy accents and background noise?',
  'Can we review and edit how it responds to specific questions?',
  'What\'s your actual uptime SLA?',
  'How do you measure success? What metrics do you share?',
  'What does onboarding look like and who owns it?',
];

const TIMELINE = [
  { day: '1', label: 'Day', action: 'Discovery call — 30 minutes', desc: 'We map your call flow: who calls, why, what info you need, how you follow up.' },
  { day: '2', label: 'Day', action: 'Voice + script development — you review', desc: 'AI voice creation and full call script based on your real business. You approve every word.' },
  { day: '3', label: 'Day', action: 'Technical integration + CRM/calendar', desc: 'We connect to your calendar, CRM, and messaging tools. Automated routing begins.' },
  { day: '4', label: 'Day', action: 'Testing + your team reviews', desc: 'Test calls, you and your team try it, we fix anything that doesn\'t feel right.' },
  { day: '5', label: 'Day', action: 'Go live + 48-hour monitoring', desc: 'You forward your number. We watch every call for 48 hours. Real-time adjustments.' },
];

const PRICING = [
  {
    tier: 'Starter',
    price: '$250',
    period: '/5 days',
    desc: 'For businesses getting started with AI phone automation.',
    features: ['1 AI voice agent', 'Up to 50 call flows', 'Calendar + CRM integration', 'SMS/email handoff', '48-hr go-live', '1 language', 'Standard voice'],
  },
  {
    tier: 'Standard ★ Most Popular',
    price: '$500',
    period: '/7 days',
    desc: 'For established businesses handling real call volume.',
    featured: true,
    features: ['Everything in Starter', 'Voice clone (sounds like you)', 'Multilingual (3+ languages)', 'CRM webhook + booking', 'Outbound calling', 'Analytics dashboard', 'Priority support'],
  },
  {
    tier: 'Premium',
    price: '$1,000',
    period: '/10 days',
    desc: 'For multi-location or high-volume operations.',
    features: ['Everything in Standard', '3-agent fleet', 'White-label option', 'Dedicated routing', 'Outbound dialer', 'Advanced analytics', 'Custom SLA'],
  },
];

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
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="starter-kit-page">

      {/* ── Hero ── */}
      <section className="sk-hero">
        <div className="sk-container">
          <p className="sk-eyebrow">Free Resource · No fluff</p>
          <h1 className="sk-h1">
            The 7-Point Voice AI<br />
            <em>Evaluation Checklist</em>
          </h1>
          <p className="sk-deck">
            Most &ldquo;AI phone assistants&rdquo; are auto-attendants with a new name.
            Use this checklist before you sign any contract — or you&rsquo;ll be paying
            $300&ndash;$2,000/month for something that just takes messages.
          </p>
          <div className="sk-btn-row">
            <a href="#get-checklist" className="sk-btn">Get the Free Checklist ↓</a>
            <a href="#checklist" className="sk-btn sk-btn--ghost">See what&rsquo;s inside</a>
          </div>
          <div className="sk-social-proof">
            <div className="sk-avatars">
              <div className="sk-avatar">H</div>
              <div className="sk-avatar">M</div>
              <div className="sk-avatar">A</div>
            </div>
            <p>Used by operators at <strong>50+ businesses</strong> to evaluate AI phone systems</p>
          </div>
        </div>
      </section>

      {/* ── Sticky nav ── */}
      <nav className="sk-sticky-nav">
        <ul>
          <li><a href="#checklist" className="active">The 7 Points</a></li>
          <li><a href="#questions">Questions to Ask</a></li>
          <li><a href="#red-flags">Red Flags</a></li>
          <li><a href="#timeline">5-Day Rollout</a></li>
          <li><a href="#pricing">Pricing</a></li>
        </ul>
      </nav>

      {/* ── Checklist ── */}
      <section className="sk-section" id="checklist">
        <div className="sk-container">
          <p className="sk-eyebrow">Part 01 · The 7 Evaluation Points</p>
          <h2 className="sk-h2">What your AI assistant <em>must actually do.</em></h2>
          <p className="sk-deck">Before you sign with any vendor, go through each of these 7 points. If they can&rsquo;t pass all 7, you&rsquo;re not buying an AI — you&rsquo;re renting a slightly smarter voicemail system.</p>

          <ul className="sk-checklist">
            {CHECKLIST_ITEMS.map(item => (
              <li key={item.n}>
                <div className="sk-num">{item.n}</div>
                <div className="sk-content">
                  <h4>{item.title}</h4>
                  <p className="sk-body">{item.body}</p>
                  <div className="sk-why"><strong>Why it matters:</strong> {item.why}</div>
                </div>
              </li>
            ))}
          </ul>

          <div className="sk-callout sk-callout--ember">
            <p><strong>The one-question gut check:</strong> After a week of use, ask yourself: &ldquo;Did my staff have to handle fewer calls this week?&rdquo; If the answer isn&rsquo;t clearly yes — the AI is not doing its job.</p>
          </div>
        </div>
      </section>

      {/* ── Questions ── */}
      <section className="sk-section sk-section--dark" id="questions">
        <div className="sk-container">
          <p className="sk-eyebrow sk-eyebrow--moss">Part 02 · The Hard Questions</p>
          <h2 className="sk-h2">Questions that <em>expose the gaps.</em></h2>
          <p className="sk-deck">Ask every AI phone vendor these. The ones who can&rsquo;t answer clearly are selling marketing, not AI.</p>

          <ul className="sk-q-list">
            {QUESTIONS.map((q, i) => (
              <li key={i}>{q}</li>
            ))}
          </ul>

          <div className="sk-callout sk-callout--mist" style={{marginTop: 32}}>
            <p><strong>Pro tip:</strong> Ask for a live demo with YOUR business&rsquo;s actual scenarios — not their canned demo. &ldquo;Show me how it handles a caller asking about pricing for a service we don&rsquo;t advertise.&rdquo; If they can&rsquo;t or won&rsquo;t, that&rsquo;s your answer.</p>
          </div>
        </div>
      </section>

      {/* ── Red Flags ── */}
      <section className="sk-section" id="red-flags">
        <div className="sk-container">
          <p className="sk-eyebrow sk-eyebrow--forest">Part 03 · Red Flags</p>
          <h2 className="sk-h2">5 signs the AI <em>will disappoint you.</em></h2>
          <p className="sk-deck">These are the warning signs that the vendor is selling hype, not a working system. Walk away or demand proof before signing.</p>

          <ul className="sk-red-flags">
            <li><strong>&ldquo;Our AI learns on its own.&rdquo;</strong> — Real AI assistants require training. &ldquo;It learns on its own&rdquo; means they haven&rsquo;t built the training infrastructure.</li>
            <li><strong>Pricing is &ldquo;starting at $99/mo&rdquo; with no range.</strong> — Real AI phone systems cost $250-$2,000/month. Rock-bottom pricing means hidden fees or a system that handles very little.</li>
            <li><strong>No trial period or pilot option.</strong> — A 30-day pilot is standard for real AI vendors. If they won&rsquo;t let you test it, they&rsquo;re not confident in the product.</li>
            <li><strong>They use generic voice with no brand tuning.</strong> — If every business sounds the same, the AI wasn&rsquo;t built for your business. You should sound like you.</li>
            <li><strong>No dashboard, no reporting, no call logs.</strong> — If you can&rsquo;t see what&rsquo;s happening, you can&rsquo;t improve it. Run.</li>
          </ul>
        </div>
      </section>

      {/* ── 5-Day Timeline ── */}
      <section className="sk-section" id="timeline">
        <div className="sk-container">
          <p className="sk-eyebrow sk-eyebrow--moss">Part 04 · The 5-Day Rollout</p>
          <h2 className="sk-h2">What a real <em>implementation looks like.</em></h2>
          <p className="sk-deck">Mad EZ Media&rsquo;s Voice AI goes live in 5 business days — here&rsquo;s exactly what happens in each day.</p>

          <ul className="sk-timeline">
            {TIMELINE.map(item => (
              <li key={item.day}>
                <div className="sk-day">{item.day}<span>{item.label}</span></div>
                <div className="sk-content">
                  <h4>{item.action}</h4>
                  <p>{item.desc}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className="sk-callout sk-callout--forest">
            <p><strong>What most vendors don&rsquo;t do:</strong> They hand you a dashboard and say &ldquo;let us know if you have issues.&rdquo; We watch every call for 48 hours. That&rsquo;s the difference between a system that works and a system you babysit.</p>
          </div>
        </div>
      </section>

      {/* ── Pricing ── */}
      <section className="sk-section" id="pricing">
        <div className="sk-container">
          <p className="sk-eyebrow">Part 05 · Mad EZ Media Pricing</p>
          <h2 className="sk-h2">Straightforward <em>pricing.</em></h2>
          <p className="sk-deck">Three tiers. No setup fees. No per-seat charges. No &ldquo;call credits&rdquo; that expire.</p>

          <div className="sk-pricing-grid">
            {PRICING.map(card => (
              <div key={card.tier} className={`sk-pricing-card${card.featured ? ' sk-pricing-card--featured' : ''}`}>
                <div className="sk-tier">{card.tier}</div>
                <div className="sk-price">{card.price}<span>{card.period}</span></div>
                <p className="sk-desc">{card.desc}</p>
                <ul>
                  {card.features.map(f => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="sk-callout sk-callout--ochre">
            <p><strong>No fit?</strong> This checklist works for evaluating any AI phone vendor — even if it&rsquo;s not us. The 7-point framework above is vendor-agnostic. Use it.</p>
          </div>
        </div>
      </section>

      {/* ── Lead Capture ── */}
      <section className="sk-section" id="get-checklist" style={{background: 'var(--paper-warm)'}}>
        <div className="sk-container">
          <div className="sk-grid-2">
            {/* Left: what they get */}
            <div>
              <p className="sk-eyebrow">Free Download</p>
              <h2 className="sk-h2">Get the full <em>checklist.</em></h2>
              <p className="sk-body">
                The 7 evaluation points, the 10 hard questions to ask any vendor,
                the 5 red flags that should make you walk away, and the real 5-day
                implementation timeline.
              </p>
              <ul className="sk-benefits">
                <li>The 7-point evaluation framework</li>
                <li>10 hard questions for any AI vendor</li>
                <li>5 red flags to watch for</li>
                <li>5-day implementation timeline</li>
                <li>Real pricing ranges by tier</li>
              </ul>
            </div>

            {/* Right: form */}
            <div>
              {!submitted ? (
                <form className="sk-form" onSubmit={handleSubmit}>
                  <h3>Send me the checklist</h3>
                  <p>Enter your email and I&rsquo;ll send you the full download — plus a 5-day email micro-course on evaluating AI phone systems.</p>
                  <div className="sk-field">
                    <label htmlFor="firstName">First Name</label>
                    <input
                      id="firstName"
                      type="text"
                      placeholder="Duane"
                      value={form.firstName}
                      onChange={e => setForm({ ...form, firstName: e.target.value })}
                      required
                    />
                  </div>
                  <div className="sk-field">
                    <label htmlFor="email">Email</label>
                    <input
                      id="email"
                      type="email"
                      placeholder="you@company.com"
                      value={form.email}
                      onChange={e => setForm({ ...form, email: e.target.value })}
                      required
                    />
                  </div>
                  <div className="sk-field">
                    <label htmlFor="businessType">What best describes your business?</label>
                    <select
                      id="businessType"
                      value={form.businessType}
                      onChange={e => setForm({ ...form, businessType: e.target.value })}
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
                  <button type="submit" className="sk-submit" disabled={loading}>
                    {loading ? 'Sending…' : 'Send Me the Checklist →'}
                  </button>
                  <p className="sk-fine-print">No spam. Unsubscribe anytime. Your data stays yours.</p>
                </form>
              ) : (
                <div className="sk-success">
                  <div className="sk-success-icon">✓</div>
                  <h3>Check your inbox!</h3>
                  <p>The full Voice AI Evaluation Checklist is on its way. While you wait — want to talk through what you&rsquo;re evaluating?</p>
                  <a href="https://cal.com/mad-ez-media/ai-automation-discovery" target="_blank" rel="noopener noreferrer" className="sk-btn">
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
          <p className="sk-eyebrow sk-eyebrow--moss">Mad EZ Media</p>
          <h2 className="sk-h2" style={{color: 'white'}}>Ready to stop losing calls?</h2>
          <p className="sk-deck">
            Book a free 20-minute strategy call. We&rsquo;ll map your current call flow,
            tell you exactly what Mad EZ Media can handle, and give you a straight answer
            on whether we&rsquo;re the right fit.
          </p>
          <div className="sk-btn-row">
            <a href="https://cal.com/mad-ez-media/ai-automation-discovery" target="_blank" rel="noopener noreferrer" className="sk-btn sk-btn--bone">
              Book a Free Strategy Call →
            </a>
            <a href="https://madezmedia.com" target="_blank" rel="noopener noreferrer" className="sk-btn sk-btn--ghost">
              madezmedia.com →
            </a>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="sk-footer">
        <div className="sk-container">
          <p>Voice AI Evaluation Checklist v1.0 — June 2026 — <a href="https://madezmedia.com">Mad EZ Media Partners</a></p>
          <p>No spam. Built by practitioners. Your data stays yours.</p>
        </div>
      </footer>

    </main>
  );
}

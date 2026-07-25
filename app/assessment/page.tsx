import type { Metadata } from 'next';
import './assessment.css';
import { ROICalculator } from './_components/ROICalculator';

export const metadata: Metadata = {
  title: '$499 AI Tools Assessment — Stop Buying AI That Forgets Your Business | madezmedia',
  description:
    'Uncover the 7 operational leaks draining your billable hours. 90-minute white-glove audit backed by our 5+ hr/wk returned guarantee.',
  openGraph: {
    title: '$499 AI Tools Assessment — madezmedia',
    description:
      'Stop buying AI that forgets your business every time you close the tab. 90-minute White-Glove AI Audit.',
    url: 'https://www.madezmedia.com/assessment',
    siteName: 'madezmedia',
    type: 'website',
  },
  alternates: { canonical: '/assessment' },
};

const LEAKS = [
  {
    num: 'LEAK 01',
    tag: 'MISSED CALLS',
    pain: '"You miss the call, they call the next guy."',
    trigger: 'A call comes in while you’re under a sink or on a roof, and it rings out.',
    action: 'An AI agent answers immediately, day or night, and books the job before they hang up.',
  },
  {
    num: 'LEAK 02',
    tag: 'SLOW QUOTES',
    pain: '"It\'s 9pm and you\'re still doing invoices."',
    trigger: 'Quotes and paperwork wait until you’re home and exhausted, so they go out two days late.',
    action: 'Quotes and invoices get written and sent the same hour, pulled straight from your price book.',
  },
  {
    num: 'LEAK 03',
    tag: 'NO REVIEWS',
    pain: '"Happy customers, but your Google page hasn’t moved in months."',
    trigger: 'The job finishes, everyone moves on, and nobody remembers to ask for a review.',
    action: 'A review request goes out automatically the moment the job closes — while it’s still fresh.',
  },
  {
    num: 'LEAK 04',
    tag: 'SCHEDULING PING-PONG',
    pain: '"Ten texts back and forth just to land on a time."',
    trigger: 'A customer wants to book, and you’re both juggling calendars over text between jobs.',
    action: 'The agent checks your real calendar and locks in a time in one message — no back-and-forth.',
  },
  {
    num: 'LEAK 05',
    tag: 'REPEAT QUESTIONS',
    pain: '"Do you service my area?" — for the hundredth time this month.',
    trigger: 'The same handful of questions come in every single day, eating minutes between jobs.',
    action: 'The agent answers instantly and the same way every time, without you lifting a finger.',
  },
  {
    num: 'LEAK 06',
    tag: 'NO-SHOWS',
    pain: '"You show up. They forgot. Or worse, they never actually confirmed."',
    trigger: 'An appointment gets booked, but nobody follows up to confirm it’s still on.',
    action: 'Automatic confirmation and reminder texts go out before every appointment, no exceptions.',
  },
  {
    num: 'LEAK 07',
    tag: 'SLOW ONBOARDING',
    pain: '"A new client signs, then waits four days to hear from anyone."',
    trigger: 'A new client pays or signs, and the welcome, paperwork, and kickoff sit in a queue.',
    action: 'Welcome messages, paperwork, and the first appointment go out within minutes, automatically.',
  },
];

export default function AssessmentPage() {
  return (
    <main className="assessment-page">
      {/* Hero Section */}
      <section className="assessment-hero">
        <div className="mzm-eyebrow">
          <span className="num">N° 01</span>AI TOOLS ASSESSMENT
        </div>
        <h1>
          Your business is leaking hours somewhere.{' '}
          <span className="em">We&apos;ll show you exactly where.</span>
        </h1>
        <p className="hero-deck">
          Most AI tools forget everything the moment you close the tab. Our 90-minute audit
          finds your real leaks — missed calls, slow quotes, no-shows — and shows you exactly
          what fixing them is worth.
        </p>
        <div className="hero-ctas">
          <a
            href="https://cal.com/mad-ez-media/ai-automation-discovery"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-primary"
          >
            Claim $499 White-Glove Assessment →
          </a>
          <a
            href="https://cal.com/mad-ez-media/ai-automation-discovery"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-secondary"
          >
            Book Free 15-Min Consult
          </a>
        </div>
      </section>

      {/* 7 Leaks Grid */}
      <section className="leaks-section">
        <div className="section-head">
          <div className="mzm-eyebrow">
            <span className="num">N° 02</span>DIAGNOSTIC FRAMEWORK
          </div>
          <h2>
            The 7 Leaks <span className="em">Costing You Jobs and Hours.</span>
          </h2>
          <p className="section-sub">
            The same 7 problems show up in almost every service business we look at. Here&apos;s
            what each one costs you, and what fixing it actually looks like.
          </p>
        </div>

        <div className="leaks-grid">
          {LEAKS.map((leak) => (
            <div key={leak.num} className="leak-card">
              <div>
                <div className="leak-header">
                  <span className="leak-num">{leak.num}</span>
                  <span className="leak-tag">{leak.tag}</span>
                </div>
                <div className="pain-quote">{leak.pain}</div>
              </div>
              <div className="trigger-action-box">
                <div className="pair-item">
                  <span className="pair-lbl trigger">What&apos;s happening now</span>
                  <p className="pair-txt">{leak.trigger}</p>
                </div>
                <div className="pair-item">
                  <span className="pair-lbl action">What changes</span>
                  <p className="pair-txt">{leak.action}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive ROI Labor Calculator */}
      <section className="calc-section">
        <ROICalculator />
      </section>

      {/* Approved Pricing Ladder */}
      <section className="pricing-section" id="pricing">
        <div className="section-head">
          <div className="mzm-eyebrow">
            <span className="num">N° 03</span>TRANSPARENT ENGAGEMENT
          </div>
          <h2>
            Three Ways <span className="em">to Start.</span>
          </h2>
          <p className="section-sub">
            Start with a free conversation, validate it with a 90-minute audit, or go straight to
            having your own agents built and running.
          </p>
        </div>

        <div className="pricing-grid">
          {/* Step 0 */}
          <div className="price-card">
            <div className="card-top">
              <div className="step-tag">
                <span>STEP 0</span>
                <span>EXPLORATORY</span>
              </div>
              <h3>15-Min Strategy Consult</h3>
              <div className="price-amount">$0</div>
              <div className="price-sub">Zero commitment · 15 minutes</div>
              <p className="price-desc">
                A quick call to hear what&apos;s actually slowing your business down and tell you
                honestly whether we&apos;re a fit.
              </p>
              <ul className="features-list">
                <li>Walk through how your business runs today</li>
                <li>An honest read on where AI would and wouldn&apos;t help</li>
                <li>A plain-English next step, whatever we decide</li>
              </ul>
            </div>
            <a
              href="https://cal.com/mad-ez-media/ai-automation-discovery"
              target="_blank"
              rel="noopener noreferrer"
              className="price-cta-btn secondary"
            >
              Book Free 15-Min Consult →
            </a>
          </div>

          {/* Tier 1 */}
          <div className="price-card featured">
            <div className="card-top">
              <div className="step-tag">
                <span>TIER 1</span>
                <span className="card-badge">RECOMMENDED</span>
              </div>
              <h3>90-Minute White-Glove Audit</h3>
              <div className="price-amount">$499</div>
              <div className="price-sub">One-time investment · 5+ hr/wk returned guarantee</div>
              <p className="price-desc">
                A 90-minute session where we walk through your business and find exactly where
                you&apos;re losing hours and jobs — then map out what fixing it looks like.
              </p>
              <ul className="features-list">
                <li>90-minute live working session, not a slide deck</li>
                <li>A written report on your 7 leaks, in plain English</li>
                <li>A clear plan for what to build first</li>
                <li>Backed by our 5+ hr/wk returned guarantee</li>
              </ul>
            </div>
            <a
              href="https://cal.com/mad-ez-media/ai-automation-discovery"
              target="_blank"
              rel="noopener noreferrer"
              className="price-cta-btn primary"
            >
              Get $499 White-Glove Assessment →
            </a>
          </div>

          {/* Tier 2 */}
          <div className="price-card">
            <div className="card-top">
              <div className="step-tag">
                <span>TIER 2</span>
                <span>PRODUCTION FLEET</span>
              </div>
              <h3>Private Agent Fleet Deployment</h3>
              <div className="price-amount">$4,500</div>
              <div className="price-sub">One-time setup · your own private system</div>
              <p className="price-desc">
                We build and deploy your own AI agents — live, answering calls and doing real
                work, not a demo.
              </p>
              <ul className="features-list">
                <li>Your own private system — never shared with another client</li>
                <li>Two agents configured and running for your business</li>
                <li>Runs automatically in the background, all day</li>
                <li>Remembers every call, quote, and customer, permanently</li>
              </ul>
            </div>
            <a
              href="https://cal.com/mad-ez-media/ai-automation-discovery"
              target="_blank"
              rel="noopener noreferrer"
              className="price-cta-btn secondary"
            >
              Deploy Private Fleet →
            </a>
          </div>
        </div>
      </section>

      {/* Download Collateral Section */}
      <section className="downloads-section">
        <div className="section-head">
          <div className="mzm-eyebrow">
            <span className="num">N° 04</span>EXECUTIVE COLLATERAL &amp; TEMPLATES
          </div>
          <h2>
            See the Audit <span className="em">Before You Book It.</span>
          </h2>
          <p className="section-sub">
            Take a look at exactly what the audit covers and how the report is structured,
            before you book a call.
          </p>
        </div>

        <div className="downloads-grid">
          <div className="download-card">
            <div className="card-top">
              <span className="download-type">PRINT &amp; PDF READY</span>
              <h3>One-Page Overview</h3>
              <p className="download-desc">
                A one-page rundown of the 7 leaks, how the audit works, and the 5+ hr/wk
                returned guarantee.
              </p>
            </div>
            <a
              href="/downloads/ai-tools-assessment-sell-sheet.html"
              target="_blank"
              rel="noopener noreferrer"
              className="download-cta-btn primary"
            >
              Download the Overview (PDF) →
            </a>
          </div>

          <div className="download-card">
            <div className="card-top">
              <span className="download-type">SAMPLE REPORT</span>
              <h3>What You Actually Get</h3>
              <p className="download-desc">
                The real, 6-page report template we fill out with you during the live audit
                session.
              </p>
            </div>
            <a
              href="/downloads/kami-assessment-report-template.md"
              target="_blank"
              rel="noopener noreferrer"
              className="download-cta-btn secondary"
            >
              Download the Sample Report →
            </a>
          </div>
        </div>
      </section>

      {/* Guarantee Banner */}
      <div className="guarantee-banner">
        <div className="guarantee-inner">
          <div>
            <div className="mzm-eyebrow">OUR RISK-FREE GUARANTEE</div>
            <h3 className="guarantee-title">5+ Hours/Week Returned Guarantee</h3>
            <p className="guarantee-body">
              If our $499 Assessment does not uncover at least 5 hours per week of recoverable labor per employee in your business, we will refund 100% of your fee immediately. No fine print.
            </p>
          </div>
          <a
            href="https://cal.com/mad-ez-media/ai-automation-discovery"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-primary"
          >
            Claim Your Assessment →
          </a>
        </div>
      </div>
    </main>
  );
}

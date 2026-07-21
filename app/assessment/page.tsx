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
    tag: 'INBOUND LEAD LOSS',
    pain: '"You miss the call, they call the next guy."',
    trigger: 'Inbound lead submits contact form or calls outside regular business hours (5pm–9am).',
    action: 'Autonomous AI voice/SMS agent qualifies the lead, answers intake questions, and books calendar in under 60 seconds.',
  },
  {
    num: 'LEAK 02',
    tag: 'BACK-OFFICE SLAVERY',
    pain: '"It\'s 9pm and you\'re still doing invoices."',
    trigger: 'Unmatched receipts, vendor PDFs, or repetitive manual line-item entry into accounting software.',
    action: 'Automated OCR & ledger pipeline parses line items, cross-references POs, and posts to Xero/QuickBooks with zero manual typing.',
  },
  {
    num: 'LEAK 03',
    tag: 'CONTEXT SWAPPING FRICTION',
    pain: '"Copy-pasting context between 10 browser tabs all day."',
    trigger: 'Updating client CRM state, project status, and internal comms across fragmented web tools.',
    action: 'Shared ACMI state relay synchronizes context across tools automatically, preserving active task memory.',
  },
  {
    num: 'LEAK 04',
    tag: 'PROMPT GUESSWORK BOTTLENECKS',
    pain: '"Your team spent 3 hours writing an email you didn\'t ask for."',
    trigger: 'Vague instructions fed to raw ChatGPT windows without stored brand guidelines or structured output constraints.',
    action: 'Pre-tuned agent skills enforce brand voice, client tone, and structured deliverables in seconds.',
  },
  {
    num: 'LEAK 05',
    tag: 'LIVE CLIENT HALLUCINATIONS',
    pain: '"ChatGPT hallucinated customer data on a live pitch call."',
    trigger: 'Relying on ephemeral web chats with zero internal ground-truth data or enterprise access controls.',
    action: 'Dedicated single-tenant vector retrieval anchors every response strictly to verified internal knowledge bases.',
  },
  {
    num: 'LEAK 06',
    tag: 'UNUSED SAAS SEAT SPRAWL',
    pain: '"Paying $30/mo per head for 5 separate AI subscriptions nobody uses."',
    trigger: 'Fragmented AI tool purchases by team members without central workflow orchestration.',
    action: 'Consolidated autonomous fleet infrastructure providing single-tenant control and zero subscription bloat.',
  },
  {
    num: 'LEAK 07',
    tag: 'ONBOARDING DELAYS',
    pain: '"Manual client onboarding taking 4 days instead of 4 minutes."',
    trigger: 'New client signs contract or completes checkout payment.',
    action: 'Automated sequence provisions shared drives, dispatches welcome collateral, and schedules kickoff calls instantly.',
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
          Stop Buying AI That Forgets Your Business{' '}
          <span className="em">Every Time You Close The Tab.</span>
        </h1>
        <p className="hero-deck">
          Most AI implementations fail because generic tools lack persistent operational memory. Our 90-Minute White-Glove Audit pinpoints your exact workflow leaks and maps your custom ACMI fleet path.
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
            The 7 Hidden Leaks <span className="em">Draining Your Billable Hours.</span>
          </h2>
          <p className="section-sub">
            Pain-first trigger-action diagnostics. We audit these 7 friction points in your current operations to recover waste.
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
                  <span className="pair-lbl trigger">Trigger (Current Friction)</span>
                  <p className="pair-txt">{leak.trigger}</p>
                </div>
                <div className="pair-item">
                  <span className="pair-lbl action">Action (Automated Fleet Fix)</span>
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
            Approved Pricing Ladder <span className="em">For Modern Operations.</span>
          </h2>
          <p className="section-sub">
            Start with a free consult, validate with a 90-minute audit, or scale immediately with a private ACMI agent fleet.
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
                Brief exploratory call with our team to evaluate your tool stack and identify low-hanging AI leverage points.
              </p>
              <ul className="features-list">
                <li>Initial workflow fit assessment</li>
                <li>Tool stack review</li>
                <li>High-level AI opportunity roadmap</li>
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
                Deep-dive diagnostic session mapping your top 7 operational leaks, data structures, and custom fleet roadmap.
              </p>
              <ul className="features-list">
                <li>90-minute live deep-dive session</li>
                <li>7 Leaks Audit &amp; Bottleneck Report</li>
                <li>Custom ACMI Fleet Architecture Blueprint</li>
                <li>Backed by 5+ hr/wk returned guarantee</li>
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
              <h3>Private ACMI Fleet Deployment</h3>
              <div className="price-amount">$4,500</div>
              <div className="price-sub">Setup &amp; deployment · Private infrastructure</div>
              <p className="price-desc">
                Production-grade deployment of dedicated autonomous agents with persistent memory and background execution.
              </p>
              <ul className="features-list">
                <li>Dedicated Client Redis Instance (zero cross-bleed)</li>
                <li>2 Pre-configured Hermes Autonomous Agents</li>
                <li>Background cron workers &amp; triggers</li>
                <li>Full ACMI state memory relay integration</li>
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
            Download Executive <span className="em">Audit Collateral.</span>
          </h2>
          <p className="section-sub">
            Review our complete audit methodology, report structure, and printable sell sheets before your discovery session.
          </p>
        </div>

        <div className="downloads-grid">
          <div className="download-card">
            <div className="card-top">
              <span className="download-type">PRINT &amp; PDF READY</span>
              <h3>Executive Sell Sheet</h3>
              <p className="download-desc">
                Printable 1-page executive overview detailing the 7 operational leaks, audit timeline, and 5+ hr/wk returned guarantee.
              </p>
            </div>
            <a
              href="/downloads/ai-tools-assessment-sell-sheet.html"
              target="_blank"
              rel="noopener noreferrer"
              className="download-cta-btn primary"
            >
              Download Executive Sell Sheet (PDF/Print) →
            </a>
          </div>

          <div className="download-card">
            <div className="card-top">
              <span className="download-type">MARKDOWN TEMPLATE</span>
              <h3>6-Page Kami Audit Template</h3>
              <p className="download-desc">
                Our raw 6-page Kami-typeset audit report template used during live client diagnostic sessions.
              </p>
            </div>
            <a
              href="/downloads/kami-assessment-report-template.md"
              target="_blank"
              rel="noopener noreferrer"
              className="download-cta-btn secondary"
            >
              Download 6-Page Kami Audit Template (.md) →
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

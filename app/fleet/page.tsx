import type { Metadata } from 'next';
import './fleet.css';

export const metadata: Metadata = {
  title: 'Your Own AI Agents, Built and Running for Your Business | madezmedia',
  description:
    "The difference isn't the AI. It's the memory. We build and deploy your own private AI agents — answering calls, quoting jobs, and following up, permanently.",
  openGraph: {
    title: 'Your Own AI Agents, Built and Running for Your Business — madezmedia',
    description:
      "The difference isn't the AI. It's the memory. Your own private system, never shared with another client.",
    url: 'https://www.madezmedia.com/fleet',
    siteName: 'madezmedia',
    type: 'website',
  },
  alternates: { canonical: '/fleet' },
};

const LADDER_STEPS = [
  {
    level: 'LEVEL 1',
    title: 'A Chatbot',
    desc: 'A regular ChatGPT or Claude tab, open in a browser.',
    boxLabel: 'THE PROBLEM',
    boxText: 'Forgets everything the moment you close the tab. Can\'t take action — it can only talk.',
    highlight: false,
  },
  {
    level: 'LEVEL 2',
    title: 'A Single-Task Bot',
    desc: 'A basic automation — a Zapier-style bot that does one scripted thing.',
    boxLabel: 'THE PROBLEM',
    boxText: 'Handles one step fine, but breaks the moment something unexpected happens.',
    highlight: false,
  },
  {
    level: 'LEVEL 3',
    title: 'An AI Employee',
    desc: 'A dedicated assistant handling one part of the business — just scheduling, say.',
    boxLabel: 'THE PROBLEM',
    boxText: 'Good at its one job, but can\'t hand off to or coordinate with anything else.',
    highlight: false,
  },
  {
    level: 'LEVEL 4',
    title: 'Your Own Agent Fleet',
    desc: 'A small team of AI agents that share memory and coordinate with each other.',
    boxLabel: 'WHAT YOU GET',
    boxText: 'Your own private system, running 24/7, that remembers every call, quote, and customer.',
    highlight: true,
  },
];

const HARD_RULES = [
  {
    code: 'GUARANTEE 01',
    title: 'Your Own Private System',
    body: 'Your agents run on your own private memory, not a shared server. Nothing about your business, your customers, or your data is ever mixed with another client\'s.',
  },
  {
    code: 'GUARANTEE 02',
    title: 'Nothing Shared, Nothing Pooled',
    body: 'The tools and integrations your agents use run in their own isolated environment. No shared logins, no shared infrastructure, no cross-over between clients.',
  },
  {
    code: 'GUARANTEE 03',
    title: 'You Own Everything',
    body: 'Every key, every record, every decision your agents make is fully yours and fully visible to you — nothing is locked behind us if you ever want to leave.',
  },
];

export default function FleetPage() {
  return (
    <main className="fleet-page">
      {/* Hero Section */}
      <section className="fleet-hero">
        <div className="mzm-eyebrow">
          <span className="num">N° 01</span>YOUR OWN AGENT FLEET
        </div>
        <h1>
          Your Own AI Agents, <span className="em">Built and Running for You.</span>
        </h1>
        <div className="fleet-tagline">
          The difference isn&apos;t the AI. It&apos;s the memory.
        </div>
        <p className="hero-deck">
          Generic chatbots forget your business the moment you close the tab. We build and
          deploy your own private agents — answering calls, quoting jobs, and following up,
          permanently, on a system that&apos;s never shared with another client.
        </p>
        <div className="hero-ctas">
          <a
            href="https://cal.com/mad-ez-media/ai-automation-discovery"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-primary"
          >
            Talk to Us About Your Fleet →
          </a>
        </div>
      </section>

      {/* Chatbot vs Fleet Framing Ladder */}
      <section className="ladder-section">
        <div className="section-head">
          <div className="mzm-eyebrow">
            <span className="num">N° 02</span>THE INTELLIGENCE LADDER
          </div>
          <h2>
            From a Chatbot to <span className="em">Your Own Fleet.</span>
          </h2>
          <p className="section-sub">
            Most businesses are stuck at Level 1 — a chat window that forgets everything. Here&apos;s
            what the other three levels actually look like.
          </p>
        </div>

        <div className="ladder-grid">
          {LADDER_STEPS.map((step) => (
            <div
              key={step.level}
              className={`ladder-card ${step.highlight ? 'highlight' : ''}`}
            >
              <div className="ladder-level">{step.level}</div>
              <h3>{step.title}</h3>
              <p className="ladder-desc">{step.desc}</p>
              <div className="ladder-box">
                <span className="ladder-box-lbl">{step.boxLabel}</span>
                <p className="ladder-box-txt">{step.boxText}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Hard Rule Security & Architecture Copy */}
      <section className="hardrule-section">
        <div className="section-head">
          <div className="mzm-eyebrow">
            <span className="num">N° 03</span>OUR GUARANTEE TO YOU
          </div>
          <h2>
            Your System. <span className="em">Never Shared, Never Locked In.</span>
          </h2>
          <p className="section-sub">
            Three non-negotiables. Your business data and everything your agents know stays
            100% yours, always.
          </p>
        </div>

        <div className="hardrule-grid">
          {HARD_RULES.map((rule) => (
            <div key={rule.code} className="hardrule-card">
              <div className="rule-code">{rule.code}</div>
              <h3>{rule.title}</h3>
              <p>{rule.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Fleet Pricing Tiers */}
      <section className="fleet-pricing-section">
        <div className="section-head">
          <div className="mzm-eyebrow">
            <span className="num">N° 04</span>PRICING
          </div>
          <h2>
            Built Once, <span className="em">Run Every Day.</span>
          </h2>
          <p className="section-sub">
            A one-time build to get your agents live, with an optional monthly plan if you want
            us keeping an eye on it after.
          </p>
        </div>

        <div className="fleet-pricing-grid">
          {/* Private Fleet Deployment */}
          <div className="fleet-price-card featured">
            <div>
              <div className="tier-badge">FLEET DEPLOYMENT</div>
              <h3>Private Fleet Deployment</h3>
              <div className="price-val">$4,500</div>
              <div className="price-period">One-time setup, live and running</div>
              <p className="tier-desc">
                We build and deploy your own agents, live, with everything they need to run your
                business day to day.
              </p>
              <ul className="fleet-features">
                <li>Your own private system — never shared with another client</li>
                <li>Two agents configured and running for your business</li>
                <li>Runs automatically in the background, all day</li>
                <li>Remembers every call, quote, and customer, permanently</li>
                <li>A real hand-off with plain-English documentation</li>
              </ul>
            </div>
            <a
              href="https://cal.com/mad-ez-media/ai-automation-discovery"
              target="_blank"
              rel="noopener noreferrer"
              className="fleet-cta-btn primary"
            >
              Schedule Deployment Discovery →
            </a>
          </div>

          {/* Managed Fleet Retainer */}
          <div className="fleet-price-card">
            <div>
              <div className="tier-badge">OPTIONAL, ONGOING</div>
              <h3>Managed Fleet Retainer</h3>
              <div className="price-val">$2,500</div>
              <div className="price-period">/ month, cancel anytime</div>
              <p className="tier-desc">
                We keep watching it after launch — checking uptime, tuning what your agents say,
                and adding new capabilities as your business grows.
              </p>
              <ul className="fleet-features">
                <li>24/7 uptime monitoring, fixed before you notice</li>
                <li>Monthly tune-ups on what your agents say and do</li>
                <li>Room to grow — no artificial usage caps</li>
                <li>New integrations added as you need them</li>
                <li>A direct line to us, not a support ticket queue</li>
              </ul>
            </div>
            <a
              href="https://cal.com/mad-ez-media/ai-automation-discovery"
              target="_blank"
              rel="noopener noreferrer"
              className="fleet-cta-btn secondary"
            >
              Deploy &amp; Retain Fleet →
            </a>
          </div>
        </div>
      </section>

      {/* Download Collateral Section */}
      <section className="downloads-section">
        <div className="section-head">
          <div className="mzm-eyebrow">
            <span className="num">N° 05</span>SEE IT IN WRITING
          </div>
          <h2>
            Read Through It <span className="em">Before You Call.</span>
          </h2>
          <p className="section-sub">
            A couple of one-pagers you can read on your own time, or forward to whoever else
            needs to sign off.
          </p>
        </div>

        <div className="downloads-grid">
          <div className="download-card">
            <div className="card-top">
              <span className="download-type">PRINT &amp; PDF READY</span>
              <h3>Fleet Deployment One-Pager</h3>
              <p className="download-desc">
                A plain-English summary of what gets built, how long it takes, and what you own
                at the end of it.
              </p>
            </div>
            <a
              href="/downloads/acmi-fleet-one-pager.html"
              target="_blank"
              rel="noopener noreferrer"
              className="download-cta-btn primary"
            >
              Download the One-Pager (PDF) →
            </a>
          </div>

          <div className="download-card">
            <div className="card-top">
              <span className="download-type">COMPARISON SHEET</span>
              <h3>Chatbot vs. Fleet</h3>
              <p className="download-desc">
                A side-by-side look at what a free chatbot actually does versus what your own
                agent fleet does.
              </p>
            </div>
            <a
              href="/downloads/chatbot-vs-fleet-sell-sheet.html"
              target="_blank"
              rel="noopener noreferrer"
              className="download-cta-btn secondary"
            >
              Download the Comparison (PDF) →
            </a>
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <div className="fleet-cta-banner">
        <div className="fleet-banner-inner">
          <div>
            <div className="mzm-eyebrow" style={{ color: 'var(--process-cyan)' }}>GET STARTED</div>
            <h2>Ready for Your <span className="em">Own Agent Fleet?</span></h2>
          </div>
          <a
            href="https://cal.com/mad-ez-media/ai-automation-discovery"
            target="_blank"
            rel="noopener noreferrer"
            className="banner-cta-btn"
          >
            Schedule Discovery Call →
          </a>
        </div>
      </div>
    </main>
  );
}

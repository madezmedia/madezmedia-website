import type { Metadata } from 'next';
import './fleet.css';

export const metadata: Metadata = {
  title: 'Deploy Your Private ACMI Autonomous Agent Fleet | madezmedia',
  description:
    "The difference isn't the AI. It's the memory. Deploy single-tenant autonomous agent fleets powered by private Redis memory instances, Hermes agents, and background crons.",
  openGraph: {
    title: 'Deploy Your Private ACMI Autonomous Agent Fleet — madezmedia',
    description:
      "The difference isn't the AI. It's the memory. Dedicated client Redis instances with zero shared servers and zero cross-client bleed.",
    url: 'https://www.madezmedia.com/fleet',
    siteName: 'madezmedia',
    type: 'website',
  },
  alternates: { canonical: '/fleet' },
};

const LADDER_STEPS = [
  {
    level: 'LEVEL 1',
    title: 'Ephemeral Chatbot',
    desc: 'Standard web browser chat window (e.g. raw ChatGPT or Claude tabs).',
    boxLabel: 'LIMITATIONS',
    boxText: 'Resets every session. Forgets client context. Zero background execution or tool actions.',
    highlight: false,
  },
  {
    level: 'LEVEL 2',
    title: 'Single-Task AI Agent',
    desc: 'Scripted single-action bot or basic Zapier/Make automation route.',
    boxLabel: 'LIMITATIONS',
    boxText: 'Linear execution only. Lacks multi-step state memory. Breaks on unexpected edge cases.',
    highlight: false,
  },
  {
    level: 'LEVEL 3',
    title: 'AI Employee',
    desc: 'Role-bound virtual assistant managing single departmental workflows.',
    boxLabel: 'LIMITATIONS',
    boxText: 'Isolated domain memory. Cannot hand off tasks or coordinate with other operational agents.',
    highlight: false,
  },
  {
    level: 'LEVEL 4',
    title: 'ACMI Autonomous Agent Fleet',
    desc: 'Orchestrated multi-agent swarm connected via shared ACMI memory relay protocol.',
    boxLabel: 'CAPABILITIES',
    boxText: 'Dedicated single-tenant Redis instance, continuous background crons, 24/7 autonomous execution.',
    highlight: true,
  },
];

const HARD_RULES = [
  {
    code: 'HARD RULE 01',
    title: 'Dedicated Client Redis Instance',
    body: 'Every client fleet operates on a private, single-tenant Redis memory database. Your memory timeline, signals, and prompt context are physically segregated from all other client tenants.',
  },
  {
    code: 'HARD RULE 02',
    title: 'Zero Shared MCP Servers',
    body: 'Tool integration servers, API harnesses, and agent tools run in isolated execution sandboxes. Zero shared MCP state, zero pooled credentials, and zero cross-client memory leakage.',
  },
  {
    code: 'HARD RULE 03',
    title: 'Client-Owned Keys & Memory Logs',
    body: 'You maintain absolute ownership over your cryptographic keys, state indexes, and event logs. Full enterprise auditability across every agent decision and execution payload.',
  },
];

export default function FleetPage() {
  return (
    <main className="fleet-page">
      {/* Hero Section */}
      <section className="fleet-hero">
        <div className="mzm-eyebrow">
          <span className="num">N° 01</span>AUTONOMOUS INFRASTRUCTURE
        </div>
        <h1>
          Deploy Your Private ACMI <span className="em">Autonomous Agent Fleet.</span>
        </h1>
        <div className="fleet-tagline">
          The difference isn&apos;t the AI. It&apos;s the memory.
        </div>
        <p className="hero-deck">
          Generic web chatbots forget your business the moment you close the tab. We deploy single-tenant, private ACMI agent fleets with persistent memory, background cron processing, and dedicated Redis instances that stay synchronized 24/7.
        </p>
        <div className="hero-ctas">
          <a
            href="https://cal.com/mad-ez-media/ai-automation-discovery"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-primary"
          >
            Deploy Your Fleet →
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
            From Ephemeral Chatbots to <span className="em">Autonomous Swarms.</span>
          </h2>
          <p className="section-sub">
            The four evolutionary levels of enterprise AI adoption. Most companies are stuck at Level 1—we build and operate Level 4 fleets.
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
            <span className="num">N° 03</span>ENTERPRISE ARCHITECTURE GUARANTEE
          </div>
          <h2>
            Dedicated Client Redis Instance. <span className="em">Zero Cross-Client Bleed.</span>
          </h2>
          <p className="section-sub">
            Our non-negotiable security standard guarantees your business data, operational memory, and agent prompts remain 100% single-tenant.
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
            <span className="num">N° 04</span>FLEET DEPLOYMENT PRICING
          </div>
          <h2>
            Turnkey Deployment &amp; <span className="em">Managed Operations.</span>
          </h2>
          <p className="section-sub">
            Production-grade private agent fleet setup paired with ongoing optimization and management options.
          </p>
        </div>

        <div className="fleet-pricing-grid">
          {/* Private Fleet Deployment */}
          <div className="fleet-price-card featured">
            <div>
              <div className="tier-badge">DEPLOYMENT PACKAGE</div>
              <h3>Private Fleet Deployment</h3>
              <div className="price-val">$4,500</div>
              <div className="price-period">One-time setup &amp; production deployment</div>
              <p className="tier-desc">
                Complete engineering setup and deployment of your private ACMI agent fleet with single-tenant memory and background execution workers.
              </p>
              <ul className="fleet-features">
                <li>Dedicated Client Redis Instance (zero cross-bleed guarantee)</li>
                <li>2 Pre-tuned Hermes Autonomous Agents</li>
                <li>Background cron workers &amp; scheduled task automation</li>
                <li>ACMI State Relay protocol integration</li>
                <li>Production hand-off &amp; operational documentation</li>
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
              <div className="tier-badge">MANAGED OPERATIONS</div>
              <h3>Managed Fleet Retainer</h3>
              <div className="price-val">$2,500</div>
              <div className="price-period">/ month (Optional Ongoing Maintenance)</div>
              <p className="tier-desc">
                Continuous engineering supervision, prompt tuning, uptime monitoring, and ongoing agent capability expansions.
              </p>
              <ul className="fleet-features">
                <li>24/7 uptime monitoring &amp; error auto-healing</li>
                <li>Monthly agent skill optimization &amp; prompt updates</li>
                <li>Unlimited Redis memory scaling &amp; log audits</li>
                <li>New tool harness integrations &amp; workflow updates</li>
                <li>Dedicated priority engineering communication channel</li>
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
            <span className="num">N° 05</span>DOWNLOADABLE COLLATERAL &amp; SPECS
          </div>
          <h2>
            Download Fleet <span className="em">One-Pagers &amp; Specs.</span>
          </h2>
          <p className="section-sub">
            Printable architectural one-pagers, framing ladders, and enterprise security guarantees for your team.
          </p>
        </div>

        <div className="downloads-grid">
          <div className="download-card">
            <div className="card-top">
              <span className="download-type">PRINT &amp; PDF READY</span>
              <h3>ACMI Fleet One-Pager</h3>
              <p className="download-desc">
                Executive architectural summary of single-tenant ACMI fleet infrastructure, Hermes agents, and background cron workers.
              </p>
            </div>
            <a
              href="/downloads/acmi-fleet-one-pager.html"
              target="_blank"
              rel="noopener noreferrer"
              className="download-cta-btn primary"
            >
              Download ACMI Fleet One-Pager (PDF/Print) →
            </a>
          </div>

          <div className="download-card">
            <div className="card-top">
              <span className="download-type">COMPARISON SHEET</span>
              <h3>Chatbot vs Fleet Comparison</h3>
              <p className="download-desc">
                Detailed comparison breakdown comparing ephemeral ChatGPT tabs vs. Level 4 autonomous ACMI agent swarms.
              </p>
            </div>
            <a
              href="/downloads/chatbot-vs-fleet-sell-sheet.html"
              target="_blank"
              rel="noopener noreferrer"
              className="download-cta-btn secondary"
            >
              Download Chatbot vs Fleet Comparison Sheet →
            </a>
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <div className="fleet-cta-banner">
        <div className="fleet-banner-inner">
          <div>
            <div className="mzm-eyebrow" style={{ color: 'var(--process-cyan)' }}>GET STARTED</div>
            <h2>Ready to Deploy Your <span className="em">Autonomous Fleet?</span></h2>
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

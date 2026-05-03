import type { Metadata } from 'next';
import Link from 'next/link';
import './page.css';
import { BentleyChat } from './_BentleyChat';
import { getDuaneAvailability } from '@/lib/availability';

export const metadata: Metadata = {
  title: 'Bentley — talk to the studio',
  description:
    'Three ways to start: chat with Bentley (our AI sales agent), voice (launching), or book Duane (human CHEO, live availability). Twenty minutes, no decks.',
  openGraph: {
    title: 'Bentley — talk to the studio',
    description: 'Three ways to start. Pick the one that fits how you think.',
    type: 'website',
    url: 'https://www.madezmedia.com/bentley',
    siteName: 'madezmedia',
  },
  alternates: { canonical: '/bentley' },
};

export const dynamic = 'force-dynamic'; // re-render so Duane availability is fresh per request

export default function BentleyPage() {
  const duane = getDuaneAvailability();

  return (
    <div className="bentley-page">
      <nav className="top">
        <div className="inner">
          <Link href="/" className="wordmark">made<span className="pivot">z</span>media</Link>
          <div className="links">
            <Link href="/#approach">Approach</Link>
            <Link href="/#lab">Lab</Link>
            <Link href="/#work">Work</Link>
            <Link href="/acmi">ACMI</Link>
            <Link href="/blog">Notes</Link>
            <Link href="/system">System</Link>
          </div>
          <Link href="/bentley" className="nav-cta">Talk to Bentley</Link>
        </div>
      </nav>

      <section className="bentley-hero">
        <div className="mzm-eyebrow"><span className="num">N° 05</span>Talk to the studio</div>
        <h1>Three ways <span className="em">to start.</span></h1>
        <p className="deck">
          Chat with our AI sales agent. Voice when you&apos;d rather talk. Or book Duane (real
          human, real calendar). <em>Twenty minutes, no decks.</em>
        </p>
      </section>

      <div className="touchpoints">
        <a className="touchpoint" href="#chat-with-bentley">
          <div className="badge live">Live now</div>
          <h3>Chat with Bentley</h3>
          <p>
            Our AI sales agent. Ask anything — what we ship, how we work, if we&apos;re a fit.
            Bentley remembers the conversation across visits.
          </p>
          <span className="meta">Agent · 24/7 · running on ACMI</span>
        </a>

        <a className="touchpoint" href="https://cal.com/duane-madezmedia" target="_blank" rel="noopener noreferrer">
          <div className={`badge ${duane.class}`}>{duane.label}</div>
          <h3>Book Duane</h3>
          <p>
            Chief Human Execution Officer. Real human, real calendar. Twenty minutes,
            no decks — if we&apos;re not a fit he&apos;ll tell you who is.
          </p>
          <span className="meta">Human · cal.com</span>
        </a>

        <a className="touchpoint" href="mailto:duane@madezmedia.com?subject=Bentley%20voice%20agent%20interest">
          <div className="badge beta">Voice · launching this week</div>
          <h3>Voice with Bentley</h3>
          <p>
            Same agent, voice-first. Call it like a phone call. Currently in private beta
            with our existing clients — drop your number and we&apos;ll wave you in.
          </p>
          <span className="meta">Agent · voice-first · Vapi</span>
        </a>
      </div>

      <section className="chat-section" id="chat-with-bentley">
        <div className="mzm-eyebrow"><span className="num">N° 01</span>Live chat</div>
        <h2>Bentley is <span className="em">listening.</span></h2>
        <p className="lede">
          Type below. Bentley reads, remembers, and responds in his own voice. He&apos;ll book
          you with Duane when it&apos;s time, or tell you we&apos;re not the right shop.
        </p>
        <BentleyChat />
      </section>

      <footer className="site-foot">
        <div className="inner">
          <div className="left">
            <strong>madezmedia</strong> · Mad EZ Media &amp; Technology Partners · NC · © 2026
          </div>
          <div className="links">
            <a href="https://github.com/madezmedia">github</a>
            <a href="https://npmjs.com/~madezmedia">npm</a>
            <Link href="/acmi">ACMI</Link>
            <Link href="/blog">notes</Link>
            <Link href="/system">system</Link>
            <Link href="/">home</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

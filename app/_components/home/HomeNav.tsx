import Link from 'next/link';

export function HomeNav() {
  return (
    <nav className="home-nav">
      <div className="home-nav__inner">
        <Link href="/" className="home-nav__wordmark">
          made<span className="home-nav__pivot">z</span>media
        </Link>
        <div className="home-nav__links">
          <Link href="/#approach">Approach</Link>
          <Link href="/#lab">Lab</Link>
          <Link href="/voice-ai">Voice AI</Link>
          <Link href="/#work">Work</Link>
          <Link href="/acmi">ACMI</Link>
          <Link href="/blog">Notes</Link>
          <Link href="/system">System</Link>
        </div>
        <Link href="/#contact" className="home-nav__cta">Talk to Bentley</Link>
      </div>
    </nav>
  );
}

import Link from 'next/link';
import { ReactNode } from 'react';

export function BlogNav() {
  return (
    <nav className="top">
      <div className="inner">
        <Link href="/" className="wordmark">
          made<span className="pivot">z</span>media
        </Link>
        <div className="links">
          <Link href="/#approach">Approach</Link>
          <Link href="/#lab">Lab</Link>
          <Link href="/#work">Work</Link>
          <Link href="/acmi">ACMI</Link>
          <Link href="/blog" className="is-active">Notes</Link>
          <Link href="/system">System</Link>
        </div>
        <Link href="/#contact" className="nav-cta">Talk to Bentley</Link>
      </div>
    </nav>
  );
}

export function BlogFooter() {
  return (
    <footer className="site-foot">
      <div className="inner">
        <div className="left">
          <strong>madezmedia</strong> · Mad EZ Media &amp; Technology Partners · NC · © 2026
        </div>
        <div className="links">
          <a href="https://github.com/madezmedia">github</a>
          <a href="https://npmjs.com/~madezmedia">npm</a>
          <Link href="/acmi">ACMI</Link>
          <Link href="/system">system</Link>
          <Link href="/">home</Link>
        </div>
      </div>
    </footer>
  );
}

export function BlogShell({ children }: { children: ReactNode }) {
  return <div className="blog-page">{children}</div>;
}

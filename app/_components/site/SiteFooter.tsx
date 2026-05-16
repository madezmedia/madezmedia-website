import Link from 'next/link';

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__left">
          <strong>madezmedia</strong> · Mad EZ Media &amp; Technology Partners · NC · © 2026
        </div>
        <div className="site-footer__links">
          <a href="https://github.com/madezmedia">github</a>
          <a href="https://npmjs.com/~madezmedia">npm</a>
          <a href="https://x.com/madezmedia">x</a>
          <Link href="/system">system</Link>
        </div>
      </div>
    </footer>
  );
}

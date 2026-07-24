'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function SiteFooter() {
  const pathname = usePathname();
  if (pathname?.startsWith('/dashboard')) return null;
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__left">
          <strong>madezmedia</strong> · Mad EZ Media &amp; Technology Partners · NC · © 2026
        </div>
        <div className="site-footer__links">
          <Link href="/assessment">assessment</Link>
          <Link href="/fleet">fleet</Link>
          <Link href="/voice-ai">voice ai</Link>
          <Link href="/acmi">acmi</Link>
          <Link href="/blog">notes</Link>
          <Link href="/starter-kit">ai kit</Link>
          <Link href="/system">system</Link>
          <a href="https://github.com/madezmedia">github</a>
          <a href="https://npmjs.com/~madezmedia">npm</a>
          <a href="https://x.com/madezmedia">x</a>
        </div>
      </div>
    </footer>
  );
}

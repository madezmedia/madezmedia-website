'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const LINKS = [
  { href: '/#approach', label: 'Approach' },
  { href: '/#lab', label: 'Lab' },
  { href: '/voice-ai', label: 'Voice AI' },
  { href: '/#work', label: 'Work' },
  { href: '/acmi', label: 'ACMI' },
  { href: '/blog', label: 'Notes' },
  { href: '/system', label: 'System' },
  { href: '/starter-kit', label: 'AI Kit' },
];

export function SiteHeader() {
  const pathname = usePathname();
  if (pathname?.startsWith('/dashboard')) return null;
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link href="/" className="site-header__brand" aria-label="Mad EZ Media — Home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/brand/logo-splatter.png"
            alt=""
            aria-hidden="true"
            className="site-header__logo"
          />
          <span className="site-header__wordmark">
            made<span className="site-header__pivot">z</span>media
          </span>
        </Link>
        <nav className="site-header__nav" aria-label="Primary">
          {LINKS.map((l) => (
            <Link key={l.href} href={l.href} className="site-header__link">
              {l.label}
            </Link>
          ))}
        </nav>
        <Link href="/bentley" className="site-header__cta">
          Talk to Bentley →
        </Link>
      </div>
    </header>
  );
}

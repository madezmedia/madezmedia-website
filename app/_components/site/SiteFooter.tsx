'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const LINK_GROUPS = [
  {
    heading: 'Product',
    links: [
      { href: '/assessment', label: 'AI Assessment' },
      { href: '/fleet', label: 'Agent Fleet' },
      { href: '/voice-ai', label: 'Voice AI' },
      { href: '/starter-kit', label: 'AI Kit' },
    ],
  },
  {
    heading: 'Studio',
    links: [
      { href: '/#founder', label: 'Founder' },
      { href: '/acmi', label: 'ACMI' },
      { href: '/blog', label: 'Notes' },
      { href: '/system', label: 'System' },
    ],
  },
  {
    heading: 'Elsewhere',
    links: [
      { href: 'https://github.com/madezmedia', label: 'GitHub' },
      { href: 'https://npmjs.com/~madezmedia', label: 'npm' },
      { href: 'https://x.com/madezmedia', label: 'X' },
    ],
  },
];

export function SiteFooter() {
  const pathname = usePathname();
  if (pathname?.startsWith('/dashboard')) return null;
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__brand">
          <strong>madezmedia</strong>
          <span>Mad EZ Media &amp; Technology Partners · Charlotte, NC · © 2026</span>
        </div>
        <nav className="site-footer__groups" aria-label="Footer">
          {LINK_GROUPS.map((group) => (
            <div key={group.heading} className="site-footer__group">
              <span className="site-footer__group-heading">{group.heading}</span>
              {group.links.map((l) =>
                l.href.startsWith('/') ? (
                  <Link key={l.href} href={l.href}>{l.label}</Link>
                ) : (
                  <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer">{l.label}</a>
                )
              )}
            </div>
          ))}
        </nav>
      </div>
    </footer>
  );
}

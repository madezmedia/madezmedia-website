'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export function HomeNav() {
  return (
    <nav className="home-nav">
      <div className="home-nav__inner">
        <Link href="/" className="home-nav__wordmark" aria-label="Mad EZ Media home">
          <Image
            src="/brand/logo-minimal-nav.jpg"
            alt="Mad EZ Media"
            width={160}
            height={40}
            className="home-nav__logo-img"
            priority
          />
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
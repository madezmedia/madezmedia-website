'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { slideDown } from '../ui/Animations';

export function HomeNav() {
  return (
    <nav className="home-nav">
      <motion.div
        className="home-nav__inner"
        initial="hidden"
        animate="visible"
        variants={slideDown}
      >
        <Link href="/" className="home-nav__wordmark" aria-label="Mad EZ Media home">
         <span className="home-nav__wordmark-madz">Mad EZ</span>
          <span className="home-nav__wordmark-slash">/</span>
          <span className="home-nav__wordmark-media">Media</span>
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
      </motion.div>
    </nav>
  );
}
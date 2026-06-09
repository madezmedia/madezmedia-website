'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { slideDown } from '../ui/Animations';

export function HomeFooter() {
  return (
    <footer className="home-foot">
      <motion.div
        className="home-foot__inner"
        initial="hidden"
        animate="visible"
        variants={slideDown}
      >
        <div className="home-foot__left">
          <Link href="/" className="home-foot__wordmark" aria-label="Mad EZ Media home">
            <span className="home-foot__wm-madz">Mad EZ</span>
            <span className="home-foot__wm-slash">/</span>
            <span className="home-foot__wm-media">Media</span>
          </Link>
          <span className="home-foot__sep"> · </span>
          <span className="home-foot__legal">Mad EZ Media &amp; Technology Partners · NC · © 2026</span>
        </div>
        <div className="home-foot__links">
          <a href="https://github.com/madezmedia">github</a>
          <a href="https://npmjs.com/~madezmedia">npm</a>
          <a href="#">discord</a>
          <a href="https://x.com/madezmedia">x</a>
          <Link href="/system">system</Link>
        </div>
      </motion.div>
    </footer>
  );
}
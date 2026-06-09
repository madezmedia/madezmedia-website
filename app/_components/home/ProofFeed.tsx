'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MilestoneFeed } from '../MilestoneFeed';
import { fadeUp, staggerContainer } from '../ui/Animations';

export function ProofFeed() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section ref={ref} className="home-proof home-section">
      <motion.div
        className="home-proof__inner"
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={staggerContainer}
      >
        <motion.div className="home-proof__head" variants={fadeUp}>
          <div className="home-proof__label-row">
            <span className="home-live-dot" />
            <span className="home-proof__label">Recently shipped</span>
            <span className="home-proof__meta">last 30 days · public artifacts only</span>
          </div>
          <div className="home-proof__meta">curated track record</div>
        </motion.div>

        <motion.div variants={fadeUp}>
          <MilestoneFeed />
        </motion.div>

        <motion.p className="home-proof__foot" variants={fadeUp}>
          Each entry links to the artifact.{' '}
          <a href="https://github.com/madezmedia/acmi">Open source on GitHub</a> ·{' '}
          <code className="home-proof__code">npm install @madezmedia/acmi</code>
        </motion.p>
      </motion.div>
    </section>
  );
}
'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { fadeUp } from '../ui/Animations';

export function Bridge() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="home-bridge home-section" id="bridge">
      <motion.div
        className="home-bridge__inner"
        ref={ref}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={fadeUp}
      >
        <span className="home-bridge__eyebrow">Here&apos;s the bridge</span>
        <p className="home-bridge__h2">
          What if the call got answered{' '}
          <em className="home-bridge__em">without you picking up the phone?</em>
        </p>
        <p className="home-bridge__deck">
          We build a small team of AI agents that answer, book, quote, and follow up — using
          the same hours, pricing, and history you already have. It doesn&apos;t replace you.
          It just never misses.
        </p>
      </motion.div>
    </section>
  );
}

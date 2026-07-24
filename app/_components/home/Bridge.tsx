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
        <p>
          The fix isn&apos;t a chief AI officer or a six-month roadmap. It&apos;s a small
          senior team that&apos;s already built this — in public, on retainer, on their own
          infrastructure — and can show you the system running instead of a slide describing
          it.
        </p>
      </motion.div>
    </section>
  );
}

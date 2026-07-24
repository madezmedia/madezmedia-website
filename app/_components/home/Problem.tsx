'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { fadeUp, staggerContainer } from '../ui/Animations';

export function Problem() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="home-problem home-section" id="problem">
      <motion.div
        className="home-problem__inner"
        ref={ref}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={staggerContainer}
      >
        <motion.div className="home-eyebrow home-problem__eyebrow" variants={fadeUp}>
          <span className="num">N° 01</span>Sound familiar?
        </motion.div>

        <motion.h2 className="home-problem__h2" variants={fadeUp} transition={{ duration: 0.5, delay: 0.1 }}>
          You&apos;re under a sink when the phone rings. It goes to voicemail.{' '}
          <em>They call the next guy.</em>
        </motion.h2>

        <motion.p variants={fadeUp} transition={{ duration: 0.5, delay: 0.2 }}>
          Multiply that by every missed call, every quote that goes out two days late,
          every happy customer who was never asked for a review. That&apos;s not bad luck —
          it&apos;s just what happens when one person is doing the job and the office work
          at the same time.
        </motion.p>
      </motion.div>
    </section>
  );
}

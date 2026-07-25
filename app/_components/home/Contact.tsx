'use client';

import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { fadeUp, staggerContainer } from '../ui/Animations';

export function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: '0px' });

  return (
    <section className="home-contact home-section" id="contact">
      <motion.div
        className="home-contact__card"
        ref={ref}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={staggerContainer}
      >
        <motion.h2
          className="home-contact__h2"
          variants={fadeUp}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Curious if this fits your business?{' '}
          <em className="home-contact__em-yellow">Just ask, or talk to us.</em>
        </motion.h2>

        <motion.p
          className="home-contact__deck"
          variants={fadeUp}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          A free 15-minute conversation, no pitch — we&apos;ll tell you honestly if it&apos;s
          a fit.
        </motion.p>

        <motion.div variants={fadeUp} transition={{ duration: 0.5, delay: 0.4 }}>
          <Link href="/bentley" className="home-contact__cta-primary">Talk to Bentley →</Link>
        </motion.div>
      </motion.div>
    </section>
  );
}

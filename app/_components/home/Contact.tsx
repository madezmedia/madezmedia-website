'use client';

import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { fadeUp, staggerContainer } from '../ui/Animations';

export function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="home-contact home-section" id="contact">
      <motion.div
        className="home-contact__card"
        ref={ref}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={staggerContainer}
      >
        <motion.div className="home-eyebrow home-contact__eyebrow" variants={fadeUp}>
          <span className="num">N° 05</span>Talk to Bentley
        </motion.div>

        <motion.h2
          className="home-contact__h2"
          variants={fadeUp}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          One conversation. <em>No decks.</em>
        </motion.h2>

        <motion.p
          className="home-contact__deck"
          variants={fadeUp}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          Ask Bentley what&apos;s possible. If it&apos;s a fit, he&apos;ll get you twenty
          minutes with Duane, our Chief Human Execution Officer. If it&apos;s not, he&apos;ll
          tell you that too.
        </motion.p>

        <motion.div variants={fadeUp} transition={{ duration: 0.5, delay: 0.4 }}>
          <Link href="/bentley" className="home-contact__cta-primary">Talk to Bentley →</Link>
        </motion.div>
      </motion.div>
    </section>
  );
}

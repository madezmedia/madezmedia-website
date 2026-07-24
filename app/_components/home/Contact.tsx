'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { fadeUp, staggerContainer } from '../ui/Animations';

export function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="home-contact home-section" id="contact">
      {/* CMYK kinetic logo as contact section background */}
      <div className="home-contact__bg" aria-hidden="true">
        <Image
          src="/brand/logo-kinetic-hero.jpg"
          alt=""
          fill
          className="home-contact__bg-img"
          sizes="60vw"
        />
        <div className="home-contact__bg-overlay" />
      </div>

      <div className="home-contact__inner" ref={ref}>
        <motion.div
          className="home-contact__eyebrow"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={fadeUp}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <span className="home-contact__num">N° 06</span>Talk to the studio
        </motion.div>

        <motion.h2
          className="home-contact__h2"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={fadeUp}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          One call. <em className="home-contact__em-gradient">No decks.</em>
        </motion.h2>

        <motion.p
          className="home-contact__p"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={fadeUp}
          transition={{ duration: 0.5, delay: 0.35 }}
        >
          Chat with our AI sales agent. Voice when you&apos;d rather talk. Or book Duane
          (real human, real calendar). Twenty minutes, no decks.
        </motion.p>

        <motion.div
          className="home-contact__actions"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={staggerContainer}
        >
          <motion.div variants={fadeUp} transition={{ duration: 0.5 }}>
            <Link href="/bentley" className="home-contact__cta-primary">Talk to Bentley →</Link>
          </motion.div>
          <motion.div variants={fadeUp} transition={{ duration: 0.5 }}>
            <Link href="/assessment" className="home-contact__cta-quiet">AI Assessment →</Link>
          </motion.div>
          <motion.div variants={fadeUp} transition={{ duration: 0.5 }}>
            <Link href="/fleet" className="home-contact__cta-quiet">Agent Fleet →</Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
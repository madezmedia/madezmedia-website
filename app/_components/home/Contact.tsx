'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section className="home-contact home-section" id="contact" ref={ref}>
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

      <div className="home-contact__inner">
        <motion.div
          className="home-contact__eyebrow"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <span className="home-contact__num">N° 05</span>Talk to the studio
        </motion.div>

        <motion.h2
          className="home-contact__h2"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Three ways <em className="home-contact__em-gradient">to start.</em>
        </motion.h2>

        <motion.p
          className="home-contact__p"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.35 }}
        >
          Chat with our AI sales agent. Voice when you&apos;d rather talk. Or book Duane
          (real human, real calendar). Twenty minutes, no decks.
        </motion.p>

        <motion.div
          className="home-contact__actions"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Link href="/bentley" className="home-contact__btn home-contact__btn--primary">Talk to Bentley →</Link>
          <a href="https://cal.com/duane-madezmedia" className="home-contact__btn home-contact__btn--quiet">or book Duane direct</a>
        </motion.div>
      </div>
    </section>
  );
}
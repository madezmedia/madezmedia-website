'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { heroStagger, fadeUp } from '../ui/Animations';

export function Hero() {
  const ref = useRef<HTMLElement>(null);

  /* ─── Parallax — hero image 15% slower than scroll ───────────── */
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);
  const blobY = useTransform(scrollYProgress, [0, 1], ['0%', '5%']);

  return (
    <section ref={ref} className="home-hero">
      {/* Hero image — kinetic logo, dark background */}
      <motion.div
        className="home-hero__image-wrap"
        aria-hidden="true"
        style={{ y: imageY }}
      >
        <Image
          src="/brand/logo-kinetic-hero.jpg"
          alt=""
          fill
          priority
          className="home-hero__bg-image"
          sizes="100vw"
        />
        <div className="home-hero__image-overlay" />
      </motion.div>

      {/* Decorative blobs — CMYK energy, parallax 5% */}
      <motion.div
        className="home-hero__blob home-hero__blob--cyan"
        aria-hidden="true"
        style={{ y: blobY }}
      />
      <motion.div
        className="home-hero__blob home-hero__blob--magenta"
        aria-hidden="true"
        style={{ y: blobY }}
      />

      <div className="home-hero__inner">
        {/* Staggered entrance — eyebrow → location → H1 → deck → CTAs */}
        <motion.div
          className="home-hero__meta"
          initial="hidden"
          animate="visible"
          variants={heroStagger}
        >
          <motion.div variants={fadeUp}>
            <div className="home-hero__eyebrow">
              <span className="home-hero__num">N° 01</span>The Studio
            </div>
          </motion.div>
          <motion.div variants={fadeUp} className="home-hero__where">
            Mad EZ Media &amp; Technology Partners{' '}
            <span className="home-hero__dot">·</span> Charlotte, NC{' '}
            <span className="home-hero__dot">·</span>{' '}
            <span className="home-hero__slot">Slot 2 of 3 open</span>
          </motion.div>
        </motion.div>

        <motion.h1
          className="home-hero__h1"
          initial="hidden"
          animate="visible"
          variants={heroStagger}
        >
          <motion.span variants={fadeUp} style={{ display: 'block' }}>
            We build{' '}
            <em className="home-hero__em-gradient">AI-native media</em>{' '}
            systems for companies whose audiences{' '}
          </motion.span>
          <motion.span variants={fadeUp} style={{ display: 'block' }}>
            <em className="home-hero__em-gradient">live online</em>.
          </motion.span>
        </motion.h1>

        <motion.p
          className="home-hero__deck"
          initial="hidden"
          animate="visible"
          variants={heroStagger}
        >
          Custom platforms, autonomous characters, sonic identities, and protocol-grade
          infrastructure — designed, built, and operated by a small senior team.
          We do not ship decks. We ship <strong>working systems</strong>.<sup>
            <a href="#fn-1">1</a>
          </sup>
        </motion.p>

        <motion.div
          className="home-hero__actions"
          initial="hidden"
          animate="visible"
          variants={heroStagger}
        >
          <motion.div variants={fadeUp}>
            <Link href="/#contact" className="home-hero__btn home-hero__btn--primary">
              Talk to Bentley →
            </Link>
          </motion.div>
          <motion.div variants={fadeUp}>
            <Link href="/assessment" className="home-hero__btn home-hero__btn--quiet">
              $499 AI Audit →
            </Link>
          </motion.div>
          <motion.div variants={fadeUp}>
            <Link href="/fleet" className="home-hero__btn home-hero__btn--quiet">
              $4,500 Fleet Deployment →
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
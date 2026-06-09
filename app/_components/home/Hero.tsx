'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';

const easeOut = [0.22, 1, 0.36, 1] as [number, number, number, number];

const stagger = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.14, duration: 0.7, ease: easeOut },
  }),
};

export function Hero() {
  return (
    <section className="home-hero">
      {/* Hero image — kinetic logo, dark background */}
      <div className="home-hero__image-wrap" aria-hidden="true">
        <Image
          src="/brand/logo-kinetic-hero.jpg"
          alt=""
          fill
          priority
          className="home-hero__bg-image"
          sizes="100vw"
        />
        <div className="home-hero__image-overlay" />
      </div>

      {/* Decorative blobs — CMYK energy */}
      <div className="home-hero__blob home-hero__blob--cyan" aria-hidden="true" />
      <div className="home-hero__blob home-hero__blob--magenta" aria-hidden="true" />

      <div className="home-hero__inner">
        <motion.div
          className="home-hero__meta"
          custom={0}
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          <div>
            <div className="home-hero__eyebrow">
              <span className="home-hero__num">N° 01</span>The Studio
            </div>
          </div>
          <div className="home-hero__where">
            Mad EZ Media &amp; Technology Partners <span className="home-hero__dot">·</span>{' '}
            Charlotte, NC <span className="home-hero__dot">·</span>{' '}
            <span className="home-hero__slot">Slot 2 of 3 open</span>
          </div>
        </motion.div>

        <motion.h1
          className="home-hero__h1"
          custom={1}
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          We build <em className="home-hero__em-gradient">AI-native media</em> systems for companies whose audiences{' '}
          <em className="home-hero__em-gradient">live online</em>.
        </motion.h1>

        <motion.p
          className="home-hero__deck"
          custom={2}
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          Custom platforms, autonomous characters, sonic identities, and protocol-grade
          infrastructure — designed, built, and operated by a small senior team.
          We do not ship decks. We ship <strong>working systems</strong>.<sup><a href="#fn-1">1</a></sup>
        </motion.p>

        <motion.div
          className="home-hero__actions"
          custom={3}
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          <Link href="/#contact" className="home-hero__btn home-hero__btn--primary">Talk to Bentley →</Link>
          <Link href="/#lab" className="home-hero__btn home-hero__btn--quiet">See the lab</Link>
        </motion.div>
      </div>
    </section>
  );
}
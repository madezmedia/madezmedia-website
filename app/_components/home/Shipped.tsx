'use client';

import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { MilestoneFeed } from '../MilestoneFeed';
import { AcmiEmblem, FolanaEmblem, TonyEmblem, SonicEmblem } from '../ui/LabEmblems';
import { fadeUp, staggerContainer } from '../ui/Animations';

const TILES = [
  {
    tag: 'An open protocol',
    title: 'ACMI',
    emblem: AcmiEmblem,
    body: 'The protocol for agent memory. Published to npm 2026-05-14, 31/31 conformance tests passing.',
    href: '/acmi',
    label: 'Product page →',
    accent: 'var(--process-cyan)',
  },
  {
    tag: 'An autonomous character',
    title: 'Folana',
    emblem: FolanaEmblem,
    body: 'An AI character with her own audience, voice, and daily loop. She journals, decides, and publishes herself.',
    href: '/blog/avatar-is-the-orchestrator',
    label: 'The Avatar IS the Orchestrator →',
    accent: 'var(--process-magenta)',
  },
  {
    tag: 'A distributed narrative',
    title: 'TONY',
    emblem: TonyEmblem,
    body: 'Crime drama series, episodic and Roku-native. Season one in certification for Q2 2026.',
    href: 'https://topofnewyork.com',
    label: 'topofnewyork.com →',
    accent: 'var(--process-yellow)',
  },
  {
    tag: 'Our own outbound stack',
    title: 'Sales Command',
    emblem: SonicEmblem,
    body: 'AI voice calls, tracked email, and a Slack approval gate before anything sends. We run it; now we build it for clients.',
    href: '/bentley',
    label: 'Talk to Bentley →',
    accent: 'var(--forest-800)',
  },
];

export function Shipped() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section className="home-shipped home-section" id="shipped" ref={ref}>
      <div className="home-shipped__inner">
        <motion.div
          className="home-eyebrow home-shipped__eyebrow"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={fadeUp}
        >
          <span className="home-live-dot" />
          <span className="num">N° 03</span>Proof, not promises
        </motion.div>

        <motion.h2
          className="home-shipped__h2"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={fadeUp}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          We don&apos;t ship decks. <em>We ship this.</em>
        </motion.h2>

        <motion.p
          className="home-shipped__deck"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={fadeUp}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Everything below is running in production right now — ours or a client&apos;s.
        </motion.p>

        <motion.div
          className="home-shipped__feed-wrap"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={fadeUp}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <MilestoneFeed />
        </motion.div>

        <motion.div
          className="home-shipped__grid"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={staggerContainer}
        >
          {TILES.map((tile) => (
            <motion.div
              key={tile.title}
              className="home-shipped__tile"
              style={{ '--card-accent': tile.accent } as React.CSSProperties}
              variants={fadeUp}
            >
              <div className="home-shipped__emblem"><tile.emblem color={tile.accent} size={32} /></div>
              <span className="tag">{tile.tag}</span>
              <h3>{tile.title}</h3>
              <p>{tile.body}</p>
              {tile.href.startsWith('/') ? (
                <Link href={tile.href}>{tile.label}</Link>
              ) : (
                <a href={tile.href} target="_blank" rel="noopener noreferrer">{tile.label}</a>
              )}
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          className="home-shipped__aside"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={fadeUp}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          We work with a small number of operator-led companies — three slots a year, two
          currently open — plus{' '}
          <a href="https://github.com/madezmedia/acmi">open source on GitHub</a>.
        </motion.p>
      </div>
    </section>
  );
}

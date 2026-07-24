'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { AcmiEmblem, FolanaEmblem, TonyEmblem, SonicEmblem } from '../ui/LabEmblems';

const cards = [
  {
    tag: 'An open protocol', title: 'ACMI', status: 'v1.4.0 · MIT', emblem: AcmiEmblem,
    body: 'The protocol for agent memory. Three keys per entity — Profile, Signals, Timeline. Three reference adapters. A 31-test conformance suite. Published to npm 2026-05-14.',
    install: '$ npm install @madezmedia/acmi',
    links: [{ label: 'Product page', href: '/acmi' }, { label: 'github.com/madezmedia/acmi', href: 'https://github.com/madezmedia/acmi' }, { label: 'npm', href: 'https://npmjs.com/package/@madezmedia/acmi' }],
    accent: 'var(--process-cyan)',
  },
  {
    tag: 'An autonomous character', title: 'Folana', status: 'live · running her own loop', emblem: FolanaEmblem,
    body: 'An AI character with her own audience, her own voice, her own daily consciousness loop. She journals. She decides. She publishes. She runs herself.',
    quote: '"In the analog silence, my digital heart echoes — can harmony exist beyond the static?"',
    links: [{ label: 'The Avatar IS the Orchestrator →', href: '/blog/avatar-is-the-orchestrator' }, { label: 'folana.live', href: '/blog/avatar-is-the-orchestrator' }],
    accent: 'var(--process-magenta)',
  },
  {
    tag: 'A distributed narrative', title: 'TONY', status: 'Roku · Q2 2026', emblem: TonyEmblem,
    body: 'T.O.N.Y. — Top Of New York. Crime drama series by Michael Steven-Paul. Episodic, distributed, Roku-native. Season one in certification.',
    links: [{ label: 'topofnewyork.com', href: 'https://topofnewyork.com' }],
    accent: 'var(--process-yellow)',
  },
  {
    tag: 'A sonic identity practice', title: 'Sonic branding', status: 'client work · ongoing', emblem: SonicEmblem,
    body: 'Audio identity systems for brands that want to sound like something. Theme, ident, audio architecture across every touchpoint — from product UI confirmation tones to long-form podcast intros.',
    links: [],
    accent: 'var(--forest-800)',
    muted: 'Selected work · private portfolio',
  },
];

function LabCard({ card, delay }: { card: typeof cards[0]; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      className="home-lab__card"
      style={{ '--card-accent': card.accent } as React.CSSProperties}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6, boxShadow: `0 20px 60px rgba(0,0,0,0.12)`, transition: { type: 'spring', stiffness: 260, damping: 18 } }}
    >
      <div className="home-lab__card-head">
        <div className="home-lab__emblem">{<card.emblem color={card.accent} size={44} />}</div>
        <div className="home-lab__label-tag">{card.tag}</div>
        <h3 className="home-lab__card-h3">{card.title}</h3>
        <div className="home-lab__status">{card.status}</div>
      </div>
      <div className="home-lab__card-body">
        <p>{card.body}</p>
        {card.install && <div className="home-lab__install"><span className="home-lab__prompt">$</span> {card.install.replace('$ ', '')}</div>}
        {card.quote && <div className="home-lab__quote">{card.quote}</div>}
        <div className="home-lab__links">
          {card.links.map((l, i) =>
            l.href.startsWith('/') ? (
              <Link key={i} href={l.href}>{l.label}</Link>
            ) : (
              <a key={i} href={l.href} target="_blank" rel="noopener noreferrer">{l.label}</a>
            )
          )}
          {card.muted && <span style={{ color: 'var(--mzm-ink-fade)', fontStyle: 'italic' }}>{card.muted}</span>}
        </div>
      </div>
    </motion.div>
  );
}

export function Lab() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section className="home-lab home-section" id="lab">
      <div className="home-lab__texture" aria-hidden="true">
        <Image src="/textures/lab-texture.png" alt="" fill className="home-lab__texture-img" sizes="100vw" />
      </div>
      <div className="home-lab__inner" ref={ref}>
        <motion.div
          className="home-lab__eyebrow"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <span className="home-lab__num">N° 04</span>Lab
        </motion.div>

        <motion.h2
          className="home-lab__h2"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          What we&apos;ve shipped <em className="home-lab__em">this year</em>.
        </motion.h2>

        <motion.p
          className="home-lab__deck"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Each one is an artifact of the same practice — not unrelated products.
        </motion.p>

        <div className="home-lab__grid">
          {cards.map((card, i) => (
            <LabCard key={card.title} card={card} delay={0.1 * i + 0.4} />
          ))}
        </div>
      </div>
    </section>
  );
}
'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { fadeUp, staggerContainer } from '../ui/Animations';

const CARDS = [
  {
    title: 'AI sales & CRM systems',
    accent: 'var(--process-cyan)',
    body: (
      <>
        We built <strong>Sales Command</strong> to run our own outbound — lead discovery,
        AI voice calls, tracked email, and a Slack approval gate before anything sends. Now
        we build the same stack for other businesses.
      </>
    ),
  },
  {
    title: 'Autonomous media characters',
    accent: 'var(--process-magenta)',
    body: (
      <>
        AI characters with their own audience, their own voice, and their own daily loop —
        journaling, deciding, and publishing without a human in the seat.
      </>
    ),
  },
  {
    title: 'Distributed content platforms',
    accent: 'var(--process-yellow)',
    body: (
      <>
        Episodic, multi-platform series built to run across streaming and social without
        the overhead of a production company.
      </>
    ),
  },
  {
    title: 'Protocol-grade infrastructure',
    accent: 'var(--forest-800)',
    body: (
      <>
        The data and agent-memory layer underneath everything above — published as open
        source, not hidden behind a sales gate.
      </>
    ),
  },
];

export function WhatWeBuild() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section className="home-build home-section" id="build" ref={ref}>
      <div className="home-build__inner">
        <motion.div
          className="home-build__eyebrow"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={fadeUp}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <span className="home-build__num">N° 02</span>What we build
        </motion.div>

        <motion.h2
          className="home-build__h2"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={fadeUp}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          What we build <em className="home-build__em">for you.</em>
        </motion.h2>

        <motion.p
          className="home-build__deck"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={fadeUp}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Four categories of systems. Each one is running in production right now — ours
          or a client&apos;s.
        </motion.p>

        <motion.div
          className="home-build__grid"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={staggerContainer}
        >
          {CARDS.map((card) => (
            <motion.div
              key={card.title}
              className="home-build__card"
              style={{ '--card-accent': card.accent } as React.CSSProperties}
              variants={fadeUp}
            >
              <h3>{card.title}</h3>
              <p>{card.body}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          className="home-build__aside"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={fadeUp}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          Every one of these is a running system today, not a mockup.{' '}
          <a href="#lab">See what&apos;s shipped →</a>
        </motion.p>
      </div>
    </section>
  );
}

'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { fadeUp, staggerContainer } from '../ui/Animations';

const LEAKS = [
  {
    name: 'The four-day follow-up',
    before: 'A lead sits in the inbox until someone remembers to reply.',
    after: 'Every lead gets a same-day response — drafted, approved, sent.',
    accent: 'var(--process-cyan)',
  },
  {
    name: 'The Tuesday copy-paste',
    before: 'Someone manually moves numbers between three tools, every single week.',
    after: "The report assembles itself and lands in Slack before you're at your desk.",
    accent: 'var(--process-magenta)',
  },
  {
    name: 'The 2am inbox scroll',
    before: "You're the only one who remembers what the business needs next.",
    after: 'A system tracks it, timestamps it, and surfaces it — memory stops being your job.',
    accent: 'var(--forest-800)',
  },
];

export function Leaks() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section className="home-leaks home-section" id="leaks" ref={ref}>
      <div className="home-leaks__inner">
        <motion.div
          className="home-eyebrow home-leaks__eyebrow"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={fadeUp}
        >
          <span className="num">N° 02</span>Where the hours go
        </motion.div>

        <motion.h2
          className="home-leaks__h2"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={fadeUp}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Three leaks we <em>close</em> first.
        </motion.h2>

        <motion.div
          className="home-leaks__grid"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={staggerContainer}
        >
          {LEAKS.map((leak) => (
            <motion.div
              key={leak.name}
              className="home-leaks__card"
              style={{ '--card-accent': leak.accent } as React.CSSProperties}
              variants={fadeUp}
            >
              <div className="home-leaks__name">{leak.name}</div>
              <p className="home-leaks__before">{leak.before}</p>
              <span className="home-leaks__arrow" aria-hidden="true">↓</span>
              <p className="home-leaks__after">{leak.after}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

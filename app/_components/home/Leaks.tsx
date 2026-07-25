'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { fadeUp, staggerContainer } from '../ui/Animations';

const LEAKS = [
  {
    name: 'Missed calls',
    before: 'Rings out, goes to the next plumber',
    after: 'Answered and booked, day or night',
    accent: 'var(--home-pink)',
  },
  {
    name: 'Slow quotes',
    before: 'Written up two days later',
    after: 'Sent the same hour, from your price book',
    accent: 'var(--process-cyan)',
  },
  {
    name: 'No reviews',
    before: 'Happy customers, quiet Google page',
    after: 'Asked automatically the moment the job closes',
    accent: 'var(--forest-800)',
  },
];

export function Leaks() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: '0px' });

  return (
    <section className="home-leaks home-section" id="leaks" ref={ref}>
      <div className="home-leaks__inner">
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
              <p className="home-leaks__after">
                <span className="home-leaks__arrow" aria-hidden="true">→</span> {leak.after}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

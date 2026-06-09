'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const slots = [
  { label: 'Slot 1', body: 'Engaged · Q2-Q3 2026', engaged: true },
  { label: 'Slot 2 · open', body: 'Accepting inbound · Q3 2026 start', engaged: false },
  { label: 'Slot 3 · open', body: 'Accepting inbound · Q4 2026 start', engaged: false },
];

export function Work() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section className="home-work home-section" id="work" ref={ref}>
      <div className="home-work__inner">
        <motion.div
          className="home-work__eyebrow"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <span className="home-work__num">N° 04</span>Active engagements
        </motion.div>

        <motion.h2
          className="home-work__h2"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          A small number of <em className="home-work__em">operator-led</em> companies.
        </motion.h2>

        <motion.p
          className="home-work__p"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          We work with operators, not committees. Companies whose founder still answers the
          email. The kind of business where one good decision a week — backed by working AI
          infrastructure instead of busywork — compounds into a different company within a year.
        </motion.p>

        <div className="home-work__slots">
          {slots.map((slot, i) => (
            <motion.div
              key={slot.label}
              className={`home-work__slot${slot.engaged ? '' : ' home-work__slot--open'}`}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i + 0.4 }}
              whileHover={slot.engaged ? {} : { y: -4, transition: { type: 'spring', stiffness: 300, damping: 20 } }}
            >
              <div className="home-work__slot-label">{slot.label}</div>
              <div className="home-work__slot-body">{slot.body}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
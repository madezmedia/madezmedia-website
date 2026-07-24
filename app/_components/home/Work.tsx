'use client';

import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { fadeUp, staggerContainer, cardHover } from '../ui/Animations';

const slots = [
  { label: 'Slot 1', body: 'Engaged · Q2–Q3 2026', engaged: true },
  { label: 'Slot 2 · open', body: 'Accepting inbound · Q3 2026 start', engaged: false },
  { label: 'Slot 3 · open', body: 'Accepting inbound · Q4 2026 start', engaged: false },
];

export function Work() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="home-work home-section" id="work">
      {/* Texture background */}
      <div className="home-work__texture" aria-hidden="true">
        <Image
          src="/textures/work-texture.png"
          alt=""
          fill
          className="home-work__texture-img"
          sizes="100vw"
        />
      </div>

      <div className="home-work__inner" ref={ref}>
        <motion.div
          className="home-work__eyebrow"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={fadeUp}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <span className="home-work__num">N° 05</span>Active engagements
        </motion.div>

        <motion.h2
          className="home-work__h2"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={fadeUp}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          A small number of <em className="home-work__em">operator-led</em> companies.
        </motion.h2>

        <motion.p
          className="home-work__p"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={fadeUp}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          We work with operators, not committees. Companies whose founder still answers the
          email. The kind of business where one good decision a week — backed by working AI
          infrastructure instead of busywork — compounds into a different company within a year.
        </motion.p>

        <motion.div
          className="home-work__slots"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={staggerContainer}
        >
          {slots.map((slot) => (
            <motion.div
              key={slot.label}
              className={`home-work__slot${slot.engaged ? '' : ' home-work__slot--open'}`}
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              whileHover={slot.engaged ? {} : cardHover}
            >
              <div className="home-work__slot-label">{slot.label}</div>
              <div className="home-work__slot-body">{slot.body}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
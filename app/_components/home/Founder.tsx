'use client';

import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { fadeUp, staggerContainer } from '../ui/Animations';

export function Founder() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: '0px' });

  return (
    <section className="home-founder home-section" id="founder">
      <motion.div
        className="home-founder__inner"
        ref={ref}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={staggerContainer}
      >
        <motion.div className="home-founder__photo" variants={fadeUp}>
          <Image
            src="/brand/mikey-shaw.png"
            alt="Mikey Shaw"
            fill
            sizes="150px"
          />
        </motion.div>

        <div>
          <motion.div className="home-eyebrow home-founder__eyebrow" variants={fadeUp}>
            <span className="num">N° 04</span>Founder
          </motion.div>

          <motion.h2 className="home-founder__h2" variants={fadeUp} transition={{ duration: 0.5, delay: 0.1 }}>
            Mikey Shaw — Mad EZ Media
          </motion.h2>

          <motion.p variants={fadeUp} transition={{ duration: 0.5, delay: 0.2 }}>
            20+ years running operations — from a 25-person restaurant floor to founding 6
            technology companies. Real deployments, real businesses, real hours reclaimed.
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
}

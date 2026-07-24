'use client';

import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { fadeUp, staggerContainer } from '../ui/Animations';

export function Founder() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

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
            src="/blog/mikey-author.jpg"
            alt="Michael &#8220;Mikey&#8221; Shaw, founder of Mad EZ Media"
            fill
            sizes="(min-width: 768px) 220px, 60vw"
          />
        </motion.div>

        <div>
          <motion.div className="home-eyebrow home-founder__eyebrow" variants={fadeUp}>
            <span className="num">N° 04</span>Who&apos;s behind it
          </motion.div>

          <motion.h2 className="home-founder__h2" variants={fadeUp} transition={{ duration: 0.5, delay: 0.1 }}>
            Twenty-plus years. Three companies founded.{' '}
            <em>One thing that stayed true.</em>
          </motion.h2>

          <motion.p variants={fadeUp} transition={{ duration: 0.5, delay: 0.2 }}>
            Michael &ldquo;Mikey&rdquo; Shaw has spent two decades building media and
            technology companies — three of them his own — before turning the same operator
            instincts on AI infrastructure the month ChatGPT shipped.
          </motion.p>
          <motion.p variants={fadeUp} transition={{ duration: 0.5, delay: 0.3 }}>
            Mad EZ Media is the fourth build. It&apos;s the first one that talks back:
            Bentley, the agent in this chat, runs on the same memory protocol the studio
            publishes in the open.
          </motion.p>

          <motion.div className="home-founder__meta" variants={fadeUp} transition={{ duration: 0.5, delay: 0.4 }}>
            Charlotte, NC · building in public since 2022
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

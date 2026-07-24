'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { fadeUp, staggerContainer } from '../ui/Animations';

export function Problem() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="home-problem home-section" id="problem">
      <motion.div
        className="home-problem__inner"
        ref={ref}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={staggerContainer}
      >
        <motion.div className="home-eyebrow home-problem__eyebrow" variants={fadeUp}>
          <span className="num">N° 01</span>The problem
        </motion.div>

        <motion.h2 className="home-problem__h2" variants={fadeUp} transition={{ duration: 0.5, delay: 0.1 }}>
          You don&apos;t have an AI problem.
        </motion.h2>

        <motion.p variants={fadeUp} transition={{ duration: 0.5, delay: 0.2 }}>
          You have a hundred small manual tasks, and AI happens to be the tool that finally
          fixes them.
        </motion.p>
        <motion.p variants={fadeUp} transition={{ duration: 0.5, delay: 0.3 }}>
          You&apos;ve probably already tried the free tools. They help for an afternoon. Then
          someone forgets to use them, or the output needs so much cleanup that it stops
          saving anyone time.
        </motion.p>
        <motion.p variants={fadeUp} transition={{ duration: 0.5, delay: 0.4 }}>
          Meanwhile the real backlog doesn&apos;t move. The lead that sat in the inbox for
          four days. The follow-up nobody sent. The report you copy-pasted between three
          tools last Tuesday, by hand, again.
        </motion.p>
        <motion.p variants={fadeUp} transition={{ duration: 0.5, delay: 0.5 }}>
          That&apos;s not a discipline problem. It&apos;s a systems problem — and systems
          problems need systems, not another tool with a login screen.
        </motion.p>
      </motion.div>
    </section>
  );
}

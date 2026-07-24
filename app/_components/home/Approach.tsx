'use client';

import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { fadeUp, staggerContainer } from '../ui/Animations';

export function Approach() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="home-approach home-section" id="approach">
      {/* Texture background */}
      <div className="home-approach__texture" aria-hidden="true">
        <Image
          src="/textures/approach-texture.png"
          alt=""
          fill
          className="home-approach__texture-img"
          sizes="100vw"
        />
      </div>

      <div className="home-approach__inner" ref={ref}>
        <motion.div
          className="home-approach__eyebrow"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={fadeUp}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <span className="home-approach__num">N° 03</span>Approach
        </motion.div>

        <motion.h2
          className="home-approach__h2"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={fadeUp}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Architect. Build. <em className="home-approach__em">Operate.</em>
        </motion.h2>

        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={staggerContainer}
        >
          <motion.p
            className="home-approach__p"
            variants={fadeUp}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Most agencies hand you decks. Most studios hand you content. Most platforms hand you
            tools you have to learn. <strong>We hand you working systems</strong> — the
            infrastructure that turns AI from a budget line item into a product your audience
            actually uses.
          </motion.p>

          <motion.p
            className="home-approach__p"
            variants={fadeUp}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            We work in three movements. <em>Architect</em> — we model your media problem as a
            working system before any code gets written. Data flow, agent architecture, content
            pipeline, monetization surface. <em>Build</em> — TypeScript, modern stacks, open
            protocols, real testing. The code that ships looks like product code, not deliverable
            code. Reviewable, maintainable, ownable on day one. <em>Operate</em> — we run it
            post-launch on retainer. Most agencies hand off; we don&apos;t. The thing keeps working
            when the launch press fades.
          </motion.p>

          <motion.p
            className="home-approach__p"
            variants={fadeUp}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            Each of those movements produces an <em>artifact</em>. Some artifacts are private to a
            client. Some — like ACMI, like Folana, like TONY — we ship publicly because the only
            way to credibly claim infrastructure expertise is to publish the infrastructure.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
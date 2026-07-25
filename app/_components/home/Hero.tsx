'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { heroStagger, fadeUp } from '../ui/Animations';
import { BentleyChat } from '../../bentley/_BentleyChat';

/* Owner/prospect-facing quick prompts — verbatim from the approved Claude
 * Design source (madezmedia.com Homepage.dc.html). Questions a business
 * owner evaluating this studio would ask, not end-customer questions. */
const HERO_PROMPTS = [
  'Does this work for my industry?',
  'What does it actually cost?',
  'How long does setup take?',
  'What if I already use some tools?',
  'How many hours could I get back?',
  'Can I talk to someone first?',
];

export function Hero() {
  return (
    <section className="home-hero" id="hero">
      <div className="home-hero__inner">
        <motion.div initial="hidden" animate="visible" variants={heroStagger}>
          <motion.div variants={fadeUp} className="home-hero__eyebrow">
            <span className="home-hero__pink-dot" aria-hidden="true" />
            For plumbers, HVAC &amp; service businesses
          </motion.div>

          <motion.h1 variants={fadeUp} className="home-hero__h1">
            AI agents that <em className="home-hero__em">answer your phones</em>, quote your
            jobs, and follow up with customers.
          </motion.h1>

          <motion.p variants={fadeUp} className="home-hero__deck">
            So nothing falls through the cracks while you&apos;re on a job site. Will this
            actually work for your business? Just ask below.
          </motion.p>

          <motion.div variants={fadeUp} className="home-hero__chat-wrap">
            <BentleyChat
              variant="compact"
              quickPrompts={HERO_PROMPTS}
              hideIntro
              placeholder={'Type a question — "I run a plumbing company, is this for me?"'}
            />
          </motion.div>

          <motion.div variants={fadeUp}>
            <Link href="/bentley" className="home-hero__link-quiet">
              Prefer more room? Open the full conversation →
            </Link>
          </motion.div>

          <motion.div variants={fadeUp} className="home-hero__meta">
            Answered by the same fleet we&apos;d deploy for you — not a script
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

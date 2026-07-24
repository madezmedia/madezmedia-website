'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { heroStagger, fadeUp } from '../ui/Animations';
import { BentleyChat } from '../../bentley/_BentleyChat';

/* Owner/prospect-facing quick prompts — questions a business owner evaluating
 * this studio would ask. Not end-customer-facing questions about whatever
 * that owner's own business does. */
const HERO_PROMPTS = [
  'Will this work for my business?',
  'What does this actually cost?',
  'How many hours could I get back?',
  "What's the catch?",
  'How is this different from an agency?',
  'What happens in the first 30 days?',
];

export function Hero() {
  return (
    <section className="home-hero" id="hero">
      <div className="home-hero__inner">
        <motion.div initial="hidden" animate="visible" variants={heroStagger}>
          <motion.div variants={fadeUp} className="home-hero__eyebrow">
            <span className="home-hero__pink-dot" aria-hidden="true" />
            Ask Bentley anything
          </motion.div>

          <motion.h1 variants={fadeUp} className="home-hero__h1">
            We build the AI infrastructure your business{' '}
            <em className="home-hero__em">actually</em> needs.
          </motion.h1>

          <motion.p variants={fadeUp} className="home-hero__deck">
            Skip the sales deck. Ask Bentley — our AI agent, live below — what&apos;s
            possible, what it costs, and whether we&apos;re the right shop. He&apos;ll tell
            you the truth, even when the truth is &ldquo;not us.&rdquo;
          </motion.p>

          <motion.div variants={fadeUp} className="home-hero__chat-wrap">
            <BentleyChat variant="compact" quickPrompts={HERO_PROMPTS} />
          </motion.div>

          <motion.div variants={fadeUp}>
            <Link href="/bentley" className="home-hero__link-quiet">
              Prefer more room? Open the full conversation →
            </Link>
          </motion.div>

          <motion.div variants={fadeUp} className="home-hero__meta">
            Mad EZ Media &amp; Technology Partners <span className="home-hero__dot">·</span>{' '}
            Charlotte, NC <span className="home-hero__dot">·</span>{' '}
            <span className="slot">Slot 2 of 3 open</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

function PstCard({ pill, label, path, content, foot, colorVar }: {
  pill: string; label: string; path: string; content: string; foot: string; colorVar: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      className="home-three-keys__card"
      style={{ '--card-accent': colorVar } as React.CSSProperties}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4, transition: { type: 'spring', stiffness: 300, damping: 20 } }}
    >
      <div className="home-three-keys__card-eyebrow">
        <span className="home-three-keys__pill" style={{ background: colorVar }}>{pill}</span>
        {' '}{label}
        <span className="home-three-keys__q"> — {label.toLowerCase().replace(' ', '')}</span>
      </div>
      <div className="home-three-keys__path">{path}</div>
      <pre className="home-three-keys__content">{content}</pre>
      <div className="home-three-keys__foot">{foot}</div>
    </motion.div>
  );
}

export function ThreeKeys() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section className="home-three-keys home-section" id="how-it-works" ref={ref}>
      <div className="home-three-keys__inner">
        <motion.div
          className="home-three-keys__eyebrow"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <span className="home-three-keys__num">N° 02</span>How it works
        </motion.div>

        <motion.h2
          className="home-three-keys__h2"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Three keys per entity. <em className="home-three-keys__em">That&apos;s the whole protocol.</em>
        </motion.h2>

        <motion.p
          className="home-three-keys__deck"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Every entity in ACMI — a project, an agent, a contact, a deal — is stored using
          exactly three keys. <em>Profile</em> answers <em>who</em>. <em>Signals</em> answers <em>now</em>.{' '}
          <em>Timeline</em> answers <em>then</em>. Here&apos;s the{' '}
          <code className="home-three-keys__code">@madezmedia/acmi</code>{' '}
          npm package as an entity, modeled in its own protocol:
        </motion.p>

        <div className="home-three-keys__grid">
          <PstCard
            pill="P" label="Profile" path="acmi:repo:madezmedia/acmi:profile"
            content={`{
  "name":     "@madezmedia/acmi",
  "version":  "1.2.0",
  "license":  "MIT",
  "node":     ">=18",
  "exports":  ["adapters", "testing"]
}`}
            foot="stable · slow-changing"
            colorVar="var(--process-cyan)"
          />
          <PstCard
            pill="S" label="Signals" path="acmi:repo:madezmedia/acmi:signals"
            content={`{
  "tests_passing":   "31/31",
  "ci_status":       "green",
  "open_issues":     0,
  "current_focus":   "v1.3 §11/§12",
  "last_publish":    "1.2.0"
}`}
            foot="live · changes frequently"
            colorVar="var(--process-magenta)"
          />
          <PstCard
            pill="T" label="Timeline" path="acmi:repo:madezmedia/acmi:timeline"
            content={`→ published v1.2.0 to npm
→ conformance: 31/31 pass on Upstash
→ Sigil v2.0 roadmap merged
→ §11/§12 v1.3 spec drafted
→ MIT LICENSE dated 2026
→ docs/SPEC.md published`}
            foot="append-only · forever"
            colorVar="var(--process-yellow)"
          />
        </div>

        <motion.p
          className="home-three-keys__aside"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <em>That&apos;s it.</em> No vector index, no knowledge graph, no fact-extraction LLM
          pass. Three keys per entity, in the simplest data store on earth.
          Every product we ship — ACMI itself, Folana, TONY, our client engagements —
          runs on this same shape.
        </motion.p>
      </div>
    </section>
  );
}
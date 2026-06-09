'use client';
import { Variants } from 'framer-motion';

/* ─── Framer Motion Animation Variants ────────────────────────────
 * Mad EZ Media brand v2 — CMYK process accents + editorial tech
 * All timings reference tokens.css vars for consistency
 * ──────────────────────────────────────────────────────────────── */

export const fadeUp: Variants = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
  }
};

export const heroScaleIn: Variants = {
  hidden: { y: 60, scale: 0.95, opacity: 0 },
  visible: {
    y: 0,
    scale: 1,
    opacity: 1,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

export const heroStagger: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.3 }
  }
};

export const slideDown: Variants = {
  hidden: { y: -80, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: 'easeOut' }
  }
};

export const cardHover = {
  rest: { y: 0, boxShadow: '0 8px 24px rgba(0,0,0,0.04)' },
  hover: {
    y: -4,
    boxShadow: '0 16px 36px rgba(0,0,0,0.08)',
    transition: { type: 'spring', stiffness: 300, damping: 20 }
  }
};

export const sectionReveal: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
  }
};
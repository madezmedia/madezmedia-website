'use client';

import { motion } from 'framer-motion';
import { Sparkles, Code, Share2, Smartphone, Video, TrendingUp } from 'lucide-react';

const features = [
  {
    icon: Sparkles,
    title: 'AI CONTENT ENGINE',
    description: 'Generate 100+ social posts, blogs, and emails in minutes',
    cta: 'Try It Now'
  },
  {
    icon: Code,
    title: 'WEBSITES THAT SELL',
    description: 'Professional sites built and optimized by AI',
    cta: 'See Examples'
  },
  {
    icon: Share2,
    title: '24/7 SOCIAL PRESENCE',
    description: 'Auto-post across all platforms with AI-optimized timing',
    cta: 'Learn More'
  },
  {
    icon: Smartphone,
    title: 'NATIVE APPS, ZERO HASSLE',
    description: 'iOS & Android apps powered by AI workflows',
    cta: 'Start Building'
  },
  {
    icon: Video,
    title: 'VIDEO CONTENT AT SCALE',
    description: 'AI-generated videos for every platform',
    cta: 'Watch Demo'
  },
  {
    icon: TrendingUp,
    title: 'DATA-DRIVEN DECISIONS',
    description: 'Real-time performance tracking with AI recommendations',
    cta: 'View Dashboard'
  }
];

export function FeatureGrid() {
  return (
    <section className="feature-grid container">
      {features.map((feature, index) => (
        <FeatureCard key={index} {...feature} index={index} />
      ))}
    </section>
  );
}

function FeatureCard({ icon: Icon, title, description, cta, index }: {
  icon: React.ElementType;
  title: string;
  description: string;
  cta: string;
  index: number;
}) {
  return (
    <motion.div
      className="feature-card"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ 
        y: -4,
        transition: { duration: 0.1 }
      }}
    >
      <Icon className="feature-icon" strokeWidth={2} />
      <h3>{title}</h3>
      <p>{description}</p>
      <button className="btn btn-primary" style={{ width: '100%' }}>
        {cta}
      </button>
    </motion.div>
  );
}

'use client';

import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section className="hero">
      <div className="hero-left">
        <motion.h1 
          className="hero-title"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          10X YOUR CONTENT
        </motion.h1>
        
        <motion.h2 
          className="hero-subtitle"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          IN HALF THE TIME
        </motion.h2>
        
        <motion.p 
          className="hero-description"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          AI-powered digital marketing that transforms your business. 
          Create more content in less time with cutting-edge artificial intelligence.
        </motion.p>
        
        <motion.div 
          className="flex gap-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <button className="btn btn-primary">
            GET STARTED
          </button>
          <button className="btn btn-secondary">
            SEE HOW IT WORKS
          </button>
        </motion.div>
      </div>
      
      <div className="hero-right">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            color: 'white',
            fontSize: '2rem',
            fontWeight: 700,
          }}
        >
          [Animated Demo Placeholder]
        </motion.div>
      </div>
      
      <Marquee />
    </section>
  );
}

function Marquee() {
  const items = [
    'AI-POWERED',
    'INNOVATION',
    'EFFICIENCY',
    'TRANSPARENCY',
    '10X RESULTS',
    'AUTOMATION'
  ];
  
  return (
    <div className="marquee-container">
      <div className="marquee">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="marquee-item">{item}</span>
        ))}
      </div>
    </div>
  );
}

'use client';

import { motion } from 'framer-motion';

export function TextYourPhotos() {
  const steps = [
    '📸 Snap a photo with your phone',
    '📱 Text it to our AI number',
    '🚀 AI creates, posts, and manages everything',
    '✅ Show up to 1 call/month for approval'
  ];

  return (
    <section className="container" style={{ padding: '6rem 0' }}>
      <div style={{ 
        display: 'flex', 
        gap: '3rem', 
        alignItems: 'center',
        flexDirection: 'row-reverse',
        flexWrap: 'wrap'
      }}>
        <div style={{ flex: '1', minWidth: '300px' }}>
          <h2 style={{ 
            fontSize: '4rem', 
            marginBottom: '1.5rem',
            color: 'var(--color-dark)',
            fontFamily: 'var(--font-heading)',
            textTransform: 'uppercase'
          }}>
            TEXT YOUR PHOTOS
          </h2>
          <p style={{ 
            fontSize: '1.5rem', 
            marginBottom: '2rem',
            color: 'var(--color-text)'
          }}>
            The simplest way to dominate social media
          </p>
          
          <div style={{ marginBottom: '2rem' }}>
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                style={{ 
                  fontSize: '1.25rem',
                  marginBottom: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem'
                }}
              >
                {step}
              </motion.div>
            ))}
          </div>
          
          <button className="btn btn-primary" style={{ fontSize: '1.25rem' }}>
            START FREE TRIAL
          </button>
          <p style={{ 
            marginTop: '1rem', 
            fontSize: '0.875rem',
            opacity: 0.7
          }}>
            No credit card required • 14-day free trial
          </p>
        </div>
        
        <div style={{ flex: '1', minWidth: '300px' }}>
          <div style={{
            background: 'var(--color-dark)',
            borderRadius: '40px',
            padding: '2rem',
            aspectRatio: '9/16',
            maxWidth: '400px',
            margin: '0 auto'
          }}>
            <div style={{
              background: 'var(--color-acid-yellow)',
              height: '100%',
              borderRadius: '24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'black',
              fontFamily: 'var(--font-heading)',
              fontSize: '2rem',
              fontWeight: 700,
              textAlign: 'center',
              padding: '2rem'
            }}>
              DEMO VIDEO PLACEHOLDER
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

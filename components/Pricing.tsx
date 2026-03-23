'use client';

import { motion } from 'framer-motion';

const pricingTiers = [
  {
    name: 'Starter',
    price: '$997',
    period: '/month',
    description: 'Perfect for small businesses',
    features: [
      '50 AI-generated posts/month',
      '1 social platform',
      'Basic analytics',
      'Email support'
    ],
    highlighted: false
  },
  {
    name: 'Growth',
    price: '$2,497',
    period: '/month',
    description: 'Most popular for scaling',
    features: [
      '200 AI-generated posts/month',
      '5 social platforms',
      'Advanced analytics',
      'Priority support',
      'Monthly strategy call',
      'Custom content calendar'
    ],
    highlighted: true
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'For large organizations',
    features: [
      'Unlimited content generation',
      'All social platforms',
      'Dedicated account manager',
      '24/7 phone support',
      'Custom AI training',
      'White-label solutions'
    ],
    highlighted: false
  }
];

export function Pricing() {
  return (
    <section className="container" style={{ padding: '6rem 0' }}>
      <h2 className="text-center" style={{ 
        fontSize: '4rem', 
        marginBottom: '1rem',
        color: 'var(--color-dark)',
        fontFamily: 'var(--font-heading)',
        textTransform: 'uppercase'
      }}>
        SIMPLE, TRANSPARENT PRICING
      </h2>
      <p className="text-center" style={{ 
        fontSize: '1.5rem',
        marginBottom: '4rem',
        color: 'var(--color-text)'
      }}>
        Choose the plan that fits your needs
      </p>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '2rem',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {pricingTiers.map((tier, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            style={{
              background: tier.highlighted ? 'var(--color-dark)' : 'white',
              color: tier.highlighted ? 'white' : 'var(--color-text)',
              border: tier.highlighted ? '4px solid var(--color-acid-yellow)' : '2px solid #E2E8F0',
              borderRadius: '16px',
              padding: '3rem 2rem',
              position: 'relative',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            {tier.highlighted && (
              <div style={{
                position: 'absolute',
                top: '-16px',
                left: '50%',
                transform: 'translateX(-50%)',
                background: 'var(--color-acid-yellow)',
                color: 'black',
                padding: '0.5rem 1.5rem',
                borderRadius: '999px',
                fontFamily: 'var(--font-heading)',
                fontWeight: 700,
                fontSize: '0.875rem',
                textTransform: 'uppercase'
              }}>
                Most Popular
              </div>
            )}
            
            <h3 style={{ 
              fontSize: '1.5rem', 
              marginBottom: '0.5rem',
              fontFamily: 'var(--font-heading)',
              textTransform: 'uppercase'
            }}>
              {tier.name}
            </h3>
            
            <div style={{ marginBottom: '1rem' }}>
              <span style={{ 
                fontSize: '3rem', 
                fontWeight: 700,
                fontFamily: 'var(--font-heading)'
              }}>
                {tier.price}
              </span>
              <span style={{ opacity: 0.7 }}>{tier.period}</span>
            </div>
            
            <p style={{ 
              marginBottom: '2rem',
              opacity: 0.8,
              fontSize: '0.875rem'
            }}>
              {tier.description}
            </p>
            
            <ul style={{ 
              listStyle: 'none',
              marginBottom: '2rem',
              flex: 1
            }}>
              {tier.features.map((feature, i) => (
                <li key={i} style={{ 
                  marginBottom: '0.75rem',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.75rem'
                }}>
                  <span style={{ color: 'var(--color-cta)' }}>✓</span>
                  {feature}
                </li>
              ))}
            </ul>
            
            <button 
              className={`btn ${tier.highlighted ? 'btn-primary' : 'btn-secondary'}`} 
              style={{ width: '100%' }}
            >
              {tier.price === 'Custom' ? 'CONTACT SALES' : 'START FREE TRIAL'}
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

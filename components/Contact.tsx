'use client';

import { motion } from 'framer-motion';

export function Contact() {
  return (
    <section style={{ 
      background: 'var(--color-dark)',
      padding: '6rem 0'
    }}>
      <div className="container" style={{ maxWidth: '600px' }}>
        <h2 className="text-center" style={{ 
          fontSize: '3rem', 
          marginBottom: '1rem',
          color: 'white',
          fontFamily: 'var(--font-heading)',
          textTransform: 'uppercase'
        }}>
          LET'S TALK
        </h2>
        <p className="text-center" style={{ 
          marginBottom: '3rem',
          color: 'rgba(255, 255, 255, 0.8)'
        }}>
          Ready to transform your marketing? Get in touch.
        </p>
        
        <motion.form 
          style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <input 
            type="text" 
            placeholder="Name *" 
            required
            style={{
              background: 'white',
              border: '2px solid transparent',
              borderRadius: '8px',
              padding: '1rem',
              fontSize: '1rem',
              fontFamily: 'var(--font-body)',
              transition: 'border-color 200ms ease'
            }}
          />
          <input 
            type="email" 
            placeholder="Email *" 
            required
            style={{
              background: 'white',
              border: '2px solid transparent',
              borderRadius: '8px',
              padding: '1rem',
              fontSize: '1rem',
              fontFamily: 'var(--font-body)',
              transition: 'border-color 200ms ease'
            }}
          />
          <select 
            style={{
              background: 'white',
              border: '2px solid transparent',
              borderRadius: '8px',
              padding: '1rem',
              fontSize: '1rem',
              fontFamily: 'var(--font-body)'
            }}
          >
            <option value="">What can we help you with?</option>
            <option value="digital-marketing">Digital Marketing</option>
            <option value="content-creation">Content Creation</option>
            <option value="ai-solutions">AI Solutions</option>
            <option value="web-development">Web Development</option>
            <option value="social-media">Social Media Management</option>
            <option value="mobile-apps">Mobile App Development</option>
          </select>
          <textarea 
            placeholder="Message" 
            rows={5}
            style={{
              background: 'white',
              border: '2px solid transparent',
              borderRadius: '8px',
              padding: '1rem',
              fontSize: '1rem',
              fontFamily: 'var(--font-body)',
              resize: 'vertical',
              transition: 'border-color 200ms ease'
            }}
          />
          <button type="submit" className="btn btn-primary" style={{ fontSize: '1.25rem' }}>
            SEND MESSAGE
          </button>
        </motion.form>
        
        <div className="text-center" style={{ marginTop: '3rem', color: 'rgba(255, 255, 255, 0.6)' }}>
          <p style={{ marginBottom: '0.5rem' }}>Prefer to talk? Call us: (555) 123-4567</p>
          <p>Email: hello@madezmedia.com</p>
        </div>
      </div>
    </section>
  );
}

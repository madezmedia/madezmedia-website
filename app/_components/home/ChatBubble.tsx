'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { BentleyChat } from '../../bentley/_BentleyChat';

const BUBBLE_PROMPTS = [
  'Will this work for my business?',
  'What does this actually cost?',
  'How many hours could I get back?',
];

export function ChatBubble() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            className="home-bubble-panel"
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            role="dialog"
            aria-label="Chat with Bentley"
          >
            <div className="home-bubble-panel__head">
              <span>Bentley</span>
              <button
                type="button"
                className="home-bubble-panel__close"
                onClick={() => setOpen(false)}
                aria-label="Close chat"
              >
                ×
              </button>
            </div>
            <BentleyChat variant="compact" quickPrompts={BUBBLE_PROMPTS} />
          </motion.div>
        )}
      </AnimatePresence>

      <button
        type="button"
        className="home-bubble-launcher"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label={open ? 'Close chat with Bentley' : 'Talk to Bentley'}
      >
        <span className="home-bubble-launcher__dot" aria-hidden="true" />
        <span className="home-bubble-launcher__label">{open ? 'Close' : 'Talk to Bentley'}</span>
      </button>
    </>
  );
}

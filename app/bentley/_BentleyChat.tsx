'use client';

import { useState, useRef, useEffect } from 'react';
import { useChat } from '@ai-sdk/react';
import { DefaultChatTransport } from 'ai';

interface BentleyChatProps {
  /** 'full' = the dedicated /bentley page surface. 'compact' = embedded in the
   * homepage hero or the floating bubble panel — shorter, tighter padding. */
  variant?: 'full' | 'compact';
  /** Owner/prospect-facing quick-prompt chips shown before the first message
   * is sent. Omit to render the composer only (matches original /bentley UX). */
  quickPrompts?: string[];
  placeholder?: string;
  className?: string;
  /** Skip the "hey, i'm bentley" intro bubble — just the composer + chips. */
  hideIntro?: boolean;
}

export function BentleyChat({
  variant = 'full',
  quickPrompts,
  placeholder = 'Ask Bentley anything…',
  className = '',
  hideIntro = false,
}: BentleyChatProps) {
  const [input, setInput] = useState('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const { messages, sendMessage, status } = useChat({
    transport: new DefaultChatTransport({ api: '/api/bentley/chat' }),
    onError: (err) => {
      try {
        const parsed = JSON.parse(err.message);
        setErrorMessage(parsed.message ?? err.message);
      } catch {
        setErrorMessage(
          'Bentley chat hit a snag. Email duane@madezmedia.com or book at cal.com/duane-madezmedia.'
        );
      }
    },
  });

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, status]);

  const isThinking = status === 'submitted' || status === 'streaming';
  const hasStarted = messages.length > 0;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!input.trim() || isThinking) return;
    setErrorMessage(null);
    sendMessage({ text: input });
    setInput('');
  }

  function handleChip(prompt: string) {
    if (isThinking) return;
    setErrorMessage(null);
    sendMessage({ text: prompt });
  }

  const isMinimal = hideIntro && !hasStarted;

  return (
    <div
      className={`bentley-chat bentley-chat--${variant} ${isMinimal ? 'bentley-chat--minimal' : ''} ${className}`.trim()}
    >
      <div className="messages" ref={scrollRef}>
        {messages.length === 0 && !hideIntro && (
          <div className="msg msg-bentley intro">
            <div className="who">Bentley</div>
            <div className="body">
              hey — i&apos;m bentley, mad ez media&apos;s sales agent. i remember every conversation, including the next time you visit.
              <br /><br />
              what brings you to the studio today?
            </div>
          </div>
        )}
        {messages.map((m) => {
          const text = m.parts
            ?.filter((p) => p.type === 'text')
            .map((p) => (p as { text: string }).text)
            .join('') ?? '';
          return (
            <div key={m.id} className={`msg msg-${m.role}`}>
              <div className="who">{m.role === 'user' ? 'You' : 'Bentley'}</div>
              <div className="body">{text}</div>
            </div>
          );
        })}
        {isThinking && (
          <div className="msg msg-assistant thinking">
            <div className="who">Bentley</div>
            <div className="body"><span className="dots"><span /><span /><span /></span></div>
          </div>
        )}
        {errorMessage && (
          <div className="msg msg-system">
            <div className="body">{errorMessage}</div>
          </div>
        )}
      </div>

      {quickPrompts && quickPrompts.length > 0 && !hasStarted && (
        <div className="chips" role="group" aria-label="Suggested questions">
          {quickPrompts.map((prompt) => (
            <button
              key={prompt}
              type="button"
              className="chip"
              onClick={() => handleChip(prompt)}
              disabled={isThinking}
            >
              {prompt}
            </button>
          ))}
        </div>
      )}

      <form onSubmit={handleSubmit} className="composer">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={placeholder}
          aria-label="Message Bentley"
          disabled={isThinking}
        />
        <button type="submit" disabled={isThinking || !input.trim()} aria-label="Send">
          {isThinking ? '…' : isMinimal ? '→' : 'Send'}
        </button>
      </form>
    </div>
  );
}

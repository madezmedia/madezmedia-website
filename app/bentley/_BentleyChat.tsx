'use client';

import { useState, useRef, useEffect } from 'react';
import { useChat } from '@ai-sdk/react';
import { DefaultChatTransport } from 'ai';

export function BentleyChat() {
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

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!input.trim() || status === 'streaming' || status === 'submitted') return;
    setErrorMessage(null);
    sendMessage({ text: input });
    setInput('');
  }

  const isThinking = status === 'submitted' || status === 'streaming';

  return (
    <div className="bentley-chat">
      <div className="messages" ref={scrollRef}>
        {messages.length === 0 && (
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

      <form onSubmit={handleSubmit} className="composer">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask Bentley anything…"
          aria-label="Message Bentley"
          disabled={isThinking}
        />
        <button type="submit" disabled={isThinking || !input.trim()}>
          {isThinking ? '…' : 'Send'}
        </button>
      </form>
    </div>
  );
}

'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import './dashboard.css';

const CONTEXT_OPTIONS = [
  { value: 'madez:agent:antigravity', label: '@antigravity (T1 Orchestrator)' },
  { value: 'madez:agent:ops-center', label: '@ops-center (Fleet Audit)' },
  { value: 'madez:agent:avery-rei', label: '@avery-rei (Property Sourcing)' },
  { value: 'madez:agent:claude-engineer', label: '@claude-engineer (Engineering)' }
];

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [consoleOpen, setConsoleOpen] = useState(false);
  const [selectedAgent, setSelectedAgent] = useState('madez:agent:antigravity');
  const [prompt, setPrompt] = useState('');
  const [logs, setLogs] = useState<Array<{ id: string; text: string; type: 'user' | 'system' | 'agent' | 'tool' }>>([
    { id: '1', text: '[system]: Connected to VM OpenACP daemon on port 21421.', type: 'system' },
    { id: '2', text: '[system]: Select agent context below to route commands.', type: 'system' }
  ]);
  const [isSending, setIsSending] = useState(false);
  const logContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (logContainerRef.current) {
      logContainerRef.current.scrollTop = logContainerRef.current.scrollHeight;
    }
  }, [logs]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim() || isSending) return;

    const userText = prompt.trim();
    setPrompt('');
    setIsSending(true);

    const logId = Date.now().toString();
    setLogs((prev) => [...prev, { id: logId, text: `> ${userText}`, type: 'user' }]);

    try {
      const res = await fetch('/api/dashboard/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ agentId: selectedAgent, prompt: userText })
      });

      const data = await res.json();
      if (data.error) {
        setLogs((prev) => [...prev, { id: Date.now().toString(), text: `[error]: ${data.error}`, type: 'system' }]);
      } else {
        setLogs((prev) => [...prev, { id: Date.now().toString(), text: data.response || '*(done)*', type: 'agent' }]);
      }
    } catch (err: any) {
      setLogs((prev) => [...prev, { id: Date.now().toString(), text: `[error]: ${err.message}`, type: 'system' }]);
    } finally {
      setIsSending(false);
    }
  };

  const navLinks = [
    { href: '/dashboard', label: 'Overview' },
    { href: '/dashboard/gsd', label: 'GSD Pipeline' },
    { href: '/dashboard/sales', label: 'Sales Campaigns' },
    { href: '/dashboard/rei', label: 'REI Sourcing' }
  ];

  return (
    <div className="dashboard-container">
      {/* Sidebar Nav */}
      <aside className="dashboard-sidebar">
        <div className="dashboard-sidebar__top">
          <Link href="/" className="dashboard-sidebar__brand">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/brand/logo-splatter.png"
              alt=""
              aria-hidden="true"
              className="dashboard-sidebar__logo"
            />
            <span className="dashboard-sidebar__wordmark">
              made<span className="dashboard-sidebar__pivot">z</span>media
            </span>
          </Link>

          <nav className="dashboard-sidebar__nav" aria-label="Dashboard navigation">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`dashboard-sidebar__link ${isActive ? 'dashboard-sidebar__link--active' : ''}`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="dashboard-sidebar__bottom">
          <Link href="/" className="dashboard-sidebar__back">
            ← Back to Main Site
          </Link>
        </div>
      </aside>

      {/* Main content route views */}
      <main className="dashboard-main">
        {children}
      </main>

      {/* Global Fleet Chat overlay */}
      <div className="fleet-console">
        {!consoleOpen ? (
          <button
            onClick={() => setConsoleOpen(true)}
            className="fleet-console__toggle"
            aria-label="Open Fleet Command console"
          >
            <span className="fleet-console__pulse" />
            [ Fleet Command ]
          </button>
        ) : (
          <div className="fleet-console__card">
            <header className="fleet-console__header">
              <div className="fleet-console__title">
                <span className="fleet-console__pulse" />
                Fleet Console
              </div>
              <button
                onClick={() => setConsoleOpen(false)}
                className="fleet-console__close"
                aria-label="Close console"
              >
                ✕
              </button>
            </header>

            <div className="fleet-console__selector-wrap">
              <span className="fleet-console__label">Route To:</span>
              <select
                value={selectedAgent}
                onChange={(e) => setSelectedAgent(e.target.value)}
                className="fleet-console__select"
                aria-label="Select agent target"
              >
                {CONTEXT_OPTIONS.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>

            <div ref={logContainerRef} className="fleet-console__log">
              {logs.map((log) => (
                <div key={log.id} className={`fleet-console__message fleet-console__message--${log.type}`}>
                  {log.text}
                </div>
              ))}
              {isSending && (
                <div className="fleet-console__message fleet-console__message--system">
                  [status]: Agent executing task...
                </div>
              )}
            </div>

            <form onSubmit={handleSend} className="fleet-console__input-wrap">
              <input
                type="text"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder={isSending ? 'Waiting for response...' : 'Enter prompt...'}
                className="fleet-console__input"
                disabled={isSending}
                aria-label="Console command prompt"
              />
              <button
                type="submit"
                disabled={isSending || !prompt.trim()}
                className="fleet-console__send"
              >
                Send
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

'use client';

import { useEffect, useRef } from 'react';

type Milestone = {
  ts: string;
  src: string;
  verb: string;
  target: string;
  summary: string;
  href: string;
};

const MILESTONES: Milestone[] = [
  { ts: '2026-07-24T16:10:00Z', src: 'madezmedia.com', verb: 'rebuilt', target: 'the homepage', summary: 'one question, one chat box — no sales deck, no pricing wall', href: '#' },
  { ts: '2026-07-23T14:30:00Z', src: 'mikeyshaw.work', verb: 'shipped', target: 'a live chat assessment', summary: '9 quick questions, tells you what your business is actually leaking', href: '#' },
  { ts: '2026-07-21T13:05:00Z', src: 'sales-command', verb: 'generated', target: 'the first AI voice-audit + tech/SEO report', summary: 'lead discovery → qualification → outreach, now offered as a client build', href: '#' },
  { ts: '2026-07-20T15:22:00Z', src: 'sales-command', verb: 'shipped', target: 'Sales Command, our AI CRM', summary: 'full pipeline live — voice calls, tracked email, a human approval gate before anything sends', href: '#' },
  { ts: '2026-07-14T18:00:00Z', src: 'acmi', verb: 'opened', target: "every agent's memory", summary: 'the system that remembers your calls and customers is open-source, not a black box', href: 'https://github.com/madezmedia/acmi' },
  { ts: '2026-07-09T12:00:00Z', src: 'tony', verb: 'passed', target: "TONY's Roku certification", summary: '16/16 checks — season one streaming Q2 2026', href: 'https://topofnewyork.com' },
  { ts: '2026-07-02T09:15:00Z', src: 'studio', verb: 'onboarded', target: 'Duane, Chief Human Execution Officer', summary: 'a real human on a real calendar, for when you’d rather just talk to someone', href: '#' },
  { ts: '2026-06-26T08:00:00Z', src: 'acmi', verb: 'kept', target: '31/31 tests passing', summary: 'the same reliability bar on every release, checked automatically, not just claimed', href: 'https://github.com/madezmedia/acmi' },
  { ts: '2026-06-19T07:40:00Z', src: 'folana.live', verb: 'kept', target: 'her daily loop running', summary: 'she journals, decides, and publishes herself — unattended, on schedule', href: '#' },
];

function relativeTime(iso: string): string {
  const t = new Date(iso).getTime();
  const now = Date.now();
  const diff = now - t;
  const min = Math.floor(diff / 60000);
  if (min < 1) return 'just now';
  if (min < 60) return `${min}m ago`;
  const hr = Math.floor(min / 60);
  if (hr < 24) return `${hr}h ago`;
  const days = Math.floor(hr / 24);
  if (days < 7) {
    const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const d = new Date(iso);
    const h = d.getHours();
    const m = d.getMinutes();
    const ampm = h >= 12 ? 'pm' : 'am';
    const h12 = h % 12 || 12;
    return `${dayNames[d.getDay()]} ${h12}:${String(m).padStart(2, '0')}${ampm}`;
  }
  const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const d = new Date(iso);
  return `${monthNames[d.getMonth()]} ${d.getDate()}`;
}

const VISIBLE_COUNT = 9;

export function MilestoneFeed() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const sorted = [...MILESTONES].sort((a, b) => new Date(b.ts).getTime() - new Date(a.ts).getTime());
    let cursor = 0;

    function renderMilestone(m: Milestone): HTMLDivElement {
      const line = document.createElement('div');
      line.className = 'feed-line';
      line.innerHTML = `
        <span class="ts">${relativeTime(m.ts)}</span>
        <span class="src">${m.src}</span>
        <span class="verb">${m.verb}</span>
        <span class="target">${m.target}</span>
        <span class="summary">${m.summary}</span>
      `;
      return line;
    }

    for (let i = 0; i < VISIBLE_COUNT && i < sorted.length; i++) {
      track.appendChild(renderMilestone(sorted[i]));
    }
    cursor = VISIBLE_COUNT % sorted.length;

    const interval = setInterval(() => {
      const next = sorted[cursor % sorted.length];
      cursor++;
      const newLine = renderMilestone(next);
      newLine.style.opacity = '0';
      newLine.style.transform = 'translateY(-6px)';
      track.appendChild(newLine);
      requestAnimationFrame(() => {
        newLine.style.transition = 'opacity 600ms cubic-bezier(0.16,1,0.3,1), transform 600ms cubic-bezier(0.16,1,0.3,1)';
        newLine.style.opacity = '';
        newLine.style.transform = '';
      });
      if (track.children.length > VISIBLE_COUNT) {
        const old = track.firstChild as HTMLElement;
        old.style.transition = 'opacity 400ms ease-out';
        old.style.opacity = '0';
        setTimeout(() => old.remove(), 400);
      }
    }, 4500);

    return () => {
      clearInterval(interval);
      while (track.firstChild) track.removeChild(track.firstChild);
    };
  }, []);

  return (
    <div className="feed">
      <div className="feed-track" ref={trackRef} />
    </div>
  );
}

export function ScrollReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in-view');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll('.reveal').forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  return null;
}

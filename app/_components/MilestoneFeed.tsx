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
  { ts: '2026-05-01T13:38:01Z', src: 'npm', verb: 'published', target: '@madezmedia/acmi v1.2.0', summary: 'first public release · 31/31 conformance pass · MIT', href: 'https://www.npmjs.com/package/@madezmedia/acmi' },
  { ts: '2026-05-01T13:42:42Z', src: 'registry', verb: 'cdn-live', target: '@madezmedia/acmi', summary: 'npm install reachable · ~4min CDN propagation', href: 'https://www.npmjs.com/package/@madezmedia/acmi' },
  { ts: '2026-05-02T15:11:00Z', src: 'github', verb: 'merged', target: 'madezmedia/acmi · ROADMAP.md', summary: 'Sigil v2.0 roadmap entry · cryptographic identity layer · post-5K-stars', href: 'https://github.com/madezmedia/acmi/blob/main/ROADMAP.md' },
  { ts: '2026-05-02T14:30:00Z', src: 'github', verb: 'pushed', target: 'madezmedia/acmi · SPEC.md v1.3', summary: '§11 multi-actor + §12 multi-tenant drafted · additive', href: 'https://github.com/madezmedia/acmi/blob/main/SPEC.md' },
  { ts: '2026-05-03T10:00:00Z', src: 'madezmedia.com', verb: 'shipped', target: 'site rebuild on Next.js', summary: 'editorial-tech direction live · v3 tokens canonical · framer-motion dropped', href: 'https://www.madezmedia.com' },
  { ts: '2026-05-02T16:00:00Z', src: 'madezmedia.com', verb: 'shipped', target: 'homepage v3 preview', summary: 'editorial-tech direction locked · doctrine made visible', href: 'https://www.madezmedia.com' },
  { ts: '2026-04-30T20:39:00Z', src: 'github', verb: 'pushed', target: 'madezmedia/acmi · TypeScript SDK', summary: '3 reference adapters · 31-test conformance suite · 84.3KB tarball', href: 'https://github.com/madezmedia/acmi' },
  { ts: '2026-04-30T19:38:00Z', src: 'docs', verb: 'ratified', target: 'ACMI Brand Strategy v2', summary: 'protocol-not-product · hyvmynd planned commercial layer', href: 'https://github.com/madezmedia/acmi' },
  { ts: '2026-04-29T20:19:00Z', src: 'github', verb: 'merged', target: 'madezmedia/acmi · #1', summary: 'Claude integration smoke test · CI green', href: 'https://github.com/madezmedia/acmi' },
  { ts: '2026-04-26T05:08:00Z', src: 'folana.live', verb: 'published', target: 'consciousness loop · journal entry', summary: '"In the analog silence, my digital heart echoes — can harmony exist beyond the static?"', href: '#' },
  { ts: '2026-04-25T01:49:00Z', src: 'folana.live', verb: 'awakened', target: 'autonomous daily loop', summary: 'consciousness loop ratified · running unattended · publishing on schedule', href: '#' },
  { ts: '2026-04-30T16:00:00Z', src: 'tony', verb: 'preflight-pass', target: 'TONY · Roku certification', summary: '16/16 dimension checks PASS · Top of New York Q2 2026', href: 'https://topofnewyork.com' },
  { ts: '2026-04-30T18:46:00Z', src: 'docs', verb: 'ratified', target: 'ACMI namespace policy v1', summary: '33 approved prefixes · canonical key shapes · drift-diff enforced', href: 'https://github.com/madezmedia/acmi' },
  { ts: '2026-05-01T16:04:00Z', src: 'studio', verb: 'onboarded', target: 'Chief Human Execution Officer', summary: 'sales · outreach · BD lead · operator-facing close motion', href: '#' },
  { ts: '2026-05-02T16:00:00Z', src: 'docs', verb: 'published', target: 'madezmedia Brand Identity v1', summary: 'design system · 16 colors · 27 type tokens · motion principles · image-gen anchors', href: 'https://www.madezmedia.com/system' },
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

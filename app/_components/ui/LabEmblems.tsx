/* LabEmblems.tsx — inline SVG emblems for Lab section cards
 * Brand v2 · CMYK process accents · each emblem uses its card accent color
 */

interface EmblemProps {
  color?: string;
  size?: number;
}

export function AcmiEmblem({ color = 'var(--process-cyan)', size = 48 }: EmblemProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" aria-hidden="true">
      {/* Three nodes: Profile (top), Signals (bottom-left), Timeline (bottom-right) */}
      <circle cx="24" cy="10" r="5" fill={color} opacity="0.9" />
      <circle cx="10" cy="38" r="5" fill={color} opacity="0.9" />
      <circle cx="38" cy="38" r="5" fill={color} opacity="0.9" />
      {/* Connecting lines */}
      <line x1="24" y1="15" x2="13" y2="34" stroke={color} strokeWidth="2" strokeLinecap="round" opacity="0.6" />
      <line x1="24" y1="15" x2="35" y2="34" stroke={color} strokeWidth="2" strokeLinecap="round" opacity="0.6" />
      <line x1="15" y1="38" x2="33" y2="38" stroke={color} strokeWidth="2" strokeLinecap="round" opacity="0.6" />
    </svg>
  );
}

export function FolanaEmblem({ color = 'var(--process-magenta)', size = 48 }: EmblemProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" aria-hidden="true">
      {/* Abstract face — oval with two dots for eyes */}
      <ellipse cx="24" cy="24" rx="14" ry="18" fill={color} opacity="0.15" />
      <ellipse cx="24" cy="24" rx="14" ry="18" stroke={color} strokeWidth="2" opacity="0.8" />
      {/* Eyes */}
      <circle cx="18" cy="20" r="3" fill={color} opacity="0.9" />
      <circle cx="30" cy="20" r="3" fill={color} opacity="0.9" />
      {/* Subtle mouth arc */}
      <path d="M18 32 Q24 36 30 32" stroke={color} strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.5" />
    </svg>
  );
}

export function TonyEmblem({ color = 'var(--process-yellow)', size = 48 }: EmblemProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" aria-hidden="true">
      {/* Crown / star — "Top of New York" */}
      <path
        d="M24 6 L28 18 L40 18 L30 26 L34 38 L24 30 L14 38 L18 26 L8 18 L20 18 Z"
        fill={color}
        opacity="0.2"
      />
      <path
        d="M24 6 L28 18 L40 18 L30 26 L34 38 L24 30 L14 38 L18 26 L8 18 L20 18 Z"
        stroke={color}
        strokeWidth="2"
        strokeLinejoin="round"
        fill="none"
        opacity="0.85"
      />
    </svg>
  );
}

export function SonicEmblem({ color = 'var(--forest-800)', size = 48 }: EmblemProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" aria-hidden="true">
      {/* Sound wave bars */}
      <rect x="6" y="20" width="4" height="8" rx="2" fill={color} opacity="0.9" />
      <rect x="14" y="14" width="4" height="20" rx="2" fill={color} opacity="0.7" />
      <rect x="22" y="8" width="4" height="32" rx="2" fill={color} opacity="0.85" />
      <rect x="30" y="14" width="4" height="20" rx="2" fill={color} opacity="0.7" />
      <rect x="38" y="20" width="4" height="8" rx="2" fill={color} opacity="0.9" />
    </svg>
  );
}

export function SalesCommandEmblem({ color = 'var(--plum)', size = 48 }: EmblemProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" aria-hidden="true">
      {/* Pipeline funnel — discovery → qualification → outreach */}
      <path
        d="M8 10 H40 L28 26 V38 L20 34 V26 Z"
        stroke={color}
        strokeWidth="2"
        strokeLinejoin="round"
        fill={color}
        fillOpacity="0.15"
      />
      <circle cx="8" cy="10" r="2.5" fill={color} opacity="0.9" />
      <circle cx="40" cy="10" r="2.5" fill={color} opacity="0.9" />
      <circle cx="24" cy="38" r="2.5" fill={color} opacity="0.9" />
    </svg>
  );
}

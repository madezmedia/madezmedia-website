import type { Config } from 'tailwindcss';

/**
 * Minimal Tailwind config — kept primarily for utility classes
 * (flex, grid, spacing). All theming + typography lives in
 * `app/tokens.css` + `app/components.css` as the single source
 * of truth. Do NOT extend the Tailwind theme here — use the
 * design tokens directly via CSS custom properties.
 */
const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './content/**/*.{md,mdx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
export default config;

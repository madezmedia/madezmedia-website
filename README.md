# madezmedia.com

The studio website for [Mad EZ Media & Technology Partners](https://www.madezmedia.com).

## Stack

- **Framework:** Next.js 14 (App Router, server components by default)
- **Design system:** v3 editorial-tech tokens (`app/tokens.css` + `app/components.css`)
- **Type:** Source Serif 4 + Inter + JetBrains Mono (Google Fonts)
- **Color:** Single-accent deep forest `#2d4a3e` on warm paper `#faf9f5`
- **Blog:** Markdown in `content/posts/` rendered via `gray-matter` + `remark`
- **Social distribution:** Postiz (Phase 2 — `/api/postiz/publish`)
- **Deployment:** Vercel (auto on push to main)

## Surfaces

- `/` — homepage (hero, three-keys, approach, lab, work, contact, footnotes)
- `/acmi` — product page for [@madezmedia/acmi](https://www.npmjs.com/package/@madezmedia/acmi)
- `/blog` — index + dynamic per-post pages
- `/system` — public design system docs
- `/feed.xml` — RSS, `/sitemap.xml`, `/robots.txt`

## Develop

```bash
npm install
npm run dev
```

## Add a blog post

1. Create `content/posts/{slug}.md` with YAML frontmatter:
   ```yaml
   ---
   title: "Your post title"
   date: 2026-05-03
   author: "Michael Shaw"
   tags: [engineering]
   summary: "One-paragraph summary."
   hero: "/blog/your-slug-hero.jpg"
   ---
   ```
2. Body in markdown below the frontmatter.
3. Drop hero in `public/blog/{slug}-hero.jpg`. Commit + push.

## Phase 1 migration

Replaced the previous "Kinetic Brutalism" design (March 2026) with the v3 editorial-tech direction (May 2026). Strategy memo: `~/clawd/projects/madezmedia-rebrand/MADEZMEDIA-COM-MIGRATION-STRATEGY.md`. Lock CID: `mikey-lock-v3-editorial-tech-1777742367520`.

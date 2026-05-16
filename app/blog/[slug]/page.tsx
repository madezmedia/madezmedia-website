import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import '../page.css';
import { BlogShell } from '../_BlogChrome';
import { getPostBySlug, getPostSlugs } from '@/lib/posts';

export async function generateStaticParams() {
  const slugs = await getPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return { title: 'Not found' };
  const fm = post.frontmatter;
  return {
    title: fm.title,
    description: fm.summary,
    openGraph: {
      title: fm.title,
      description: fm.summary,
      type: 'article',
      url: `https://www.madezmedia.com/blog/${slug}`,
      images: fm.hero ? [{ url: fm.hero, alt: fm.hero_alt ?? fm.title }] : undefined,
      publishedTime: fm.date,
      authors: [fm.author],
      tags: fm.tags,
      siteName: 'madezmedia',
    },
    twitter: {
      card: 'summary_large_image',
      title: fm.title,
      description: fm.summary,
      site: '@madezmedia',
      images: fm.hero ? [fm.hero] : undefined,
    },
    alternates: { canonical: `/blog/${slug}` },
  };
}

function formatDate(iso: string): string {
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const d = new Date(iso);
  return `${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();
  const fm = post.frontmatter;

  return (
    <BlogShell>
      <section className="post-hero">
        <Link href="/blog" className="back-link">← All notes</Link>
        <div className="mzm-eyebrow">
          <span className="num">N° 0{fm.section === 'Engineering' ? 1 : fm.section === 'AI Creativity' ? 2 : 3}</span>
          {fm.section ?? 'Note'}
        </div>
        <h1>{fm.title}</h1>
        {fm.subtitle && <p className="subtitle">{fm.subtitle}</p>}
        <div className="byline">
          <span>By <strong>{fm.author}</strong>{fm.author_role && <>, {fm.author_role}</>}{fm.co_author && <> · co-authored by <strong>{fm.co_author}</strong></>}</span>
          <span className="sep">·</span>
          <span>{formatDate(fm.date)}</span>
          {fm.read_time && (
            <>
              <span className="sep">·</span>
              <span className="read-time">{fm.read_time}</span>
            </>
          )}
        </div>
      </section>

      {fm.hero && (
        <figure className="post-hero-image">
          <img src={fm.hero} alt={fm.hero_alt ?? fm.title} />
        </figure>
      )}

      {fm.pull_quote && (
        <section className="typo-hero">
          <div className="quote-block">
            <div className="who">[{fm.pull_quote_attribution ?? 'Quote'}]</div>
            <p className="log">{fm.pull_quote}</p>
          </div>
        </section>
      )}

      {fm.stats && (
        <section className="stat-hero">
          <div className="grid">
            {fm.stats.map((stat) => (
              <div className="stat" key={stat.label}>
                <span className="num">{stat.num}</span>
                <span className="label">{stat.label}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      <article className="post-body" dangerouslySetInnerHTML={{ __html: post.contentHtml }} />

      <section className="post-foot">
        <Link href="/blog">← All notes</Link>
      </section>
    </BlogShell>
  );
}

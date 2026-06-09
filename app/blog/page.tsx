import type { Metadata } from 'next';
import Link from 'next/link';
import './page.css';
import { BlogShell } from './_BlogChrome';
import { getAllPosts } from '@/lib/posts';

export const metadata: Metadata = {
  title: 'Notes — madezmedia',
  description:
    'Field notes from Mad EZ Media — multi-agent infrastructure, autonomous AI characters, and the systems we ship to operators.',
  openGraph: {
    title: 'Notes — madezmedia',
    description:
      'Field notes from Mad EZ Media — multi-agent infrastructure, autonomous characters, the systems we ship.',
    type: 'website',
    url: 'https://www.madezmedia.com/blog',
    siteName: 'madezmedia',
  },
  alternates: { canonical: '/blog' },
};

function formatDate(iso: string): string {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const d = new Date(iso);
  return `${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
}

export default async function BlogIndex() {
  const posts = await getAllPosts();
  return (
    <BlogShell>
      <section className="index-hero">
        <div className="mzm-eyebrow"><span className="num">N° 01</span>Notes from the studio</div>
        <h1>Field notes. <span className="em">Working systems.</span></h1>
        <p className="deck">
          Long-form writing on multi-agent infrastructure, autonomous characters, and the
          systems we ship to operators. <em>Not marketing.</em> Engineering, decisions,
          incidents, and what we learned the hard way.
        </p>
      </section>

      <section className="posts-list">
        {posts.map((post, i) => (
          <Link key={post.slug} className="post-card" href={`/blog/${post.slug}`}>
            <div className="meta">
              <span><span className="num">N° 0{i + 1}</span>{post.frontmatter.section ?? 'Note'}</span>
              <span className="date">{formatDate(post.frontmatter.date)}</span>
              <span className="read-time">{post.frontmatter.read_time ?? ''}</span>
            </div>
            <div className="body">
              <h2 className="post-title">{post.frontmatter.title}</h2>
              <p className="post-summary">{post.frontmatter.summary}</p>
              {post.frontmatter.tags && (
                <div className="post-tags">
                  {post.frontmatter.tags.map((t) => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
              )}
            </div>
          </Link>
        ))}
      </section>
    </BlogShell>
  );
}

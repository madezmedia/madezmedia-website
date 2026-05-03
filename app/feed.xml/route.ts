import { getAllPosts } from '@/lib/posts';

export const dynamic = 'force-static';

function escape(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

export async function GET() {
  const posts = await getAllPosts();
  const base = 'https://www.madezmedia.com';
  const now = new Date().toUTCString();

  const items = posts
    .map((post) => {
      const fm = post.frontmatter;
      const url = `${base}/blog/${post.slug}`;
      const pubDate = new Date(fm.date).toUTCString();
      return `    <item>
      <title>${escape(fm.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${pubDate}</pubDate>
      <author>noreply@madezmedia.com (${escape(fm.author)})</author>
      <description>${escape(fm.summary)}</description>
      <content:encoded><![CDATA[${post.contentHtml}]]></content:encoded>
    </item>`;
    })
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>madezmedia · Notes</title>
    <link>${base}/blog</link>
    <atom:link href="${base}/feed.xml" rel="self" type="application/rss+xml" />
    <description>Field notes from Mad EZ Media — multi-agent infrastructure, autonomous AI characters, and the systems we ship to operators.</description>
    <language>en-us</language>
    <lastBuildDate>${now}</lastBuildDate>
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}

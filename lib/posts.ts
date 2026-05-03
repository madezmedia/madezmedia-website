import { promises as fs } from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import remarkHtml from 'remark-html';
import remarkGfm from 'remark-gfm';

export type PostFrontmatter = {
  title: string;
  date: string;
  author: string;
  author_role?: string;
  co_author?: string;
  section?: string;
  read_time?: string;
  tags?: string[];
  summary: string;
  hero?: string;
  hero_alt?: string;
  pull_quote?: string;
  pull_quote_attribution?: string;
  subtitle?: string;
  stats?: { num: string; label: string }[];
};

export type Post = {
  slug: string;
  frontmatter: PostFrontmatter;
  contentHtml: string;
  contentMd: string;
};

const POSTS_DIR = path.join(process.cwd(), 'content', 'posts');

export async function getPostSlugs(): Promise<string[]> {
  try {
    const files = await fs.readdir(POSTS_DIR);
    return files
      .filter((f) => f.endsWith('.md'))
      .map((f) => f.replace(/\.md$/, ''));
  } catch {
    return [];
  }
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const fullPath = path.join(POSTS_DIR, `${slug}.md`);
  let raw: string;
  try {
    raw = await fs.readFile(fullPath, 'utf8');
  } catch {
    return null;
  }
  const { data, content } = matter(raw);
  const fm = data as PostFrontmatter;
  if (!fm.title || !fm.date) {
    throw new Error(`Post ${slug} missing required frontmatter (title, date)`);
  }
  const processed = await remark().use(remarkGfm).use(remarkHtml).process(content);
  const contentHtml = processed.toString();
  return {
    slug,
    frontmatter: fm,
    contentHtml,
    contentMd: content,
  };
}

export async function getAllPosts(): Promise<Post[]> {
  const slugs = await getPostSlugs();
  const posts = await Promise.all(slugs.map((s) => getPostBySlug(s)));
  return posts
    .filter((p): p is Post => p !== null)
    .sort((a, b) => (a.frontmatter.date < b.frontmatter.date ? 1 : -1));
}

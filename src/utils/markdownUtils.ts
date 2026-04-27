import { marked } from 'marked';

export interface PostMeta {
  title: string;
  date: string;
  description: string;
  [key: string]: string;
}

export interface Post {
  id: string;
  meta: PostMeta;
  content: string;
}

function parseFrontmatter(raw: string): { meta: PostMeta; body: string } {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) return { meta: { title: '', date: '', description: '' }, body: raw };

  const meta: PostMeta = { title: '', date: '', description: '' };
  for (const line of match[1].split('\n')) {
    const colonIdx = line.indexOf(':');
    if (colonIdx === -1) continue;
    const key = line.slice(0, colonIdx).trim();
    const value = line.slice(colonIdx + 1).trim();
    meta[key] = value;
  }
  return { meta, body: match[2] };
}

const rawFiles = import.meta.glob('../posts/*.md', { query: '?raw', import: 'default' }) as Record<
  string,
  () => Promise<string>
>;

export async function getAllPosts(): Promise<Post[]> {
  const posts: Post[] = [];
  for (const path in rawFiles) {
    const raw = await rawFiles[path]();
    const id = path.replace('../posts/', '').replace('.md', '');
    const { meta, body } = parseFrontmatter(raw);
    const content = await marked(body);
    posts.push({ id, meta, content });
  }
  return posts.sort((a, b) => (a.meta.date < b.meta.date ? 1 : -1));
}

export async function getPost(id: string): Promise<Post | null> {
  const path = `../posts/${id}.md`;
  if (!(path in rawFiles)) return null;
  const raw = await rawFiles[path]();
  const { meta, body } = parseFrontmatter(raw);
  const content = await marked(body);
  return { id, meta, content };
}

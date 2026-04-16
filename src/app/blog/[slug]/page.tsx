import { posts, getPostBySlug } from '@/data/posts';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Link from 'next/link';
import { NewsletterSignup } from '@/components/NewsletterSignup';

export async function generateStaticParams() {
  return posts.map(p => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title} — AI Tool HQ`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.publishedAt,
    },
  };
}

function renderMarkdown(content: string) {
  // Simple markdown-like rendering
  const lines = content.split('\n');
  let html = '';
  let inTable = false;
  let tableRows: string[] = [];

  const flushTable = () => {
    if (tableRows.length > 0) {
      const rows = tableRows.map((row, i) => {
        const cells = row.split('|').filter(c => c.trim());
        const tag = i === 0 ? 'th' : 'td';
        return `<tr>${cells.map(c => `<${tag} class="border border-white/10 px-4 py-2 text-left text-[#d4d3f0]">${c.trim()}</${tag}>`).join('')}</tr>`;
      }).filter((_, i) => i !== 1); // skip separator row
      html += `<div class="overflow-x-auto my-6"><table class="w-full border-collapse border border-white/10 text-sm">${rows.join('')}</table></div>`;
      tableRows = [];
      inTable = false;
    }
  };

  for (const line of lines) {
    if (line.startsWith('|')) {
      inTable = true;
      tableRows.push(line);
      continue;
    }
    if (inTable) flushTable();

    if (line.startsWith('## ')) {
      html += `<h2 class="text-2xl font-bold mt-10 mb-4" style="color:#f1f0ff">${line.slice(3)}</h2>`;
    } else if (line.startsWith('**') && line.endsWith('**')) {
      html += `<p class="font-semibold mt-4" style="color:#d4d3f0">${line.slice(2, -2)}</p>`;
    } else if (line.trim() === '') {
      html += '<br/>';
    } else {
      // Handle inline bold
      const processed = line.replace(/\*\*(.*?)\*\*/g, '<strong style="color:#d4d3f0">$1</strong>');
      html += `<p class="leading-relaxed mb-2" style="color:#a8a7c4">${processed}</p>`;
    }
  }
  if (inTable) flushTable();

  return html;
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      {/* Breadcrumb */}
      <div className="text-sm mb-6" style={{ color: '#8b8aa8' }}>
        <Link href="/blog" className="hover:text-indigo-400 transition-colors">Blog</Link> <span style={{ color: '#8b8aa8' }}>→</span> {post.category}
      </div>

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 text-xs mb-3" style={{ color: '#8b8aa8' }}>
          <span className="px-2 py-1 rounded-full font-medium" style={{ background: 'rgba(99,102,241,0.12)', color: '#a5b4fc', border: '1px solid rgba(99,102,241,0.25)' }}>{post.category}</span>
          <span>·</span>
          <span>{post.readTime} min read</span>
          <span>·</span>
          <span>{new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
        </div>
        <h1 className="text-4xl font-bold leading-tight mb-4" style={{ color: '#f1f0ff' }}>{post.title}</h1>
        <p className="text-xl" style={{ color: '#8b8aa8' }}>{post.excerpt}</p>
      </div>

      {/* Content */}
      <div
        className="mt-8"
        dangerouslySetInnerHTML={{ __html: renderMarkdown(post.content) }}
      />

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mt-10 pt-6" style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        {post.tags.map(tag => (
          <span key={tag} className="text-xs px-3 py-1 rounded-full" style={{ background: 'rgba(255,255,255,0.06)', color: '#8b8aa8' }}>
            {tag}
          </span>
        ))}
      </div>

      {/* Newsletter CTA */}
      <div className="mt-12 rounded-2xl p-8 text-center" style={{ background: '#0d0d14', border: '1px solid rgba(255,255,255,0.08)' }}>
        <h3 className="text-xl font-bold mb-2" style={{ color: '#f1f0ff' }}>Stay Ahead of AI</h3>
        <p className="text-sm mb-4" style={{ color: '#8b8aa8' }}>Weekly roundup of the best new AI tools. No spam, ever.</p>
        <NewsletterSignup />
      </div>

      {/* Back to blog */}
      <div className="mt-8 text-center">
        <Link href="/blog" className="font-medium hover:underline transition-colors" style={{ color: '#818cf8' }}>
          ← Back to all posts
        </Link>
      </div>
    </main>
  );
}

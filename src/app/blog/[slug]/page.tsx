import { posts, getPostBySlug } from '@/data/posts';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Link from 'next/link';
import { NewsletterSignup } from '@/components/NewsletterSignup';

export async function generateStaticParams() {
  return posts.map(p => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
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
        return `<tr>${cells.map(c => `<${tag} class="border border-gray-200 px-4 py-2 text-left">${c.trim()}</${tag}>`).join('')}</tr>`;
      }).filter((_, i) => i !== 1); // skip separator row
      html += `<div class="overflow-x-auto my-6"><table class="w-full border-collapse border border-gray-200 text-sm">${rows.join('')}</table></div>`;
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
      html += `<h2 class="text-2xl font-bold mt-10 mb-4 text-gray-900">${line.slice(3)}</h2>`;
    } else if (line.startsWith('**') && line.endsWith('**')) {
      html += `<p class="font-semibold text-gray-800 mt-4">${line.slice(2, -2)}</p>`;
    } else if (line.trim() === '') {
      html += '<br/>';
    } else {
      // Handle inline bold
      const processed = line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
      html += `<p class="text-gray-700 leading-relaxed mb-2">${processed}</p>`;
    }
  }
  if (inTable) flushTable();

  return html;
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-400 mb-6">
        <Link href="/blog" className="hover:text-indigo-600">Blog</Link> → {post.category}
      </div>

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 text-xs text-gray-400 mb-3">
          <span className="bg-indigo-100 text-indigo-700 px-2 py-1 rounded-full font-medium">{post.category}</span>
          <span>·</span>
          <span>{post.readTime} min read</span>
          <span>·</span>
          <span>{new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 leading-tight mb-4">{post.title}</h1>
        <p className="text-xl text-gray-500">{post.excerpt}</p>
      </div>

      {/* Content */}
      <div
        className="mt-8"
        dangerouslySetInnerHTML={{ __html: renderMarkdown(post.content) }}
      />

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mt-10 pt-6 border-t border-gray-100">
        {post.tags.map(tag => (
          <span key={tag} className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full">
            {tag}
          </span>
        ))}
      </div>

      {/* Newsletter CTA */}
      <div className="mt-12 bg-indigo-50 rounded-2xl p-8 text-center">
        <h3 className="text-xl font-bold mb-2">Stay Ahead of AI</h3>
        <p className="text-gray-500 text-sm mb-4">Weekly roundup of the best new AI tools. No spam, ever.</p>
        <NewsletterSignup />
      </div>

      {/* Back to blog */}
      <div className="mt-8 text-center">
        <Link href="/blog" className="text-indigo-600 font-medium hover:underline">
          ← Back to all posts
        </Link>
      </div>
    </main>
  );
}

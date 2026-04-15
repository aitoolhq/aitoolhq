import { posts } from '@/data/posts';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog — AI Tool HQ',
  description: 'Reviews, comparisons, and guides for the best AI tools. Stay ahead of what\'s worth your time.',
};

export default function BlogPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-2" style={{ color: '#f1f0ff' }}>Blog</h1>
      <p className="mb-10" style={{ color: '#8b8aa8' }}>Reviews, comparisons, and guides — no fluff.</p>

      <div className="space-y-0">
        {posts.map((post, i, arr) => (
          <article
            key={post.slug}
            className="py-8"
            style={{ borderBottom: i < arr.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none' }}
          >
            <div className="flex items-center gap-2 text-xs mb-2" style={{ color: '#8b8aa8' }}>
              <span>{post.category}</span>
              <span>·</span>
              <span>{post.readTime} min read</span>
              <span>·</span>
              <span>{new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
            </div>
            <Link href={`/blog/${post.slug}`} className="group">
              <h2
                className="text-2xl font-bold mb-2 group-hover:text-indigo-400 transition-colors"
                style={{ color: '#f1f0ff' }}
              >
                {post.title}
              </h2>
            </Link>
            <p className="mb-3" style={{ color: '#8b8aa8' }}>{post.excerpt}</p>
            <Link
              href={`/blog/${post.slug}`}
              className="text-sm font-medium hover:underline transition-colors"
              style={{ color: '#818cf8' }}
            >
              Read more →
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}

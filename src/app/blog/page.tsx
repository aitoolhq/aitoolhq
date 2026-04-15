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
      <h1 className="text-4xl font-bold mb-2">Blog</h1>
      <p className="text-gray-500 mb-10">Reviews, comparisons, and guides — no fluff.</p>

      <div className="space-y-8">
        {posts.map(post => (
          <article key={post.slug} className="border-b border-gray-100 pb-8">
            <div className="flex items-center gap-2 text-xs text-gray-400 mb-2">
              <span>{post.category}</span>
              <span>·</span>
              <span>{post.readTime} min read</span>
              <span>·</span>
              <span>{new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
            </div>
            <Link href={`/blog/${post.slug}`}>
              <h2 className="text-2xl font-bold text-gray-900 hover:text-indigo-600 transition mb-2">
                {post.title}
              </h2>
            </Link>
            <p className="text-gray-600 mb-3">{post.excerpt}</p>
            <Link
              href={`/blog/${post.slug}`}
              className="text-indigo-600 text-sm font-medium hover:underline"
            >
              Read more →
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}

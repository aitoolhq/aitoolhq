import Link from 'next/link';
import { getFeaturedTools, tools } from '@/data/tools';
import { categories } from '@/data/categories';
import { getRecentPosts } from '@/data/posts';
import { ToolCard } from '@/components/ToolCard';
import { NewsletterSignup } from '@/components/NewsletterSignup';

export default function HomePage() {
  const featured = getFeaturedTools();

  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-br from-indigo-600 to-violet-700 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Your Headquarters for AI Tools</h1>
          <p className="text-xl text-indigo-100 mb-8">
            The definitive directory of {tools.length}+ AI tools across every category. Discover what&apos;s worth your time.
          </p>
          <Link
            href="/tools"
            className="bg-white text-indigo-700 font-semibold px-8 py-3 rounded-full hover:bg-indigo-50 transition"
          >
            Browse All Tools →
          </Link>
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Browse by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/category/${cat.slug}`}
              className="border border-gray-200 rounded-xl p-4 hover:border-indigo-400 hover:shadow-md transition text-center group"
            >
              <div className="text-3xl mb-2">{cat.emoji}</div>
              <div className="font-semibold text-gray-800 group-hover:text-indigo-600">{cat.name}</div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Tools */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-2 text-center">Featured Tools</h2>
          <p className="text-gray-500 text-center mb-8">Hand-picked tools worth knowing about</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured.map((tool) => (
              <ToolCard key={tool.slug} tool={tool} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/tools"
              className="bg-indigo-600 text-white font-semibold px-8 py-3 rounded-full hover:bg-indigo-700 transition"
            >
              View All {tools.length} Tools
            </Link>
          </div>
        </div>
      </section>

      {/* Recent Blog Posts */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold">Latest from the Blog</h2>
          <Link href="/blog" className="text-indigo-600 font-medium hover:underline text-sm">View all →</Link>
        </div>
        <div className="space-y-6">
          {getRecentPosts(3).map(post => (
            <article key={post.slug} className="border-b border-gray-100 pb-6">
              <div className="flex items-center gap-2 text-xs text-gray-400 mb-1">
                <span>{post.category}</span><span>·</span><span>{post.readTime} min read</span>
              </div>
              <Link href={`/blog/${post.slug}`}>
                <h3 className="text-xl font-bold text-gray-900 hover:text-indigo-600 transition mb-1">{post.title}</h3>
              </Link>
              <p className="text-gray-500 text-sm">{post.excerpt}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="max-w-2xl mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold mb-3">Stay Ahead of AI</h2>
        <p className="text-gray-500 mb-6">
          Weekly roundup of the best new AI tools, delivered to your inbox. No spam, ever.
        </p>
        <NewsletterSignup />
      </section>
    </main>
  );
}

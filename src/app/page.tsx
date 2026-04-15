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
      <section
        className="relative py-24 px-4 overflow-hidden"
        style={{ background: '#0a0a0f' }}
      >
        {/* Background blobs */}
        <div
          className="absolute pointer-events-none"
          style={{
            top: '-100px',
            left: '10%',
            width: '500px',
            height: '500px',
            background: 'radial-gradient(circle, rgba(99,102,241,0.18) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />
        <div
          className="absolute pointer-events-none"
          style={{
            top: '-60px',
            right: '10%',
            width: '400px',
            height: '400px',
            background: 'radial-gradient(circle, rgba(139,92,246,0.15) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div
            className="inline-flex items-center gap-2 text-sm font-medium px-3 py-1.5 rounded-full mb-6"
            style={{
              background: 'rgba(99, 102, 241, 0.12)',
              color: '#a5b4fc',
              border: '1px solid rgba(99, 102, 241, 0.25)',
            }}
          >
            ⚡ {tools.length}+ curated AI tools
          </div>

          <h1
            className="text-6xl md:text-7xl font-bold mb-5 leading-tight tracking-tight"
            style={{ color: '#f1f0ff' }}
          >
            Your Headquarters
            <br />
            <span
              style={{
                background: 'linear-gradient(135deg, #818cf8, #a78bfa)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              for AI Tools
            </span>
          </h1>

          <p
            className="text-xl mb-10 max-w-2xl mx-auto leading-relaxed"
            style={{ color: '#8b8aa8' }}
          >
            We hand-pick the best AI tools across every category so you don&apos;t have to wade through the noise.
          </p>

          <Link
            href="/tools"
            className="inline-flex items-center gap-2 font-semibold px-8 py-3.5 rounded-full text-base transition-opacity hover:opacity-90"
            style={{
              background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
              color: '#fff',
              boxShadow: '0 0 30px rgba(99, 102, 241, 0.4)',
            }}
          >
            Browse All Tools →
          </Link>
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2
          className="text-3xl font-bold mb-2 text-center"
          style={{ color: '#f1f0ff' }}
        >
          Browse by Category
        </h2>
        <p className="text-center mb-10" style={{ color: '#8b8aa8' }}>
          Find the right tool for any job
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/category/${cat.slug}`}
              className="rounded-xl p-4 text-center category-card"
              style={{
                background: '#12121a',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                transition: 'all 0.2s',
              }}
            >
              <div className="text-4xl mb-2">{cat.emoji}</div>
              <div className="font-semibold text-sm" style={{ color: '#d4d3f0' }}>
                {cat.name}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Tools */}
      <section className="py-16 px-4" style={{ background: '#0d0d14' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <div
              className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full mb-3"
              style={{
                background: 'rgba(251, 191, 36, 0.1)',
                color: '#fcd34d',
                border: '1px solid rgba(251, 191, 36, 0.2)',
              }}
            >
              ★ Featured
            </div>
            <h2 className="text-3xl font-bold" style={{ color: '#f1f0ff' }}>
              Hand-Picked Tools
            </h2>
            <p className="mt-2" style={{ color: '#8b8aa8' }}>
              Tools we&apos;ve vetted and actually recommend
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured.map((tool) => (
              <ToolCard key={tool.slug} tool={tool} />
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/tools"
              className="inline-flex items-center gap-2 font-semibold px-8 py-3 rounded-full transition-opacity hover:opacity-80"
              style={{
                background: 'rgba(99, 102, 241, 0.12)',
                color: '#818cf8',
                border: '1px solid rgba(99, 102, 241, 0.3)',
              }}
            >
              View All {tools.length} Tools →
            </Link>
          </div>
        </div>
      </section>

      {/* Recent Blog Posts */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold" style={{ color: '#f1f0ff' }}>
            Latest from the Blog
          </h2>
          <Link
            href="/blog"
            className="text-sm font-medium hover:opacity-80 transition-opacity"
            style={{ color: '#818cf8' }}
          >
            View all →
          </Link>
        </div>
        <div>
          {getRecentPosts(3).map((post, i, arr) => (
            <article
              key={post.slug}
              className="py-6"
              style={{
                borderBottom: i < arr.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none',
              }}
            >
              <div className="flex items-center gap-2 text-xs mb-2" style={{ color: '#8b8aa8' }}>
                <span>{post.category}</span>
                <span>·</span>
                <span>{post.readTime} min read</span>
              </div>
              <Link href={`/blog/${post.slug}`} className="group">
                <h3
                  className="text-lg font-bold mb-1 group-hover:text-indigo-400 transition-colors"
                  style={{ color: '#f1f0ff' }}
                >
                  {post.title}
                </h3>
              </Link>
              <p className="text-sm" style={{ color: '#8b8aa8' }}>
                {post.excerpt}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section
        className="py-20 px-4 text-center relative overflow-hidden"
        style={{ background: '#0d0d14' }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(99,102,241,0.08) 0%, transparent 70%)',
          }}
        />
        <div className="max-w-2xl mx-auto relative z-10">
          <h2 className="text-4xl font-bold mb-3" style={{ color: '#f1f0ff' }}>
            Stay Ahead of AI
          </h2>
          <p className="mb-8" style={{ color: '#8b8aa8' }}>
            Weekly roundup of the best new AI tools, delivered to your inbox. No spam, ever.
          </p>
          <NewsletterSignup />
        </div>
      </section>
    </main>
  );
}

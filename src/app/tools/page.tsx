import { tools } from '@/data/tools';
import { categories } from '@/data/categories';
import { ToolCard } from '@/components/ToolCard';
import { CategoryIcon } from '@/components/CategoryIcon';
import { NewsletterPromo } from '@/components/NewsletterPromo';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'All AI Tools — AI Tool HQ',
  description: 'Browse all AI tools in our directory. Filter by category, pricing, and use case.',
};

export default function ToolsPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-2" style={{ color: '#f1f0ff' }}>All AI Tools</h1>
      <p className="mb-8" style={{ color: '#8b8aa8' }}>{tools.length} tools and counting</p>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 mb-10">
        <Link
          href="/tools"
          className="px-4 py-2 rounded-full text-sm font-medium transition-opacity hover:opacity-90"
          style={{
            background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
            color: '#fff',
          }}
        >
          All
        </Link>
        {categories.map(cat => (
          <Link
            key={cat.slug}
            href={`/category/${cat.slug}`}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-colors hover:text-indigo-400"
            style={{
              border: '1px solid rgba(255,255,255,0.1)',
              color: '#8b8aa8',
            }}
          >
            <CategoryIcon name={cat.icon} size={14} />
            {cat.name}
          </Link>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tools.map(tool => (
          <ToolCard key={tool.slug} tool={tool} />
        ))}
      </div>

      {/* Newsletter CTA */}
      <div className="mt-20">
        <NewsletterPromo />
      </div>
    </main>
  );
}

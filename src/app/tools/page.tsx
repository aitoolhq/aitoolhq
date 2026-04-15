import { tools } from '@/data/tools';
import { categories } from '@/data/categories';
import { ToolCard } from '@/components/ToolCard';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'All AI Tools — AI Tool Scout',
  description: 'Browse all AI tools in our directory. Filter by category, pricing, and use case.',
};

export default function ToolsPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-2">All AI Tools</h1>
      <p className="text-gray-500 mb-8">{tools.length} tools and counting</p>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 mb-10">
        <Link
          href="/tools"
          className="px-4 py-2 rounded-full bg-indigo-600 text-white text-sm font-medium"
        >
          All
        </Link>
        {categories.map(cat => (
          <Link
            key={cat.slug}
            href={`/category/${cat.slug}`}
            className="px-4 py-2 rounded-full border border-gray-300 text-sm font-medium text-gray-600 hover:border-indigo-400 hover:text-indigo-600 transition"
          >
            {cat.emoji} {cat.name}
          </Link>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tools.map(tool => (
          <ToolCard key={tool.slug} tool={tool} />
        ))}
      </div>
    </main>
  );
}

import { categories, getCategoryBySlug } from '@/data/categories';
import { getToolsByCategory } from '@/data/tools';
import { ToolCard } from '@/components/ToolCard';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Link from 'next/link';

export async function generateStaticParams() {
  return categories.map(c => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const cat = getCategoryBySlug(slug);
  if (!cat) return {};
  return {
    title: `Best ${cat.name} AI Tools — AI Tool HQ`,
    description: cat.description,
  };
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) notFound();

  const categoryTools = getToolsByCategory(slug);

  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      <div className="mb-4 text-sm" style={{ color: '#8b8aa8' }}>
        <Link href="/tools" className="hover:text-indigo-400 transition-colors">All Tools</Link>
        <span className="mx-1">→</span>
        {category.name}
      </div>
      <div className="flex items-center gap-3 mb-2">
        <span className="text-4xl">{category.emoji}</span>
        <h1 className="text-4xl font-bold" style={{ color: '#f1f0ff' }}>{category.name}</h1>
      </div>
      <p className="mb-10" style={{ color: '#8b8aa8' }}>{category.description} · {categoryTools.length} tools</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categoryTools.map(tool => (
          <ToolCard key={tool.slug} tool={tool} />
        ))}
      </div>
    </main>
  );
}

import { categories, getCategoryBySlug } from '@/data/categories';
import { getToolsByCategory } from '@/data/tools';
import { ToolCard } from '@/components/ToolCard';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Link from 'next/link';

export async function generateStaticParams() {
  return categories.map(c => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const cat = getCategoryBySlug(params.slug);
  if (!cat) return {};
  return {
    title: `Best ${cat.name} AI Tools — AI Tool Scout`,
    description: cat.description,
  };
}

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const category = getCategoryBySlug(params.slug);
  if (!category) notFound();

  const categoryTools = getToolsByCategory(params.slug);

  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      <div className="mb-2 text-sm text-gray-500">
        <Link href="/tools" className="hover:text-indigo-600">All Tools</Link> → {category.name}
      </div>
      <div className="flex items-center gap-3 mb-2">
        <span className="text-4xl">{category.emoji}</span>
        <h1 className="text-4xl font-bold">{category.name}</h1>
      </div>
      <p className="text-gray-500 mb-10">{category.description} · {categoryTools.length} tools</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categoryTools.map(tool => (
          <ToolCard key={tool.slug} tool={tool} />
        ))}
      </div>
    </main>
  );
}

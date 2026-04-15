import { tools, getToolBySlug } from '@/data/tools';
import { getCategoryBySlug } from '@/data/categories';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Link from 'next/link';

export async function generateStaticParams() {
  return tools.map(t => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const tool = getToolBySlug(params.slug);
  if (!tool) return {};
  return {
    title: `${tool.name} Review & Alternatives — AI Tool Scout`,
    description: tool.description,
  };
}

const pricingColors = {
  free: 'bg-green-100 text-green-700',
  freemium: 'bg-blue-100 text-blue-700',
  paid: 'bg-orange-100 text-orange-700',
};

export default function ToolPage({ params }: { params: { slug: string } }) {
  const tool = getToolBySlug(params.slug);
  if (!tool) notFound();

  const category = getCategoryBySlug(tool.category);

  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-500 mb-6">
        <Link href="/tools" className="hover:text-indigo-600">All Tools</Link>
        {' → '}
        {category && (
          <>
            <Link href={`/category/${category.slug}`} className="hover:text-indigo-600">{category.name}</Link>
            {' → '}
          </>
        )}
        {tool.name}
      </div>

      {/* Header */}
      <div className="flex items-start justify-between mb-6">
        <div>
          <h1 className="text-4xl font-bold text-gray-900 mb-1">{tool.name}</h1>
          <p className="text-xl text-indigo-600 font-medium">{tool.tagline}</p>
        </div>
        <span className={`text-sm font-semibold px-3 py-1 rounded-full ${pricingColors[tool.pricing]}`}>
          {tool.pricing.charAt(0).toUpperCase() + tool.pricing.slice(1)}
        </span>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-6">
        {tool.tags.map(tag => (
          <span key={tag} className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full">
            {tag}
          </span>
        ))}
      </div>

      {/* Description */}
      <div className="prose prose-gray max-w-none mb-8">
        <p className="text-lg text-gray-700 leading-relaxed">{tool.description}</p>
      </div>

      {/* CTA */}
      <div className="flex gap-3 mb-12">
        <a
          href={tool.affiliateUrl || tool.url}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-indigo-600 text-white font-semibold px-8 py-3 rounded-full hover:bg-indigo-700 transition"
        >
          Visit {tool.name} →
        </a>
        {category && (
          <Link
            href={`/category/${category.slug}`}
            className="border border-gray-300 text-gray-600 font-medium px-6 py-3 rounded-full hover:border-indigo-400 hover:text-indigo-600 transition"
          >
            More {category.name} Tools
          </Link>
        )}
      </div>

      {/* Affiliate disclosure */}
      {tool.affiliateUrl && (
        <p className="text-xs text-gray-400 border-t pt-4">
          * This link is an affiliate link. We may earn a commission if you purchase through it, at no extra cost to you.{' '}
          <Link href="/affiliate-disclosure" className="underline hover:text-indigo-500">Learn more</Link>
        </p>
      )}
    </main>
  );
}

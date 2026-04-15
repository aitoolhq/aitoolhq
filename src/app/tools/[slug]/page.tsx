import { tools, getToolBySlug } from '@/data/tools';
import { getCategoryBySlug } from '@/data/categories';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Link from 'next/link';

export async function generateStaticParams() {
  return tools.map(t => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const tool = getToolBySlug(slug);
  if (!tool) return {};
  return {
    title: `${tool.name} Review & Alternatives — AI Tool HQ`,
    description: tool.description,
  };
}

const pricingStyles: Record<string, { background: string; color: string; label: string }> = {
  free: { background: 'rgba(34, 197, 94, 0.12)', color: '#86efac', label: 'Free' },
  freemium: { background: 'rgba(99, 102, 241, 0.12)', color: '#a5b4fc', label: 'Freemium' },
  paid: { background: 'rgba(249, 115, 22, 0.12)', color: '#fdba74', label: 'Paid' },
};

export default async function ToolPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const tool = getToolBySlug(slug);
  if (!tool) notFound();

  const category = getCategoryBySlug(tool.category);
  const pricing = pricingStyles[tool.pricing];

  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      {/* Breadcrumb */}
      <div className="text-sm mb-6" style={{ color: '#8b8aa8' }}>
        <Link href="/tools" className="hover:text-indigo-400 transition-colors">All Tools</Link>
        <span className="mx-1">→</span>
        {category && (
          <>
            <Link href={`/category/${category.slug}`} className="hover:text-indigo-400 transition-colors">{category.name}</Link>
            <span className="mx-1">→</span>
          </>
        )}
        <span style={{ color: '#d4d3f0' }}>{tool.name}</span>
      </div>

      {/* Header */}
      <div className="flex items-start justify-between mb-6">
        <div>
          <h1 className="text-4xl font-bold mb-1" style={{ color: '#f1f0ff' }}>{tool.name}</h1>
          <p className="text-xl font-medium" style={{ color: '#818cf8' }}>{tool.tagline}</p>
        </div>
        <span
          className="text-sm font-semibold px-3 py-1 rounded-full shrink-0 ml-4"
          style={pricing}
        >
          {pricing.label}
        </span>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-6">
        {tool.tags.map(tag => (
          <span
            key={tag}
            className="text-xs px-3 py-1 rounded-full"
            style={{ background: 'rgba(255,255,255,0.06)', color: '#8b8aa8', border: '1px solid rgba(255,255,255,0.08)' }}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Description */}
      <div className="mb-8">
        <p className="text-lg leading-relaxed" style={{ color: '#a8a7c4' }}>{tool.description}</p>
      </div>

      {/* CTA */}
      <div className="flex gap-3 mb-12">
        <a
          href={tool.affiliateUrl || tool.url}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold px-8 py-3 rounded-full transition-opacity hover:opacity-90"
          style={{
            background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
            color: '#fff',
            boxShadow: '0 0 20px rgba(99,102,241,0.35)',
          }}
        >
          Visit {tool.name} →
        </a>
        {category && (
          <Link
            href={`/category/${category.slug}`}
            className="font-medium px-6 py-3 rounded-full transition-colors hover:text-indigo-400"
            style={{
              border: '1px solid rgba(255,255,255,0.12)',
              color: '#8b8aa8',
            }}
          >
            More {category.name} Tools
          </Link>
        )}
      </div>

      {/* Affiliate disclosure */}
      {tool.affiliateUrl && (
        <p
          className="text-xs pt-4"
          style={{ borderTop: '1px solid rgba(255,255,255,0.06)', color: '#8b8aa8' }}
        >
          * This link is an affiliate link. We may earn a commission if you purchase through it, at no extra cost to you.{' '}
          <Link href="/affiliate-disclosure" className="underline hover:text-indigo-400 transition-colors">Learn more</Link>
        </p>
      )}
    </main>
  );
}

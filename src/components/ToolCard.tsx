'use client';

import Link from 'next/link';
import { Tool } from '@/data/tools';

const pricingStyles = {
  free: { background: 'rgba(34, 197, 94, 0.12)', color: '#86efac', label: 'Free' },
  freemium: { background: 'rgba(99, 102, 241, 0.12)', color: '#a5b4fc', label: 'Freemium' },
  paid: { background: 'rgba(249, 115, 22, 0.12)', color: '#fdba74', label: 'Paid' },
};

export function ToolCard({ tool }: { tool: Tool }) {
  const pricing = pricingStyles[tool.pricing];

  return (
    <div
      className="rounded-xl flex flex-col transition-all duration-200 group relative overflow-hidden"
      style={{
        background: '#12121a',
        border: '1px solid rgba(255, 255, 255, 0.08)',
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget;
        el.style.borderColor = 'rgba(99, 102, 241, 0.45)';
        el.style.boxShadow = '0 0 24px rgba(99, 102, 241, 0.12)';
        el.style.transform = 'translateY(-2px)';
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget;
        el.style.borderColor = 'rgba(255, 255, 255, 0.08)';
        el.style.boxShadow = 'none';
        el.style.transform = 'translateY(0)';
      }}
    >
      {/* Top gradient line */}
      <div
        className="h-px w-full"
        style={{ background: 'linear-gradient(90deg, #6366f1, #8b5cf6)' }}
      />

      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1 pr-2">
            <h3 className="font-bold text-base" style={{ color: '#f1f0ff' }}>
              {tool.name}
            </h3>
            <p className="text-sm font-medium mt-0.5" style={{ color: '#818cf8' }}>
              {tool.tagline}
            </p>
          </div>
          <span
            className="text-xs font-semibold px-2.5 py-1 rounded-full shrink-0"
            style={pricing}
          >
            {pricing.label}
          </span>
        </div>

        <p className="text-sm flex-1 mb-4 leading-relaxed" style={{ color: '#8b8aa8' }}>
          {tool.description}
        </p>

        {tool.category && (
          <div className="mb-4">
            <span
              className="text-xs font-medium px-2 py-0.5 rounded-full"
              style={{
                background: 'rgba(129, 140, 248, 0.1)',
                color: '#a5b4fc',
                border: '1px solid rgba(129, 140, 248, 0.2)',
              }}
            >
              {tool.category}
            </span>
          </div>
        )}

        <div className="flex gap-2 mt-auto">
          <Link
            href={`/tools/${tool.slug}`}
            className="flex-1 text-center text-sm font-medium py-2 rounded-lg transition-colors"
            style={{
              border: '1px solid rgba(99, 102, 241, 0.4)',
              color: '#818cf8',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(99, 102, 241, 0.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
            }}
          >
            Learn More
          </Link>
          <a
            href={tool.affiliateUrl || tool.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center text-sm font-medium py-2 rounded-lg transition-all"
            style={{
              background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
              color: '#fff',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 0 16px rgba(99, 102, 241, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            Visit Site →
          </a>
        </div>
      </div>
    </div>
  );
}

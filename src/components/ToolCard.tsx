import Link from 'next/link';
import { Tool } from '@/data/tools';

const pricingColors = {
  free: 'bg-green-100 text-green-700',
  freemium: 'bg-blue-100 text-blue-700',
  paid: 'bg-orange-100 text-orange-700',
};

const pricingLabels = {
  free: 'Free',
  freemium: 'Freemium',
  paid: 'Paid',
};

export function ToolCard({ tool }: { tool: Tool }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-md hover:border-indigo-300 transition flex flex-col">
      <div className="flex items-start justify-between mb-3">
        <div>
          <h3 className="font-bold text-lg text-gray-900">{tool.name}</h3>
          <p className="text-indigo-600 text-sm font-medium">{tool.tagline}</p>
        </div>
        <span className={`text-xs font-semibold px-2 py-1 rounded-full ${pricingColors[tool.pricing]}`}>
          {pricingLabels[tool.pricing]}
        </span>
      </div>
      <p className="text-gray-600 text-sm flex-1 mb-4">{tool.description}</p>
      <div className="flex gap-2 mt-auto">
        <Link
          href={`/tools/${tool.slug}`}
          className="flex-1 text-center border border-indigo-600 text-indigo-600 text-sm font-medium py-2 rounded-lg hover:bg-indigo-50 transition"
        >
          Learn More
        </Link>
        <a
          href={tool.affiliateUrl || tool.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 text-center bg-indigo-600 text-white text-sm font-medium py-2 rounded-lg hover:bg-indigo-700 transition"
        >
          Visit Site →
        </a>
      </div>
    </div>
  );
}

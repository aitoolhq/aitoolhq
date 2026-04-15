import { Metadata } from 'next';
import { NewsletterSignup } from '@/components/NewsletterSignup';

export const metadata: Metadata = {
  title: 'Newsletter — AI Tool HQ',
  description: 'Weekly roundup of the best new AI tools, delivered to your inbox.',
};

export default function NewsletterPage() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-20 text-center">
      <div className="text-5xl mb-6">📬</div>
      <h1 className="text-4xl font-bold mb-4" style={{ color: '#f1f0ff' }}>
        The AI Tool HQ Newsletter
      </h1>
      <p className="text-lg mb-6" style={{ color: '#8b8aa8' }}>
        Every week, we round up the most interesting new AI tools, compare the best options in a category, and highlight what&apos;s actually worth your attention.
      </p>
      <ul
        className="text-left rounded-xl p-6 mb-8 space-y-3 text-sm"
        style={{
          background: '#12121a',
          border: '1px solid rgba(255,255,255,0.08)',
          color: '#a8a7c4',
        }}
      >
        <li>✅ New tools worth knowing about</li>
        <li>✅ Category deep dives and comparisons</li>
        <li>✅ Tips for getting more out of AI</li>
        <li>✅ No fluff, no spam — just signal</li>
      </ul>
      <NewsletterSignup />
      <p className="text-xs mt-4" style={{ color: '#8b8aa8' }}>
        Join thousands of AI enthusiasts. Unsubscribe anytime.
      </p>
    </main>
  );
}

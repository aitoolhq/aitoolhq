import { Metadata } from 'next';
import { NewsletterSignup } from '@/components/NewsletterSignup';

export const metadata: Metadata = {
  title: 'Newsletter — AI Tool Scout',
  description: 'Weekly roundup of the best new AI tools, delivered to your inbox.',
};

export default function NewsletterPage() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-20 text-center">
      <div className="text-5xl mb-6">📬</div>
      <h1 className="text-4xl font-bold mb-4">The AI Tool HQ Newsletter</h1>
      <p className="text-gray-500 text-lg mb-4">
        Every week, we round up the most interesting new AI tools, compare the best options in a category, and highlight what&apos;s actually worth your attention.
      </p>
      <ul className="text-left bg-gray-50 rounded-xl p-6 mb-8 space-y-2 text-gray-600 text-sm">
        <li>✅ New tools worth knowing about</li>
        <li>✅ Category deep dives and comparisons</li>
        <li>✅ Tips for getting more out of AI</li>
        <li>✅ No fluff, no spam — just signal</li>
      </ul>
      <NewsletterSignup />
      <p className="text-xs text-gray-400 mt-4">Join thousands of AI enthusiasts. Unsubscribe anytime.</p>
    </main>
  );
}

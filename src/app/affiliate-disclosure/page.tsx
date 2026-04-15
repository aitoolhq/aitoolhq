import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Affiliate Disclosure — AI Tool HQ',
};

export default function AffiliateDisclosurePage() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8" style={{ color: '#f1f0ff' }}>Affiliate Disclosure</h1>
      <div className="space-y-5 text-base leading-relaxed" style={{ color: '#a8a7c4' }}>
        <p>
          AI Tool HQ participates in affiliate programs. Some links on this site are affiliate links,
          meaning we may earn a commission if you purchase a product or service after clicking through,
          at no additional cost to you.
        </p>
        <p>
          We only recommend tools we genuinely believe are worth your time. Our editorial decisions
          are not influenced by affiliate relationships. Tools without affiliate programs are listed
          and reviewed exactly the same as those with them.
        </p>
        <p>
          If you have questions about our affiliate relationships, feel free to contact us.
        </p>
      </div>
    </main>
  );
}

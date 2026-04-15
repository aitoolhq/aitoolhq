import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Affiliate Disclosure — AI Tool Scout',
};

export default function AffiliateDisclosurePage() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-16 prose prose-gray">
      <h1>Affiliate Disclosure</h1>
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
    </main>
  );
}

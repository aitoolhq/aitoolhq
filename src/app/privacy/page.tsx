import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy — AI Tool HQ',
};

export default function PrivacyPage() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8" style={{ color: '#f1f0ff' }}>Privacy Policy</h1>
      <div className="space-y-5 text-base leading-relaxed" style={{ color: '#a8a7c4' }}>
        <p>
          <strong style={{ color: '#f1f0ff' }}>Last updated: April 2026</strong>
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#f1f0ff' }}>Introduction</h2>
        <p>
          AI Tool HQ ("we," "us," "our," or "Company") operates the aitoolhq.ai website (the "Service").
          This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#f1f0ff' }}>Information Collection and Use</h2>
        <p>
          We collect several different types of information for various purposes to provide and improve our Service to you.
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-2" style={{ color: '#f1f0ff' }}>Usage Data</h3>
        <p>
          When you visit AI Tool HQ, we may automatically collect certain information about your device and how you interact with our site, including:
        </p>
        <ul className="list-disc list-inside ml-4 space-y-2">
          <li>Your IP address</li>
          <li>Browser type and version</li>
          <li>Pages visited and time spent on those pages</li>
          <li>Referral source</li>
          <li>Device information (operating system, device type)</li>
        </ul>
        <p className="mt-4">
          This data helps us understand how our Service is used and allows us to improve the user experience.
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-2" style={{ color: '#f1f0ff' }}>Newsletter Subscriptions</h3>
        <p>
          If you subscribe to our newsletter, we collect your email address. We use this information solely to send you our curated newsletter and related updates. You can unsubscribe at any time by clicking the unsubscribe link in any email we send.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#f1f0ff' }}>Cookies</h2>
        <p>
          We use cookies and similar tracking technologies to track activity on our Service and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#f1f0ff' }}>Third-Party Links</h2>
        <p>
          AI Tool HQ contains links to external sites that are not operated by us. This Privacy Policy does not apply to external websites, and we are not responsible for their privacy practices. We encourage you to review the privacy policy of any site before providing your personal information.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#f1f0ff' }}>Affiliate Disclosures</h2>
        <p>
          Some of the links on AI Tool HQ are affiliate links. When you click these links and make a purchase, we may earn a commission. This does not affect the price you pay. We only recommend products and services we believe in. See our <a href="/affiliate-disclosure" style={{ color: '#818cf8', textDecoration: 'underline' }}>Affiliate Disclosure</a> for more details.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#f1f0ff' }}>Changes to This Privacy Policy</h2>
        <p>
          We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date at the top of this policy.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#f1f0ff' }}>Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us. We're here to help.
        </p>
      </div>
    </main>
  );
}

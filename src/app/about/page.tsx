import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About — AI Tool HQ',
};

export default function AboutPage() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8" style={{ color: '#f1f0ff' }}>About AI Tool HQ</h1>
      <div className="space-y-5 text-base leading-relaxed" style={{ color: '#a8a7c4' }}>
        <p>
          <strong style={{ color: '#f1f0ff' }}>AI tools, actually reviewed.</strong> We cut through the noise and help you find the AI tools that actually work.
        </p>
        <p>
          There are thousands of AI tools out there. Most reviews are shallow, biased, or just listing whatever gets clicks. We do it differently.
        </p>
        <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#f1f0ff' }}>What We Do</h2>
        <p>
          We curate, test, and review AI tools across writing, image generation, coding, video, and more. 
          Every tool on this site has been vetted by humans who actually use them.
        </p>
        <p>
          Our goal is simple: help you discover tools that save time, unlock creativity, or solve real problems. 
          No fluff. No fishing for clicks. Just honest recommendations.
        </p>
        <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#f1f0ff' }}>Who We Are</h2>
        <p>
          We're a small team of makers and builders who live in this AI ecosystem. We use these tools every day, 
          and we want to help others discover the ones that genuinely move the needle.
        </p>
        <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#f1f0ff' }}>Affiliate Disclosure</h2>
        <p>
          AI Tool HQ participates in affiliate programs. Some links on this site are affiliate links, meaning we may earn 
          a commission if you purchase a product or service after clicking through, at no additional cost to you.
        </p>
        <p>
          We only recommend tools we genuinely believe are worth your time. Our editorial decisions are not influenced by 
          affiliate relationships. <a href="/affiliate-disclosure" style={{ color: '#818cf8', textDecoration: 'underline' }}>Learn more about our affiliate disclosure.</a>
        </p>
      </div>
    </main>
  );
}

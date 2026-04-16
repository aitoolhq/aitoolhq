'use client';

import Link from 'next/link';
import { NewsletterSignup } from './NewsletterSignup';

export function NewsletterPromo() {
  return (
    <section className="relative py-20 px-4 overflow-hidden">
      {/* Background gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(135deg, rgba(99,102,241,0.1) 0%, rgba(139,92,246,0.08) 100%)',
          border: '1px solid rgba(99,102,241,0.15)',
        }}
      />
      
      <div className="max-w-2xl mx-auto text-center relative z-10">
        <div
          className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full mb-4"
          style={{
            background: 'rgba(99, 102, 241, 0.12)',
            color: '#a5b4fc',
            border: '1px solid rgba(99, 102, 241, 0.25)',
          }}
        >
          📬 Weekly Newsletter
        </div>
        
        <h2
          className="text-3xl md:text-4xl font-bold mb-3"
          style={{ color: '#f1f0ff' }}
        >
          Get the best AI tools every week
        </h2>
        
        <p
          className="text-lg mb-8 leading-relaxed"
          style={{ color: '#a8a7c4' }}
        >
          Every Thursday: 5 new tools, category deep dives, and what's actually worth your time. No spam, no fluff.
        </p>

        <div className="bg-gradient-to-b from-transparent to-transparent" style={{ background: 'rgba(18,18,26,0.4)' }}>
          <NewsletterSignup />
        </div>

        <p className="text-xs mt-4" style={{ color: '#6b6a80' }}>
          Join thousands of AI enthusiasts. Unsubscribe anytime. See{' '}
          <Link
            href="/newsletter"
            className="underline hover:text-opacity-80 transition-opacity"
            style={{ color: '#818cf8' }}
          >
            past issues
          </Link>
          .
        </p>
      </div>
    </section>
  );
}

'use client';

import { useState } from 'react';

export function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    // TODO: Connect to Mailchimp/Buttondown API
    // For now, simulate success
    await new Promise(r => setTimeout(r, 800));
    setStatus('success');
    setEmail('');
  };

  if (status === 'success') {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-6">
        <p className="text-green-700 font-semibold text-lg">🎉 You&apos;re in!</p>
        <p className="text-green-600 text-sm mt-1">Check your inbox for a confirmation email.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 max-w-md mx-auto">
      <input
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="you@example.com"
        required
        className="flex-1 border border-gray-300 rounded-full px-4 py-3 text-sm focus:outline-none focus:border-indigo-500"
      />
      <button
        type="submit"
        disabled={status === 'loading'}
        className="bg-indigo-600 text-white font-semibold px-6 py-3 rounded-full hover:bg-indigo-700 transition disabled:opacity-60"
      >
        {status === 'loading' ? '...' : 'Subscribe'}
      </button>
    </form>
  );
}

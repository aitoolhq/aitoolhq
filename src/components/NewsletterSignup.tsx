'use client';

import { useState } from 'react';

export function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error' | 'exists'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();

      if (data.success) {
        setStatus(data.alreadySubscribed ? 'exists' : 'success');
        setEmail('');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
        <p className="text-green-700 font-semibold text-lg">🎉 You&apos;re in!</p>
        <p className="text-green-600 text-sm mt-1">Check your inbox to confirm your subscription.</p>
      </div>
    );
  }

  if (status === 'exists') {
    return (
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 text-center">
        <p className="text-blue-700 font-semibold">Already subscribed!</p>
        <p className="text-blue-600 text-sm mt-1">You&apos;re already on the list. Thanks!</p>
      </div>
    );
  }

  return (
    <div>
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
      {status === 'error' && (
        <p className="text-red-500 text-xs text-center mt-2">Something went wrong. Please try again.</p>
      )}
    </div>
  );
}

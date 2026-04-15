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
      <div
        className="rounded-xl p-6 text-center"
        style={{ background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.2)' }}
      >
        <p className="font-semibold text-lg" style={{ color: '#86efac' }}>🎉 You&apos;re in!</p>
        <p className="text-sm mt-1" style={{ color: '#86efac', opacity: 0.8 }}>Check your inbox to confirm your subscription.</p>
      </div>
    );
  }

  if (status === 'exists') {
    return (
      <div
        className="rounded-xl p-6 text-center"
        style={{ background: 'rgba(99,102,241,0.08)', border: '1px solid rgba(99,102,241,0.2)' }}
      >
        <p className="font-semibold" style={{ color: '#a5b4fc' }}>Already subscribed!</p>
        <p className="text-sm mt-1" style={{ color: '#a5b4fc', opacity: 0.8 }}>You&apos;re already on the list. Thanks!</p>
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
          className="flex-1 rounded-full px-4 py-3 text-sm focus:outline-none"
          style={{
            background: '#12121a',
            border: '1px solid rgba(255,255,255,0.12)',
            color: '#f1f0ff',
          }}
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="font-semibold px-6 py-3 rounded-full transition-opacity hover:opacity-90 disabled:opacity-60"
          style={{
            background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
            color: '#fff',
          }}
        >
          {status === 'loading' ? '...' : 'Subscribe'}
        </button>
      </form>
      {status === 'error' && (
        <p className="text-xs text-center mt-2" style={{ color: '#f87171' }}>
          Something went wrong. Please try again.
        </p>
      )}
    </div>
  );
}

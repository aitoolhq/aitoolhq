import Link from 'next/link';

export function Navbar() {
  return (
    <header className="sticky top-0 z-50">
      {/* Top accent bar */}
      <div style={{ height: '2px', background: 'linear-gradient(90deg, #6366f1, #8b5cf6, #6366f1)' }} />
      <nav
        className="border-b backdrop-blur-md"
        style={{
          background: 'rgba(10, 10, 15, 0.95)',
          borderColor: 'rgba(255, 255, 255, 0.08)',
        }}
      >
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl">⚡</span>
            <span className="font-bold text-xl tracking-tight" style={{ color: '#f1f0ff' }}>
              AI Tool <span style={{ color: '#818cf8' }}>HQ</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-6 text-sm font-medium">
            {[
              { href: '/tools', label: 'All Tools' },
              { href: '/category/writing', label: 'Writing' },
              { href: '/category/image', label: 'Image' },
              { href: '/category/coding', label: 'Coding' },
              { href: '/blog', label: 'Blog' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-white"
                style={{ color: '#8b8aa8' }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <Link
            href="/newsletter"
            className="text-sm font-semibold px-4 py-2 rounded-full transition-opacity hover:opacity-90"
            style={{
              background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
              color: '#fff',
              boxShadow: '0 0 16px rgba(99, 102, 241, 0.35)',
            }}
          >
            Newsletter
          </Link>
        </div>
      </nav>
    </header>
  );
}

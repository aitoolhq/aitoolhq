import Link from 'next/link';

const footerLinks = {
  Categories: [
    { href: '/category/writing', label: 'Writing' },
    { href: '/category/image', label: 'Image' },
    { href: '/category/coding', label: 'Coding' },
    { href: '/category/video', label: 'Video' },
  ],
  More: [
    { href: '/tools', label: 'All Tools' },
    { href: '/blog', label: 'Blog' },
    { href: '/newsletter', label: 'Newsletter' },
  ],
  Legal: [
    { href: '/about', label: 'About' },
    { href: '/privacy', label: 'Privacy' },
    { href: '/affiliate-disclosure', label: 'Affiliate Disclosure' },
  ],
};

export function Footer() {
  return (
    <footer
      style={{
        background: '#0a0a0f',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
      }}
    >
      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
        <div>
          <div className="flex items-center gap-1.5 font-bold mb-3" style={{ color: '#f1f0ff' }}>
            <span>⚡</span>
            <span>
              AI Tool <span style={{ color: '#818cf8' }}>HQ</span>
            </span>
          </div>
          <p style={{ color: '#8b8aa8' }}>
            Your headquarters for the best AI tools. Curated, not cluttered.
          </p>
        </div>

        {Object.entries(footerLinks).map(([section, links]) => (
          <div key={section}>
            <div className="font-semibold mb-3" style={{ color: '#d4d3f0' }}>
              {section}
            </div>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="transition-colors hover:text-indigo-400"
                    style={{ color: '#8b8aa8' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div
        className="text-center text-xs py-5"
        style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.05)',
          color: '#8b8aa8',
        }}
      >
        © {new Date().getFullYear()} AI Tool HQ. Some links are affiliate links.
      </div>
    </footer>
  );
}

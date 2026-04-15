import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50 mt-16">
      <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-sm text-gray-600">
        <div>
          <div className="font-bold text-gray-900 mb-3">🤖 AI Tool HQ</div>
          <p className="text-gray-500">Your headquarters for the best AI tools.</p>
        </div>
        <div>
          <div className="font-semibold text-gray-800 mb-3">Categories</div>
          <ul className="space-y-1">
            <li><Link href="/category/writing" className="hover:text-indigo-600">Writing</Link></li>
            <li><Link href="/category/image" className="hover:text-indigo-600">Image</Link></li>
            <li><Link href="/category/coding" className="hover:text-indigo-600">Coding</Link></li>
            <li><Link href="/category/video" className="hover:text-indigo-600">Video</Link></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold text-gray-800 mb-3">More</div>
          <ul className="space-y-1">
            <li><Link href="/tools" className="hover:text-indigo-600">All Tools</Link></li>
            <li><Link href="/blog" className="hover:text-indigo-600">Blog</Link></li>
            <li><Link href="/newsletter" className="hover:text-indigo-600">Newsletter</Link></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold text-gray-800 mb-3">Legal</div>
          <ul className="space-y-1">
            <li><Link href="/about" className="hover:text-indigo-600">About</Link></li>
            <li><Link href="/privacy" className="hover:text-indigo-600">Privacy</Link></li>
            <li><Link href="/affiliate-disclosure" className="hover:text-indigo-600">Affiliate Disclosure</Link></li>
          </ul>
        </div>
      </div>
      <div className="text-center text-xs text-gray-400 pb-6">
        © {new Date().getFullYear()} AI Tool HQ. Some links are affiliate links.
      </div>
    </footer>
  );
}

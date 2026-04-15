import Link from 'next/link';

export function Navbar() {
  return (
    <nav className="border-b border-gray-200 bg-white sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl">🔍</span>
          <span className="font-bold text-xl text-indigo-700">AI Tool HQ</span>
        </Link>
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
          <Link href="/tools" className="hover:text-indigo-600 transition">All Tools</Link>
          <Link href="/category/writing" className="hover:text-indigo-600 transition">Writing</Link>
          <Link href="/category/image" className="hover:text-indigo-600 transition">Image</Link>
          <Link href="/category/coding" className="hover:text-indigo-600 transition">Coding</Link>
          <Link href="/blog" className="hover:text-indigo-600 transition">Blog</Link>
        </div>
        <Link
          href="/newsletter"
          className="bg-indigo-600 text-white text-sm font-semibold px-4 py-2 rounded-full hover:bg-indigo-700 transition"
        >
          Newsletter
        </Link>
      </div>
    </nav>
  );
}

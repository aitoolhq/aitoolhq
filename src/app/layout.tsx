import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  verification: {
    google: 'pub-9866006683837670',
    other: {
      'impact-site-verification': '2ed8900e-ee4d-4184-bdfb-a9a1fd2e7abf',
    },
  },
  title: 'AI Tool HQ — Your Headquarters for AI Tools',
  description: 'Discover and compare the best AI tools across writing, image generation, coding, video, productivity, and more. Curated and updated weekly.',
  keywords: 'AI tools, artificial intelligence, best AI tools, AI directory, ChatGPT alternatives, AI software',
  openGraph: {
    title: 'AI Tool HQ — Your Headquarters for AI Tools',
    description: 'The definitive directory of the best AI tools across every category.',
    url: 'https://aitoolhq.ai',
    siteName: 'AI Tool HQ',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9866006683837670"
          crossOrigin="anonymous"
        />
      </head>
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

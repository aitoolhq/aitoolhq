import { MetadataRoute } from 'next';
import { tools } from '@/data/tools';
import { categories } from '@/data/categories';
import { posts } from '@/data/posts';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://aitoolhq.ai';

  const toolUrls = tools.map(t => ({
    url: `${base}/tools/${t.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  const categoryUrls = categories.map(c => ({
    url: `${base}/category/${c.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  const postUrls = posts.map(p => ({
    url: `${base}/blog/${p.slug}`,
    lastModified: new Date(p.publishedAt),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  return [
    { url: base, lastModified: new Date(), changeFrequency: 'daily', priority: 1 },
    { url: `${base}/tools`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/blog`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/newsletter`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
    ...postUrls,
    ...categoryUrls,
    ...toolUrls,
  ];
}

export type Category = {
  slug: string;
  name: string;
  description: string;
  emoji: string;
};

export const categories: Category[] = [
  { slug: 'writing', name: 'Writing & Content', description: 'AI tools for writing, editing, and content creation', emoji: '✍️' },
  { slug: 'image', name: 'Image Generation', description: 'Generate stunning images and art with AI', emoji: '🎨' },
  { slug: 'video', name: 'Video & Audio', description: 'AI tools for video creation, editing, and voice', emoji: '🎬' },
  { slug: 'coding', name: 'Coding & Dev', description: 'AI-powered coding assistants and developer tools', emoji: '💻' },
  { slug: 'productivity', name: 'Productivity', description: 'Work smarter with AI-powered productivity tools', emoji: '⚡' },
  { slug: 'marketing', name: 'Marketing & SEO', description: 'AI tools for marketing, ads, and search optimization', emoji: '📈' },
  { slug: 'support', name: 'Customer Support', description: 'AI chatbots and support automation tools', emoji: '💬' },
  { slug: 'research', name: 'Research', description: 'AI tools for research, analysis, and discovery', emoji: '🔬' },
  { slug: 'business', name: 'Finance & Business', description: 'AI tools for business, finance, and presentations', emoji: '💼' },
];

export const getCategoryBySlug = (slug: string) => categories.find(c => c.slug === slug);

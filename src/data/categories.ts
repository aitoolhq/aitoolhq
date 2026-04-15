export type Category = {
  slug: string;
  name: string;
  description: string;
  emoji: string;
  icon: string;
};

export const categories: Category[] = [
  { slug: 'writing', name: 'Writing & Content', description: 'AI tools for writing, editing, and content creation', emoji: '✍️', icon: 'PenLine' },
  { slug: 'image', name: 'Image Generation', description: 'Generate stunning images and art with AI', emoji: '🎨', icon: 'Image' },
  { slug: 'video', name: 'Video & Audio', description: 'AI tools for video creation, editing, and voice', emoji: '🎬', icon: 'Video' },
  { slug: 'coding', name: 'Coding & Dev', description: 'AI-powered coding assistants and developer tools', emoji: '💻', icon: 'Code2' },
  { slug: 'productivity', name: 'Productivity', description: 'Work smarter with AI-powered productivity tools', emoji: '⚡', icon: 'Zap' },
  { slug: 'marketing', name: 'Marketing & SEO', description: 'AI tools for marketing, ads, and search optimization', emoji: '📈', icon: 'TrendingUp' },
  { slug: 'support', name: 'Customer Support', description: 'AI chatbots and support automation tools', emoji: '💬', icon: 'MessageSquare' },
  { slug: 'research', name: 'Research', description: 'AI tools for research, analysis, and discovery', emoji: '🔬', icon: 'Search' },
  { slug: 'business', name: 'Finance & Business', description: 'AI tools for business, finance, and presentations', emoji: '💼', icon: 'Briefcase' },
];

export const getCategoryBySlug = (slug: string) => categories.find(c => c.slug === slug);

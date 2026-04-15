import {
  PenLine,
  Image,
  Video,
  Code2,
  Zap,
  TrendingUp,
  MessageSquare,
  Search,
  Briefcase,
  LucideProps,
} from 'lucide-react';

const iconMap: Record<string, React.ComponentType<LucideProps>> = {
  PenLine,
  Image,
  Video,
  Code2,
  Zap,
  TrendingUp,
  MessageSquare,
  Search,
  Briefcase,
};

interface CategoryIconProps extends LucideProps {
  name: string;
}

export function CategoryIcon({ name, ...props }: CategoryIconProps) {
  const Icon = iconMap[name];
  if (!Icon) return null;
  return <Icon {...props} />;
}

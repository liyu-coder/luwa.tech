import { IconType } from 'react-icons';

export type SkillCategory = 'all' | 'frontend' | 'backend' | 'database' | 'devops' | 'architecture';

export interface Skill {
  name: string;
  icon: IconType;
  color: string;
  category: SkillCategory;
  level?: string;
  featured?: boolean;
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  location?: string;
  type: 'work' | 'education';
  badge?: string;
  description: string[];
  technologies?: string[];
  impactMetric?: string;
}

export type ProjectCategory = 'all' | 'ecommerce' | 'web' | 'fullstack' | 'fintech';

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  description: string;
  longDescription: string;
  tags: string[];
  imageUrl: string;
  liveUrl?: string;
  repoUrl?: string;
  features: string[];
  architecture?: string[];
  impactMetric?: string;
  badge?: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  avatarUrl?: string;
  highlight: string;
}

export interface StatItem {
  value: string;
  label: string;
  sublabel: string;
}

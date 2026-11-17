export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  roleHighlights?: string[];
  technologies: string[];
  liveUrl: string;
  image?: string;
  status?: string;
  accentColor?: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location?: string;
  isCurrent?: boolean;
  type?: 'full-time' | 'internship';
  description: string;
  bullets: string[];
  technologies: string[];
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    level: 'Advanced' | 'Proficient' | 'Developing';
    highlight?: boolean;
  }[];
}

export interface Education {
  degree: string;
  field: string;
  institution: string;
  period: string;
  grade?: string;
  details?: string;
  isOngoing?: boolean;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  topics: string[];
  excerpt: string;
  content: string;
}


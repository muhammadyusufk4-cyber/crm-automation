export interface FaqItem {
  question: string;
  answer: string;
}

export interface ProcessStep {
  title: string;
  description: string;
}

export interface Service {
  slug: string;
  name: string;
  shortName: string;
  category: string;
  tagline: string;
  description: string;
  icon: string;
  heroStat: { label: string; value: string };
  benefits: { title: string; description: string }[];
  process: ProcessStep[];
  deliverables: string[];
  timeline: { phase: string; duration: string; description: string }[];
  faqs: FaqItem[];
  relatedServices: string[];
}

export interface Industry {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  icon: string;
  stat: { label: string; value: string };
  problems: string[];
  solutions: { title: string; description: string }[];
  automations: string[];
  outcomes: { label: string; value: string }[];
}

export interface CaseStudy {
  slug: string;
  client: string;
  industry: string;
  logo: string;
  summary: string;
  challenge: string;
  solution: string;
  process: ProcessStep[];
  results: { label: string; value: string }[];
  metrics: { label: string; before: string; after: string }[];
  quote: { text: string; author: string; role: string };
  tools: string[];
  featured?: boolean;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  content: string[];
}

export interface Integration {
  name: string;
  category: "crm" | "ai" | "automation";
}

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  tags: string[];
  image?: string;
  color: string;
  github?: string;
  link?: string;
  featured: boolean;
  category: string;
  year: number;
  status: "live" | "in-progress" | "archived";
  role?: string;
  span?: string;
  isNew?: boolean;
  problem: string;
  dataset: string;
  analysis: string;
  tools: string[];
  insights: string[];
  impact: string;
  metrics: { label: string; value: string }[];
}

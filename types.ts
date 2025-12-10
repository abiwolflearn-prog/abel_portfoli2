export interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  demoLink: string;
  repoLink: string;
  image: string;
}

export interface Experience {
  id: number;
  role: string;
  period: string;
  description: string;
}

export interface NavItem {
  label: string;
  href: string;
}
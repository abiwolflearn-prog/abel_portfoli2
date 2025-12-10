import { Project, Experience, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export const EXPERIENCE: Experience[] = [
  {
    id: 1,
    role: 'Full Stack Developer',
    period: '2023 – Present',
    description: 'Building scalable web applications and interactive user interfaces using the MERN stack.',
  },
  {
    id: 2,
    role: 'Video Editor & YouTuber',
    period: '2021 – Present',
    description: 'Creating engaging tech content, tutorials, and high-quality video edits for a growing audience.',
  },
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'TaskFlow',
    description: 'A comprehensive To-Do & Task Manager application featuring CRUD operations, category filtering, and local storage persistence.',
    tech: ['React', 'Tailwind', 'LocalStorage'],
    demoLink: '#',
    repoLink: '#',
    image: 'https://picsum.photos/600/400?random=1',
  },
  {
    id: 2,
    title: 'SkyCast',
    description: 'Real-time Weather application powered by external APIs. Displays live temperature, humidity, and weather conditions with a clean UI.',
    tech: ['JavaScript', 'OpenWeather API', 'CSS3'],
    demoLink: '#',
    repoLink: '#',
    image: 'https://picsum.photos/600/400?random=2',
  },
  {
    id: 3,
    title: 'ShopEase',
    description: 'A functional E-Commerce mini store featuring a dynamic cart system, product filtering, and responsive product cards.',
    tech: ['React', 'Context API', 'Styled Components'],
    demoLink: '#',
    repoLink: '#',
    image: 'https://picsum.photos/600/400?random=3',
  },
  {
    id: 4,
    title: 'Blogify',
    description: 'A simple, clean multi-page blog application focused on typography and reading experience.',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
    demoLink: '#',
    repoLink: '#',
    image: 'https://picsum.photos/600/400?random=4',
  },
];

export const SKILLS = {
  frontend: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind'],
  backend: ['Node.js', 'Express', 'MongoDB'],
  tools: ['Git', 'VSCode', 'Figma'],
  media: ['Premiere Pro', 'Storyboarding', 'Content Creation'],
};
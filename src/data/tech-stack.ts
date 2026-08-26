import { BiLogoSpringBoot } from 'react-icons/bi';
import { DiScrum } from 'react-icons/di';
import {
  FaAngular,
  FaBootstrap,
  FaCss3Alt,
  FaGitAlt,
  FaHtml5,
  FaJava,
  FaJs,
  FaLaravel,
  FaNodeJs,
  FaReact,
  FaSass,
} from 'react-icons/fa';
import { IoLogoIonic } from 'react-icons/io';
import { RiGatsbyFill, RiNextjsFill } from 'react-icons/ri';
import {
  SiDocker,
  SiJira,
  SiPostgresql,
  SiQuarkus,
  SiTailwindcss,
  SiTypescript,
  SiVite,
} from 'react-icons/si';

import { TechCategory, TechItem } from '@/types/portfolio';

export const techStackCategories: TechCategory[] = [
  {
    category: 'Frontend & Mobile',
    items: [
      { name: 'React.js', icon: FaReact },
      { name: 'Next.js', icon: RiNextjsFill },
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'JavaScript', icon: FaJs },
      { name: 'Angular', icon: FaAngular },
      { name: 'Gatsby', icon: RiGatsbyFill },
      { name: 'Vite', icon: SiVite },
      { name: 'Ionic', icon: IoLogoIonic },
      { name: 'Tailwind CSS', icon: SiTailwindcss },
      { name: 'Sass', icon: FaSass },
      { name: 'Bootstrap', icon: FaBootstrap },
      { name: 'HTML5', icon: FaHtml5 },
      { name: 'CSS3', icon: FaCss3Alt },
    ],
  },
  {
    category: 'Backend & Database',
    items: [
      { name: 'Spring Boot', icon: BiLogoSpringBoot },
      { name: 'Java', icon: FaJava },
      { name: 'Quarkus', icon: SiQuarkus },
      { name: 'Node.js', icon: FaNodeJs },
      { name: 'Laravel', icon: FaLaravel },
      { name: 'PostgreSQL', icon: SiPostgresql },
    ],
  },
  {
    category: 'Tools & Practices',
    items: [
      { name: 'Git', icon: FaGitAlt },
      { name: 'Docker', icon: SiDocker },
      { name: 'Jira', icon: SiJira },
      { name: 'Scrum / Agile', icon: DiScrum },
    ],
  },
];

export const techStackData: TechItem[] = techStackCategories.flatMap(
  (category) => category.items
);

import { StaticImageData } from 'next/image';
import { IconType } from 'react-icons';

export interface TechItem {
  name: string;
  icon: IconType;
}

export interface TechCategory {
  category: string;
  items: TechItem[];
}

export interface EducationItem {
  degree?: string;
  school: string;
  major?: string;
  period: string;
  highlights?: string[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  points: string[];
}

export interface ProjectItem {
  title: string;
  url?: string;
  image: StaticImageData;
  alt: string;
  features: string[];
}

export interface NavItem {
  id: string;
  label: string;
}

export interface SocialItem {
  name: string;
  url: string;
  className: string;
  icon: IconType;
}

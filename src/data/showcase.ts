import bookshelfWebstorage from '@/assets/images/bookshelf-webstorage.webp';
import chitChat from '@/assets/images/chit-chat.webp';
import covidTracker from '@/assets/images/covid-case-tracker.webp';
import cuanCalc2 from '@/assets/images/cuan-cal-v2.webp';
import eatery from '@/assets/images/eatery.webp';
import personalWebsite from '@/assets/images/personal-website.webp';
import storyLife from '@/assets/images/story-life.webp';
import vanillaWebsite from '@/assets/images/vanilla-website.webp';

import { ProjectItem } from '@/types/portfolio';

export const showcaseData: ProjectItem[] = [
  {
    title: 'My Personal Website',
    url: 'https://benni.my.id/',
    image: personalWebsite,
    alt: 'personal-website',
    features: [
      'Engineered with Next.js 16 App Router & Turbopack',
      'Hardware-accelerated GPU particle animations',
      'Aspect-ratio preserving image skeleton shimmer loading',
      'Integrated EmailJS contact pipeline with instant feedback',
      'Offline-capable Progressive Web App (PWA)',
    ],
  },
  {
    title: 'Chit Chat',
    url: 'https://chit-chat-omega.vercel.app',
    image: chitChat,
    alt: 'chit-chat',
    features: [
      'Real-time messaging platform built with React',
      'Bi-directional WebSocket communication via Socket.IO',
      'Instant message delivery & live active user tracking',
      'Responsive, lightweight modern chat interface',
    ],
  },
  {
    title: 'Cuan Calculator V2',
    url: 'https://cuan-calculator-v2.vercel.app/',
    image: cuanCalc2,
    alt: 'cuan-calculator-v2',
    features: [
      'Modern financial calculation suite built with Next.js 13',
      'Styled with Tailwind CSS & accessible Radix UI primitives',
      'Dynamic profit, tax, and investment yield projections',
      'Responsive design with offline PWA support',
    ],
  },
  {
    title: 'Story Life',
    url: 'https://bennibennibenni.github.io/story-life-app/',
    image: storyLife,
    alt: 'story-life',
    features: [
      'Interactive geo-storytelling platform built with Webpack',
      'Modular custom elements built with native Web Components',
      'Interactive map exploration powered by Mapbox GL API',
      'Custom SCSS design system with client-side form validation',
    ],
  },
  {
    title: 'Eatery Catalogue',
    url: 'https://eatery-catalogue.netlify.app/',
    image: eatery,
    alt: 'eatery-catalogue',
    features: [
      'Restaurant discovery Single Page Application (SPA)',
      'Automated testing with Jasmine, Karma, and CodeceptJS',
      'Optimized asset pipeline & lazy loading via Webpack',
      'Built according to WCAG web accessibility (a11y) standards',
    ],
  },
  {
    title: 'Covid Case Tracker',
    url: 'https://covid-case-tracker.vercel.app/',
    image: covidTracker,
    alt: 'covid-case-tracker',
    features: [
      'Epidemiological analytics dashboard built with React',
      'Interactive charts visualizing global & Indonesian trends',
      'Real-time data synchronization with public health APIs',
      'Country-level filtering and search capabilities',
    ],
  },
  {
    title: 'Bookshelf Webstorage',
    url: 'https://bennibennibenni.github.io/bookshelf-webstorage/',
    image: bookshelfWebstorage,
    alt: 'bookshelf-webstorage',
    features: [
      'Personal book tracker with persistent browser Web Storage',
      'Real-time search and dual reading status shelves',
      'Pure vanilla JavaScript DOM manipulation without dependencies',
      'Responsive, mobile-friendly card layout',
    ],
  },
  {
    title: 'Simple Vanilla Website',
    url: 'https://bennibennibenni.github.io/simple-vanilla-website/',
    image: vanillaWebsite,
    alt: 'simple-vanilla-website',
    features: [
      'Pure HTML5, CSS3, and JavaScript showcase',
      'Complex responsive layouts using CSS Flexbox and Grid',
      'Lightweight, dependency-free architecture',
    ],
  },
];

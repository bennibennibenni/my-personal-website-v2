import bookshelfWebstorage from '@/assets/images/bookshelf-webstorage.webp';
import chitChat from '@/assets/images/chit-chat.webp';
import covidTracker from '@/assets/images/covid-case-tracker.webp';
import cuanCalculator from '@/assets/images/cuan-calculator.webp';
import daymark from '@/assets/images/daymark.webp';
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
      'Modern interactive personal portfolio built with Next.js 16 App Router & React 19',
      'Smooth modal article navigation with GPU-accelerated particle animations',
      'Full client-side EmailJS contact pipeline with validation & instant feedback',
      'Aspect-ratio preserving image skeleton shimmer loading & WebP optimization',
      'Offline-ready Progressive Web App (PWA) with SEO metadata & Google Analytics',
    ],
  },
  {
    title: 'Daymark',
    url: 'https://daymark.benni.my.id/',
    image: daymark,
    alt: 'daymark',
    features: [
      'Team & personal attendance tracking app built with React 19, Vite & Supabase',
      'Interactive monthly calendar with color-coded status markers (WFO, WFH, Sick, Leave)',
      'One-tap quick entry logging with frictionless passcode-based authentication',
      'PostgreSQL backend powered by secure Stored Procedures (RPC) for atomic updates',
      'Shared team metrics, monthly breakdown analytics, and responsive design',
    ],
  },
  {
    title: 'Chit Chat',
    url: 'https://chit-chat.benni.my.id/',
    image: chitChat,
    alt: 'chit-chat',
    features: [
      'Instant room-based messaging platform built with React 19, Vite 8 & Socket.IO v4',
      'Real-time typing indicators, GPS location sharing & active online member drawer',
      'User mentions (@You), Web Audio chime alerts, and live server latency monitor',
      'Smart message grouping, consecutive bubble collapsing & native emoji shortcuts',
      'Persistent dark/light theme switching with clean Context & sessionStorage state',
    ],
  },
  {
    title: 'Cuan Calculator',
    url: 'https://cuan-calculator.benni.my.id/',
    image: cuanCalculator,
    alt: 'cuan-calculator',
    features: [
      'Mobile-first financial calculator suite & PWA built with React 19, Vite 7 & Tailwind CSS v4',
      'Stock investment toolkit: Profit/Loss, TP/SL, Dividends, Risk Management & Compound Interest',
      'Money management & utility tools: Fixed Deposit yields, Retirement planning & Live USD/IDR conversion',
      'Performant form validation pipeline powered by React Hook Form, Yup & React Router 7',
      'Offline-ready Progressive Web App with Workbox caching & adaptive maskable mobile icons',
    ],
  },
  {
    title: 'Story Life',
    url: 'https://story-life.benni.my.id/',
    image: storyLife,
    alt: 'story-life',
    features: [
      'Social storytelling platform built with Angular, TypeScript & DummyAPI integration',
      'Handcrafted PaperCSS design system with wavy sketch borders & tactile ink drop shadows',
      'Story & post feed with author cards, real-time like toggling & hashtag navigation',
      'Interactive topic explorer & tag cloud with real-time keyword search filtering',
      'Creator directory, rich user profiles & threaded community discussion comments',
    ],
  },
  {
    title: 'Eatery Catalogue',
    url: 'https://eatery.benni.my.id/',
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
    url: 'https://covid-case-tracker.benni.my.id/',
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
    url: 'https://bookshelf-webstorage.benni.my.id/',
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
    url: 'https://simple-vanilla.benni.my.id/',
    image: vanillaWebsite,
    alt: 'simple-vanilla-website',
    features: [
      'Pure HTML5, CSS3, and JavaScript showcase',
      'Complex responsive layouts using CSS Flexbox and Grid',
      'Lightweight, dependency-free architecture',
    ],
  },
];

<div align="center">
  <a href="https://www.benni.my.id">
    <img alt="Benni Portfolio Logo" src="https://www.benni.my.id/favicon/web-app-manifest-192x192.png" height="160px" />
  </a>
  <h1 align="center">Benni | Personal Website & Portfolio</h1>
  <p align="center">
    A fast, modern, and responsive personal portfolio website showcasing projects, experience, tech stack, and education.
  </p>

  <p align="center">
    <a href="https://benni.my.id" target="_blank">
      <img src="https://img.shields.io/badge/Live%20Demo-benni.my.id-blue?style=for-the-badge&logo=vercel" alt="Live Demo" />
    </a>
    <img src="https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js" alt="Next.js 15" />
    <img src="https://img.shields.io/badge/React-18-61dafb?style=for-the-badge&logo=react" alt="React 18" />
    <img src="https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript" alt="TypeScript" />
    <img src="https://img.shields.io/badge/Turbopack-Ready-black?style=for-the-badge&logo=turbopack" alt="Turbopack Ready" />
  </p>
</div>

---

## 🌟 Features

- **⚡ Blazing Fast Performance**: Powered by Next.js 15 and React 18, with Turbopack for near-instant development startup and HMR.
- **🎨 Modular & Data-Driven Architecture**: Decoupled, single-responsibility article modules driven by type-safe data models in `src/data/`.
- **✨ Hardware-Accelerated Particle Background**: Lightweight 60fps starry space animation utilizing GPU `translate3d` transforms.
- **🖼️ Image Skeleton & Shimmer Placeholders**: Aspect-ratio preserving skeleton placeholders with smooth fade-in transitions to eliminate layout shifts (CLS).
- **🔤 Self-Hosted Web Fonts**: Optimized `Source Sans 3` via `next/font/google` with zero render-blocking requests.
- **📬 Interactive Contact Form**: Built with EmailJS, real-time input handling, loading spinner animation, and accessible status notification banners.
- **📱 Fully Responsive**: Tailored layouts across mobile, tablet, and widescreen desktop devices.
- **🚀 Progressive Web App (PWA)**: Offline caching and installable app support via `next-pwa`.
- **📊 Analytics & SEO**: Built-in Google Analytics (`@next/third-parties/google`), dynamic Open Graph metadata, and sitemap generation.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Library**: [React 18](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Bundler & Tooling**: [Turbopack](https://turbo.build/pack) & [Webpack](https://webpack.js.org/)
- **Styling**: Modular CSS Architecture with Design Tokens & CSS Variables
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)
- **Email Service**: [EmailJS](https://www.emailjs.com/)
- **Analytics**: [Google Analytics](https://analytics.google.com/)
- **Code Quality**: ESLint, Prettier, Husky, and Commitlint

---

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx                # Root layout with font configuration and Google Analytics
│   └── page.tsx                  # Main page orchestrator & modal navigation
├── assets/
│   └── images/                   # Optimized WebP assets & portfolio screenshots
├── components/
│   ├── articles/                 # Isolated modal article components
│   │   ├── article-wrapper.tsx   # Reusable modal container with close button
│   │   ├── tech-stack-article.tsx# Tech stack grid
│   │   ├── education-article.tsx # Education timeline
│   │   ├── experience-article.tsx# Work experience entries
│   │   ├── showcase-article.tsx  # Project showcase cards
│   │   └── contact-article.tsx   # Contact form with EmailJS & inline alerts
│   ├── header.tsx                # Profile header, avatar, & dynamic navigation
│   ├── footer.tsx                # Copyright footer & backdrop overlay
│   ├── next-image.tsx            # Next.js image wrapper with skeleton shimmer
│   └── main.tsx                  # Article orchestrator component
├── data/                         # Type-safe structured content
│   ├── tech-stack.ts             # Technologies & icons
│   ├── education.ts              # Education history
│   ├── experience.ts             # Professional experience entries
│   ├── showcase.ts               # Portfolio projects & feature highlights
│   ├── navigation.ts             # Navigation items & modal targets
│   └── socials.ts                # Social profiles & links
├── styles/                       # Modular CSS architecture
│   ├── variables.css             # Theme design tokens & CSS custom properties
│   ├── reset.css                 # CSS reset & custom scrollbars
│   ├── typography.css            # Headings, text styles, and image shimmer keyframes
│   ├── particles.css             # Space particle animations
│   ├── components/               # Component-specific styles
│   │   ├── forms.css             # Inputs, action buttons, & loading spinner
│   │   ├── header.css            # Header & nav layout
│   │   ├── main.css              # Modals, project cards, & notifications
│   │   └── footer.css            # Footer & background backdrop
│   └── globals.css               # Global stylesheet entrypoint
└── types/
    └── portfolio.ts              # TypeScript interfaces (TechItem, ProjectItem, etc.)
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 18.18 or higher recommended)
- [pnpm](https://pnpm.io/) (or `npm` / `yarn`)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/bennibennibenni/my-personal-website-v2.git
   cd my-personal-website-v2
   ```

2. **Install dependencies**:
   ```bash
   pnpm install
   ```

3. **Run the development server**:
   ```bash
   pnpm dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📜 Available Scripts

| Command | Description |
| :--- | :--- |
| `pnpm dev` | Starts the development server with **Turbopack** |
| `pnpm dev:webpack` | Starts the development server using Webpack |
| `pnpm build` | Builds the application for production |
| `pnpm start` | Starts the production build server |
| `pnpm lint` | Runs Next.js ESLint checks |
| `pnpm lint:fix` | Automatically fixes ESLint & formatting issues |
| `pnpm typecheck` | Runs the TypeScript type checker (`tsc --noEmit`) |
| `pnpm format` | Formats all files using Prettier |
| `pnpm format:check` | Checks code formatting with Prettier |

---

## 👤 Author

- **Benni** — [@bennibennibenni](https://github.com/bennibennibenni)
- **Website**: [benni.my.id](https://benni.my.id)
- **LinkedIn**: [Benni](https://www.linkedin.com/in/benni-0b6016142/)

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

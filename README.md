# 🌌 Lokeswar ⚡ | Gen AI Engineer

> **[Explore the Live Vibe →](https://lokeshwarlakhi.github.io/)**

To be honest, I mostly vibe-coded this into existence. It's a cinematic dashboard for my technical world—best experienced live. 

---

![Desktop Preview](public/imgs/gallery/desktop.png)

---

## 🏗️ Repository Architecture

This codebase is crafted to be extremely clean, modular, and easy to navigate:

```text
portfolio/
├── public/                 # Static assets served directly (images, sitemaps, robots)
│   ├── imgs/               # Custom category images (leo, movies, gallery, tech icons)
│   ├── robots.txt          # Search engine crawling rules (SEO)
│   └── sitemap.xml         # Auto-generated route index (SEO)
├── src/                    # Primary application codebase
│   ├── blogs/              # Raw Markdown (.md) editorial publications
│   ├── components/         # Modular React components
│   │   ├── layout/         # Base layout wrappers (Navbar, Footer)
│   │   ├── sections/       # Feature sections (Hero, About, TechStack, Projects, Contact)
│   │   └── ui/             # Reusable UX utilities (CursorGlow, ScrollProgress, Section)
│   ├── data/               # Centralized config source-of-truth (siteData.ts)
│   ├── lib/                # Shared utilities & services (blog parsing, EmailJS, class merge)
│   ├── pages/              # Primary routing views (Home, BlogArchive, BlogDetail, Recs, Leo)
│   ├── types/              # Type-safe TypeScript descriptors (index.ts)
│   ├── App.tsx             # Root router & layout mounting
│   ├── index.css           # Styling system (Tailwind directives & custom Markdown classes)
│   └── main.tsx            # DOM initialization
├── index.html              # Primary entry HTML document (SEO & custom JSON-LD schemas)
├── tailwind.config.js      # Styling scale config
└── vite.config.ts          # Bundler and deployment compiler config
```

---

## 🚀 Quickstart & Setup Wiki

To run the project locally:

```bash
# 1. Install dependencies
npm install

# 2. Start the local dev server
npm run dev
```

For complete instructions on configuring `.env` variables, integrating EmailJS/Buttondown, writing blogs with custom media, customizing design templates, and setting up automatic GitHub Actions deploys, see the detailed **[Setup & Customization Wiki (SETUP.md)](SETUP.md)**.




---
<div align="center">
  Built with ❤️ and questionable amounts of coffee.
</div>

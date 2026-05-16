# Premium Cinematic Developer Portfolio (Vite + React)

A world-class, production-ready developer portfolio architected for speed, aesthetics, and simplicity. Built specifically for **GitHub Pages** with a data-driven philosophy and a markdown-powered blog system.

## 🚀 Tech Stack

- **Framework**: React 18 + Vite (ESM)
- **Styling**: Tailwind CSS v3
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Routing**: React Router (HashRouter for GH Pages compatibility)
- **Blog System**: Markdown (`react-markdown`) + Frontmatter (`gray-matter`)
- **Deployment**: `gh-pages`

## 📁 Project Structure

```text
/src
  /blogs          # Your markdown blog posts (.md)
  /components
    /layout       # Global layout elements (Navbar, Footer)
    /sections     # Page sections (Hero, About, Projects, etc.)
    /ui           # Reusable UI primitives
  /data           # Central source of truth (siteData.ts)
  /lib            # Shared utilities (blog parsing, cn)
  /pages          # Page components (Home, BlogDetail)
  /types          # TypeScript interfaces
/public           # Static assets (images, favicon)
```

## 🛠️ How to Customize

### 1. Update Personal Data
Everything on the website is controlled via `src/data/siteData.ts`. Simply edit this file to update your bio, projects, skills, and social links. The UI will automatically re-render based on this data.

### 2. Add Blog Posts
To add a new blog post:
1. Create a `.md` file in `src/blogs/`.
2. Add frontmatter at the top:
   ```markdown
   ---
   title: "Your Title"
   date: "2026-05-15"
   description: "Brief summary"
   tags: ["Tag1", "Tag2"]
   cover: "https://unsplash.com/..."
   ---
   # Your Content
   ```
3. The blog section will automatically detect and list the new post.

## 🚢 Deployment (GitHub Pages)

This project is pre-configured for GitHub Pages.

1. **Update `vite.config.ts`**:
   Change the `base` property to your repository name:
   ```typescript
   base: '/your-repo-name/',
   ```

2. **Deploy**:
   Run the following command:
   ```bash
   npm run deploy
   ```
   This will build the project and push the `dist` folder to the `gh-pages` branch.

## 🏗️ Local Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start dev server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

## 🎨 Design Philosophy

The website uses a **Luxury Dark-Mode** aesthetic:
- **Primary Color**: `#ffd166` (Warm Gold)
- **Background**: `#0b1020` (Deep Navy)
- **Typography**: `JetBrains Mono` for a technical, premium feel.
- **Glassmorphism**: Subtle blurs and borders for a high-end interaction feel.

---

Built with ❤️ by Antigravity AI.

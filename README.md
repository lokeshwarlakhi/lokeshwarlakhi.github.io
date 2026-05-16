# 🌌 Lokeswar | Gen AI Engineer

> **[View Live Portfolio →](https://lokeshwarlakhi.github.io/)**

A premium, cinematic personal brand website showcasing futuristic design, motion effects, and a deep focus on the GenAI & LLM ecosystem. Built with a data-driven architecture for seamless maintenance and high-performance delivery.

---

## 📱 Responsive Experience

![Desktop View](public/imgs/gallery/desktop.png)

---

## ⚡ Technical Stack

- **Core:** React 18, TypeScript, Vite
- **Motion:** Framer Motion (Cinematic transitions & scroll effects)
- **Styling:** Tailwind CSS (Glassmorphism & dark mode)
- **Icons:** Simple Icons (Colored brand assets) & Lucide React
- **Content:** Centralized `siteData.ts` (JSON-driven architecture)
- **Blog:** Markdown-based local CMS with dynamic parsing

## 🚀 Key Features

- **Identity Dashboard:** A unified, high-impact view of professional persona and expertise.
- **Brand Ecosystem:** Real colored technology icons for high-quality professional presentation.
- **Cinematic UX:** Smooth scroll interactions, glassmorphic cards, and subtle glow effects.
- **Responsive Architecture:** Fully optimized for Mobile, Tablet, and Desktop viewports.
- **Dynamic Content:** Entire portfolio updates instantly via a single configuration file.

## 🛠️ How to Customize

### 1. Update Personal Data
Everything on the website is controlled via `src/data/siteData.ts`. Simply edit this file to update your bio, projects, skills, and social links. The UI will automatically re-render based on this data.

### 2. Add Blog Posts
To add a new blog post:
1. Create a `.md` file in `src/blogs/`.
2. Add frontmatter at the top (title, date, description, tags, cover).
3. The blog section will automatically detect and list the new post.

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

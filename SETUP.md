# ⚙️ Complete Setup & Customization Wiki

This guide provides exhaustive step-by-step instructions to set up, configure, run, customize, and deploy this portfolio and blogging platform.

---

## 📋 Table of Contents
1. [Prerequisites & System Setup](#1-prerequisites--system-setup)
2. [Local Installation & Development](#2-local-installation--development)
3. [Configuration & Copy Customization](#3-configuration--copy-customization)
4. [Writing Blog Publications](#4-writing-blog-publications)
5. [Third-Party Integrations Setup](#5-third-party-integrations-setup)
   - [EmailJS (Contact Form)](#emailjs-contact-form)
   - [Buttondown (Newsletter Subscriptions)](#buttondown-newsletter-subscriptions)
6. [Auto-Deployment with GitHub Actions](#6-auto-deployment-with-github-actions)
7. [Manual Deployment Workflows](#7-manual-deployment-workflows)
8. [Troubleshooting & FAQs](#8-troubleshooting--faqs)

---

## 1. Prerequisites & System Setup
Before running the project locally, ensure your computer has the following tools installed:

### Node.js (v18 or higher)
To check if you already have Node.js and npm (Node Package Manager) installed, run:
```bash
node -v
npm -v
```
*   **If not installed**: Download and install the LTS (Long Term Support) version from [nodejs.org](https://nodejs.org/).
*   **Version Manager (Optional but Recommended)**: If you manage multiple Node projects, use [nvm](https://github.com/nvm-sh/nvm):
    ```bash
    nvm install 18
    nvm use 18
    ```

---

## 2. Local Installation & Development

### 1. Clone the Codebase
Clone the project repository to your computer and navigate to the directory:
```bash
git clone https://github.com/lokeshwarlakhi/lokeshwarlakhi.github.io.git
cd lokeshwarlakhi.github.io
```

### 2. Install Project Dependencies
Run `npm install` to download all package dependencies specified in [package.json](file:///Users/lokeshwarlakhi/Desktop/codespace/portfolio/package.json):
```bash
npm install
```
This installs core packages like React 18, Vite, Tailwind CSS, Framer Motion, and Markdown compilation libraries.

### 3. Launch the Local Dev Server
Start the local server with hot reloading enabled:
```bash
npm run dev
```
Open **[http://localhost:5173](http://localhost:5173)** in your browser. Any edits you make to React components, styling, or config files will update instantly on the screen without reloading the page.

---

## 3. Configuration & Copy Customization

The portfolio is fully config-driven. The single source of truth is [siteData.ts](file:///Users/lokeshwarlakhi/Desktop/codespace/portfolio/src/data/siteData.ts). Open this file to customize:

*   **`metadata`**: Global page header details (HTML Title, description, keywords, OpenGraph sharing cards).
*   **`hero`**: Your main title, subtitles, CTA buttons, and resume links.
*   **`about`**: Detailed paragraphs and path references to your portrait image.
*   **`skills`**: Tech stacks categorized with specific Lucide Icon names (mapped dynamically in the UI).
*   **`projects`**: Project titles, descriptions, stack tags, repository links, and custom layout configurations.
*   **`experience`**: Timeline entries with job descriptions and tools used.
*   **`interests`**: Personal hobbies (Chess, Movies, hiking, EPL) complete with visual covers.
*   **`recommendations`**: Curated grids of movies, series, books, and podcasts.

---

## 4. Writing Blog Publications

Blogs are located inside [src/blogs/](file:///Users/lokeshwarlakhi/Desktop/codespace/portfolio/src/blogs). 

### How to Create a New Blog Post
1. Create a new `.md` file inside `src/blogs/` (e.g., `optimizing-vite.md`).
2. Add the **YAML Frontmatter** metadata block at the absolute top of the file:
   ```markdown
   ---
   title: "Optimizing Vite Build Times"
   date: "2026-05-21"
   description: "Learn how to optimize your client builds using code-splitting and asset loading."
   tags: ["Vite", "Frontend", "Performance"]
   cover: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format"
   ---
   ```
   *   `title`: The header of your blog post.
   *   `date`: Format `YYYY-MM-DD` (used for chronological sorting).
   *   `tags`: String array used to display metadata pills.
   *   `cover`: URL to an Unsplash image or local asset path under `/public/imgs/`.
3. Add your Markdown content immediately below the trailing `---` line.

### Inserting Centered Media (HTML Raw Parsing)
The Markdown engine uses `rehype-raw`, allowing you to embed raw HTML syntax alongside Markdown for fine-grained layout control.
*   **Example (Centered Image with Custom Borders)**:
    ```html
    <p align="center"> 
        <img src="https://media.giphy.com/media/example/giphy.gif" alt="Description" width="300" height="240"> 
    </p>
    ```

---

## 5. Third-Party Integrations Setup

To make the email forms and newsletter fully operational, create a `.env` file in the root directory (based on `.env.example`) and fill in your keys:

### EmailJS (Contact Form)
The contact form uses [EmailJS](https://www.emailjs.com/) to route emails directly from your static site without a backend.
1. Sign up on **EmailJS.com** and connect an email service (like Gmail).
2. Go to **Email Templates** and create a new template. Ensure your template maps these exact placeholder variables:
   *   `{{from_name}}`
   *   `{{from_email}}`
   *   `{{subject}}`
   *   `{{message}}`
   *   `{{timestamp}}`
3. Retrieve your IDs and add them to your local `.env` file:
   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

### Buttondown (Newsletter Subscriptions)
Newsletter capture utilizes [Buttondown](https://buttondown.email/).
1. Register on **Buttondown.email** and verify your account.
2. In your local `.env` file, add your Buttondown username:
   ```env
   VITE_BUTTONDOWN_USERNAME=your_buttondown_username
   ```
3. Set your Buttondown confirmation redirect link in the Buttondown dashboard to `https://<yourusername>.github.io/#/thanks` so readers are redirected to your custom easter-egg thank you page upon confirming.

---

## 6. Auto-Deployment with GitHub Actions

A pre-configured GitHub Actions workflow ([deploy.yml](file:///Users/lokeshwarlakhi/Desktop/codespace/portfolio/.github/workflows/deploy.yml)) automatically compiles and publishes the site to the `gh-pages` branch.

### Triggers
*   **Automatic Trigger**: Runs on push/merge to the `main` branch **if and only if** changes are made to the `src/blogs/**` directory or the workflow file itself.
*   **Manual Trigger**: Can be run on demand from the **Actions** tab on your GitHub repository.

### Setup GitHub Secrets (CRITICAL)
For the static site to compile correctly with working integrations, you must add your `.env` variables as Secrets in your GitHub Repository:
1. Navigate to your repository on **GitHub.com**.
2. Click **Settings** (tab at the top) ➔ **Secrets and variables** (left sidebar) ➔ **Actions**.
3. Under the **Repository secrets** section, click **New repository secret** for each of these:
   *   `VITE_EMAILJS_SERVICE_ID`
   *   `VITE_EMAILJS_TEMPLATE_ID`
   *   `VITE_EMAILJS_PUBLIC_KEY`
   *   `VITE_BUTTONDOWN_USERNAME`
4. Copy/paste the respective secret values from your local `.env` file. These secrets are securely injected into the environment variables during the GitHub runner build step.

### Configure GitHub Pages
To make sure GitHub serves your built site:
1. Go to your repository settings on **GitHub.com**.
2. Click **Pages** in the left sidebar.
3. Under **Build and deployment** ➔ **Source**, select **Deploy from a branch**.
4. Set the **Branch** to `gh-pages` and folder to `/root`, and click **Save**.

---

## 7. Manual Deployment Workflows

If you make modifications to code (e.g. updating TypeScript files, CSS, or `siteData.ts`) outside of the blogs folder, deploy manually using these npm scripts:

*   **Build-Only Deployment**:
    ```bash
    npm run deploy
    ```
    *Builds the production files and pushes to the `gh-pages` branch without tagging.*
*   **Version Tagged Deployments** (Bumps version, creates Git tag, builds, and deploys):
    ```bash
    npm run deploy:patch # Version 1.0.2 ➔ 1.0.3 (bugfixes/minor copy changes)
    npm run deploy:minor # Version 1.0.2 ➔ 1.1.0 (new features/layouts)
    npm run deploy:major # Version 1.0.2 ➔ 2.0.0 (complete rewrite)
    ```

---

## 8. Troubleshooting & FAQs

### 🛑 Issue: Workflow PAT Scope Error (`main -> main [remote rejected]`)
*   **Symptom**: `refusing to allow a Personal Access Token to create or update workflow .github/workflows/deploy.yml without workflow scope`
*   **Resolution**: 
    1. Go to GitHub ➔ **Settings** ➔ **Developer Settings** ➔ **Personal Access Tokens** ➔ **Tokens (classic)**.
    2. Click on the token you use in your local terminal.
    3. Check the **`workflow`** scope checkbox.
    4. Click **Update token**.
    5. Erase cached git credentials locally by running `git credential-osxkeychain erase` (input `host=github.com` and `protocol=https` and press Enter twice), then retry `git push` pasting the updated token when prompted.

### 🛑 Issue: Environment variables missing on live site
*   **Symptom**: Contact form fails or newsletter form doesn't connect on the live site, but works fine locally.
*   **Resolution**: Verify that you added all repository secrets (`VITE_...`) under **Settings ➔ Secrets and variables ➔ Actions** on GitHub. The GitHub Actions runner cannot access your local `.env` file, so the secrets must be stored in GitHub to be baked in during compilation.

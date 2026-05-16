# 🛠️ Setup & Customization Guide

Welcome! If you're looking to use this cinematic portfolio template, you're in the right place. This guide will help you transform this vibe-coded masterpiece into your own professional dashboard.

![Desktop Preview](public/imgs/gallery/desktop.png)

## 🚀 Key Features

- **Identity Dashboard:** A unified, high-impact view of professional persona and expertise.
- **Brand Ecosystem:** Real colored technology icons for high-quality professional presentation.
- **Cinematic UX:** Smooth scroll interactions, glassmorphic cards, and subtle glow effects.
- **Responsive Architecture:** Fully optimized for Mobile, Tablet, and Desktop viewports.
- **Dynamic Content:** Entire portfolio updates instantly via a single configuration file.

---

## 🏗️ Getting Started

### 1. Prerequisites
Ensure you have **Node.js** (v18+) and **npm** installed on your machine.

### 2. Installation
Clone the repository and install the dependencies:

```bash
git clone https://github.com/lokeshwarlakhi/lokeshwarlakhi.github.io.git
cd lokeshwarlakhi.github.io
npm install
```

### 3. Local Development
Run the development server to see your changes in real-time:

```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🎨 How to Customize

### 1. The "Source of Truth"
The entire website is data-driven. You don't need to dig through complex JSX to change your details.
- **File:** `src/data/siteData.ts`
- **What to edit:** Bio, skills, projects, experience, and social links.

### 2. Adding Blog Posts
The blog system automatically parses markdown files.
1. Navigate to `src/blogs/`.
2. Create a new `.md` file.
3. Add the following frontmatter at the top:
```markdown
---
title: "Your Post Title"
date: "2026-05-16"
description: "A short summary of your post"
tags: ["AI", "WebDev"]
cover: "https://images.unsplash.com/..."
---
# Your content starts here...
```

### 3. Contact Form (EmailJS)
The contact form is powered by **EmailJS**, which works flawlessly on static sites like GitHub Pages.

1.  Create a free account at [EmailJS.com](https://www.emailjs.com/).
2.  Add a **New Service** (e.g., Gmail) and note the `Service ID`.
3.  Create an **Email Template** with these variables:
    - `{{from_name}}`
    - `{{from_email}}`
    - `{{subject}}`
    - `{{message}}`
    - `{{timestamp}}`
4.  Copy your **Public Key** from the `Account` tab.
5.  Create a `.env` file in the root directory (using `.env.example` as a template) and paste your keys:
```env
VITE_EMAILJS_SERVICE_ID=your_id
VITE_EMAILJS_TEMPLATE_ID=your_id
VITE_EMAILJS_PUBLIC_KEY=your_key
```

### 4. Newsletter (Buttondown)
The newsletter system uses **Buttondown**, the simplest way to manage mailing lists on static sites.

1.  Create a free account at [Buttondown.email](https://buttondown.email/).
2.  Go to your **Settings** and find your `Username`.
3.  Add it to your `.env` file:
```env
VITE_BUTTONDOWN_USERNAME=your_username
```

### 5. Custom "Thank You" Page
A hidden, witty confirmation page is available at `#/thanks`. Use this as your Buttondown redirect URL to keep the cinematic experience.

1.  In Buttondown, go to **Settings** -> **Subscribers** -> **Confirmation**.
2.  Set the **Redirect URL** to: `https://yourusername.github.io/#/thanks`.
3.  **Customize:** You can edit the witty copy and meme image in `src/data/siteData.ts` under the `thanksPage` object.
4.  **Meme Image:** Replace `public/imgs/gallery/thanks_meme.png` with your own easter egg.

---

## 🚢 Deployment (GitHub Pages)

This template is pre-configured for GitHub Pages. 

1. Update the `base` in `vite.config.ts` if you aren't using a user/organization site (`username.github.io`).
2. Run the deployment script:
```bash
npm run deploy
```

---

<div align="center">
  Happy vibe-coding! ⚡
</div>

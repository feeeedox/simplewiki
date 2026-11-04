---
title: Project Structure
description: Learn how the SimpleWiki project is organized and where to find the most important files.
navigation:
  title: Project Structure
  order: 3
---

# Project Structure

SimpleWiki is built on top of Nuxt 4 and follows its modern application structure. Most of your work will happen inside the `content/` directory, while Nuxt handles the application itself.

---

## Directory Overview

```text
simplewiki/
├── app/
│   ├── app.vue
│   ├── app.config.ts
│   ├── assets/
│   ├── components/
│   └── pages/
├── content/
│   ├── .navigation.yml
│   └── ...
├── public/
├── nuxt.config.ts
└── package.json
```

---

## app/

The `app/` directory contains the entire frontend application. This follows the default Nuxt 4 project structure and includes everything related to your application's UI.

### app.vue

The root component of your application.

This file acts as the main entry point and wraps all pages and layouts.

### app.config.ts

Contains application-level configuration.

Use this file to define runtime settings such as theme colors or other values that should be available throughout your application.

### assets/

Contains files processed during the build.

Typical contents include:

- CSS stylesheets
- Fonts

### components/

Reusable Vue components used throughout the wiki.

Examples include:

- Custom alerts
- Cards
- Hero sections
- Navigation components

These components can also be embedded directly inside Markdown using MDC.

### pages/

Contains application pages that are not managed by Nuxt Content.

Most documentation sites won't require any changes here, as all documentation pages are generated from the `content/` directory.

---

## content/

This is the heart of your wiki.

Every Markdown file inside this directory automatically becomes a page on your website.

```text
content/
├── index.md
├── getting-started/
│   ├── installation.md
│   └── project-structure.md
└── guides/
```

### File-based Routing

Each Markdown file automatically maps to a URL.

| File | URL |
| :--- | :--- |
| `content/index.md` | `/` |
| `content/about.md` | `/about` |
| `content/guides/example.md` | `/guides/example` |

---

## .navigation.yml

Every folder inside `content/` can contain a `.navigation.yml` file.

This file lets you customize how the sidebar is generated.

Common options include:

- Navigation titles
- Ordering
- Redirects
- Additional metadata

Example:

```yaml
title: Getting Started
```

If no `.navigation.yml` file exists, SimpleWiki automatically generates the navigation from your folders and Markdown files.

---

## public/

Files inside the `public/` directory are served directly without any processing.

Typical examples include:

- `favicon.ico`
- Open Graph images
- `robots.txt`
- Static downloads

These files are available exactly as they appear in the directory.

---

## nuxt.config.ts

The central configuration file for your project.

Here you can configure:

- Nuxt modules
- Site metadata
- SEO
- Runtime configuration
- Build options

---

## package.json

Contains the project's dependencies and available scripts.

Common commands include:

```bash
npm run dev
npm run generate
npm run preview
```

---

## Where You'll Spend Most of Your Time

For most users, only a few directories are relevant:

| Directory | Purpose |
| :--- | :--- |
| `content/` | Write your documentation |
| `app/assets/` | Customize styles and assets |
| `app/components/` | Create reusable Vue components |
| `public/` | Store static files |

The remaining files are part of the Nuxt application and usually only need to be modified when customizing the wiki itself.
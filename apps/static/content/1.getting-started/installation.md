---
title: Installation
description: Learn how to set up your own SimpleWiki instance and start creating documentation.
navigation:
  title: Installation
  order: 2
---

# Installation

Setting up **SimpleWiki** only takes a few minutes. Clone the repository, install the dependencies, and start editing the Markdown files to build your own wiki.

---

## Requirements

Before you begin, make sure you have the following installed:

- **Node.js** 20 or newer
- **npm**, **pnpm**, **yarn**, or **bun**
- **Git**

---

## Clone the Repository

Clone the project from GitHub and navigate into the project directory.

```bash
git clone https://github.com/feeeedox/simplewiki.git
cd simplewiki
```

---

## Install Dependencies

Install all required packages using your preferred package manager.

```bash
npm install
```

or

```bash
pnpm install
```

---

## Start the Development Server

Launch the development server.

```bash
npm run dev
```

Your wiki will now be available at:

```
http://localhost:3000
```

Any changes you make to the Markdown files are reflected instantly thanks to hot module replacement (HMR).

---

## Updating SimpleWiki

Keeping your SimpleWiki installation up to date is simple. The included upgrade script downloads the latest framework files while preserving your own content and configuration.

Run:

```bash
node upgrade.mjs
```

### Preview an Upgrade

To see what would be updated without changing any files:

```bash
node upgrade.mjs --dry-run
```

### Update from another Branch

You can also update from a different branch, for example the development branch:

```bash
node upgrade.mjs --branch=dev
```

::info-box{type="info"}
The upgrade script preserves your personal content, including:
- `content/`
- `public/`
- `app/app.config.ts`
Framework files such as components, pages, and configuration files are updated automatically.
::

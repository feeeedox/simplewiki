---
title: Creating Your First Wiki
description: Learn how to create your first SimpleWiki pages using Markdown files and navigation configuration.
navigation:
  title: Creating Your First Wiki
  order: 4
---

# Creating Your First Wiki

Creating a wiki with **SimpleWiki** is simple. Pages are created by adding Markdown files inside the `content/` directory. The folder structure automatically defines the URL structure of your documentation.

---

## Rename the page 

You can access the `app/app.config.ts` file to change the name of your wiki. This name will be displayed in the header and used for SEO purposes.

```ts
export default defineAppConfig({
  wikiName: 'My Awesome Wiki',
})  
```

## Create Your First Pages

All wiki pages are stored inside the `content/` directory.

Create a new Markdown file:

```text
content/my-first-page.md
```

Add your content:

```md
---
title: My First Page
description: This is my first SimpleWiki page.
---

# My First Page

Welcome to my new wiki!
```

The page is now available at:

```
/my-first-page
```

---

## Using Folders

You can organize your documentation by creating folders.

Example:

```text
content/
├── getting-started/
│   ├── installation.md
│   └── project-structure.md
└── guides/
    └── my-first-guide.md
```

The folder structure automatically creates the URL:

```
content/guides/my-first-guide.md
```

becomes:

```
/guides/my-first-guide
```

This makes it easy to organize large documentation projects.

---

# Frontmatter

Every Markdown page can contain frontmatter at the top of the file.

Frontmatter is written in YAML and contains metadata about the page.

Example:

```md
---
title: Example Page
description: An example documentation page.
navigation:
  title: Example
---
```

Common properties:

| Property | Description |
| :--- | :--- |
| `title` | The main title of the page |
| `description` | Short description used for SEO and previews |
| `navigation.title` | Custom title shown in the sidebar |

---

# Navigation

SimpleWiki automatically generates navigation based on your content structure.

For more control, you can use `.navigation.yml`.

Example:

```text
content/
└── guides/
    ├── .navigation.yml
    └── first-guide.md
```

`.navigation.yml`:

```yaml
title: Guides
```

This changes the displayed navigation title without changing the folder name.

---

## Ordering Pages

You can define the order of pages in your navigation using the `navigation.order` property inside the page frontmatter.

Example:

```yaml
---
title: Installation
navigation:
  title: Installation
  order: 1
---
```

Another page:

```yaml
---
title: Project Structure
navigation:
  title: Project Structure
  order: 2
---
```

Pages with a lower `order` value will appear first in the navigation.

Example:

```text
1. Welcome
2. Installation
3. Project Structure
4. Creating Your First Wiki
```

Using `navigation.order` allows you to create a consistent documentation flow while keeping your content structure simple.

---

# Adding Markdown Content

SimpleWiki supports standard Markdown syntax.

Example:

```md
# Heading

## Subheading

This is a paragraph.

- Item one
- Item two

**Bold text**

`Inline code`
```

You can also use advanced features such as:

- Code blocks
- Tables
- Links
- Images
- MDC components

---

# Development Workflow

While developing your wiki, run:

```bash
npm run dev
```

Every change inside the `content/` directory is automatically detected.

You can create, edit, and organize pages without restarting the server.

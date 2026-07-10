---
title: Markdown Syntax
description: Learn the supported Markdown syntax for creating documentation pages in SimpleWiki.
navigation:
  title: Markdown Syntax
  order: 1
---

# Markdown Syntax

SimpleWiki uses **Markdown** as the main format for writing documentation. Markdown allows you to create structured and readable pages without writing HTML.

This page covers the most commonly used Markdown features.

---

# Headings

Headings are used to structure your documentation.

```md
# Heading 1

## Heading 2

### Heading 3

#### Heading 4

##### Heading 5
```

Result:

# Heading 1

## Heading 2

### Heading 3

#### Heading 4

##### Heading 5

A page should usually contain only one `# Heading 1`, which is used as the main page title.

---

# Text Formatting

Markdown provides simple syntax for formatting text.

```md
**Bold text**

*Italic text*

~~Strikethrough text~~

`Inline code`
```

Result:

**Bold text**

*Italic text*

~~Strikethrough text~~

`Inline code`

---

# Links

Links can be created using the following syntax:

```md
[Nuxt Website](https://nuxt.com)
```

Result:

[Nuxt Website](https://nuxt.com)

You can use links to reference:

- External websites
- Other documentation pages
- Resources

---

# Lists

## Unordered Lists

Use `-` to create bullet points.

```md
- Apple
- Banana
- Orange
```

Result:

- Apple
- Banana
- Orange

---

## Nested Lists

Lists can contain sub-items.

```md
- Fruits
  - Apple
  - Banana
- Vegetables
```

Result:

- Fruits
  - Apple
  - Banana
- Vegetables

---

## Ordered Lists

Use numbers for ordered steps.

```md
1. Install dependencies
2. Create your first page
3. Deploy your wiki
```

Result:

1. Install dependencies
2. Create your first page
3. Deploy your wiki

---

# Blockquotes

Blockquotes are useful for notes, quotes, or highlighted information.

```md
> This is a blockquote.
```

Result:

> This is a blockquote.

Multiple lines are supported:

```md
> SimpleWiki makes documentation easy.
>
> Write content in Markdown and publish instantly.
```

---

# Horizontal Rules

Horizontal rules separate sections.

```md
---
```

Result:

---

# Line Breaks

To create a new line inside a paragraph, add two spaces at the end of a line.

Example:

```md
First line.  
Second line.
```

Result:

First line.  
Second line.

---

# Escaping Characters

Some Markdown characters have special meanings.

You can escape them using a backslash:

```md
\*This is not italic\*
```

Result:

\*This is not italic\*

Common characters that can be escaped:

```
\*
\_
\#
\[
\]
```

---

# Combining Markdown

Markdown elements can be combined together.

Example:

```md
## Installation Guide

Follow these steps:

1. Clone the repository
2. Install dependencies

**Important:** Make sure Node.js is installed.
```

This allows you to create structured documentation pages with minimal effort.
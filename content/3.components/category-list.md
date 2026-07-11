---
title: Category List
description: Display related categories at the bottom of documentation pages using the SimpleWiki category-list component.
navigation:
  title: Category List
  order: 15
---

# Category List

The `category-list` component displays a list of categories related to the current page.

It is designed to be placed at the end of a documentation page to help users discover related topics.

---

## Basic Usage

```md
::category-list
---
items:
  - label: "Getting Started"
    to: "/categories/getting-started"
  - label: "Components"
    to: "/categories/components"
  - label: "Guides"
    to: "/categories/guides"
---
::
```

Result:

::category-list
---
items:
  - label: "Getting Started"
    to: "/categories/getting-started"
  - label: "Components"
    to: "/categories/components"
  - label: "Guides"
    to: "/categories/guides"
---
::

---

## Without Links

Categories can also be displayed without navigation.

```md
::category-list
---
items:
  - label: "Documentation"
  - label: "Reference"
---
::
```

Result:

::category-list
---
items:
  - label: "Documentation"
  - label: "Reference"
---
::

---

## Multiple Categories

You can add as many categories as needed.

```md
::category-list
---
items:
  - label: "Nuxt"
    to: "/categories/nuxt"
  - label: "Markdown"
    to: "/categories/markdown"
  - label: "MDC"
    to: "/categories/mdc"
---
::
```

Result:

::category-list
---
items:
  - label: "Nuxt"
    to: "/categories/nuxt"
  - label: "Markdown"
    to: "/categories/markdown"
  - label: "MDC"
    to: "/categories/mdc"
---
::

---

## Recommended Placement

Category lists are usually placed at the **end of a documentation page** after the main content.

Example:

```md
# Documentation Page

Main content goes here.

---

::category-list
---
items:
  - label: "Components"
    to: "/components"
  - label: "Guides"
    to: "/guides"
---
::
```

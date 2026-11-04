---
title: Reference List
description: Display a list of external references using the SimpleWiki reference-list component.
navigation:
  title: Reference List
  order: 14
---

# Reference List

The `reference-list` component displays a collection of external links with optional descriptions.

It is useful for sources, further reading, documentation links, or related resources.

---

## Basic Usage

```md
::reference-list
---
items:
  - title: "Nuxt Content Documentation"
    url: "https://content.nuxtjs.org/"
    note: "Official documentation for Nuxt Content."
  - title: "SimpleWiki GitHub Repository"
    url: "https://github.com/simplewiki/simplewiki"
---
::
```

Result:

::reference-list
---
items:
  - title: "Nuxt Content Documentation"
    url: "https://content.nuxtjs.org/"
    note: "Official documentation for Nuxt Content."
  - title: "SimpleWiki GitHub Repository"
    url: "https://github.com/simplewiki/simplewiki"
---
::

---

## With Notes

References can include additional information using the `note` property.

```md
::reference-list
---
items:
  - title: "Vue Documentation"
    url: "https://vuejs.org/"
    note: "Official Vue.js documentation."
---
::
```

Result:

::reference-list
---
items:
  - title: "Vue Documentation"
    url: "https://vuejs.org/"
    note: "Official Vue.js documentation."
---
::

---

## Multiple References

You can add multiple entries to create a complete source list.

```md
::reference-list
---
items:
  - title: "Nuxt.js Official Website"
    url: "https://nuxt.com/"
  - title: "Tailwind CSS Documentation"
    url: "https://tailwindcss.com/"
    note: "Utility-first CSS framework documentation."
  - title: "TypeScript Documentation"
    url: "https://www.typescriptlang.org/"
---
::
```

Result:

::reference-list
---
items:
  - title: "Nuxt.js Official Website"
    url: "https://nuxt.com/"
  - title: "Tailwind CSS Documentation"
    url: "https://tailwindcss.com/"
    note: "Utility-first CSS framework documentation."
  - title: "TypeScript Documentation"
    url: "https://www.typescriptlang.org/"
---
::

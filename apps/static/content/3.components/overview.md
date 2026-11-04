---
title: Components Overview
description: Learn how to use SimpleWiki custom MDC components inside Markdown pages.
navigation:
    title: Overview
    order: 1
---

# Components Overview

SimpleWiki extends standard Markdown with **MDC (Markdown Components)**.

MDC allows you to use Vue components directly inside your Markdown files, making it possible to create interactive and visually enhanced documentation pages.

---

## What is MDC?

MDC is a Markdown syntax extension that allows Vue components to be embedded directly into content files.

Instead of writing custom HTML, you can use reusable components:

```md
::component-name
Content
::
```

Components can contain:

* Text
* Markdown formatting
* Properties
* Custom behavior

---

## Using Components

Components are written directly inside your Markdown files.

Example:

```md
::info-box{type="info"}
This is an information message.
::
```

The component will automatically be rendered when the page is generated.

## Creating Custom Components

Because SimpleWiki is built with Nuxt and Vue, additional components can be created and added to your own wiki.

Custom components can be placed inside:

```text
app/components/
```

After creating a component, it can be used directly inside Markdown.
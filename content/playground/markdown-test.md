---
title: Markdown Test
description: An overview of all native Markdown and MDC features.
navigation:
  title: Markdown Test
  hide: true
---

# Heading 1 (H1)

Ideally, use an H1 only once per file as the main page title.

## Heading 2 (H2)

### Heading 3 (H3)

#### Heading 4 (H4)

##### Heading 5 (H5)

---

## Text Formatting

You can make text **bold**, *italic*, or ~~strikethrough~~.  
Inline `code` is also perfect for variables or short commands.

* This is **bold text inside a list**.
* Here is a [link to Google](https://google.com) with a regular title.

---

## Lists and Quotes

### Unordered List

- Apple
- Banana
  - Subitem A
  - Subitem B
- Orange

### Ordered List

1. First step
2. Second step
3. Third step

### Blockquotes

> "The best thing about Nuxt Content is that it understands Vue components directly inside Markdown."
> — An enthusiastic developer

---

## 3. Code Blocks (with Syntax Highlighting)

Nuxt Content uses Shiki by default to provide excellent syntax highlighting. You can also highlight specific lines or assign filenames:

```javascript {2}
// This line is displayed normally
console.log("This line is visually highlighted!");
const content = "Nuxt Content rocks";
```

## Table

| Component | Installation | Required |
| :--- | :--- | :--- |
| MongoDB | [Installation Guide](#) | Yes | {#mongodb}
| Redis | [Installation Guide (Debian 10)](#) | Yes | {#redis}
| NATS | [Installation Guide](#) | Yes | {#nats}
| potatocloud | [Repository](#) | Yes | {#potatocloud}

# Documentation for :highlight[Important Core Features]

This is a regular paragraph where we want to
:highlight[highlight a specific word].

And the best part: it works perfectly inside lists as well.

- This is a normal list item.
- This is an :highlight[extremely important point] with inherited styling.

::info-box{type="alert" width="60%"}
**Box**: This is an alert box.
::

::info-box{type="download" width="60%"}
**Box**: This is a download box.
::

::info-box{type="help" width="60%"}
**Box**: This is a help box.
::

::info-box{type="important" width="60%"}
**Box**: This is an important box.
::

::info-box{type="info" width="60%"}
**Box**: This is an information box.
::

::info-box{type="tip" width="60%"}
**Box**: This is a tip box.
::

::info-box{type="todo" width="60%"}
**Box**: This is a TODO box.
::

## Image Examples

![Alternative text for the image](/images/dramatic-landscape.jpg)

---

![My Screenshot](/images/dramatic-landscape.jpg "This is the image caption")

---

![A smaller image](/images/dramatic-landscape.jpg){width="50%" style="display: block; margin: 0 auto;"}

---

::nuxt-img{src="/images/dramatic-landscape.jpg" width="300" height="200" format="webp" loading="lazy"}
::

## Videos

In Nuxt Content, you can embed videos using standard HTML tags, native Vue components, or external embeds (such as YouTube).

### Local Videos (HTML5)

For videos stored inside your `public/` directory, you can use the standard HTML5 `<video>` tag directly in Markdown:

<video src="/videos/bunny.mp4" controls width="100%" poster="/images/video-thumbnail.jpg">
  Your browser does not support the video tag.
</video>



### YouTube Videos

We use `@nuxt/scripts` for a privacy-friendly (GDPR-compliant) embed. The video is only loaded after the user clicks the play button.

::youtube{id="d_IFKP1Ofq0"}
::

---

### Optional: Use a Different Thumbnail Size

::youtube{id="d_IFKP1Ofq0" thumb-size="hqdefault"}
::
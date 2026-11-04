---
title: Images
description: Learn how to add and customize images in SimpleWiki documentation pages.
navigation:
    title: Images
    order: 5
---

# Images

Images are an important part of documentation. They can be used for screenshots, diagrams, illustrations, or visual explanations.

SimpleWiki supports standard Markdown images as well as the Nuxt Image component.

---

## Basic Images

The simplest way to add an image is using standard Markdown syntax.

```md
![Alternative text](/images/example.png)
```

The text inside the brackets is used as the image's alternative text.

---

## Image Location

Static images should be stored inside the `public/` directory.

Example:

```text
public/
└── images/
    └── example.png
```

The image can then be accessed using:

```text
/images/example.png
```

---

## Image Captions

You can add a title attribute to display additional information.

Example:

```md
![Screenshot](/images/dashboard.png "Dashboard overview")
```

The title is shown when hovering over the image.

---

## Image Size

Images can be customized using attributes.

Example:

```md
![Landscape](/images/landscape.png){width="50%"}
```

This allows you to control the displayed size.

Common values:

```md
{width="25%"}
{width="50%"}
{width="500px"}
```

---

## Image Styling

Additional HTML attributes can be added.

Example:

```md
![Centered Image](/images/example.png){style="display: block; margin: 0 auto;"}
```

This can be used for:

* Centering images
* Adding custom styling
* Adjusting layout behavior

---

## Nuxt Image Component

SimpleWiki also supports the Nuxt Image component through MDC.

Example:

```none
::nuxt-img{src="/images/example.png" width="300" height="200" format="webp" loading="lazy"}
::
```

This provides additional features such as:

* Automatic optimization
* Responsive images
* Modern image formats
* Lazy loading

---

## Responsive Images

For better performance, use optimized images whenever possible.

Example:

```md
::nuxt-img{src="/images/example.png" width="800" format="webp" loading="lazy"}
::
```

The image will automatically be optimized during rendering.
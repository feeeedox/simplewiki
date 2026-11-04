---
title: See Also
description: Add related pages to the end of a document using the See Also component.
navigation:
    title: See Also
    order: 16
---

# See Also

The `SeeAlso` component displays a list of related pages, helping readers discover additional documentation on similar topics.

It is typically placed near the end of a page.

---

## Basic Usage

Pass an array of items to the `items` prop.

```mdc
::see-also
---
items:
    - title: "Installation"
        to: "/installation"
    - title: "Markdown Guide"
        to: "/markdown"
---
::
```

Result:

::see-also
---
items:
    - title: "Installation"
        to: "/installation"
    - title: "Markdown Guide"
        to: "/markdown"
---
::

---

## With Descriptions

Each item can optionally include a short description.

```mdc
::see-also
---
items:
    - title: "Installation"
        to: "/installation" 
        description: "Set up your SimpleWiki instance."
    - title: "Markdown Guide"
        to: "/markdown"
        description: "Learn the supported Markdown syntax."
    - title: "Code Blocks"
        to: "/mdc/code-blocks"
        description: "Display syntax-highlighted code examples."    
---
::
```

Result:

::see-also
---
items:
    - title: "Installation"
        to: "/installation" 
        description: "Set up your SimpleWiki instance."
    - title: "Markdown Guide"
        to: "/markdown"
        description: "Learn the supported Markdown syntax."
    - title: "Code Blocks"
        to: "/mdc/code-blocks"
        description: "Display syntax-highlighted code examples."    
---
::

---

## Item Properties

| Property      | Type                  | Description                           |
| ------------- | --------------------- | ------------------------------------- |
| `title`       | `string`              | The text displayed for the link.      |
| `to`          | `string`              | The internal route to navigate to.    |
| `description` | `string` *(optional)* | Additional text shown after the link. |
| `external`    | `boolean` *(optional)*| If `true`, the link opens in a new tab.|

The `to` property should point to an existing page within your documentation.

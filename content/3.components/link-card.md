---
title: Link Card
description: Create highlighted links to other pages using the SimpleWiki link card component.
navigation:
    title: Link Card
    order: 17
---------

# Link Card

The `LinkCard` component displays a highlighted link with a title, optional description, and navigation arrow.

It is useful for creating navigation elements inside documentation pages, for example linking to related guides or important sections.

---

## Basic Usage

Provide a target route and a title.

```mdc
::link-card{to="/installation" title="Installation"}
::
```

Result:

::link-card{to="/installation" title="Installation"}
::

---

## With Description

Use the `description` property to provide additional information about the linked page.

```mdc
::link-card
---
to: "/installation"
title: "Installation"
description: "Learn how to install and configure your own SimpleWiki instance."
---
::
```

Result:

::link-card
---
to: "/installation"
title: "Installation"
description: "Learn how to install and configure your own SimpleWiki instance."
---
::

---

## Properties

| Property      | Type                  | Description                            |
| ------------- | --------------------- | -------------------------------------- |
| `to`          | `string`              | The internal route the card links to.  |
| `title`       | `string`              | The title displayed inside the card.   |
| `description` | `string` *(optional)* | Additional text shown below the title. |

The `to` property should point to an existing page inside your SimpleWiki documentation.

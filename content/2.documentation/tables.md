---
title: Tables
description: Learn how to create and format tables in SimpleWiki using Markdown syntax.
navigation:
    title: Tables
    order: 3
---

# Tables

Tables are a simple way to organize structured information in your documentation.

SimpleWiki supports standard Markdown tables with alignment options and additional features from Nuxt Content.

---

## Basic Tables

A table consists of columns separated by `|` characters.

Example:

```md
| Feature  | Description                |
| :------- | :------------------------- |
| Markdown | Write documentation        |
| MDC      | Add interactive components |
```

Result:

| Feature  | Description                |
| :------- | :------------------------- |
| Markdown | Write documentation        |
| MDC      | Add interactive components |

---

## Column Alignment

You can control the alignment of columns using `:` in the separator row.

### Left Alignment

```md
| Feature  | Description          |
| :------- | :------------------- |
| Markdown | Documentation format |
```

Result:

| Feature  | Description          |
| :------- | :------------------- |
| Markdown | Documentation format |

---

### Center Alignment

```md
|  Feature |      Description     |
| :------: | :------------------: |
| Markdown | Documentation format |
```

Result:

|  Feature |      Description     |
| :------: | :------------------: |
| Markdown | Documentation format |

---

### Right Alignment

```md
|    Feature | Version |
| ---------: | ------: |
| SimpleWiki |     1.0 |
```

Result:

|    Feature | Version |
| ---------: | ------: |
| SimpleWiki |     1.0 |

---

## Complex Tables

Tables can contain:

* Links
* Inline code
* Bold text
* Other Markdown formatting

Example:

```md
| Component | Installation        | Required |
| :-------- | :------------------ | :------- |
| MongoDB   | [Guide](#)          | Yes      |
| Redis     | `apt install redis` | No       |
```

Result:

| Component | Installation        | Required |
| :-------- | :------------------ | :------- |
| MongoDB   | [Guide](#)          | Yes      |
| Redis     | `apt install redis` | No       |

---

## Table IDs

Tables can be assigned IDs for referencing.

Example:

```md
| Component | Required |
| :-------- | :------- |
| MongoDB   | Yes      |
| Redis     | No       |

{#database-components}
```

The ID can be used to reference the table from other parts of your documentation.

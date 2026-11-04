---
title: Info Boxes
description: Display styled information messages using SimpleWiki MDC components.
navigation:
    title: Info Boxes
    order: 3
---

# Info Boxes

The `info-box` component displays styled messages inside your documentation.

It is useful for:

* Tips
* Warnings
* Important information
* Additional notes

---

## Basic Usage

```md
::info-box{type="info"}
This is an information box.
::
```

Result:

::info-box{type="info"}
This is an information box.
::

---

# Available Types

The component supports different styles using the `type` property.

| Type        | Purpose                          |
| :---------- | :------------------------------- |
| `info`      | General information              |
| `tip`       | Helpful suggestions              |
| `important` | Important notes                  |
| `alert`     | Warnings or critical information |
| `help`      | Help messages                    |
| `download`  | Download-related information     |
| `todo`      | Tasks or unfinished items        |

---

## Examples

### Tip

```md
::info-box{type="tip"}
Remember to backup your files.
::
```

::info-box{type="tip"}
Remember to backup your files.
::

---

### Warning

```md
::info-box{type="alert"}
This action cannot be undone.
::
```

::info-box{type="alert"}
This action cannot be undone.
::

---

### Custom Content

Info boxes support Markdown formatting.

```md
::info-box{type="important"}
**Important:** Always keep your dependencies updated.
::
```

::info-box{type="important"}
**Important:** Always keep your dependencies updated.
::

---

# Width

The width can be adjusted using the `width` property.

Example:

```md
::info-box{type="info" width="60%"}
A smaller information box.
::
```

::info-box{type="info" width="60%"}
A smaller information box.
::

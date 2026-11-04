---
title: Diff
description: Display code changes with added and removed lines using the SimpleWiki diff component.
navigation:
  title: Diff
  order: 9
---

# Diff

The `diff` component displays code changes in a familiar diff format.

It is useful for documenting updates, configuration changes, or before-and-after examples.

---

## Basic Usage

```md
::diff
---
lines:
  - type: remove
    content: "const x = 1"
  - type: add
    content: "const x = 2"
  - type: context
    content: "return x"
---
::
```

Result:

::diff
---
lines:
  - type: remove
    content: "const x = 1"
  - type: add
    content: "const x = 2"
  - type: context
    content: "return x"
---
::

---

## Available Line Types

| Type | Prefix | Description |
| :-------- | :----: | :--------------------------- |
| `add` | `+` | Added line |
| `remove` | `-` | Removed line |
| `context` | *(none)* | Unchanged line |

---

## Complete Example

```md
::diff
---
lines:
  - type: context
    content: "server {"
  - type: remove
    content: "    listen 80;"
  - type: add
    content: "    listen 443 ssl;"
  - type: context
    content: "}"
---
::
```

Result:

::diff
---
lines:
  - type: context
    content: "server {"
  - type: remove
    content: "    listen 80;"
  - type: add
    content: "    listen 443 ssl;"
  - type: context
    content: "}"
---
::

---

## Example Use Cases

The component is useful for displaying:

- Configuration changes
- Code updates
- Before-and-after comparisons
- Patch notes
- Documentation examples
---
title: Badges
description: Display small status labels inside your documentation using SimpleWiki MDC components.
navigation:
  title: Badges
  order: 5
---

# Badges

The `badge` component displays small inline labels to indicate the status of features, APIs, or content.

Badges can be placed anywhere inside normal Markdown text.

---

## Basic Usage

```md
This feature is :badge{type="new"}.
```

Result:

This feature is :badge{type="new"}.

---

## Available Types

| Type | Label |
| :----------- | :----------- |
| `new` | New |
| `beta` | Beta |
| `stable` | Stable |
| `deprecated` | Deprecated |
| `info` | Info |

---

## Examples

### New

```md
:badge{type="new"}
```

:badge{type="new"}

---

### Beta

```md
:badge{type="beta"}
```

:badge{type="beta"}

---

### Stable

```md
:badge{type="stable"}
```

:badge{type="stable"}

---

### Deprecated

```md
:badge{type="deprecated"}
```

:badge{type="deprecated"}

---

### Info

```md
:badge{type="info"}
```

:badge{type="info"}

---

## Custom Text

You can override the default label by placing text inside the component.

```md
:badge{type="beta"}[Experimental]
```

Result:

:badge{type="beta"}[Experimental]

---

## Usage in Text

Badges are designed to be used inline.

```md
Authentication :badge{type="stable"} is fully supported.

The legacy API is :badge{type="deprecated"} and will be removed in a future release.
```

Result:

Authentication :badge{type="stable"} is fully supported.

The legacy API is :badge{type="deprecated"} and will be removed in a future release.
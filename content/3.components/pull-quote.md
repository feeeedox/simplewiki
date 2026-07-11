---
title: Pull Quote
description: Highlight important quotes or statements using the SimpleWiki pull quote component.
navigation:
  title: Pull Quote
  order: 13
---

# Pull Quote

The `pull-quote` component displays highlighted quotes with optional attribution.

It is useful for emphasizing important statements, references, or key messages inside documentation.

---

## Basic Usage

```md
::pull-quote

Documentation is not just about explaining features, but about creating a better experience.

::
```

Result:

::pull-quote

Documentation is not just about explaining features, but about creating a better experience.

::

---

## With Citation

Use the `cite` property to add a source or author.

```md
::pull-quote{cite="SimpleWiki Documentation"}

Good documentation helps users understand complex systems.

::
```

Result:

::pull-quote{cite="SimpleWiki Documentation"}

Good documentation helps users understand complex systems.

::

---

## Markdown Support

Pull quotes support Markdown formatting.

```md
::pull-quote{cite="Example Source"}

**Important:** Clear documentation reduces confusion and improves usability.

::
```

Result:

::pull-quote{cite="Example Source"}

**Important:** Clear documentation reduces confusion and improves usability.

::

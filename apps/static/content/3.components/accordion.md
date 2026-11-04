---
title: Accordions
description: Organize content into expandable sections using the SimpleWiki accordion component.
navigation:
  title: Accordions
  order: 6
---

# Accordions

The `accordion` component allows you to organize large amounts of content into expandable sections.

Only one section is expanded at a time, making long pages easier to read.

---

## Basic Usage

```md
::accordion

:::div{title="First Section"}

This is the content of the first section.

:::

:::div{title="Second Section"}

This is the content of the second section.

:::

::
```

Result:

::accordion

:::div{title="First Section"}

This is the content of the first section.

:::

:::div{title="Second Section"}

This is the content of the second section.

:::

::

---

## Multiple Sections

You can add as many accordion items as needed.

```md
::accordion

:::div{title="Installation"}

Installation instructions go here.

:::

:::div{title="Configuration"}

Configuration options go here.

:::

:::div{title="Troubleshooting"}

Common issues and solutions.

:::

::
```

Result:

::accordion

:::div{title="Installation"}

Installation instructions go here.

:::

:::div{title="Configuration"}

Configuration options go here.

:::

:::div{title="Troubleshooting"}

Common issues and solutions.

:::

::

---

## Markdown Support

Accordion items support all normal Markdown and SimpleWiki components.

```md
::accordion

:::div{title="Important"}

::info-box{type="important"}

Always create a backup before updating.

::

You can also use :highlight[highlighted text] or :badge{type="new"}.

:::

::
```

Result:

::accordion

:::div{title="Important"}

::info-box{type="important"}

Always create a backup before updating.

::

You can also use :highlight[highlighted text] or :badge{type="new"}.

:::

::

---

## Default State

The first accordion item is expanded by default.

Clicking another section will automatically close the currently opened one.
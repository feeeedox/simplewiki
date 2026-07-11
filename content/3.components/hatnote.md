---
title: Hatnote
description: Display small italic notes below headings using the SimpleWiki hatnote component.
navigation:
  title: Hatnote
  order: 12
---

# Hatnote

The `hatnote` component displays short additional notes or descriptions.

It is commonly used below headings to provide context, references, or additional information.

---

## Basic Usage

```md
:hatnote[This page describes the installation process.]
```

Result:

:hatnote[This page describes the installation process.]

---

## Without Icon

By default, the component displays a small arrow icon.

You can disable it using the `icon` property.

```md
::hatnote{icon=false}

This note does not contain an icon.

::
```

Result:

::hatnote{icon=false}

This note does not contain an icon.

::

---

## Markdown Support

Hatnotes support Markdown formatting.

```md
:hatnote[See the :highlight[configuration guide] for more information.]
```

Result:

:hatnote[See the :highlight[configuration guide] for more information.]

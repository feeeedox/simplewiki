---
title: Timeline
description: Display chronological events using the SimpleWiki timeline component.
navigation:
  title: Timeline
  order: 7
---

# Timeline

The `timeline` component displays events in chronological order.

Each entry can contain a date, an optional title, and any Markdown content.

---

## Basic Usage

```md
::timeline

:::div{date="2026-01-15" title="Project Started"}

The first version of the project was created.

:::

:::div{date="2026-02-10" title="First Release"}

Version **1.0.0** was released.

:::

::
```

Result:

::timeline

:::div{date="2026-01-15" title="Project Started"}

The first version of the project was created.

:::

:::div{date="2026-02-10" title="First Release"}

Version **1.0.0** was released.

:::

::

---

## Event Without a Title

The `title` property is optional.

```md
::timeline

:::div{date="2026-03-05"}

A maintenance update was published.

:::

::
```

Result:

::timeline

:::div{date="2026-03-05"}

A maintenance update was published.

:::

::

---

## Rich Content

Timeline entries support all Markdown formatting and SimpleWiki components.

```md
::timeline

:::div{date="2026-04-01" title="Major Update"}

::info-box{type="info"}

A brand-new feature has been added.

::

Status: :badge{type="stable"}

See the :highlight[release notes] for more information.

:::

::
```

Result:

::timeline

:::div{date="2026-04-01" title="Major Update"}

::info-box{type="info"}

A brand-new feature has been added.

::

Status: :badge{type="stable"}

See the :highlight[release notes] for more information.

:::

::

---

## Example Timeline

```md
::timeline

:::div{date="January" title="Planning"}

Project planning and research.

:::

:::div{date="February" title="Development"}

Core functionality was implemented.

:::

:::div{date="March" title="Release"}

The first stable version became available.

:::

::
```

Result:

::timeline

:::div{date="January" title="Planning"}

Project planning and research.

:::

:::div{date="February" title="Development"}

Core functionality was implemented.

:::

:::div{date="March" title="Release"}

The first stable version became available.

:::

::
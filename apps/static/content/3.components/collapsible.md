---
title: Collapsible
description: Hide optional content inside expandable sections using the SimpleWiki collapsible component.
navigation:
  title: Collapsible
  order: 8
---

# Collapsible

The `collapsible` component hides content until the user expands it.

It is useful for optional information, advanced examples, FAQs, or lengthy explanations.

---

## Basic Usage

```md
::collapsible{title="Show Details"}

This content is hidden until the section is expanded.

::
```

Result:

::collapsible{title="Show Details"}

This content is hidden until the section is expanded.

::

---

## Open by Default

Use the `open` property to display the content immediately.

```md
::collapsible{title="Installation" open=true}

This section is expanded by default.

::
```

Result:

::collapsible{title="Installation" open=true}

This section is expanded by default.

::

---

## Markdown Support

Collapsible sections support all Markdown formatting and SimpleWiki components.

```md
::collapsible{title="Advanced Example"}

::info-box{type="tip"}

Remember to keep your dependencies updated.

::

Status: :badge{type="stable"}

You can also use :highlight[highlighted text] inside the content.

::
```

Result:

::collapsible{title="Advanced Example"}

::info-box{type="tip"}

Remember to keep your dependencies updated.

::

Status: :badge{type="stable"}

You can also use :highlight[highlighted text] inside the content.

::

---

## Custom Titles

The title can be customized to describe the hidden content.

```md
::collapsible{title="Troubleshooting"}

If something doesn't work, check your configuration first.

::
```

Result:

::collapsible{title="Troubleshooting"}

If something doesn't work, check your configuration first.

::

---

## Default Title

If no title is specified, the component uses the default label:

```text
Show Details
```
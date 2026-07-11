---
title: Kbd
description: Display keyboard shortcuts using the SimpleWiki kbd component.
navigation:
  title: Kbd
  order: 11
---

# Kbd

The `kbd` component displays keyboard keys in a styled format.

It is useful for documenting shortcuts, controls, and key combinations.

---

## Basic Usage

```md
Press :kbd{keys="Ctrl+S"} to save your changes.
```

Result:

Press :kbd{keys="Ctrl+S"} to save your changes.

---

## Key Combinations

Multiple keys can be separated using `+`.

```md
:kbd{keys="Ctrl+Shift+P"}
```

Result:

:kbd{keys="Ctrl+Shift+P"}

---

## Single Keys

Single keys are also supported.

```md
Press :kbd{keys="Enter"} to continue.
```

Result:

Press :kbd{keys="Enter"} to continue.

---

## Examples

```md
- Open the menu with :kbd{keys="Ctrl+K"}
- Confirm with :kbd{keys="Enter"}
- Close the window with :kbd{keys="Alt+F4"}
```

Result:

- Open the menu with :kbd{keys="Ctrl+K"}
- Confirm with :kbd{keys="Enter"}
- Close the window with :kbd{keys="Alt+F4"}
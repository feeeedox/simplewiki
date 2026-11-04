---
title: Kbd (Keyboard)
description: Display keyboard shortcuts using the SimpleWiki kbd component.
navigation:
  title: Kbd (Keyboard)
  order: 11
---

# Kbd

The `kbd` component displays keyboard keys in a styled format.

It is useful for documenting shortcuts, controls, and key combinations.

---

## Basic Usage

```md
Press :keyboard{keys="Ctrl+S"} to save your changes.
```

Result:

Press :keyboard{keys="Ctrl+S"} to save your changes.

---

## Key Combinations

Multiple keys can be separated using `+`.

```md
:keyboard{keys="Ctrl+Shift+P"}
```

Result:

:keyboard{keys="Ctrl+Shift+P"}

---

## Single Keys

Single keys are also supported.

```md
Press :keyboard{keys="Enter"} to continue.
```

Result:

Press :keyboard{keys="Enter"} to continue.

---

## Examples

```md
- Open the menu with :keyboard{keys="Ctrl+K"}
- Confirm with :keyboard{keys="Enter"}
- Close the window with :keyboard{keys="Alt+F4"}
```

Result:

- Open the menu with :keyboard{keys="Ctrl+K"}
- Confirm with :keyboard{keys="Enter"}
- Close the window with :keyboard{keys="Alt+F4"}
---
title: References
description: Inline citation markers like [1] paired with a numbered source list at the bottom of the page.
navigation:
  title: References
  order: 18
---

# References

The `ref` and `references` components work together to add Wikipedia-style inline citations to your articles.

Place `:ref{n="1"}` anywhere in your text to insert a `[1]` marker. At the bottom of the page, a `::references` block renders the numbered source list. Clicking a marker scrolls to the entry; the `↩` arrow links back to the citation.

---

## Basic Usage

```md
The World Wide Web was invented in 1989. :ref{n="1"}
It is built on the HTTP protocol. :ref{n="2"}

::references
---
items:
  - title: "CERN – Tim Berners-Lee and the WWW"
    url: "https://home.cern/science/computing/birth-web"
    note: "Original source."
  - title: "MDN – HTTP Overview"
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview"
---
::
```

Result:

The World Wide Web was invented in 1989. :ref{n="1"}
It is built on the HTTP protocol. :ref{n="2"}

::references
---
items:
  - title: "CERN – Tim Berners-Lee and the WWW"
    url: "https://home.cern/science/computing/birth-web"
    note: "Original source."
  - title: "MDN – HTTP Overview"
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview"
---
::

---

## With Notes

Use the optional `note` field to add a short description, access date, or any other context to a reference entry.

```md
Oxygen was discovered in the 18th century. :ref{n="1"}

::references
---
items:
  - title: "Wikipedia – Oxygen"
    url: "https://en.wikipedia.org/wiki/Oxygen"
    note: "Accessed July 2025."
---
::
```

Result:

Oxygen was discovered in the 18th century. :ref{n="1"}

::references
---
items:
  - title: "Wikipedia – Oxygen"
    url: "https://en.wikipedia.org/wiki/Oxygen"
    note: "Accessed July 2025."
---
::

---

## Without a URL

A URL is optional. This is useful for books, printed papers, or internal documents that have no web address.

```md
This approach was first described in the seminal paper. :ref{n="1"}

::references
---
items:
  - title: "Smith, J. (2019). Advanced Techniques. Journal of Examples, 4(2), 12–18."
    note: "Print only."
---
::
```

Result:

This approach was first described in the seminal paper. :ref{n="1"}

::references
---
items:
  - title: "Smith, J. (2019). Advanced Techniques. Journal of Examples, 4(2), 12–18."
    note: "Print only."
---
::

---

## Citing the Same Source Multiple Times

You can use the same `n` value more than once to cite a single source at different points in the text. The `↩` back-link will navigate to the first occurrence.

```md
The algorithm runs in linear time. :ref{n="1"}
As noted earlier, this makes it suitable for large datasets. :ref{n="1"}

::references
---
items:
  - title: "Knuth, D. E. (1997). The Art of Computer Programming."
---
::
```

Result:

The algorithm runs in linear time. :ref{n="1"}
As noted earlier, this makes it suitable for large datasets. :ref{n="1"}

::references
---
items:
  - title: "Knuth, D. E. (1997). The Art of Computer Programming."
---
::

---

## Props

### `:ref`

| Prop | Type | Required | Description |
| :--- | :--- | :--- | :--- |
| `n` | `number \| string` | Yes | The citation number shown as `[n]` and used to link to the matching entry in `::references`. |

### `::references`

| Prop | Type | Required | Description |
| :--- | :--- | :--- | :--- |
| `items` | `array` | Yes | List of reference entries. |
| `items[].title` | `string` | Yes | Display text for the reference (author, title, or site name). |
| `items[].url` | `string` | No | URL the title links to. Omit for offline sources. |
| `items[].note` | `string` | No | Short additional context shown after a dash. |

---

## Tips

- Numbers in `:ref{n="..."}` are matched to `items` by position — item 1 corresponds to `n="1"`, item 2 to `n="2"`, and so on.
- Put the `::references` block at the very end of the page, after all other content.
- Works well alongside the existing [`reference-list`](/components/reference-list) component — use `ref`/`references` for inline citations and `reference-list` for a plain "Further Reading" section.

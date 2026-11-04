---
title: Field Tables
description: Create property and value tables using MDC components.
navigation:
  title: Field Tables
  order: 4
---

# Field Tables

Field Tables are designed for displaying structured information where every row contains a property and its value.

They are commonly used for:

- Configuration options
- API parameters
- Plugin settings
- Metadata
- Object properties

## Basic Usage

Use the `FieldTable` component:

```md
::field-table
---
items:
  URL: https://example.com/api
  Command: docker compose up --build
  Description: A custom configuration value
---
::
```

Result:
::field-table
---
items:
  URL: https://example.com/api
  Command: docker compose up --build
  Description: A custom configuration value
---
::

--- 

## Multiple Values

Values can contain spaces and additional `:` characters.

Example:
```md
::field-table
---
items:
  URL: https://example.com/api
  Command: docker compose up --build
  Description: "A custom configuration value with a colon: and spaces"
---
::
```

Result:

::field-table
---
items:
  URL: https://example.com/api
  Command: docker compose up --build
  Description: "A custom configuration value with a colon: and spaces"
---
::

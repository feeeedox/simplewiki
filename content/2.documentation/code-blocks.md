---
title: Code Blocks
description: Learn how to use code blocks with syntax highlighting in SimpleWiki.
navigation:
  title: Code Blocks
  order: 2
---

# Code Blocks

SimpleWiki supports advanced code blocks with syntax highlighting powered by **Shiki** through Nuxt Content.

Code blocks are useful for displaying:

- Source code
- Configuration files
- Terminal commands
- API examples
- File structures

---

## Basic Code Blocks

Create a code block by wrapping your content with three backticks.

Example:

````md
```js
console.log("Hello SimpleWiki");
```
````

Result:

```js
console.log("Hello SimpleWiki");
```

The language identifier after the opening backticks enables syntax highlighting.

---

## Supported Languages
SimpleWiki supports many programming languages through Shiki.

Examples:

### JavaScript
````md
```js
const wiki = "SimpleWiki";

console.log(wiki);
```
````

```js
const wiki = "SimpleWiki";

console.log(wiki);
```

---

### TypeScript
````md
```ts
interface WikiPage {
  title: string;
  content: string;
}
```
````

```ts
interface WikiPage {
  title: string;
  content: string;
}
```

---

### Vue
````md
```vue
<script setup>
const title = "SimpleWiki";
</script>

<template>
  <h1>{{ title }}</h1>
</template>
```
````

```vue
<script setup>
const title = "SimpleWiki";
</script>

<template>
  <h1>{{ title }}</h1>
</template>
```

---

### Bash
````md
```bash
npm install
npm run dev
```
````

```bash
npm install
npm run dev
```

---

## Line Highlighting

You can highlight specific lines by adding line numbers inside the code block.

Example:

````md
```js {2}
const title = "SimpleWiki";
console.log(title);
const version = "1.0.0";
```
````

Result:

```js {2}
const title = "SimpleWiki";
console.log(title);
const version = "1.0.0";
```

Multiple lines can be highlighted:

````md
```js {1,3}
const title = "SimpleWiki";
const author = "Developer";
const version = "1.0.0";
```
````

---

## Highlighting Line Ranges
You can highlight a range of lines.

Example:

````md
```js {2-4}
function hello() {
  const message = "Hello";
  console.log(message);
  return message;
}
```
````

Result:

```js {2-4}
function hello() {
  const message = "Hello";
  console.log(message);
  return message;
}
```

---

## Displaying Filenames

You can display a filename above the code block.

Example:

````md
```ts [config.ts]
export default {
  theme: "dark"
};
```
````

Result:
```ts [config.ts]
export default {
  theme: "dark"
};
```

This is especially useful for:

- Configuration examples
- Project files
- Multiple file examples

---

## Terminal Commands

Use `bash` or `shell` for command examples.

Example:

````md
```bash
git clone https://github.com/feeeedox/simplewiki.git
cd simplewiki
npm install
```
````

Result:
```bash
git clone https://github.com/feeeedox/simplewiki.git
cd simplewiki
npm install
```
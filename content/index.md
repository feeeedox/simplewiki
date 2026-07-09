---
title: Das ultimative Nuxt Content Cheatsheet
description: Eine Übersicht über alle nativen Markdown- und MDC-Features.
category: Dokumentation
navigation:
  title: Markdown Guide
myCustomVariable: "Hallo aus dem Frontmatter!"
---

# Überschrift 1 (H1)
Verwende H1 idealerweise nur einmal pro Datei für den Haupttitel.

## Überschrift 2 (H2)
### Überschrift 3 (H3)
#### Überschrift 4 (H4)
##### Überschrift 5 (H5)

---

## 1. Textformatierung

Du kannst Text **fett**, *kursiv* oder ~~durchgestrichen~~ darstellen.  
Auch `Code-Inlines` für Variablen oder kurze Befehle sind kein Problem.

*   Dies ist ein **fetter Text innerhalb einer Liste**.
*   Hier ist ein [Link zu Google](https://google.com) mit einem normalen Titel.

---

## 2. Listen und Zitate

### Ungeordnete Liste
- Apfel
- Banane
  - Unterpunkt A
  - Unterpunkt B
- Orange

### Geordnete Liste
1. Erster Schritt
2. Zweiter Schritt
3. Dritter Schritt

### Blockquotes (Zitate)
> "Das Schöne an Nuxt Content ist, dass es Vue-Komponenten direkt in Markdown versteht."
> — Ein begeisterter Entwickler

---

## 3. Code-Blöcke (mit Syntax Highlighting)

Nuxt Content nutzt standardmäßig Shiki für extrem starkes Syntax-Highlighting. Du kannst auch Zeilen hervorheben oder Dateinamen vergeben:

```javascript [app.js] {2}
// Diese Zeile wird normal dargestellt
console.log("Diese Zeile wird optisch hervorgehoben!");
const content = "Nuxt Content rockt";
```


## Table

| Komponente | Installation | Erforderlich |
| :--- | :--- | :--- |
| MongoDB | [Installationsanleitung](#) | Ja | {#mongodb}
| Redis | [Installationsanleitung (Debian 10)](#) | Ja | {#redis}
| NATS | [Installationsanleitung](#) | Ja | {#nats}
| potatocloud | [Repository](#) | Ja | {#potatocloud}

# Dokumentation für :highlight[wichtige Core-Features]

Das hier ist ein ganz normaler Absatz, in dem wir ein 
:highlight[bestimmtes Wort] hervorheben wollen.

Und das Beste: Es funktioniert auch in Listen einwandfrei:
- Das ist ein normaler Punkt.
- Das ist ein :highlight[extrem wichtiger Punkt] mit vererbtem Style.

::info-box{type="alert" width="60%"}
**Box**: Dies ist eine Box.
::

::info-box{type="download" width="60%"}
**Box**: Dies ist eine Box.
::

::info-box{type="help" width="60%"}
**Box**: Dies ist eine Box.
::

::info-box{type="important" width="60%"}
**Box**: Dies ist eine Box.
::

::info-box{type="info" width="60%"}
**Box**: Dies ist eine Box.
::

::info-box{type="tip" width="60%"}
**Box**: Dies ist eine Box.
::

::info-box{type="todo" width="60%"}
**Box**: Dies ist eine Box.
::

## Bilder Test

![Alternativtext für das Bild](/images/dramatic-landscape.jpg)

---

![Mein Screenshot](/images/dramatic-landscape.jpg "Das ist die Bildunterschrift")

---

![Ein kleineres Bild](/images/dramatic-landscape.jpg){width="50%" style="display: block; margin: 0 auto;"}

---

::nuxt-img{src="/images/dramatic-landscape.jpg" width="300" height="200" format="webp" loading="lazy"}
::
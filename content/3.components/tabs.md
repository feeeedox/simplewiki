---
title: Tabs
description: Create tabbed content sections in your documentation using SimpleWiki MDC components.
navigation:
    title: Tabs
    order: 4
---

# Tabs

The `tabs` component displays tabbed content sections inside your documentation.

---

## Basic Usage

```md
::tabs
  :::div{title="Tab 1"}
    This is the content of Tab 1.
  :::
  :::div{title="Tab 2"}
    This is the content of Tab 2.
  :::
::
```

Result:

::tabs
  :::div{title="Tab 1"}
    This is the content of Tab 1.
  :::
  :::div{title="Tab 2"}
    This is the content of Tab 2.
  :::
::

---

## Complex Example with Multiple Tabs and Components

```md
::tabs
  :::div{title="Tab 1"}
    This is the content of Tab 1.
    You can include other components here, like an info box:
    ::info-box{type="tip"}
      Remember to backup your files.
    ::
  :::
  :::div{title="Tab 2"}
    This is the content of Tab 2.
    You can also include images:
    ![Alternative text for the image](/images/dramatic-landscape.jpg)
  :::
  :::div{title="Tab 3"}
    This is the content of Tab 3.
    You can even include videos:
    <video src="/videos/bunny.mp4" controls width="100%" poster="/images/video-thumbnail.jpg">
      Your browser does not support the video tag.
    </video>
  :::
::
```

::tabs
  :::div{title="Tab 1"}
    This is the content of Tab 1.
    You can include other components here, like an info box:
    ::info-box{type="tip"}
      Remember to backup your files.
    ::
  :::
  :::div{title="Tab 2"}
    This is the content of Tab 2.
    You can also include images:
    ![Alternative text for the image](/images/dramatic-landscape.jpg)
  :::
  :::div{title="Tab 3"}
    This is the content of Tab 3.
    You can even include videos:
    <video src="/videos/bunny.mp4" controls width="100%" poster="/images/video-thumbnail.jpg">
      Your browser does not support the video tag.
    </video>
  :::
::
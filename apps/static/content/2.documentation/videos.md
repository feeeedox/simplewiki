---
title: Videos
description: Learn how to embed videos in SimpleWiki documentation pages.
navigation:
    title: Videos
    order: 5
---

# Videos

Videos can be used to provide tutorials, demonstrations, or visual explanations inside your documentation.

SimpleWiki supports multiple ways to embed videos:

* Local HTML5 videos
* External video platforms
* Privacy-friendly YouTube embeds

---

## Local Videos

For videos stored inside your own project, use the standard HTML5 `<video>` element.

Place your video files inside the `public/` directory.

Example:

```text
public/
└── videos/
    └── example.mp4
```

You can then embed the video inside a Markdown page:

```html
<video src="/simplewiki/videos/bunny.mp4" controls width="100%">
  Your browser does not support the video tag.
</video>
```

Result:

<video src="/simplewiki/videos/bunny.mp4" controls width="100%">
  Your browser does not support the video tag.
</video>

---

## Video Controls

The `<video>` element supports standard HTML attributes.

Example:

```html
<video 
  src="/videos/example.mp4"
  controls
  autoplay
  loop
  muted
>
</video>
```

Common attributes:

| Attribute  | Description                       |
| :--------- | :-------------------------------- |
| `controls` | Shows playback controls           |
| `autoplay` | Starts playback automatically     |
| `loop`     | Repeats the video                 |
| `muted`    | Starts without sound              |
| `poster`   | Displays an image before playback |

---

## Video Thumbnails

You can define a preview image using the `poster` attribute.

Example:

```html
<video 
  src="/videos/example.mp4"
  controls
  poster="/images/video-thumbnail.jpg"
>
</video>
```

The image will be displayed before the user starts the video.

---

## YouTube Videos

SimpleWiki includes a privacy-friendly YouTube component, using the youtube-nocookie.com domain.
Videos are not loaded immediately. The external YouTube connection is only created after the user starts playback.


Example:

```md
::youtube{id="B5hUgTZQOMs"}
::
```

The `id` is the YouTube video ID.

For example:

```
https://youtube.com/watch?v=B5hUgTZQOMs
```

The ID is:

```
B5hUgTZQOMs
```

Result:

::youtube{id="B5hUgTZQOMs"}
::

---

## Custom Thumbnail Size

You can customize the thumbnail quality using the `thumb-size` property.

Example:

```md
::youtube{id="d_IFKP1Ofq0" thumb-size="hqdefault"}
::
```

Available thumbnail sizes depend on YouTube's supported formats.
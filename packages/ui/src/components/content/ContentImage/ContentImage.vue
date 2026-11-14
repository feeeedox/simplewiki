<script setup lang="ts">
import { computed, useAttrs } from "vue";
import type { Component } from "vue";
import styles from "./ContentImage.module.css";

defineOptions({
  inheritAttrs: false,
});

interface Props {
  src?: string;
  alt?: string;
  title?: string;

  width?: string | number;
  height?: string | number;

  loading?: "lazy" | "eager";
  decoding?: "async" | "sync" | "auto";
  fetchpriority?: "high" | "low" | "auto";

  srcset?: string;
  sizes?: string;

  imageComponent?: string | object | Function;
}

const props = withDefaults(defineProps<Props>(), {
  src: "",
  alt: "",
  title: "",
  loading: "lazy",
  decoding: "async",
  fetchpriority: "auto",
  imageComponent: "img",
});

const attrs = useAttrs();

const cssWidth = computed(() => {
  if (props.width == null) return undefined;

  return typeof props.width === "number" ? `${props.width}px` : props.width;
});

const imageAttrs = computed(() => {
  const { style, ...rest } = attrs;

  return {
    ...rest,
    src: props.src,
    alt: props.alt,
    loading: props.loading,
    decoding: props.decoding,
    fetchpriority: props.fetchpriority,
    srcset: props.srcset,
    sizes: props.sizes,
    width: props.width,
    height: props.height,
  };
});

const containerStyle = computed(() => [
  {
    width: cssWidth.value,
  },
  attrs.style,
]);
</script>

<template>
  <span :class="styles.wikiImgContainer">
    <figure v-if="title" :class="styles.wikiFigure" :style="containerStyle">
      <component :is="imageComponent" v-bind="imageAttrs" :class="styles.wikiImg" />

      <figcaption :class="styles.wikiFigcaption">
        {{ title }}
      </figcaption>
    </figure>

    <component
      :is="imageComponent"
      v-else
      v-bind="imageAttrs"
      :style="containerStyle"
      :class="styles.wikiImgStandalone"
    />
  </span>
</template>

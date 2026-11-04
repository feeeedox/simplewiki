
<template>
  <span class="wiki-img-container">
    <span
      v-if="title"
      class="wiki-figure"
      :style="[{ width: cssWidth ?? '100%' }, attrs.style]"
    >
      <component
        :is="imageComponent"
        v-bind="imageAttrs()"
        :src="src"
        :alt="alt"
        class="wiki-img"
      />

      <span class="wiki-figcaption">
        {{ title }}
      </span>
    </span>

    <component
      :is="imageComponent"
      v-else
      v-bind="imageAttrs()"
      :src="src"
      :alt="alt"
      :style="[{ width: cssWidth ?? 'auto' }, attrs.style]"
      class="wiki-img-standalone"
    />
  </span>
</template>

<script setup>
import { computed, useAttrs } from 'vue';

defineOptions({
  inheritAttrs: false
})

const props = defineProps({
  src: { type: String, default: '' },
  alt: { type: String, default: '' },
  title: { type: String, default: '' },
  width: { type: [String, Number], default: undefined },
  imageComponent: {
    type: [String, Object, Function],
    default: 'img'
  }
})

const attrs = useAttrs()

const cssWidth = computed(() => {
  if (props.width == null) return undefined

  return typeof props.width === 'number'
    ? `${props.width}px`
    : props.width
})

function imageAttrs() {
  const { style, ...rest } = attrs
  return rest
}
</script>

<style scoped>
.wiki-img-container {
  display: inline-block;
  width: 100%;
}

.wiki-figure {
  display: block;
  box-sizing: border-box;
  margin: 1.5rem auto;
  padding: 0.5rem;
  border: 1px solid #e2e8f0;
  background-color: #f7fafc;
  border-radius: 4px;
  text-align: center;
}

.wiki-img {
  display: block;
  max-width: 100%;
  height: auto;
  margin: 0 auto;
  border-radius: 2px;
}

.wiki-img-standalone {
  max-width: 100%;
  height: auto;
  margin: 1.5rem 0;
}

.wiki-figcaption {
  display: block;
  margin-top: 0.5rem;
  font-size: 0.875rem;
  color: #4a5568;
  font-style: italic;
}

:global(.dark) .wiki-figure {
  background-color: #161b22;
  border-color: var(--border-dark, #30363d);
}

:global(.dark) .wiki-figcaption {
  color: #a0aec0;
}
</style>

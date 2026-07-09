<template>
  <figure 
    v-if="title" 
    class="wiki-figure" 
    :style="figureStyle"
  >
    <NuxtImg 
      :src="src" 
      :alt="alt" 
      width="100%" 
      class="wiki-img"
    />
    <figcaption class="wiki-figcaption">
      {{ title }}
    </figcaption>
  </figure>

  <NuxtImg 
    v-else 
    :src="src" 
    :alt="alt" 
    :style="imgStyle"
    class="wiki-img-standalone"
  />
</template>

<script setup>
import { computed, useAttrs } from 'vue'

const props = defineProps({
  src: { type: String, default: '' },
  alt: { type: String, default: '' },
  title: { type: String, default: '' } 
})

const attrs = useAttrs()

const figureStyle = computed(() => {
  return {
    width: attrs.width || '100%',
    ...(attrs.style ? parseStyleString(attrs.style) : {})
  }
})

const imgStyle = computed(() => {
  return {
    width: attrs.width || 'auto',
    ...(attrs.style ? parseStyleString(attrs.style) : {})
  }
})

function parseStyleString(styleStr) {
  if (typeof styleStr !== 'string') return styleStr
  return styleStr.split(';').reduce((acc, style) => {
    const [key, value] = style.split(':')
    if (key && value) {
      acc[key.trim().replace(/-./g, c => c.substr(1).toUpperCase())] = value.trim()
    }
    return acc
  }, {})
}
</script>

<style scoped>
.wiki-figure {
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
  border-radius: 2px;
}

.wiki-img-standalone {
  max-width: 100%;
  height: auto;
  margin: 1.5rem 0;
}

.wiki-figcaption {
  margin-top: 0.5rem;
  font-size: 0.875rem;
  color: #4a5568;
  font-style: italic;
}
</style>
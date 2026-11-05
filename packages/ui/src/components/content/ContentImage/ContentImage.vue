
<script setup lang="ts">
import { computed, useAttrs } from 'vue';
import styles from './ContentImage.module.css'

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

<template>
  <span :class="styles.wikiImgContainer">
    <span
      v-if="title"
      :class="styles.wikiFigure"
      :style="[{ width: cssWidth ?? '100%' }, attrs.style]"
    >
      <component
        :is="imageComponent"
        v-bind="imageAttrs()"
        :src="src"
        :alt="alt"
        :class="styles.wikiImg"
      />

      <span :class="styles.wikiFigcaption">
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
      :class="styles.wikiImgStandalone"
    />
  </span>
</template>
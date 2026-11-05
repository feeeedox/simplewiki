<script setup lang="ts">
import styles from './Collapsible.module.css'
withDefaults(defineProps<{
  title?: string
  open?: string | boolean
}>(), {
  title: 'Show Details',
  open: false
})
</script>

<template>
  <details
    :class="styles.details"
    :open="open === true || open === 'true'"
  >
    <summary
      :class="styles.summary"
    >
      {{ title }}
      <span>▼</span>
    </summary>
    <div :class="styles.content">
      <slot />
    </div>
  </details>
</template>

<style scoped>
summary::-webkit-details-marker {
  display: none;
}
details[open] summary span {
  transform: rotate(180deg);
  display: inline-block;
}
</style>
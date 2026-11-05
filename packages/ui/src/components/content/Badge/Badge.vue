<script setup lang="ts">
const props = withDefaults(defineProps<{
  type?: 'beta' | 'new' | 'deprecated' | 'stable' | 'info'
}>(), {
  type: 'info'
})

const labels: Record<string, string> = {
  beta: 'Beta',
  new: 'New',
  deprecated: 'Deprecated',
  stable: 'Stable',
  info: 'Info'
}

import styles from './Badge.module.css';
</script>

<template>
  <span
    :class="styles.badge"
    :data-variant="type"
  >
    <slot>{{ labels[type] }}</slot>
  </span>
</template>
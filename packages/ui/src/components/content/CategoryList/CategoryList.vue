<script setup lang="ts">
import WikiLink from '../../WikiLink.vue'

defineProps<{
  items: { label: string, to?: string }[]
}>()

import styles from './CategoryList.module.css'
</script>

<template>
  <div :class="styles.container">
    <span :class="styles.label">Categories:</span>
    <template v-for="(item, i) in items" :key="item.label">
      <WikiLink v-if="item.to" :to="item.to" :class="styles.link">{{ item.label }}</WikiLink>
      <span v-else :class="styles.link">{{ item.label }}</span>
      <span v-if="i < items.length - 1" :class="styles.sep">|</span>
    </template>
  </div>
</template>

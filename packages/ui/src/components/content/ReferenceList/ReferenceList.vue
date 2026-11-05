<script setup lang="ts">
import styles from './ReferenceList.module.scss'
defineProps<{
  items: { title: string, url: string, note?: string }[]
}>()
</script>

<template>
  <ul :class="styles.container">
    <li v-for="item in items" :key="item.url" :class="styles.list">
      <a :href="item.url" target="_blank" rel="noopener">{{ item.title }}</a>
      <span v-if="item.note"> — {{ item.note }}</span>
    </li>
  </ul>
</template>

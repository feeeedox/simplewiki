<script setup lang="ts">
import styles from './References.module.scss'
import WikiLink from '../../WikiLink.vue'

defineProps<{
  items: {
    title: string
    url?: string
    note?: string
  }[]
}>()
</script>

<template>
  <div :class="styles.container">
    <div :class="styles.title">
      References
    </div>

    <ol class="m-0 pl-5 text-13 space-y-1">
      <li
        v-for="(item, index) in items"
        :key="index"
        :id="`ref-${index + 1}`"
      >
        <WikiLink
          v-if="item.url"
          :href="item.url"
          target="_blank"
          rel="noopener"
        >{{ item.title }}</WikiLink>
        <span v-else>{{ item.title }}</span>

        <span v-if="item.note" :class="styles.note"> — {{ item.note }}</span>

        <WikiLink
          :href="`#cite-${index + 1}`"
          :class="styles.cite"
          aria-label="Back to citation"
        >↩</WikiLink>
      </li>
    </ol>
  </div>
</template>

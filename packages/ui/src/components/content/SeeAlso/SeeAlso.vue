<script setup lang="ts">
import WikiLink from '../../WikiLink.vue'
import styles from './SeeAlso.module.scss'

defineProps<{
  items: {
    title: string
    to: string
    description?: string
    external?: boolean
  }[]
}>()
</script>

<template>
  <div :class="styles.container">
    <div :class="styles.title">
      See Also
    </div>

    <ul :class="styles.list">
      <li
        v-for="item in items"
        :key="item.to"
        :class="styles.item"
      >
        <WikiLink
          :to="item.to"
          :target="item.external ? '_blank' : undefined"
          :class="styles.link"
        >
          {{ item.title }}
        </WikiLink>

        <span
          v-if="item.description"
          :class="styles.description"
        >
          — {{ item.description }}
        </span>
      </li>
    </ul>
  </div>
</template>
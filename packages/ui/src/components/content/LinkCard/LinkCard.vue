<script setup lang="ts">
import WikiLink from '../../WikiLink.vue'
import styles from './LinkCard.module.scss'
defineProps<{
  to: string
  title: string
  description?: string
}>()
</script>

<template>
  <WikiLink
    :to="to"
    :class="styles.link"
  >
    <div :class="styles.arrow">
      →
    </div>

    <div>
      <div :class="styles.title">
        {{ title }}
      </div>

      <div
        v-if="description"
        :class="styles.description"
      >
        {{ description }}
      </div>
    </div>
  </WikiLink>
</template>

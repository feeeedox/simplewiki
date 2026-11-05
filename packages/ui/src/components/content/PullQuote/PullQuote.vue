<script setup lang="ts">
import styles from './PullQuote.module.scss'
defineProps<{
  cite?: string
}>()
</script>

<template>
  <figure :class="styles.figure">
    <blockquote>
      <slot />
    </blockquote>
    <figcaption v-if="cite">— {{ cite }}</figcaption>
  </figure>
</template>
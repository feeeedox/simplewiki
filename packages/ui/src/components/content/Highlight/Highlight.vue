<script setup lang="ts">
import styles from './Highlight.module.css'
</script>
<template>
  <span :class="styles.highlight">
    <slot />
  </span>
</template>
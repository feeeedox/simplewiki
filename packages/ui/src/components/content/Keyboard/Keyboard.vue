<script setup lang="ts">
import styles from './Keyboard.module.scss';
defineProps<{
  keys: string
}>()
</script>

<template>
  <span :class="styles.container">
    <kbd v-for="(key, i) in keys.split('+')" :key="i" :class="styles.kbd">{{ key }}</kbd>
  </span>
</template> 
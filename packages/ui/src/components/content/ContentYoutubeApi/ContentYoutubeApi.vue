
<script setup lang="ts">
import styles from './ContentYoutubeApi.module.css';
defineProps<{
  id: string
  thumbSize?: string
}>()
</script>

<template>
  <div :class="styles.wikiYoutube">
    <slot
      :id="id"
      :thumb-size="thumbSize ?? 'maxresdefault'"
    />
  </div>
</template>
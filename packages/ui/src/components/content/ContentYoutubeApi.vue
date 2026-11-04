
<script setup lang="ts">
defineProps<{
  id: string
  thumbSize?: string
}>()
</script>

<template>
  <div class="wiki-youtube">
    <slot
      :id="id"
      :thumb-size="thumbSize ?? 'maxresdefault'"
    />
  </div>
</template>

<style scoped>
.wiki-youtube {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  margin: 1.5rem 0;
  border-radius: 8px;
  overflow: hidden;
  background: #000;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.wiki-youtube :deep(iframe) {
  display: block;
  width: 100%;
  height: 100%;
  border: 0;
}
</style>

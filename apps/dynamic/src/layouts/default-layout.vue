<script setup lang="ts">
import WikiHeader from '@/components/WikiHeader.vue'
import WikiTrace from '@/components/WikiTrace.vue'
</script>

<template>
  <WikiHeader />
  <WikiTrace />
  <main>
    <slot />
  </main>
</template>

<style scoped lang="scss"></style>

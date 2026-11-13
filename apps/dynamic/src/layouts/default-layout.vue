<script setup lang="ts">
import WikiHeader from '@/components/WikiHeader.vue'
import WikiTrace from '@/components/WikiTrace.vue'
import { WikiRenderer } from '@simplewiki/ui'
</script>

<template>
  <WikiHeader />
  <WikiTrace />
  <main class="container">
    <div>sidebar</div>
    <WikiRenderer>
      <slot />
    </WikiRenderer>
    <div>toc</div>
  </main>
</template>

<style scoped lang="scss">
.container {
  margin: 0 auto;
  max-width: calc(var(--spacing) * 275);
  width: 100%;
  align-items: start;
  min-height: 0px;
}

@media (min-width: 640px) {
  .container {
    display: grid;
    grid-template-columns: 180px minmax(0, 1fr) 240px;
  }
}
</style>

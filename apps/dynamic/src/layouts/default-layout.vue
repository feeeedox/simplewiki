<script setup lang="ts">
import WikiHeader from '@/components/WikiHeader.vue'
import WikiSidebar from '@/components/WikiSidebar.vue'
import WikiTrace from '@/components/WikiTrace.vue'
import { WikiRenderer, WikiToC } from '@simplewiki/ui'
import { ref } from 'vue'
import type { TocLink } from '@simplewiki/ui'

const props = withDefaults(
  defineProps<{
    tocLinks?: TocLink[]
  }>(),
  {
    tocLinks: () => [],
  },
)

const isSidebarOpen = ref(false)
</script>

<template>
  <WikiHeader @open-sidebar="isSidebarOpen = true" />
  <WikiTrace />

  <main class="container">
    <WikiSidebar :is-open="isSidebarOpen" @close="isSidebarOpen = false" />
    <WikiToC :toc-links="props.tocLinks" :is-mobile="true" />

    <WikiRenderer>
      <slot />
    </WikiRenderer>

    <aside class="toc">
      <WikiToC :toc-links="props.tocLinks" :is-mobile="false" />
    </aside>
  </main>
</template>

<style scoped lang="scss">
.container {
  margin: 0 auto;
  max-width: calc(var(--spacing) * 275);
  width: 100%;
  align-items: start;
  min-height: 0;
}

.toc {
  position: sticky;
  top: 5px;
  min-width: 0;
  max-height: calc(100dvh - 96px);
}

@media (min-width: 640px) {
  .container {
    display: grid;
    grid-template-columns: 180px minmax(0, 1fr) 240px;
    gap: 16px;
  }
}
</style>

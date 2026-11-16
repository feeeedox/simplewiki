<script setup lang="ts">
import WikiHeader from '@/components/WikiHeader.vue'
import WikiSidebar from '@/components/WikiSidebar.vue'
import WikiTrace from '@/components/WikiTrace.vue'
import { WikiRenderer, WikiToC } from '@simplewiki/ui'
import { ref } from 'vue'
import type { TocLink } from '@simplewiki/ui'
import WikiFooter from '@/components/WikiFooter.vue'

const props = withDefaults(
  defineProps<{
    tocLinks?: TocLink[]
    ignoreSidebar?: boolean
  }>(),
  {
    tocLinks: () => [],
    ignoreSidebar: false,
  },
)

const isSidebarOpen = ref(false)
</script>

<template>
  <div class="layout">
    <WikiHeader @open-sidebar="isSidebarOpen = true" />
    <WikiTrace />

    <main class="container">
      <WikiSidebar :is-open="isSidebarOpen" @close="isSidebarOpen = false" v-if="!ignoreSidebar" />
      <!-- Empty container for our grid -->
      <div v-else></div>
      <WikiToC :toc-links="props.tocLinks" :is-mobile="true" />

      <WikiRenderer>
        <slot />
      </WikiRenderer>

      <aside class="toc">
        <WikiToC :toc-links="props.tocLinks" :is-mobile="false" />
      </aside>
    </main>
    <WikiFooter />
  </div>
</template>

<style scoped lang="scss">
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100dvh;
}

.container {
  flex: 1;
  margin: 0 auto;
  max-width: calc(var(--spacing) * 275);
  width: 100%;
  align-items: start;
  min-height: 0;
}

.toc {
  position: sticky;
  top: 1px;
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

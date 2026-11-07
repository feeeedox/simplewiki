
<script setup lang="ts">
import { WikiRenderer } from '@simplewiki/ui'
import WikiImage from '~/components/content/WikiImage.vue'

defineProps<{
  data: Record<string, unknown> | null
}>()

const components = {
  img: WikiImage,
  h1: 'WikiH1',
  h2: 'WikiH2',
  h3: 'WikiH3',
  h4: 'WikiH4',
  pre: 'ContentPre',
  Ref: 'WikiRef',
  FieldTable: 'FieldTable',
  Badge: 'Badge',
  Accordion: 'Accordion',
  Timeline: 'Timeline',
  Collapsible: 'Collapsible',
  Diff: 'Diff',
  Steps: 'Steps',
  Keyboard: 'Keyboard',
  Hatnote: 'Hatnote',
  PullQuote: 'PullQuote',
  CategoryList: 'CategoryList',
  ReferenceList: 'ReferenceList',
  SeeAlso: 'SeeAlso',
  LinkCard: 'LinkCard',
  Youtube: 'WikiYouTube'
}
</script>

<template>
  <WikiRenderer>
    <ContentRenderer
      v-if="data"
      :value="data"
      :components="components"
    />

    <p v-else class="error">
      No content available.
    </p>
  </WikiRenderer>
</template>

<style scoped>
.error {
  color: #991b1b;
}
</style>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { WikiTrace } from '@simplewiki/ui'

const route = useRoute()

const currentTitle = computed(() =>
  typeof route.meta.title === 'string'
    ? route.meta.title
    : undefined
)
</script>

<template>
  <WikiTrace
    :path="route.path"
    :title="currentTitle"
    :link-component="RouterLink"
  />
</template>
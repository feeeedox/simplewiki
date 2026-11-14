<script setup lang="ts">
import { navElements } from '@/mock/sidebar'
import { WikiSidebar } from '@simplewiki/ui'
import { useRoute } from 'vue-router'

defineProps<{
  isOpen: boolean
}>()

const emit = defineEmits<{
  close: []
}>()

const route = useRoute()
</script>

<template>
  <WikiSidebar
    :navigation="navElements"
    :is-open="isOpen"
    :current-path="route.path"
    @close="emit('close')"
  />
</template>

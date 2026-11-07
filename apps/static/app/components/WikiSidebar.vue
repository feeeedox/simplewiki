<script setup lang="ts">
import { computed } from 'vue'
import { NuxtLink } from '#components'

import {
  WikiSidebar
} from '@simplewiki/ui'

import type {
  WikiSidebarItem
} from '@simplewiki/ui'

defineProps<{
  isOpen: boolean
}>()

const emit = defineEmits<{
  close: []
}>()

const route = useRoute()

const { data: navigation } = await useAsyncData(
  'navigation',
  () => queryCollectionNavigation('content')
)

type NavigationNode = {
  title?: string
  path?: string
  hide?: boolean
  order?: number
  children?: NavigationNode[]
}

function sortNavigation(
  items: NavigationNode[]
): WikiSidebarItem[] {
  return items
    .filter(item => !item.hide && !!item.path)
    .sort((a, b) =>
      (a.order ?? 999) - (b.order ?? 999)
    )
    .map(item => ({
      title: item.title ?? '',
      path: item.path!,
      children: item.children
        ? sortNavigation(item.children)
        : []
    }))
}

const sortedNavigation = computed(() =>
  sortNavigation(navigation.value ?? [])
)
</script>

<template>
  <WikiSidebar
    :navigation="sortedNavigation"
    :current-path="route.path"
    :is-open="isOpen"
    :link-component="NuxtLink"
    @close="emit('close')"
  />
</template>

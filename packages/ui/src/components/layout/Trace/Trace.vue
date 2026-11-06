
<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'
import type { Component } from 'vue'
import styles from './Trace.module.scss'

interface HistoryItem {
  name: string
  path: string
}

const props = withDefaults(defineProps<{
  path: string
  title?: string
  separator?: string
  maxHistory?: number
  linkComponent?: string | Component
}>(), {
  separator: '›',
  maxHistory: 4,
  linkComponent: 'a'
})

const previousPages = ref<HistoryItem[]>([])
const activePage = ref('')

const STORAGE_PREFIX = 'wiki_trace_'

function formatSlug(path: string): string {
  if (path === '/') return 'Home'

  const segments = path.split('/').filter(Boolean)
  const lastSegment = segments.at(-1) ?? ''

  return decodeURIComponent(lastSegment)
    .replace(/[-_]/g, ' ')
    .replace(/\b\w/g, c => c.toUpperCase())
}

function getLinkProps(path: string) {
  return props.linkComponent === 'a'
    ? { href: path }
    : { to: path }
}

function updateHistory() {
  if (typeof window === 'undefined') return

  const currentPath = props.path
  const currentTitle = props.title || formatSlug(currentPath)

  const lastPath = sessionStorage.getItem(
    `${STORAGE_PREFIX}last_path`
  )
  const lastTitle = sessionStorage.getItem(
    `${STORAGE_PREFIX}last_title`
  )

  if (lastPath && lastPath !== currentPath) {
    previousPages.value = previousPages.value.filter(
      item =>
        item.path !== lastPath &&
        item.path !== currentPath
    )

    previousPages.value.push({
      name: lastTitle || formatSlug(lastPath),
      path: lastPath
    })

    previousPages.value = previousPages.value.slice(
      -props.maxHistory
    )

    sessionStorage.setItem(
      `${STORAGE_PREFIX}history`,
      JSON.stringify(previousPages.value)
    )
  }

  sessionStorage.setItem(
    `${STORAGE_PREFIX}last_path`,
    currentPath
  )

  sessionStorage.setItem(
    `${STORAGE_PREFIX}last_title`,
    currentTitle
  )

  activePage.value = currentTitle
}

onMounted(() => {
  try {
    const saved = sessionStorage.getItem(
      `${STORAGE_PREFIX}history`
    )

    if (saved) {
      const parsed: unknown = JSON.parse(saved)

      if (Array.isArray(parsed)) {
        previousPages.value = parsed.filter(
          (item): item is HistoryItem =>
            item !== null &&
            typeof item === 'object' &&
            typeof item.name === 'string' &&
            typeof item.path === 'string'
        )
      }
    }
  } catch {
    previousPages.value = []
  }

  updateHistory()
})

watch(
  () => [props.path, props.title],
  () => updateHistory()
)
</script>

<template>
  <nav :class="styles.trace" aria-label="Page history">
    <div :class="styles.container">
      <template
        v-for="item in previousPages"
        :key="item.path"
      >
        <component
          :is="linkComponent"
          v-bind="getLinkProps(item.path)"
          :class="styles.link"
        >
          {{ item.name }}
        </component>

        <span :class="styles.separator" aria-hidden="true">
          {{ separator }}
        </span>
      </template>

      <span
        :class="styles.active"
        aria-current="page"
      >
        {{ activePage || title || formatSlug(path) }}
      </span>
    </div>
  </nav>
</template>

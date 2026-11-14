<script setup lang="ts">
import { useTheme } from '@/composables/useTheme'
import { WikiHeader as BaseWikiHeader } from '@simplewiki/ui'

const mode = useTheme()

function toggleTheme(theme: 'light' | 'dark' | 'auto') {
  mode.value = theme
}
</script>

<template>
  <BaseWikiHeader wiki-name="wikiName" :theme="mode" @update:theme="toggleTheme" />
</template>

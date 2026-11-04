<script setup lang="ts">
import { computed, inject } from 'vue'
import { wikiLinkKey } from '../link'

const props = defineProps<{
  to?: string
  href?: string
}>()

defineOptions({ inheritAttrs: false })

const linkComponent = inject(wikiLinkKey, 'a')
const destination = computed(() => props.to ?? props.href)
const linkProps = computed(() => linkComponent === 'a'
  ? { href: destination.value }
  : { to: destination.value })
</script>

<template>
  <component :is="linkComponent" v-bind="{ ...$attrs, ...linkProps }"><slot /></component>
</template>

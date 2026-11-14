<script setup lang="ts">
import { Image } from '@unpic/vue'
import { WikiContentImage as BaseWikiImage } from '@simplewiki/ui'

defineOptions({
  inheritAttrs: false,
})

defineProps<{
  src: string
}>()
</script>

<template>
  <BaseWikiImage v-bind="$attrs" :src="src" :image-component="Image" />
</template>

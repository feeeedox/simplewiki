<script setup lang="ts">
import { WikiContentH1 } from '@simplewiki/ui';
const route = useRoute()
defineProps<{ id?: string }>()
</script>

<template>
  <WikiContentH1 :id="id" :base-path="route.path">
    <slot />
  </WikiContentH1>
</template>
<script setup lang="ts">
import { WikiContentH2 } from '@simplewiki/ui';
const route = useRoute()
defineProps<{ id?: string }>() 
</script>

<template>
  <WikiContentH2 :id="id" :base-path="route.path">
    <slot />
  </WikiContentH2>
</template>
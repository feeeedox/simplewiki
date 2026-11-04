<script setup lang="ts">
import { WikiContentH3 } from '@simplewiki/ui';
const route = useRoute()
defineProps<{ id?: string }>()
</script>

<template>
  <WikiContentH3 :id="id" :base-path="route.path">
    <slot /> 
  </WikiContentH3>
</template>
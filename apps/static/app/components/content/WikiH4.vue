<script setup lang="ts">
import { WikiContentH4 } from '@simplewiki/ui';

const route = useRoute()
defineProps<{ id?: string }>()
</script>

<template>
  <WikiContentH4 :id="id" :base-path="route.path">
    <slot /> 
  </WikiContentH4>
</template>
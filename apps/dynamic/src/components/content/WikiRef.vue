<script setup lang="ts">
import { WikiReference } from '@simplewiki/ui'
import { useRoute } from 'vue-router'
const route = useRoute()
defineProps<{ n: number | string }>()
</script>

<template>
  <WikiReference :n="n" :base-path="route.path" />
</template>

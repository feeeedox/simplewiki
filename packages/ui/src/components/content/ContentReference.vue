<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  n: number | string
  basePath?: string
}>()

const href = computed(() => {
  const hash = `#ref-${props.n}`
  return (props.basePath || '') + hash
})

const handleClick = (event: MouseEvent) => {
  event.preventDefault()
  
  history.pushState(null, '', href.value)
  
  const element = document.getElementById(`ref-${props.n}`)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<template>
  <sup class="inline-block leading-none">
    <a
      :href="href"
      :id="`cite-${props.n}`"
      class="text-link hover:underline text-[0.95em] font-normal px-0.5"
      :aria-label="`Reference ${props.n}`"
      @click="handleClick"
    >[{{ props.n }}]</a>
  </sup>
</template>
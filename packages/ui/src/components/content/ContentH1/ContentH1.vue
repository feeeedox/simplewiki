<script setup lang="ts">
import styles from './ContentH1.module.css'

const props = defineProps<{
  id?: string
  basePath?: string
}>()

const handleClick = (event: MouseEvent) => {
  if (!props.id) return
  
  event.preventDefault()
  
  const targetUrl = `${props.basePath || ''}#${props.id}`
  
  history.pushState(null, '', targetUrl)
  
  const element = document.getElementById(props.id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<template>
  <h1 :id="id">
    <a v-if="id" :href="`${basePath || ''}#${id}`" :class="styles.text" @click=handleClick>
      <slot />
    </a>
    <slot v-else />
  </h1>
</template>
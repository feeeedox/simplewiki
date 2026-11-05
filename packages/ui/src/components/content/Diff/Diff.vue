<script setup lang="ts">
import styles from './Diff.module.css'

type DiffLine = {
  type: 'add' | 'remove' | 'context'
  content: string
}

defineProps<{
  lines: DiffLine[]
}>()
</script>

<template>
  <pre :class="styles.container"><code :class="styles.code"><span
    v-for="(line, i) in lines"
    :key="i"
    :class="[
      styles.line,
      styles[line.type]
    ]"
  ><span
    :class="styles.prefix"
  >{{ line.type === 'add' ? '+' : line.type === 'remove' ? '-' : ' ' }}</span>{{ line.content }}</span></code></pre>
</template>
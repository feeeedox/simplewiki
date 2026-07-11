<script setup lang="ts">
type DiffLine = {
  type: 'add' | 'remove' | 'context'
  content: string
}

defineProps<{
  lines: DiffLine[]
}>()
</script>

<template>
  <pre class=""><code><span
    v-for="(line, i) in lines"
    :key="i"
    class="block px-4 whitespace-pre"
    :class="{
      'bg-green-100 text-[#24292e]': line.type === 'add',
      'bg-red-100 text-[#24292e]': line.type === 'remove'
    }"
  >{{ line.type === 'add' ? '+ ' : line.type === 'remove' ? '- ' : '  ' }}{{ line.content }}
</span></code></pre>
</template>

<script setup lang="ts">
import { marked } from 'marked'
import DOMPurify from 'isomorphic-dompurify'
import styles from './FieldTable.module.css'

defineProps<{
  items: Record<string, string>
}>()

function renderValue(value: unknown): string {
  const html = marked.parseInline(String(value ?? ''), {
    gfm: true,
    breaks: true,
    async: false
  })

  return DOMPurify.sanitize(html)
}
</script>

<template>
  <table :class="styles.table">
    <tbody>
      <tr v-for="(value, key) in items" :key="key">
        <th :class="styles.tableHead">
          {{ key }}
        </th>
        <td
          :class="styles.tableData"
          v-html="renderValue(value)"
        />
      </tr>
    </tbody>
  </table>
</template>
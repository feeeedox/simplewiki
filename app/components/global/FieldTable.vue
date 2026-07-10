<script setup lang="ts">
const props = defineProps<{
  items: Record<string, string>
}>()
</script>

<template>
  <table class="field-table">
    <tbody>
      <tr v-for="(value, key) in props.items" :key="key">
        <th>
          {{ key }}
        </th>

        <td>
          {{ value }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
.field-table {
    border-collapse: collapse;
    width: 100%;
    max-width: 560px;
    font-size: 13px;
    background: white;
    table-layout: auto;
}

.field-table th,
.field-table td {
    text-align: left;
    padding: 6px 10px;
}

.field-table th {
    width: 1%;
    white-space: nowrap;
    background: var(--header-band);
    font-weight: bold;
}

.field-table td {
    width: auto;
    word-break: break-word;
}
</style>
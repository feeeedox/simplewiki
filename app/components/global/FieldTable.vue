<script lang="ts" setup>
const props = defineProps<{
    items: Record<string, string>
}>()

function renderValue(value: unknown) {
    const str = value == null
        ? ''
        : typeof value === 'string'
            ? value
            : String(value)

    let html = str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')

    html = html.replace(/`([^`]+)`/g, '<code>$1</code>')

    html = html.replace(
        /\[([^\]]+)\]\(([^)]+)\)/g,
        '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>'
    )

    html = html.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    html = html.replace(/__([^_]+)__/g, '<strong>$1</strong>')

    html = html.replace(/\*([^*]+)\*/g, '<em>$1</em>')
    html = html.replace(/_([^_]+)_/g, '<em>$1</em>')

    return html
}
</script>

<template>
    <table class="field-table">
        <tbody>
        <tr v-for="(value, key) in props.items" :key="key">
            <th>
                {{ key }}
            </th>
            <td v-html="renderValue(value)"/>
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

.field-table td :deep(a) {
    color: var(--link-color, #2563eb);
    text-decoration: underline;
}
</style>

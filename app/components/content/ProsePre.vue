<script setup lang="ts">
defineOptions({
  inheritAttrs: false
})

defineProps<{
    filename?: string
}>()
</script>

<template>
    <div class="code-wrapper">
        <div v-if="filename" class="code-header">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M6 2h9l5 5v15H6V2z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
                <path d="M15 2v6h6" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
            </svg>
            <span>{{ filename }}</span>
        </div>

        <pre v-bind="$attrs"><slot /></pre>
    </div>
</template>

<style scoped lang="scss">
.code-wrapper {
    margin: 16px 0;
}

.code-header {
    display: flex;
    align-items: center;
    gap: 7px;

    height: 32px;
    padding: 0 12px;

    background: #eef1f5;
    border: 1px solid var(--border-light, #d0d7de);
    border-bottom: none;

    border-radius: 6px 6px 0 0;

    color: #57606a;
    font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
    font-size: 12px;
    font-weight: 500;

    .dark & {
        background: #161b22;
        border-color: var(--border-dark, #30363d);
        color: #8b949e;
    }
}

.file-icon {
    display: flex;
    align-items: center;
    color: #6e7781;
}

.code-wrapper pre {
    margin: 0 !important;
    border-radius: 0 0 6px 6px !important;
}
</style>
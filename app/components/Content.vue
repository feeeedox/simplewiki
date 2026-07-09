<script setup lang="ts">
    const { data } = await useAsyncData('home', () => {
  return queryCollection('content').path('/').first()
})
</script>

<template>
    <div class="content bg-content-bg pt-4.5 px-6.5 pb-10 border-r border-border">
        <ContentRenderer :value="data" class="renderer"/>
    </div>
</template>

<style scoped lang="css">
.renderer :deep(h1) {
    font-family: var(--font-heading);
    font-size: 24px;
    font-weight: normal;
    margin: 0 0 4px;
    padding-bottom: 6px;
    border-bottom: 1px solid var(--border-light);
}


.renderer :deep(h2) {
    font-family: var(--font-heading);
    font-size: 18px;
    font-weight: normal;
    margin: 20px 0 8px;
    padding-bottom: 4px;
    border-bottom: 1px solid var(--border-light);
}

.renderer :deep(h2 > a) {
    color: var(--text);
} 

.renderer :deep(h3) {
    font-size: 14px;
    font-weight: bold;
    margin: 14px 0 6px;
}

.renderer :deep(h3 > a) {
    color: var(--text);
}

.renderer :deep(h4) {
    font-size: 13px;
    font-weight: bold;
    margin: 12px 0 6px;
}

.renderer :deep(h4 > a) {
    color: var(--text);
}

.renderer :deep(h5) {
    font-size: 12px;
    font-weight: bold;
    margin: 10px 0 4px;
}

.renderer :deep(h5 > a) {
    color: var(--text);
}

.renderer :deep(ul) {
    list-style-type: disc;
    margin: 6px 0 12px;
    padding-left: 28px;
}
.renderer :deep(li) {
    margin: 1px 0;
}

.renderer :deep(ol) {
    list-style-type: decimal;
    margin: 6px 0 12px;
    padding-left: 28px;
}

.renderer :deep(code) {
    font-family: "Courier New", monospace;
    background: #f8f9fa;
    border: 1px solid var(--border-light);
    padding: 0 4px;
    font-size: 0.92em;
}

.renderer :deep(hr) {
    border: none;
    border-top: 1px solid var(--border-light);
    margin: 20px 0;
}

.renderer :deep(blockquote) {
    border-left: 4px solid var(--border-light);
    padding-left: 12px;
    margin: 12px 0;
    color: var(--text-muted);
}

.renderer :deep(table) {
    border-collapse: collapse;
    width: 100%;
    max-width: 560px;
    margin: 6px 0 16px;
    font-size: 13px;
    background: #fff;
}

.renderer :deep(th),
.renderer :deep(td) {
    border: 1px solid var(--border);
    padding: 5px 10px;
    text-align: left;
}
.renderer :deep(th) {
    background: var(--header-band);
    font-weight: bold;
}
.renderer :deep(th:last-child),
.renderer :deep(td:last-child) { width: 90px; }
.renderer :deep(tr:hover td) { background: #fbfbfc; }  

.renderer :deep(img) {
    max-width: 100%;
    height: auto;
}
</style>
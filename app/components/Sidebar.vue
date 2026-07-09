<script setup lang="ts">
const groups = [
    "Informations",
    "Tools"
]

const items = [
    ["Homepage", "Configuration", "Bug Reports", "Requirements"],
    ["Print Version", "Permanent Link"]
]

const activeItem = "Requirements"
</script>

<template>
    <aside class="bg-sidebar-bg border-r border-border pt-3 h-screen">
        <div v-for="group in groups" :key="group" class="mb-3.5 px-3">
            <h3 class="text-[11.5px] uppercase tracking-[0.02em] text-text-muted mb-1 font-bold border-b border-border-light pb-0.75">{{ group }}</h3>
            <ul class="list-none m-0 p-0">
                <li v-for="item in items[groups.indexOf(group)]" :key="item" 
                :class="{ 'pl-1.5 border-l-2 border-link -ml-0.5': item === activeItem }" 
                class="relative pl-2">
                    <a href="#" class="text-[0.8125rem]"
                    :class="{ 'font-bold text-text': item === activeItem }"
                    >{{ item }}</a>
                </li>
            </ul>
        </div>
    </aside> 
</template>
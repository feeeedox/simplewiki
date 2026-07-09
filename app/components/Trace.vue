<script setup lang="ts">
const previous = [
    "sidebar",
    "configuration",
    "start",
    "bug-report"
]

const active = "requirements"

const separator = "›"
</script>

<template>
    <div class="bg-header-band border-b border-border">
        <div class="max-w-275 mx-auto py-1 px-5 text-[11.5px] leading-none text-text-muted flex flex-wrap items-center">
            
            <span v-for="(item, index) in previous" :key="index" class="flex items-center">
                <a :href="`/${item}`" class="text-link hover:underline">{{ item }}</a>
                <span class="text-[#72777d] select-none mx-0.75">{{ separator }}</span>
            </span>
            
            <span class="text-text font-bold">{{ active }}</span>
            
        </div>
    </div>
</template>
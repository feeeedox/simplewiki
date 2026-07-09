<script setup lang="ts">
const { wikiName } = useAppConfig();
</script>

<template>
    <header class="bg-content-bg border-b border-border">
        <div class="header__content max-w-275 mx-auto pt-2.25 pb-2 px-5 flex items-end justify-between gap-6 flex-wrap">
            <div class="flex items-baseline gap-2">
                <h1 class="font-heading text-[1.375rem] font-normal text-text">{{ wikiName }}</h1>
                <p class="text-xs text-text-muted italic">Documentation</p>
            </div>
            
            <div class="flex items-stretch relative">
                <div>
                    <input 
                        type="text" 
                        placeholder="Search..."
                        class="w-45 py-1 px-2 border border-border rounded-l-xs bg-white font-body text-sm text-text focus:outline-none focus:border-focus focus:ring-1 focus:ring-focus"
                    >
                </div>
                <button 
                    type="button"
                    class="py-1 px-2.5 border border-border border-l-0 rounded-r-xs bg-sidebar-bg text-[13px] cursor-pointer text-text hover:bg-[#eaecf0]"
                >
                    Search
                </button>
            </div>

        </div>
    </header>
</template>
<script setup lang="ts">
import { ref, watch } from 'vue'

const { wikiName } = useAppConfig()

const { status, search } = useSearchCollection('content')

const searchQuery = ref('')
const searchResults = ref<any[]>([])
const isDropdownOpen = ref(false)

watch(searchQuery, async (value) => {
    if (!value.trim()) {
        searchResults.value = []
        isDropdownOpen.value = false
        return
    }

    try {
        const results = await search(value, { 
            snippet: { 
                columns: ['content'], 
                around: 40 
            } 
        })
        
        searchResults.value = results.slice(0, 6)
        isDropdownOpen.value = searchResults.value.length > 0
    } catch (e) {
        console.error('Error while searching:', e)
    }
})

const closeSearch = () => {
    setTimeout(() => {
        isDropdownOpen.value = false
        searchQuery.value = ''
    }, 150)
}
</script>

<template>
    <header class="bg-content-bg border-b border-border relative z-50">
        <div class="header__content max-w-275 mx-auto pt-2.25 pb-2 px-5 flex items-end justify-between gap-6 flex-wrap">
            <div class="flex items-baseline gap-2">
                <NuxtLink to="/" class="hover:opacity-90">
                    <h1 class="font-heading text-[1.375rem] font-normal text-text">{{ wikiName }}</h1>
                </NuxtLink>
                <p class="text-xs text-text-muted italic">Documentation</p>
            </div>
            
            <div class="flex flex-col relative">
                <div class="flex items-stretch relative">
                    <input 
                        v-model="searchQuery"
                        @blur="closeSearch"
                        @focus="isDropdownOpen = searchResults.length > 0"
                        :disabled="status !== 'ready'"
                        type="text" 
                        :placeholder="status === 'ready' ? 'Search wiki...' : 'Indexing...'"
                        class="w-56 py-1 px-2 border border-border rounded-xs bg-white font-body text-sm text-text focus:outline-none focus:border-focus focus:ring-1 focus:ring-focus disabled:opacity-50"
                    >
                </div>

                <div v-if="isDropdownOpen" 
                     class="absolute top-full right-0 mt-1 w-72 bg-white border border-border rounded-xs shadow-lg overflow-hidden max-h-72 overflow-y-auto z-50">
                    <ul class="list-none m-0 p-0">
                        <li v-for="result in searchResults" :key="result.id" class="border-b border-border-light last:border-0">
                            <NuxtLink :to="result.id" class="block p-2 hover:bg-[#f6f8fa] text-left no-underline">
                                <div class="text-xs font-bold text-link truncate">{{ result.title }}</div>
                                
                                <div v-if="result.snippets?.content" 
                                     class="text-[11px] text-text-muted mt-0.5 line-clamp-2 search-snippet"
                                     v-html="result.snippets.content" />
                            </NuxtLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </header>
</template>

<style>
.search-snippet mark {
    background-color: #fff5b8;
    color: #24292e;
    font-weight: 600;
    padding: 0 2px;
    border-radius: 2px;
}
</style>
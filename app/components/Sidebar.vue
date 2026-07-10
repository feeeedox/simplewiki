<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()

const { data: navigation } = await useAsyncData('navigation', async () => {
    const nav = await queryCollectionNavigation('content')

    const sortNavigation = (items: any[]) => {
        return items
            .filter(item => !item.hide)
            .sort((a, b) => {
                return (a.order ?? 999) - (b.order ?? 999)
            })
            .map(item => ({
                ...item,
                children: item.children ? sortNavigation(item.children) : []
            }))
    }

    return sortNavigation(nav)
})
</script>

<template>
    <aside class="pt-3 sticky top-2">
        <div v-for="group in navigation" :key="group.path" class="mb-3.5 px-3">
            <h3 class="text-[11.5px] uppercase tracking-[0.02em] text-text-muted mb-1 font-bold border-b border-border-light pb-0.75" v-if="group.children.length > 0">
                {{ group.title }}
            </h3>
            
            <ul v-if="group.children" class="list-none m-0 p-0">
                <li v-for="item in group.children" :key="item.path" 
                    :class="{ 'pl-1.5 border-l-2 border-link -ml-0.5': route.path === item.path }" 
                    class="relative pl-2 py-1"
                >
                    <NuxtLink :to="item.path" class="text-[0.8125rem] text-text-muted hover:text-text dynamic-link"
                              :class="{ 'font-bold text-text': route.path === item.path }">
                        {{ item.title }}
                    </NuxtLink>
                </li>
            </ul>
        </div>
    </aside> 
</template>
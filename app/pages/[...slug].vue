<script setup lang="ts">
import { useRoute } from 'vue-router'
import Content from '~/components/Content.vue';
import Header from '~/components/Header.vue';
import Sidebar from '~/components/Sidebar.vue';
import ToC from '~/components/ToC.vue';
import Trace from '~/components/Trace.vue';

const route = useRoute()

const { data } = await useAsyncData(`content-${route.path}`, () => {
    return queryCollection('content').path(route.path).first()
})

useSeoMeta({
    title: () => data.value?.title,
    description: () => data.value?.description
})

const tocLinks = computed(() => data.value?.body?.toc?.links ?? [])

const isSidebarOpen = ref(false)

</script>

<template>
    <Header @open-sidebar="isSidebarOpen = true" />
    <Trace :title="data?.title" />
    <div class="max-w-275 mx-auto sm:grid sm:grid-cols-[180px_1fr_240px] w-screen items-start">
        <Sidebar :is-open="isSidebarOpen" @close="isSidebarOpen = false" />
        <ToC :is-mobile=true :toc-links="tocLinks" />

        <Content :data="data ? data : null" />
        <ToC :is-mobile=false :toc-links="tocLinks" />
    </div>
</template>
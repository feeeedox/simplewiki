<script setup lang="ts">
import Header from '~/components/Header.vue';
import Sidebar from '~/components/Sidebar.vue';
import Trace from '~/components/Trace.vue';

</script>

<template>
    <Header/>
    <Trace/>
    <div class="max-w-275 mx-auto grid grid-cols-[180px_1fr] w-screen">
        <Sidebar/>
        <Content/>
    </div>
</template>
<script setup lang="ts">
import DefaultLayout from '@/layouts/default-layout.vue'
import Header from '../../../../packages/ui/src/components/layout/Header/Header.vue'
</script>

<template>
  <Header wiki-name="SimpleWiki" />
  <DefaultLayout> test </DefaultLayout>
  <Footer />
</template>

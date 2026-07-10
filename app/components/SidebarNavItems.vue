<script setup lang="ts">
defineProps<{
  items: any[]
  isActive: (path: string) => boolean
}>()
</script>

<template>
  <ul class="list-none m-0 p-0">
    <li
      v-for="item in items"
      :key="item.path"
      :class="{ 'pl-1.5 border-l-2 border-link -ml-0.5': isActive(item.path) }"
      class="relative pl-2"
    >
      <!-- Ordner ohne eigene Seite (nur .navigation.yml) sind reine Kategorien -->
      <template v-if="!item.page">
        <span class="text-[0.8125rem] text-text-muted">{{ item.title }}</span>
      </template>
      <template v-else>
        <NuxtLink
          :to="item.path"
          class="text-[0.8125rem]"
          :class="{ 'font-bold text-text': isActive(item.path) }"
        >
          {{ item.title }}
        </NuxtLink>
      </template>

      <!-- Rekursion für Unterordner / verschachtelte Kategorien -->
      <SidebarNavItems
        v-if="item.children?.length"
        :items="item.children"
        :is-active="isActive"
        class="pl-3 mt-1"
      />
    </li>
  </ul>
</template>
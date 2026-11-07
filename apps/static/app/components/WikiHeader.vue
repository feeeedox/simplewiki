<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import { NuxtLink } from "#components";

const emit = defineEmits<{
  "open-sidebar": [];
}>();

const { wikiName } = useAppConfig();
const { status, search } = useSearchCollection("content");
const colorMode = useColorMode();

import { WikiHeader as BaseWikiHeader, type WikiHeaderSearchResult } from "@simplewiki/ui";

const mounted = ref(false);

onMounted(() => {
  mounted.value = true;
});

const { data: navigation } = await useAsyncData("root-redirect", () =>
  queryCollectionNavigation("content"),
);

const redirectPath = computed(() => {
  const firstGroup = navigation.value?.[0];

  return firstGroup?.children?.[0]?.path ?? firstGroup?.path ?? "/";
});

const theme = computed<"light" | "dark" | null>(() => {
  if (!mounted.value) return null;

  return colorMode.value === "dark" ? "dark" : "light";
});

function setTheme(value: "light" | "dark") {
  colorMode.preference = value;
}

async function searchWiki(query: string): Promise<WikiHeaderSearchResult[]> {
  const results = await search(query, {
    snippet: {
      columns: ["content"],
      around: 40,
    },
  });

  return results.slice(0, 6).map((result) => ({
    id: String(result.id),
    title: String(result.title ?? ""),
    snippet: result.snippets?.content,
  }));
}
</script>

<template>
  <BaseWikiHeader
    :wiki-name="wikiName"
    :home-path="redirectPath"
    :link-component="NuxtLink"
    :theme="theme"
    :search-status="status"
    :search="searchWiki"
    @update:theme="setTheme"
    @open-sidebar="emit('open-sidebar')"
  />
</template>

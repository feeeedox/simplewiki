<script setup lang="ts">
import { NuxtImg } from "#components";
import { WikiContentImage as BaseWikiImage } from "@simplewiki/ui";

defineOptions({
  inheritAttrs: false,
});

defineProps<{
  src: string;
}>();
</script>

<template>
  <BaseWikiImage v-bind="$attrs" :src="src" :image-component="NuxtImg" />
</template>


<script setup lang="ts">
import { NuxtImg } from '#components';
import { WikiContentImage as BaseWikiImage } from '@simplewiki/ui';

defineOptions({
  inheritAttrs: false
})
</script>

<template>
  <BaseWikiImage
    v-bind="$attrs"
    :image-component="NuxtImg"
  />
</template>

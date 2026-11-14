<script setup lang="ts">
import LiteYouTubeEmbed from 'vue-lite-youtube-embed'
import 'vue-lite-youtube-embed/style.css'

import { WikiContentYoutubeApi as BaseWikiYouTube } from '@simplewiki/ui'

type ThumbnailSize = 'default' | 'medium' | 'high' | 'standard' | 'maxresdefault'

const props = withDefaults(
  defineProps<{
    id: string
    thumbSize?: ThumbnailSize
  }>(),
  {
    thumbSize: 'maxresdefault',
  },
)
</script>

<template>
  <BaseWikiYouTube :id="props.id" :thumb-size="props.thumbSize">
    <template #default="{ id }">
      <LiteYouTubeEmbed :id="id" title="YouTube Video" class="wikiYoutubePlayer" />
    </template>
  </BaseWikiYouTube>
</template>

<style scoped>
.wikiYoutubePlayer {
  display: block;
  width: 100%;
  height: 100%;
  position: relative;
}
</style>

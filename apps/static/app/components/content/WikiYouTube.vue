
<script setup lang="ts">
import type { ScriptYouTubePlayer } from '#components';
import {
    WikiContentYoutubeApi as BaseWikiYouTube,
    WikiContentYoutubePlaybuttonApi
} from '@simplewiki/ui';

type ThumbnailSize = NonNullable<
  InstanceType<typeof ScriptYouTubePlayer>['$props']['thumbnailSize']
>

const props = withDefaults(defineProps<{
  id: string
  thumbSize?: ThumbnailSize
}>(), {
  thumbSize: 'maxresdefault'
})
</script>

<template>
  <BaseWikiYouTube :id="props.id" :thumb-size="props.thumbSize">
    <template #default="{ id }">
      <ScriptYouTubePlayer
        :video-id="id"
        :thumbnail-size="props.thumbSize"
        trigger="mousedown"
        class="wikiYoutubePlayer"
      >
        <WikiContentYoutubePlaybuttonApi />
      </ScriptYouTubePlayer>
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

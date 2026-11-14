<script setup lang="ts">
import WikiH1 from '@/components/content/WikiH1.vue'
import WikiH2 from '@/components/content/WikiH2.vue'
import WikiH3 from '@/components/content/WikiH3.vue'
import WikiH4 from '@/components/content/WikiH4.vue'
import WikiFooter from '@/components/WikiFooter.vue'
import DefaultLayout from '@/layouts/default-layout.vue'
import { Markdown } from '@comark/vue'
import ContentPre from '../../../../packages/ui/src/components/content/ContentPre/ContentPre.vue'
import WikiRef from '@/components/content/WikiRef.vue'
import {
  Accordion,
  Badge,
  CategoryList,
  Collapsible,
  Diff,
  FieldTable,
  Hatnote,
  Highlight,
  InfoBox,
  Keyboard,
  LinkCard,
  PullQuote,
  ReferenceList,
  References,
  SeeAlso,
  Steps,
  Tabs,
  Timeline,
} from '@simplewiki/ui'
import WikiImage from '@/components/content/WikiImage.vue'
import WikiYouTube from '@/components/content/WikiYouTube.vue'
import content from '@/mock/home.md?raw'

const components = {
  img: WikiImage,
  h1: WikiH1,
  h2: WikiH2,
  h3: WikiH3,
  h4: WikiH4,
  pre: ContentPre,
  Ref: WikiRef,
  FieldTable: FieldTable,
  Badge: Badge,
  Highlight: Highlight,
  InfoBox: InfoBox,
  Accordion: Accordion,
  Timeline: Timeline,
  Collapsible: Collapsible,
  Diff: Diff,
  Steps: Steps,
  Keyboard: Keyboard,
  Hatnote: Hatnote,
  PullQuote: PullQuote,
  CategoryList: CategoryList,
  ReferenceList: ReferenceList,
  References: References,
  SeeAlso: SeeAlso,
  Tabs: Tabs,
  LinkCard: LinkCard,
  Youtube: WikiYouTube,
}

import shiki from '@comark/vue/plugins/shiki'
import footnotes from '@comark/vue/plugins/footnotes'
import githubLight from '@shikijs/themes/github-light'
import githubDark from '@shikijs/themes/github-dark'

const plugins = [
  footnotes(),
  shiki({
    themes: {
      light: githubLight,
      dark: githubDark,
    },
    registerDefaultThemes: false,
  }),
]
</script>

<template>
  <DefaultLayout>
    <Suspense>
      <Markdown :plugins="plugins" :value="content" :components="components" />
    </Suspense>
  </DefaultLayout>
  <WikiFooter />
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { ref, watch, onMounted } from 'vue'

const route = useRoute()
const separator = "›"

interface HistoryItem {
  name: string
  path: string
}

const previousPages = ref<HistoryItem[]>([])
const activePage = ref<string>('')

const formatSlug = (path: string) => {
  if (path === '/') return 'Home'
  const lastSegment = path.split('/').pop() || ''
  return lastSegment.charAt(0).toUpperCase() + lastSegment.slice(1).replace(/[-_]/g, ' ')
}

const updateHistory = async () => {
  if (!import.meta.client) return

  const currentPath = route.path
  let currentTitle = formatSlug(currentPath)

  const lastPath = sessionStorage.getItem('wiki_last_path')
  const lastTitle = sessionStorage.getItem('wiki_last_title')

  if (lastPath && lastPath !== currentPath) {
    previousPages.value = previousPages.value.filter(p => p.path !== lastPath && p.path !== currentPath)
    
    previousPages.value.push({
      name: lastTitle || formatSlug(lastPath),
      path: lastPath
    })

    if (previousPages.value.length > 4) {
      previousPages.value.shift()
    }

    sessionStorage.setItem('wiki_history', JSON.stringify(previousPages.value))
  }

  sessionStorage.setItem('wiki_last_path', currentPath)
  sessionStorage.setItem('wiki_last_title', currentTitle)
  activePage.value = currentTitle

  try {
    const pageData = await queryCollection('content').path(currentPath).first()
    if (pageData?.title) {
      activePage.value = pageData.title
      sessionStorage.setItem('wiki_last_title', pageData.title)
    }
  } catch (e) {
  }
}

onMounted(() => {
  if (import.meta.client) {
    const saved = sessionStorage.getItem('wiki_history')
    if (saved) {
      previousPages.value = JSON.parse(saved)
    }
    updateHistory()
  }
})

watch(() => route.path, () => {
  updateHistory()
})
</script>

<template>
    <div class="bg-header-band border-b border-border">
        <div class="max-w-275 mx-auto py-1 px-5 text-[11.5px] leading-none text-text-muted flex flex-wrap items-center">
            
            <span v-for="(item, index) in previousPages" :key="index" class="flex items-center">
                <NuxtLink :to="item.path" class="text-link hover:underline">{{ item.name }}</NuxtLink>
                <span class="text-[#72777d] select-none mx-0.75">{{ separator }}</span>
            </span>
            
            <span class="text-text font-bold">{{ activePage }}</span>
            
        </div>
    </div>
</template>
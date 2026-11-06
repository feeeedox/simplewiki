
<script setup lang="ts">
import { ref, watch, onUnmounted } from 'vue'
import type { Component } from 'vue'
import styles from './Header.module.scss'
export interface WikiHeaderSearchResult {
  id: string
  title: string
  snippet?: string
}

type Theme = 'light' | 'dark'

const props = withDefaults(defineProps<{
  wikiName: string
  homePath?: string
  subtitle?: string
  theme?: Theme | null
  searchStatus?: string
  search?: (query: string) => Promise<WikiHeaderSearchResult[]>
  linkComponent?: string | Component
}>(), {
  homePath: '/',
  subtitle: 'Documentation',
  theme: null,
  searchStatus: 'ready',
  linkComponent: 'a'
})

const emit = defineEmits<{
  'open-sidebar': []
  'update:theme': [theme: Theme]
}>()

const searchQuery = ref('')
const searchResults = ref<WikiHeaderSearchResult[]>([])
const isDropdownOpen = ref(false)
const isSearching = ref(false)

let searchTimer: ReturnType<typeof setTimeout> | undefined
let closeTimer: ReturnType<typeof setTimeout> | undefined
let searchVersion = 0

const getLinkProps = (path: string) =>
  props.linkComponent === 'a'
    ? { href: path }
    : { to: path }

watch(searchQuery, (query, _, onCleanup) => {
  const version = ++searchVersion

  clearTimeout(searchTimer)

  if (!query.trim() || !props.search) {
    searchResults.value = []
    isDropdownOpen.value = false
    isSearching.value = false
    return
  }

  isSearching.value = true

  searchTimer = setTimeout(async () => {
    try {
      const results = await props.search!(query)

      if (version !== searchVersion) return

      searchResults.value = results.slice(0, 6)
      isDropdownOpen.value = searchResults.value.length > 0
    } catch (error) {
      if (version !== searchVersion) return

      console.error('Wiki search failed:', error)
      searchResults.value = []
      isDropdownOpen.value = false
    } finally {
      if (version === searchVersion) {
        isSearching.value = false
      }
    }
  }, 200)

  onCleanup(() => clearTimeout(searchTimer))
})

function closeSearch() {
  clearTimeout(closeTimer)

  closeTimer = setTimeout(() => {
    isDropdownOpen.value = false
  }, 150)
}

function selectResult() {
  clearTimeout(closeTimer)
  searchVersion++
  searchQuery.value = ''
  searchResults.value = []
  isDropdownOpen.value = false
}

function setTheme(theme: Theme) {
  emit('update:theme', theme)
}

onUnmounted(() => {
  clearTimeout(searchTimer)
  clearTimeout(closeTimer)
  searchVersion++
})
</script>


<template>
  <header :class="styles.header">
    <div :class="styles.inner">
      <div :class="styles.branding">
        <component
          :is="linkComponent"
          v-bind="getLinkProps(homePath)"
          :class="styles.brandLink"
        >
          <h1 :class="styles.title">
            {{ wikiName }}
          </h1>
        </component>

        <button
          :class="styles.menuButton"
          type="button"
          aria-label="Open navigation"
          @click="emit('open-sidebar')"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>

        <p v-if="subtitle" :class="styles.subtitle">
          {{ subtitle }}
        </p>
      </div>

      <div :class="styles.actions">
        <div :class="styles.searchArea">
          <div
            v-if="theme !== null"
            :class="styles.themeSwitch"
          >
            <span :class="styles.themeLabel">Design:</span>

            <button
              type="button"
              :class="{ [styles.active]: theme === 'light' }"
              @click="setTheme('light')"
            >
              [ Light ]
            </button>

            <button
              type="button"
              :class="{ [styles.active]: theme === 'dark' }"
              @click="setTheme('dark')"
            >
              [ Dark ]
            </button>
          </div>

          <div :class="styles.search">
            <input
              v-model="searchQuery"
              type="text"
              :disabled="searchStatus !== 'ready' || !search"
              :placeholder="
                searchStatus === 'ready'
                  ? 'Search wiki...'
                  : 'Indexing...'
              "
              aria-label="Search wiki"
              :aria-expanded="isDropdownOpen"
              @focus="isDropdownOpen = searchResults.length > 0"
              @blur="closeSearch"
              @keydown.esc="isDropdownOpen = false"
            />
          </div>

          <div
            v-if="isDropdownOpen"
            :class="styles.dropdown"
          >
            <ul :class="styles.results">
              <li
                v-for="result in searchResults"
                :key="result.id"
                :class="styles.result"
              >
                <component
                  :is="linkComponent"
                  v-bind="getLinkProps(result.id)"
                  :class="styles.resultLink"
                  @click="selectResult"
                >
                  <div :class="styles.resultTitle">
                    {{ result.title }}
                  </div>

                  <div
                    v-if="result.snippet"
                    :class="styles.snippet"
                    v-html="result.snippet"
                  />
                </component>
              </li>
            </ul>
          </div>

          <span v-if="isSearching" :class="styles.srOnly">
            Searching...
          </span>
        </div>
      </div>
    </div>
  </header>
</template>


<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import type { Component } from 'vue'
import styles from './Sidebar.module.scss'

export interface WikiSidebarItem {
  title: string
  path: string
  hide?: boolean
  order?: number
  children?: WikiSidebarItem[]
}

const props = withDefaults(defineProps<{
  navigation: WikiSidebarItem[]
  currentPath: string
  isOpen?: boolean
  linkComponent?: string | Component
  mobileTitle?: string
}>(), {
  isOpen: false,
  linkComponent: 'a',
  mobileTitle: 'Navigation'
})

const emit = defineEmits<{
  close: []
}>()

const collapsedGroups = ref<Record<string, boolean>>({})

const visibleGroups = computed(() => {
  return props.navigation
    .filter(group => !group.hide)
    .map(group => ({
      ...group,
      children: (group.children ?? [])
        .filter(item => !item.hide)
        .sort((a, b) => (a.order ?? 999) - (b.order ?? 999))
    }))
    .filter(group => group.children.length > 0)
    .sort((a, b) => (a.order ?? 999) - (b.order ?? 999))
})

function toggleGroup(path: string) {
  collapsedGroups.value[path] = !collapsedGroups.value[path]
}

function isGroupOpen(path: string) {
  return collapsedGroups.value[path] !== true
}

function getLinkProps(path: string) {
  return props.linkComponent === 'a'
    ? { href: path }
    : { to: path }
}

function isActive(path: string) {
  return props.currentPath === path
}

watch(
  () => props.currentPath,
  (path, oldPath) => {
    if (path !== oldPath) {
      emit('close')
    }
  }
)
</script>

<template>
  <!-- Desktop -->
  <aside
    :class="styles.desktop"
    aria-label="Wiki navigation"
  >
    <div
      v-for="group in visibleGroups"
      :key="group.path"
      :class="styles.group"
    >
      <button
        type="button"
        :class="styles.groupHeader"
        :aria-expanded="isGroupOpen(group.path)"
        @click="toggleGroup(group.path)"
      >
        <span>{{ group.title }}</span>

        <span
          :class="styles.groupToggle"
          aria-hidden="true"
        >
          {{ isGroupOpen(group.path) ? '−' : '+' }}
        </span>
      </button>

      <ul
        v-if="isGroupOpen(group.path)"
        :class="styles.list"
      >
        <li
          v-for="item in group.children"
          :key="item.path"
          :class="[
            styles.item,
            { [styles.active]: isActive(item.path) }
          ]"
        >
          <component
            :is="linkComponent"
            v-bind="getLinkProps(item.path)"
            :class="styles.link"
            :aria-current="isActive(item.path) ? 'page' : undefined"
          >
            {{ item.title }}
          </component>
        </li>
      </ul>
    </div>
  </aside>

  <!-- Mobile -->
  <div :class="styles.mobile">
    <Transition
      :enter-active-class="styles.fadeEnterActive"
      :leave-active-class="styles.fadeLeaveActive"
      :enter-from-class="styles.fadeEnterFrom"
      :leave-to-class="styles.fadeLeaveTo"
    >
      <div
        v-if="isOpen"
        :class="styles.overlay"
        aria-hidden="true"
        @click="emit('close')"
      />
    </Transition>

    <Transition
      :enter-active-class="styles.slideEnterActive"
      :leave-active-class="styles.slideLeaveActive"
      :enter-from-class="styles.slideEnterFrom"
      :leave-to-class="styles.slideLeaveTo"
    >
      <aside
        v-if="isOpen"
        :class="styles.drawer"
        aria-label="Mobile wiki navigation"
      >
        <div :class="styles.mobileHeader">
          <h3 :class="styles.mobileTitle">
            {{ mobileTitle }}
          </h3>

          <button
            type="button"
            :class="styles.closeButton"
            aria-label="Close navigation"
            @click="emit('close')"
          >
            <svg
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              />
            </svg>
          </button>
        </div>

        <nav :class="styles.mobileContent">
          <div
            v-for="group in visibleGroups"
            :key="group.path"
            :class="styles.group"
          >
            <h3 :class="styles.mobileGroupHeader">
              {{ group.title }}
            </h3>

            <ul :class="styles.list">
              <li
                v-for="item in group.children"
                :key="item.path"
                :class="[
                  styles.item,
                  { [styles.active]: isActive(item.path) }
                ]"
              >
                <component
                  :is="linkComponent"
                  v-bind="getLinkProps(item.path)"
                  :class="styles.link"
                  :aria-current="isActive(item.path) ? 'page' : undefined"
                  @click="emit('close')"
                >
                  {{ item.title }}
                </component>
              </li>
            </ul>
          </div>
        </nav>
      </aside>
    </Transition>
  </div>
</template>

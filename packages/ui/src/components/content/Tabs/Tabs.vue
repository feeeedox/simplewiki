<script setup lang="ts">
import { ref, useSlots, computed } from 'vue'
import styles from './Tabs.module.scss'

const slots = useSlots()
const activeTab = ref(0)

const tabItems = computed(() => {
  const defaultSlot = slots.default ? slots.default() : []

  const children = defaultSlot.flatMap(node => {
    if (node.type === Symbol.for('v-fgt') && Array.isArray(node.children)) {
      return node.children
    }
    return node
  })

  return children.map((node: any, index) => ({
    title: node.props?.title || `Tab ${index + 1}`,
    vnode: node
  }))
})
</script>

<template>
  <div :class="styles.container">
    <ul :class="styles.tabList">
      <li
        v-for="(tab, index) in tabItems"
        :key="index"
        :class="styles.tabItem"
      >
        <button
          type="button"
          :class="[
            styles.tabButton,
            activeTab === index ? styles.active : styles.inactive
          ]"
          :aria-selected="activeTab === index"
          @click="activeTab = index"
        >
          {{ tab.title }}
        </button>
      </li>
    </ul>

    <div :class="styles.tabContent">
      <component
        :is="tab.vnode"
        v-for="(tab, index) in tabItems"
        v-show="activeTab === index"
        :key="index"
      />
    </div>
  </div>
</template>
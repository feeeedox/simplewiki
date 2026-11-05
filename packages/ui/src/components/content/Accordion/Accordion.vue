<script setup lang="ts">
import { computed, ref, useSlots } from 'vue'
import styles from './Accordion.module.css'

const slots = useSlots()
const openIndex = ref<number | null>(0)

const items = computed(() => {
  const defaultSlot = slots.default ? slots.default() : []
  const children = defaultSlot.flatMap(node => {
    if (node.type === Symbol.for('v-fgt') && Array.isArray(node.children)) {
      return node.children
    }
    return node
  })
  return children.map((node: any, index) => ({
    title: node.props?.title || `Punkt ${index + 1}`,
    vnode: node
  }))
})

function toggle(index: number) {
  openIndex.value = openIndex.value === index ? null : index
}
</script>

<template>
  <div :class="styles.container">
    <div
      v-for="(item, index) in items"
      :key="index"
      :class="styles.element"
    >
      <button
        type="button"
        @click="toggle(index)"
        :class="styles.accordion"
      >
        {{ item.title }}
        <span>{{ openIndex === index ? '−' : '+' }}</span>
      </button>
      <div v-show="openIndex === index" :class="styles.content">
        <component :is="item.vnode" />
      </div>
    </div>
  </div>
</template>
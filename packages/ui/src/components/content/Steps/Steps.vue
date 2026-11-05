<script setup lang="ts">
import { useSlots, computed } from 'vue'
import styles from './Steps.module.scss'

const slots = useSlots()

const items = computed(() => {
  const defaultSlot = slots.default ? slots.default() : []

  const children = defaultSlot.flatMap(node => {
    if (node.type === Symbol.for('v-fgt') && Array.isArray(node.children)) {
      return node.children
    }
    return node
  })

  return children.map((node: any, index) => ({
    title: node.props?.title || `Step ${index + 1}`,
    vnode: node
  }))
})
</script>

<template>
  <ol :class="styles.list">
    <li
      v-for="(item, index) in items"
      :key="index"
      :class="styles.item"
    >
      <span :class="styles.number">
        {{ index + 1 }}
      </span>

      <div>
        <div :class="styles.title">
          {{ item.title }}
        </div>

        <div :class="styles.description">
          <component :is="item.vnode" />
        </div>
      </div>
    </li>
  </ol>
</template>
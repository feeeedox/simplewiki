<script setup lang="ts">
import { useSlots, computed } from 'vue'
import styles from './Timeline.module.scss'

const slots = useSlots()

const events = computed(() => {
  const defaultSlot = slots.default ? slots.default() : []

  const children = defaultSlot.flatMap(node => {
    if (node.type === Symbol.for('v-fgt') && Array.isArray(node.children)) {
      return node.children
    }
    return node
  })

  return children.map((node: any) => ({
    date: node.props?.date || '',
    title: node.props?.title || '',
    vnode: node
  }))
})
</script>

<template>
  <div :class="styles.timeline">
    <div
      v-for="(event, index) in events"
      :key="index"
      :class="styles.event"
    >
      <span :class="styles.marker" />

      <div :class="styles.date">
        {{ event.date }}
      </div>

      <div
        v-if="event.title"
        :class="styles.title"
      >
        {{ event.title }}
      </div>

      <div :class="styles.content">
        <component :is="event.vnode" />
      </div>
    </div>
  </div>
</template>
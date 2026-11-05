<script setup lang="ts">
import { computed } from 'vue'
import styles from './Hatnode.module.css'

const props = withDefaults(defineProps<{
  icon?: boolean | string
}>(), {
  icon: true
})

const showIcon = computed(() => props.icon === true || props.icon === 'true')
</script>

<template>
  <div :class="[styles.item, { [styles.withIcon]: showIcon }]">
    <span v-if="showIcon" :class="styles.icon">▸</span>
    <em><slot /></em>
  </div>
</template>
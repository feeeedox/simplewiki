
<script setup lang="ts">
import styles from './Renderer.module.scss'
</script>

<template>
  <div :class="styles.container">
    <div :class="styles.renderer">
      <slot />
    </div>
  </div>
</template>

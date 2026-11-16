<script setup lang="ts">
import styles from "./Label.module.scss";

defineOptions({
  inheritAttrs: false,
});
</script>

<template>
  <label v-bind="$attrs" :class="styles.label">
    <slot />
  </label>
</template>

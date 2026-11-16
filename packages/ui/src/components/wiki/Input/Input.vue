<script setup lang="ts">
import styles from "./Input.module.scss";

defineOptions({
  inheritAttrs: false,
});
</script>

<template>
  <input v-bind="$attrs" :class="styles.input" />
</template>

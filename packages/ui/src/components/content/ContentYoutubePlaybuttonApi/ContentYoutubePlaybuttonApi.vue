<script setup lang="ts">
import styles from './ContentYoutubePlaybuttonApi.module.css';
</script>

<template>
  <div :class="styles.playButtonOverlay">
    <div :class="styles.playIcon">
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M8 5v14l11-7z" />
      </svg>
    </div>
  </div>
</template>

<template>
  <div class="play-button-overlay">
    <div class="play-icon">
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M8 5v14l11-7z" />
      </svg>
    </div>
  </div>
</template>

<style scoped>
.play-button-overlay {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.25);
  pointer-events: none;
  z-index: 10;
  transition: background 0.3s ease;
}

.play-icon {
  width: 68px;
  height: 48px;
  border-radius: 12px;
  background: rgba(33, 33, 33, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  transition: background 0.2s, transform 0.2s;
}

.play-icon svg {
  width: 30px;
  height: 30px;
}

:global(.wiki-youtube-player:hover) .play-button-overlay {
  background: rgba(0, 0, 0, 0.4);
}

:global(.wiki-youtube-player:hover) .play-icon {
  background: #ff0000;
  transform: scale(1.05);
}

:global(.wiki-youtube-player:has(iframe)) .play-button-overlay {
  display: none;
}
</style>

<template>
  <Transition name="loading-fade" @after-leave="$emit('done')">
    <div v-if="visible" class="loading-screen">
      <div class="loading-inner">
        <div class="loading-top">
          <span class="loading-tag font-bold">PORTFOLIO - NVHAI272</span>
          <span class="loading-pct">{{ Math.floor(progress) }}%</span>
        </div>

        <h1 class="loading-word">
          {{ displayed }}<span class="loading-caret">_</span>
        </h1>

        <div class="loading-bar-wrap">
          <div class="loading-bar" :style="{ width: progress + '%' }"></div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

defineEmits<{ done: [] }>()

const TEXT = 'CODE FOR LIFE'
const TYPE_SPEED = 80
const FADE_DELAY = 2600

const displayed = ref('')
const visible = ref(true)
const progress = ref(0)

onMounted(() => {
  let i = 0
  const type = () => {
    if (i < TEXT.length) {
      displayed.value += TEXT[i++]
      setTimeout(type, TYPE_SPEED)
    }
  }
  type()

  const start = performance.now()
  const tick = (now: number) => {
    progress.value = Math.min(100, ((now - start) / FADE_DELAY) * 100)
    if (progress.value < 100) requestAnimationFrame(tick)
  }
  requestAnimationFrame(tick)

  setTimeout(() => { visible.value = false }, FADE_DELAY)
})
</script>

<style scoped>
.loading-screen {
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: var(--background);
  color: var(--foreground);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
}

.loading-inner {
  width: min(680px, 100%);
}

.loading-top {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  font-family: 'IBM Plex Mono', monospace;
  font-size: 0.7rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--muted-foreground);
  padding-bottom: 0.75rem;
  border-bottom: 1px solid var(--border-soft);
}

.loading-word {
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: -0.02em;
  line-height: 0.9;
  font-size: clamp(2rem, 8vw, 4.5rem);
  margin: 1.5rem 0;
  color: var(--foreground);
}

.loading-caret {
  color: var(--accent);
  animation: blink 1.1s step-start infinite;
}

.loading-bar-wrap {
  width: 100%;
  height: 4px;
  background: var(--secondary);
  border: 1px solid var(--border);
}

.loading-bar {
  height: 100%;
  background: var(--accent);
  transition: width 0.05s linear;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50%      { opacity: 0; }
}

.loading-fade-leave-active {
  transition: opacity 0.5s ease;
}
.loading-fade-leave-to {
  opacity: 0;
}

@media (prefers-reduced-motion: reduce) {
  .loading-caret { animation: none; }
}
</style>

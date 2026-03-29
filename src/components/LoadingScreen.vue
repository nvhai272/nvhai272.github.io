<template>
  <Transition name="loading-fade" @after-leave="$emit('done')">
    <div v-if="visible" class="loading-screen">
      <div class="loading-content">
        <img src="/Gibli Tribute.gif" alt="loading" class="loading-gif" />
        <div class="typewriter-wrap">
          <span class="typewriter-text">{{ displayed }}</span>
        </div>
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
const TYPE_SPEED = 90   // ms mỗi ký tự
const HOLD = 800        // ms giữ sau khi gõ xong
const FADE_DELAY = 3000 // tổng thời gian trước khi fade out

const displayed = ref('')
const dots = ref('')
const visible = ref(true)
const progress = ref(0)

onMounted(() => {
  // Typewriter
  let i = 0
  const type = () => {
    if (i < TEXT.length) {
      displayed.value += TEXT[i++]
      setTimeout(type, TYPE_SPEED)
    } else {
      // Xuất hiện từng chấm: . → .. → ...
      let d = 0
      const addDot = () => {
        if (d < 3) {
          dots.value += '.'
          d++
          setTimeout(addDot, 200)
        }
      }
      addDot()
    }
  }
  type()

  // Progress bar chạy trong FADE_DELAY ms
  const start = performance.now()
  const tick = (now: number) => {
    progress.value = Math.min(100, ((now - start) / FADE_DELAY) * 100)
    if (progress.value < 100) requestAnimationFrame(tick)
  }
  requestAnimationFrame(tick)

  // Ẩn sau FADE_DELAY
  setTimeout(() => {
    visible.value = false
  }, FADE_DELAY)
})
</script>

<style scoped>
.loading-screen {
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: #0F1219;
  display: flex;
  align-items: center;
  justify-content: center;
}

.loading-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}

.typewriter-wrap {
  font-family: 'JetBrains Mono', 'Courier New', monospace;
  font-size: clamp(1.75rem, 5vw, 3.5rem);
  font-weight: 700;
  letter-spacing: 0.15em;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
}

.typewriter-text {
  background: linear-gradient(135deg, #38bdf8 0%, #818cf8 50%, #f472b6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.cursor {
  color: #38bdf8;
  font-weight: 300;
  animation: cursor-on 0.1s step-end forwards;
}

.cursor.blink {
  animation: blink 0.8s step-end infinite;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50%       { opacity: 0; }
}

.loading-gif {
  width: clamp(160px, 30vw, 280px);
  height: auto;
  border-radius: 12px;
}

.loading-bar-wrap {
  width: min(320px, 60vw);
  height: 3px;
  background: rgba(255,255,255,0.1);
  border-radius: 999px;
  overflow: hidden;
}

.loading-bar {
  height: 100%;
  background: linear-gradient(90deg, #38bdf8, #818cf8, #f472b6);
  border-radius: 999px;
  transition: width 0.05s linear;
}

/* Fade out transition */
.loading-fade-leave-active {
  transition: opacity 0.6s ease;
}
.loading-fade-leave-to {
  opacity: 0;
}
</style>

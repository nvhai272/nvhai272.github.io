<template>
  <header class="sticky top-0 z-50 backdrop-blur-md bg-background/90 border-b border-border transition-colors">
    <div class="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8 h-14 flex items-center justify-between">
      <!-- Logo -->
      <div class="flex items-center gap-2.5 group cursor-pointer select-none">
        <div class="relative size-8 rounded-xl bg-gradient-to-br from-[#38bdf8] to-[#f472b6] flex items-center justify-center shadow-sm shadow-[#38bdf8]/30 group-hover:shadow-[#f472b6]/40 group-hover:scale-105 group-hover:rotate-3 transition-all duration-300">
          <CodeBracketIcon class="size-4 text-white" />
        </div>
        <div class="flex items-baseline gap-px">
          <span class="font-bold text-xl sm:text-2xl bg-gradient-to-r from-[#38bdf8] via-[#818cf8] to-[#f472b6] bg-clip-text text-transparent leading-none">
            Code For Life
          </span>
          <span class="text-[#f472b6] font-bold text-xl sm:text-2xl leading-none cursor-blink">_</span>
        </div>
      </div>

      <!-- Actions -->
      <div class="flex items-center gap-0.5">
        <button
          @click="toggleLanguage"
          class="flex items-center gap-1 px-2.5 py-1.5 rounded-lg border border-border text-muted-foreground hover:border-[#38bdf8]/50 hover:bg-secondary hover:text-foreground transition-all shadow-sm text-xs font-bold"
          :title="`${$t('header.language')}: ${currentLocale.toUpperCase()}`"
        >
          <LanguageIcon class="size-4" />
          <span class="hidden sm:inline">{{ currentLocale.toUpperCase() }}</span>
        </button>

        <div class="w-px h-4 bg-border mx-1" />

        <button
          @click="$emit('toggle')"
          class="p-2 rounded-lg border border-border text-muted-foreground hover:border-[#38bdf8]/50 hover:bg-secondary hover:text-foreground transition-all shadow-sm"
          :aria-label="$t('header.theme')"
        >
          <SunIcon v-if="dark" class="size-4" />
          <MoonIcon v-else class="size-4" />
        </button>

        <button
          @click="$emit('menu-toggle')"
          :class="[
            'md:hidden p-2 rounded-lg border transition-all shadow-sm',
            menuOpen
              ? 'border-[#38bdf8] bg-[#38bdf8]/10 text-[#38bdf8]'
              : 'border-border text-muted-foreground hover:border-[#38bdf8]/50 hover:bg-secondary'
          ]"
          :aria-label="$t('header.menu')"
        >
          <Bars3Icon class="size-4" />
        </button>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { CodeBracketIcon, LanguageIcon, SunIcon, MoonIcon, Bars3Icon } from '@heroicons/vue/20/solid'
import { useI18n } from 'vue-i18n'

defineProps<{
  dark: boolean
  menuOpen: boolean
}>()

defineEmits<{
  toggle: []
  'menu-toggle': []
}>()

const { locale } = useI18n()

const currentLocale = computed(() => locale.value)

const toggleLanguage = () => {
  const newLocale = locale.value === 'vi' ? 'en' : 'vi'
  locale.value = newLocale
  localStorage.setItem('locale', newLocale)
}
</script>

<style scoped>
.cursor-blink {
  animation: blink 1.1s step-start infinite;
}
@keyframes blink {
  0%, 100% { opacity: 1; }
  50%       { opacity: 0; }
}
</style>

<template>
  <header class="sticky top-0 z-50 backdrop-blur-md bg-background/90 border-b border-border transition-colors">
    <div class="max-w-[720px] mx-auto px-4 sm:px-6 h-14 flex items-center gap-6">
      <!-- Logo -->
      <div class="flex items-center gap-2 cursor-pointer select-none shrink-0">
        <div class="size-7 rounded-lg bg-foreground/10 flex items-center justify-center">
          <CodeBracketIcon class="size-4 text-foreground" />
        </div>
        <span class="font-bold text-sm text-foreground">Code For Life<span class="text-muted-foreground cursor-blink">_</span></span>
      </div>

      <!-- Nav links -->
      <nav class="hidden md:flex items-center gap-5 flex-1">
        <a v-for="item in navItems" :key="item.href" :href="item.href"
           class="text-sm text-muted-foreground hover:text-foreground transition-colors">
          {{ item.label }}
        </a>
      </nav>

      <!-- Actions -->
      <div class="flex items-center gap-2 ml-auto shrink-0">
        <button
          @click="toggleLanguage"
          class="flex items-center gap-1 px-2.5 py-1 rounded border border-border text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors text-xs font-mono"
          :title="`${$t('header.language')}: ${currentLocale.toUpperCase()}`"
        >
          <LanguageIcon class="size-3.5" />
          <span class="hidden sm:inline">{{ currentLocale.toUpperCase() }}</span>
        </button>

        <button
          @click="$emit('toggle')"
          class="p-1.5 rounded border border-border text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors"
          :aria-label="$t('header.theme')"
        >
          <SunIcon v-if="dark" class="size-4" />
          <MoonIcon v-else class="size-4" />
        </button>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { CodeBracketIcon, LanguageIcon, SunIcon, MoonIcon } from '@heroicons/vue/20/solid'
import { useI18n } from 'vue-i18n'

defineProps<{
  dark: boolean
}>()

defineEmits<{
  toggle: []
}>()

const { locale, t } = useI18n()

const currentLocale = computed(() => locale.value)

const navItems = computed(() => [
  { href: '#hero',         label: t('nav.about') },
  { href: '#technologies', label: t('nav.skills') },
  { href: '#repos',        label: t('nav.projects') },
  { href: '#contact',      label: t('nav.contact') },
])

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
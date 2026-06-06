<template>
  <header class="sticky top-0 z-40 bg-background/90 backdrop-blur-md border-b-2 border-border">
    <div class="max-w-[1200px] mx-auto px-4 sm:px-8 h-14 sm:h-16 flex items-center gap-4">
      <!-- Wordmark -->
      <a href="#top" class="flex items-baseline gap-2 shrink-0 group">
        <span class="font-display font-bold text-base sm:text-lg uppercase tracking-tight text-foreground">
          Portfolio<span class="text-accent">.</span>
        </span>
      </a>

      <!-- Desktop nav -->
      <nav class="hidden md:flex items-center gap-7 ml-auto">
        <a
          v-for="(item, i) in navItems"
          :key="item.href"
          :href="item.href"
          class="group flex items-baseline gap-1.5 font-mono text-sm font-bold uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
        >
          <span class="text-accent">{{ String(i + 1).padStart(2, '0') }}</span>
          <span class="border-b border-transparent group-hover:border-foreground">{{ item.label }}</span>
        </a>
      </nav>

      <!-- Actions -->
      <div class="flex items-center gap-2 ml-auto md:ml-6 shrink-0">
        <button
          @click="toggleLanguage"
          class="btn-brut px-2.5 h-8 flex items-center gap-1.5 font-mono text-sm font-bold uppercase"
          :title="`${$t('header.language')}: ${currentLocale.toUpperCase()}`"
        >
          <GlobeAltIcon class="size-4" />
          <span>{{ currentLocale.toUpperCase() }}</span>
        </button>

        <button
          @click="$emit('toggle')"
          class="btn-brut size-8 flex items-center justify-center"
          :aria-label="$t('header.theme')"
        >
          <SunIcon v-if="dark" class="size-4" />
          <MoonIcon v-else class="size-4" />
        </button>

        <!-- Mobile menu toggle -->
        <button
          @click="menuOpen = !menuOpen"
          class="btn-brut size-8 flex md:hidden items-center justify-center"
          :aria-label="$t('header.menu')"
          :aria-expanded="menuOpen"
        >
          <XMarkIcon v-if="menuOpen" class="size-4" />
          <Bars2Icon v-else class="size-4" />
        </button>
      </div>
    </div>

    <!-- Mobile nav panel -->
    <Transition name="slide">
      <nav v-if="menuOpen" class="md:hidden border-t-2 border-border bg-background">
        <a
          v-for="(item, i) in navItems"
          :key="item.href"
          :href="item.href"
          @click="menuOpen = false"
          class="flex items-baseline gap-3 px-5 py-4 border-b border-border-soft font-display font-bold uppercase tracking-tight text-2xl text-foreground hover:text-accent transition-colors"
        >
          <span class="font-mono text-xs text-accent">{{ String(i + 1).padStart(2, '0') }}</span>
          {{ item.label }}
        </a>
      </nav>
    </Transition>
  </header>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { GlobeAltIcon, SunIcon, MoonIcon, Bars2Icon, XMarkIcon } from '@heroicons/vue/20/solid'
import { useI18n } from 'vue-i18n'

defineProps<{ dark: boolean }>()
defineEmits<{ toggle: [] }>()

const { locale, t } = useI18n()
const menuOpen = ref(false)
const currentLocale = computed(() => locale.value)

const navItems = computed(() => [
  { href: '#about',        label: t('nav.about') },
  { href: '#stack',        label: t('nav.stack') },
  { href: '#work',         label: t('nav.projects') },
  { href: '#contact',      label: t('nav.contact') },
])

const toggleLanguage = () => {
  const newLocale = locale.value === 'vi' ? 'en' : 'vi'
  locale.value = newLocale
  localStorage.setItem('locale', newLocale)
}
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>

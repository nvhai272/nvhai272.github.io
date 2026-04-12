<template>
  <footer class="border-t border-border bg-secondary/95 backdrop-blur-md transition-colors z-30">
    <div class="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8 py-4 pb-16 md:pb-5">
      <div class="flex flex-col-reverse sm:flex-row items-center justify-between gap-4">
        <div class="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
          <div class="flex items-center gap-2">
            <span class="font-display font-extrabold text-sm tracking-tight bg-gradient-to-r from-[#38bdf8] via-[#818cf8] to-[#f472b6] bg-clip-text text-transparent">
              Code For Life
            </span>
          </div>
          <span class="hidden sm:inline text-muted-foreground">•</span>
          <p class="font-medium text-muted-foreground text-xs text-center sm:text-left">
            {{ $t('footer.copyright') }}
          </p>
        </div>

        <div class="flex items-center gap-3">
          <a
              href="https://github.com/nvhai272"
              target="_blank"
              aria-label="GitHub"
              class="p-2.5 rounded-lg bg-black/5 dark:bg-white/10 text-black dark:text-white hover:bg-black/10 dark:hover:bg-white/20 transition-all duration-300 active:scale-95 shadow-sm"
          >
            <Github class="size-5" />
          </a>

          <a
              href="#"
              target="_blank"
              aria-label="LinkedIn"
              class="p-2.5 rounded-lg bg-[#0077B5]/10 text-[#0077B5] hover:bg-[#0077B5]/20 transition-all duration-300 active:scale-95 shadow-sm"
          >
            <Linkedin class="size-5" />
          </a>

          <a
              href="https://facebook.com/nvhai272"
              target="_blank"
              aria-label="Facebook"
              class="p-2.5 rounded-lg bg-[#1877F2]/10 text-[#1877F2] hover:bg-[#1877F2]/20 transition-all duration-300 active:scale-95 shadow-sm"
          >
            <Facebook class="size-5" />
          </a>

          <a
              href="#"
              target="_blank"
              aria-label="Blog"
              class="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500/20 transition-all duration-300 active:scale-95 shadow-sm"
          >
            <BookOpen class="size-5" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { Github, Linkedin, Facebook, BookOpen } from 'lucide-vue-next'

defineProps<{
  dark: boolean
}>()
</script>
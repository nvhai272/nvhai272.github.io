<template>
  <footer class="border-t border-slate-200 dark:border-[#232B3E] bg-slate-50/95 dark:bg-[#0F1219]/95 backdrop-blur-md transition-colors md:fixed md:bottom-0 md:left-0 md:right-0 z-30">
    <div class="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8 py-4 md:py-5">
      <div class="flex flex-col-reverse sm:flex-row items-center justify-between gap-4">
        <!-- Logo + motto -->
        <div class="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
          <div class="flex items-center gap-2">
            <span class="font-display font-extrabold text-sm tracking-tight bg-gradient-to-r from-[#38bdf8] via-[#818cf8] to-[#f472b6] bg-clip-text text-transparent">Code For Life</span>
          </div>
          <span class="hidden sm:inline text-slate-700 dark:text-slate-300">·</span>
          <p class="font-medium text-slate-700 dark:text-slate-200 text-xs text-center sm:text-left">
            {{ $t('footer.copyright') }}
          </p>
        </div>

        <!-- Social links -->
        <div class="flex items-center gap-1">
          <!-- GitHub -->
          <a
            href="https://github.com/nvhai272"
            target="_blank"
            rel="noopener"
            aria-label="GitHub"
            class="p-2 rounded-lg text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-[#1C2234] transition-all"
          >
            <GithubIcon class="size-5" />
          </a>

          <!-- YouTube -->
          <a
            href="#"
            target="_blank"
            rel="noopener"
            aria-label="YouTube"
            class="p-2 rounded-lg text-red-400 dark:text-red-400 hover:text-red-600 dark:hover:text-red-500 hover:bg-slate-100 dark:hover:bg-[#1C2234] transition-all"
          >
            <YoutubeIcon class="size-5" />
          </a>

          <!-- Facebook -->
          <a
            href="https://facebook.com/nvhai272"
            target="_blank"
            rel="noopener"
            aria-label="Facebook"
            class="p-2 rounded-lg text-blue-400 dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-300 hover:bg-slate-100 dark:hover:bg-[#1C2234] transition-all"
          >
            <FacebookIcon class="size-5" />
          </a>

          <!-- Zalo -->
          <a
            href="#"
            target="_blank"
            rel="noopener"
            aria-label="Zalo"
            class="p-2 rounded-lg text-[#0068FF] dark:text-[#3d8bff] hover:text-[#0055cc] dark:hover:text-[#5aa3ff] hover:bg-slate-100 dark:hover:bg-[#1C2234] transition-all"
          >
            <svg class="size-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <rect x="1" y="1" width="22" height="22" rx="5" fill="currentColor"/>
              <path d="M6.5 8.5H17.5L6.5 15.5H17.5" stroke="white" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { Github as GithubIcon, Youtube as YoutubeIcon, Facebook as FacebookIcon } from 'lucide-vue-next'

defineProps<{
  dark: boolean
}>()
</script>

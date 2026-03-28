<template>
  <footer class="border-t border-slate-200 dark:border-[#232B3E] bg-slate-50/80 dark:bg-[#0F1219] transition-colors mt-8">
    <div class="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8 py-8">
      <div class="flex flex-col sm:flex-row items-center justify-between gap-6">
        <!-- Logo + motto -->
        <div class="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
          <div class="flex items-center gap-2">
            <div class="size-6 rounded-md bg-[#EC5B13]/10 border border-[#EC5B13]/20 flex items-center justify-center">
              <Code2 class="size-3.5 text-[#EC5B13]" />
            </div>
            <span class="text-[#EC5B13] font-bold text-sm">Code For Life</span>
          </div>
          <span class="hidden sm:inline text-slate-300 dark:text-slate-700">·</span>
          <p class="text-slate-400 dark:text-slate-500 text-xs text-center sm:text-left">
            {{ $t('footer.motto') }}
          </p>
        </div>

        <!-- Social links -->
        <div class="flex items-center gap-1">
          <a
            href="https://github.com/nvhai272"
            target="_blank"
            rel="noopener"
            aria-label="GitHub"
            class="p-2 rounded-lg text-slate-400 dark:text-slate-500 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-[#1C2234] transition-all"
          >
            <Github class="size-4" />
          </a>
          <a
            href="mailto:nvhai272@gmail.com"
            aria-label="Email"
            class="p-2 rounded-lg text-slate-400 dark:text-slate-500 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-[#1C2234] transition-all"
          >
            <Mail class="size-4" />
          </a>
        </div>
      </div>

      <!-- Bottom copyright -->
      <div class="mt-6 pt-4 border-t border-slate-200 dark:border-[#232B3E] text-center">
        <p class="text-slate-400 dark:text-slate-500 text-xs">
          {{ $t('footer.copyright') }}
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { Code2, Github, Mail } from 'lucide-vue-next'

defineProps<{
  dark: boolean
}>()
</script>

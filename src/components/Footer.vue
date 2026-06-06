<template>
  <footer class="">
    
    <!-- Big CTA -->
    <div class="max-w-[1200px] mx-auto px-4 sm:px-8 py-14 sm:py-20">
      <a
        href="mailto:nvhai272@gmail.com"
        class="group inline-flex items-end gap-3 font-display font-bold uppercase tracking-tighter leading-[0.9] text-foreground text-[clamp(2.25rem,9vw,7rem)]"
      >
        {{ $t('footer.cta') }}
        <ArrowUpRightIcon class="size-8 sm:size-16 mb-2 text-accent transition-transform duration-200 group-hover:translate-x-2 group-hover:-translate-y-2" />
      </a>

      <!-- Bottom row -->
      <div class="mt-12 pt-6 border-t border-border-soft flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
        <p class="font-mono font-bold text-[15px] tracking-widest text-muted-foreground">{{ $t('footer.copyright') }}</p>

        <div class="flex items-center gap-3">
          <a href="https://github.com/nvhai272" target="_blank" rel="noopener" aria-label="GitHub" class="btn-brut size-9 flex items-center justify-center">
            <Github class="size-4" />
          </a>
          <a href="https://facebook.com/nvhai272" target="_blank" rel="noopener" aria-label="Facebook" class="btn-brut size-9 flex items-center justify-center">
            <Facebook class="size-4" />
          </a>
          <a href="#top" aria-label="Back to top" class="btn-brut h-9 px-3 flex items-center gap-1.5 font-mono text-[11px] font-bold uppercase tracking-widest">
            {{ $t('footer.top') }}
            <ArrowUpIcon class="size-3.5" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { Github, Facebook } from 'lucide-vue-next'
import { ArrowUpRightIcon, ArrowUpIcon } from '@heroicons/vue/20/solid'
</script>

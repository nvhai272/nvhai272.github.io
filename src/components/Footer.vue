<template>
  <footer class="border-t border-border mt-4">
    <div class="max-w-[720px] mx-auto px-4 sm:px-6 py-6">
      <div class="flex items-center justify-between gap-4 flex-wrap">
        <p class="text-xs text-muted-foreground">{{ $t('footer.copyright') }}</p>
        <div class="flex items-center gap-4">
          <a
            href="https://github.com/nvhai272"
            target="_blank"
            rel="noopener"
            aria-label="GitHub"
            class="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Github class="size-4" />
          </a>
          <a
            href="https://facebook.com/nvhai272"
            target="_blank"
            rel="noopener"
            aria-label="Facebook"
            class="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Facebook class="size-4" />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener"
            aria-label="LinkedIn"
            class="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Linkedin class="size-4" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { Github, Facebook, Linkedin } from 'lucide-vue-next'
</script>
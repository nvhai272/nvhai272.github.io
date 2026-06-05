<template>
  <section class="py-10 sm:py-14">
    <!-- Big display heading -->
    <h1 class="text-5xl sm:text-6xl font-bold text-foreground tracking-tight leading-tight mb-8">
      {{ $t('sidebar.the_story.name') }}
    </h1>

    <!-- Profile -->
    <div class="flex flex-col sm:flex-row gap-6 items-start">
      <img
        src="/img.jpg"
        alt="Nguyen Van Hai"
        class="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover object-left-bottom border border-border shrink-0"
      />

      <div class="flex-1 min-w-0">
        <h2 class="text-xl font-bold text-foreground">Nguyen Van Hai</h2>
        <p class="text-sm text-muted-foreground mt-0.5">@nvhai272 · {{ $t('sidebar.job_title') }}</p>

        <div class="mt-4 flex flex-col gap-2 text-sm">
          <span class="flex items-center gap-2 text-muted-foreground">
            <NavigationIcon class="size-3.5 shrink-0" />
            {{ $t('sidebar.location') }}
          </span>
          <a
            href="mailto:nvhai272@gmail.com"
            class="flex items-center gap-2 text-link hover:underline underline-offset-4 transition-colors"
          >
            <AtSignIcon class="size-3.5 shrink-0" />
            nvhai272@gmail.com
          </a>
        </div>

        <div class="mt-4 flex items-center gap-4 text-sm">
          <a
            href="https://github.com/nvhai272"
            target="_blank"
            rel="noopener"
            class="flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors"
          >
            <GithubIcon class="size-4" />
            GitHub
          </a>
          <a
            href="https://facebook.com/nvhai272"
            target="_blank"
            rel="noopener"
            class="flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors"
          >
            <FacebookIcon class="size-4" />
            Facebook
          </a>
        </div>

        <div class="mt-5 flex items-center gap-2">
          <button
            @click="cvOpen = true"
            class="flex items-center gap-1.5 px-3 py-1.5 text-sm border border-border rounded text-foreground hover:bg-secondary transition-colors"
          >
            <EyeIcon class="size-3.5 shrink-0" />
            {{ $t('sidebar.view_cv') }}
          </button>
          <a
            href="/cv.pdf"
            download
            class="flex items-center gap-1.5 px-3 py-1.5 text-sm border border-border rounded text-foreground hover:bg-secondary transition-colors"
          >
            <DocumentArrowDownIcon class="size-3.5 shrink-0" />
            {{ $t('sidebar.download_cv') }}
          </a>
        </div>
      </div>
    </div>

    <CvModal :open="cvOpen" @close="cvOpen = false" />
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { EyeIcon, DocumentArrowDownIcon } from '@heroicons/vue/20/solid'
import { Navigation as NavigationIcon, AtSign as AtSignIcon, Github as GithubIcon, Facebook as FacebookIcon } from 'lucide-vue-next'
import CvModal from './CvModal.vue'

const cvOpen = ref(false)
</script>
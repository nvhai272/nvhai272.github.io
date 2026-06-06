<template>
  <section class="pt-4 sm:pt-6 pb-8">
    <SectionHeader index="01" :title="$t('sections.about.title')" :meta="$t('sections.about.meta')" />

    <!-- Name + photo row -->
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
      <!-- Left: identity + summary -->
      <div class="lg:col-span-8 order-2 lg:order-1">
        <!-- Headline -->
        <div v-reveal="120" class="relative">
          <h1 class="font-display font-bold uppercase text-foreground tracking-tighter leading-[0.9] text-[clamp(2rem,6vw,4.5rem)]">
            <span class="block">Nguyen Van Hai</span>
          </h1>
        </div>

        <div v-reveal="180" class="flex flex-wrap items-center gap-x-4 gap-y-2 pb-5 rule-hair">
          <span class="font-display font-semibold text-lg sm:text-xl uppercase tracking-tight">
            {{ $t('sidebar.job_title') }}
          </span>
          <span class="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-muted-foreground">
            <span class="size-2 bg-green-500 inline-block animate-pulse" />
            {{ $t('hero.available') }}
          </span>
        </div>

        <!-- CTAs -->
        <div class="mt-7 flex flex-wrap items-center gap-3">
          <a v-reveal="240" href="#contact" class="btn-accent px-5 h-11 flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider">
            {{ $t('hero.cta_contact') }}
            <ArrowDownRightIcon class="size-4" />
          </a>
          <button
            v-reveal="300"
            @click="cvOpen = true"
            class="btn-brut px-5 h-11 flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider"
          >
            <EyeIcon class="size-4" />
            {{ $t('sidebar.view_cv') }}
          </button>
          <a
            v-reveal="360"
            href="/cv.pdf"
            download
            class="btn-brut px-5 h-11 hidden sm:flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider"
            :title="$t('sidebar.download_cv')"
          >
            <DocumentArrowDownIcon class="size-4" />
            {{ $t('sidebar.download_cv') }}
          </a>
        </div>

        <!-- Contact lines -->
        <div class="mt-7 flex flex-col gap-2 font-mono text-sm sm:text-base">
          <a v-reveal="420" href="mailto:nvhai272@gmail.com" class="group inline-flex items-center gap-2 text-foreground w-fit">
            <AtSignIcon class="size-3.5 text-accent" />
            <span class="border-b border-foreground/30 group-hover:border-foreground">nvhai272@gmail.com</span>
          </a>
          <span v-reveal="480" class="w-fit text-muted-foreground">Ha Noi, Viet Nam</span>
          <div v-reveal="540" class="flex items-center gap-5 text-muted-foreground">
            
            <a href="https://github.com/nvhai272" target="_blank" rel="noopener" class="inline-flex items-center gap-1.5 hover:text-foreground transition-colors">
              <GithubIcon class="size-4" /> GitHub
            </a>
            <a href="https://facebook.com/nvhai272" target="_blank" rel="noopener" class="inline-flex items-center gap-1.5 hover:text-foreground transition-colors">
              <FacebookIcon class="size-4" /> Facebook
            </a>
          </div>
        </div>
      </div>

      <!-- Right: framed photo -->
      <div v-reveal="60" class="mt-4 lg:mt-0 lg:col-span-4 order-1 lg:order-2">
        <figure class="relative w-full max-w-[160px] sm:max-w-[220px] lg:max-w-[280px] mx-auto lg:ml-auto lg:mr-0">
          <div class="photo-wipe border-2 border-border bg-card p-2">
            <img
              src="/img.jpg"
              alt="Nguyen Van Hai"
              class="w-full aspect-[4/5] object-cover object-top transition-transform duration-500 hover:scale-[1.02]"
            />
          </div>
          <figcaption class="mt-2 flex items-center justify-between font-mono font-bold text-[15px] tracking-widest text-muted-foreground">
            <span>@nvhai272</span>
          </figcaption>
          <span class="accent-frame absolute -bottom-3 -left-3 -z-10 w-full h-full border-2 border-accent hidden sm:block" />
        </figure>
      </div>
    </div>

    <!-- About description: full-width -->
    <div class="mt-10 sm:mt-12 space-y-4 text-base sm:text-lg leading-relaxed text-muted-foreground">
      <p v-reveal>{{ $t('sidebar.the_story.p2') }}</p>
      <p v-reveal="90">{{ $t('sidebar.the_story.ai_note') }}</p>
      <p v-reveal="180">{{ $t('sidebar.the_story.p3') }}</p>
    </div>

    <CvModal :open="cvOpen" @close="cvOpen = false" />
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { EyeIcon, DocumentArrowDownIcon, ArrowDownRightIcon } from '@heroicons/vue/20/solid'
import { AtSign as AtSignIcon, Github as GithubIcon, Facebook as FacebookIcon } from 'lucide-vue-next'
import CvModal from './CvModal.vue'
import SectionHeader from './SectionHeader.vue'

const cvOpen = ref(false)
</script>

<style scoped>
/* Photo: wipe the frame open from bottom to top on first load */
.photo-wipe {
  animation: photo-wipe 0.85s cubic-bezier(0.22, 1, 0.36, 1) 0.25s both;
}
.photo-wipe img {
  animation: photo-zoom 1.1s cubic-bezier(0.22, 1, 0.36, 1) 0.25s both;
}
@keyframes photo-wipe {
  from { clip-path: inset(100% 0 0 0); }
  to   { clip-path: inset(0 0 0 0); }
}
@keyframes photo-zoom {
  from { transform: scale(1.12); }
  to   { transform: scale(1); }
}

/* Accent frame slides into place */
.accent-frame {
  animation: accent-frame 0.6s cubic-bezier(0.22, 1, 0.36, 1) 0.55s both;
}
@keyframes accent-frame {
  from { opacity: 0; transform: translate(12px, -12px); }
  to   { opacity: 1; transform: translate(0, 0); }
}
</style>

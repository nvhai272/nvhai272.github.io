<template>
  <section>
    <SectionHeader index="03" :title="$t('sections.work.title')" :meta="$t('sections.work.meta')" />

    <div v-reveal="120" class="mb-2 max-w-5xl text-base sm:text-lg leading-relaxed text-muted-foreground">
      <p class="mt-2">{{ $t('repos.note') }}</p>
      <p class="my-1">
        <button
          type="button"
          @click="cvOpen = true"
          class="inline-flex items-center gap-1.5 font-medium text-foreground underline underline-offset-4 decoration-accent hover:text-accent transition-colors"
        >
          {{ $t('repos.note_cv') }}
          <ArrowUpRightIcon class="size-4 text-accent" />
        </button>
      </p>
      <p>{{ $t('repos.note2') }}</p>
    </div>

    <!-- Loading skeleton -->
    <div v-if="loading" class="border-t-2 border-border">
      <div v-for="i in 6" :key="i" class="py-6 border-b border-border-soft flex flex-col gap-2 animate-pulse">
        <div class="h-5 bg-muted w-1/3" />
        <div class="h-3 bg-muted w-3/4" />
      </div>
    </div>

    <!-- Error -->
    <div v-else-if="error" v-reveal class="border-2 border-border p-10 flex flex-col items-center gap-4">
      <p class="font-mono text-sm text-muted-foreground">{{ $t('repos.error') }}</p>
      <button @click="fetchRepos" class="btn-brut px-4 h-9 font-mono text-xs font-bold uppercase tracking-wider">
        {{ $t('repos.retry') }}
      </button>
    </div>

    <!-- List -->
    <div v-else v-reveal="200" class="border-t-2 border-border">
      <a
        v-for="(repo, index) in repos"
        :key="repo.id"
        :href="repo.html_url"
        target="_blank"
        rel="noopener"
        class="group grid grid-cols-[auto_1fr_auto] items-center gap-4 sm:gap-6 py-5 sm:py-6 px-1 sm:px-3 border-b border-border-soft hover:bg-foreground hover:text-background transition-colors duration-200"
      >
        <span class="font-mono text-xs text-muted-foreground group-hover:text-background/60 self-start pt-1">
          {{ String(index + 1).padStart(2, '0') }}
        </span>

        <div class="min-w-0">
          <h3 class="font-display font-bold tracking-tight text-xl sm:text-2xl leading-none truncate">
            {{ repo.name }}
            <span
              v-if="repo.private"
              class="ml-2 align-middle font-mono text-[10px] uppercase tracking-wider border border-current px-1.5 py-0.5"
            >Private</span>
          </h3>
          <p class="mt-2 text-sm leading-snug text-muted-foreground group-hover:text-background/70 line-clamp-2 max-w-2xl">
            {{ repo.description || $t('repos.no_desc') }}
          </p>
          <div class="mt-3 flex items-center gap-5 font-mono text-[11px] uppercase tracking-wider text-muted-foreground group-hover:text-background/70">
            <span v-if="repo.language" class="flex items-center gap-1.5">
              <span class="size-2.5 shrink-0" :style="{ backgroundColor: langColors[repo.language] || '#888' }" />
              {{ repo.language }}
            </span>
            <span class="flex items-center gap-1"><StarIcon class="size-3" />{{ repo.stargazers_count }}</span>
            <span class="flex items-center gap-1"><ShareIcon class="size-3" />{{ repo.forks_count }}</span>
          </div>
        </div>

        <ArrowUpRightIcon class="size-6 sm:size-7 shrink-0 self-start transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
      </a>
    </div>

    <a
      v-if="!loading && !error"
      href="https://github.com/nvhai272?tab=repositories"
      target="_blank"
      rel="noopener"
      class="mt-6 inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-foreground group"
    >
      <span class="border-b-2 border-accent">{{ $t('repos.view_all') }}</span>
      <ArrowUpRightIcon class="size-4 text-accent transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
    </a>

    <CvModal :open="cvOpen" @close="cvOpen = false" />
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { StarIcon, ShareIcon, ArrowUpRightIcon } from '@heroicons/vue/20/solid'
import SectionHeader from './SectionHeader.vue'
import CvModal from './CvModal.vue'

interface Repo {
  id: number
  name: string
  description: string | null
  html_url: string
  language: string | null
  stargazers_count: number
  forks_count: number
  private: boolean
}

const repos = ref<Repo[]>([])
const loading = ref(true)
const error = ref(false)
const cvOpen = ref(false)

const langColors: Record<string, string> = {
  TypeScript: '#3178C6',
  JavaScript: '#F7DF1E',
  Python: '#3776AB',
  PHP: '#777BB4',
  Vue: '#42B883',
  Rust: '#DEA584',
  Go: '#00ADD8',
  Java: '#B07219',
  CSS: '#563D7C',
  HTML: '#E34C26',
}

const fetchRepos = async () => {
  loading.value = true
  error.value = false
  try {
    const res = await fetch('https://api.github.com/users/nvhai272/repos?sort=updated&per_page=6')
    if (!res.ok) throw new Error('Failed')
    repos.value = await res.json()
  } catch {
    error.value = true
  } finally {
    loading.value = false
  }
}

onMounted(fetchRepos)
</script>

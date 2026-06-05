<template>
  <section>
    <div class="flex items-center justify-between mb-6">
      <h2 class="font-bold text-2xl text-foreground">{{ $t('repos.title') }}</h2>
      <a
        v-if="!loading && !error"
        href="https://github.com/nvhai272?tab=repositories"
        target="_blank"
        rel="noopener"
        class="text-xs text-muted-foreground hover:text-foreground hover:underline underline-offset-4 transition-colors"
      >
        {{ $t('repos.view_all') }} →
      </a>
    </div>

    <!-- Loading skeleton -->
    <div v-if="loading" class="divide-y divide-border">
      <div v-for="i in 6" :key="i" class="py-4 flex flex-col gap-2 animate-pulse">
        <div class="h-4 bg-muted rounded w-1/3" />
        <div class="h-3 bg-muted rounded w-3/4" />
        <div class="h-3 bg-muted rounded w-1/4" />
      </div>
    </div>

    <!-- Error state -->
    <div v-else-if="error" class="py-12 flex flex-col items-center gap-3 text-muted-foreground">
      <p class="text-sm">{{ $t('repos.error') }}</p>
      <button
        @click="fetchRepos"
        class="text-xs px-3 py-1.5 rounded border border-border hover:bg-secondary transition-colors"
      >
        {{ $t('repos.retry') }}
      </button>
    </div>

    <!-- Repos list -->
    <div v-else class="divide-y divide-border">
      <a
        v-for="repo in repos"
        :key="repo.id"
        :href="repo.html_url"
        target="_blank"
        rel="noopener"
        class="group block py-4"
      >
        <div class="flex items-start justify-between gap-4">
          <span class="font-semibold text-sm text-link group-hover:underline underline-offset-4">
            {{ repo.name }}
            <span
              v-if="repo.private"
              class="ml-1.5 text-[10px] border border-border text-muted-foreground px-1.5 py-0.5 rounded-full font-normal no-underline"
            >
              Private
            </span>
          </span>
        </div>
        <p class="text-xs text-muted-foreground mt-1 leading-5 line-clamp-2">
          {{ repo.description || $t('repos.no_desc') }}
        </p>
        <div class="flex items-center gap-4 mt-2 text-xs text-muted-foreground">
          <span v-if="repo.language" class="flex items-center gap-1.5">
            <span class="size-2.5 rounded-full shrink-0" :style="{ backgroundColor: langColors[repo.language] || '#888' }" />
            {{ repo.language }}
          </span>
          <span class="flex items-center gap-1">
            <StarIcon class="size-3" />{{ repo.stargazers_count }}
          </span>
          <span class="flex items-center gap-1">
            <ShareIcon class="size-3" />{{ repo.forks_count }}
          </span>
        </div>
      </a>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { StarIcon, ShareIcon } from '@heroicons/vue/20/solid'

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
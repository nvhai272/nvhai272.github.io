<template>
  <section class="pb-8">
    <div class="flex items-center justify-between mb-5">
      <div class="flex items-center gap-2">
        <div class="size-7 rounded-lg bg-slate-100 dark:bg-[#1C2234] flex items-center justify-center">
          <BookOpenIcon class="size-4 text-orange-300" />
        </div>
        <h2 class="text-xl sm:text-2xl font-bold tracking-tight text-orange-300">{{ $t('repos.title') }}</h2>
      </div>
      <a
        v-if="!loading && !error"
        href="https://github.com/nvhai272?tab=repositories"
        target="_blank"
        rel="noopener"
        class="flex items-center gap-1 font-bold text-xs hover:text-sky-300 transition-colors"
      >
        {{ $t('repos.view_all') }}
        <ArrowTopRightOnSquareIcon class="size-3" />
      </a>
    </div>

    <!-- Loading skeleton -->
    <div v-if="loading" class="grid grid-cols-1 sm:grid-cols-2 gap-3">
      <div
        v-for="i in 6"
        :key="i"
        class="bg-white dark:bg-[#141A27] rounded-xl border border-slate-200 dark:border-[#232B3E] p-5 flex flex-col gap-3 animate-pulse"
      >
        <div class="flex items-center gap-2">
          <div class="size-4 bg-slate-200 dark:bg-slate-700 rounded" />
          <div class="h-4 bg-slate-200 dark:bg-slate-700 rounded w-2/3" />
        </div>
        <div class="h-3 bg-slate-100 dark:bg-slate-800 rounded w-full" />
        <div class="h-3 bg-slate-100 dark:bg-slate-800 rounded w-4/5" />
        <div class="flex gap-3 mt-1">
          <div class="h-3 bg-slate-100 dark:bg-slate-800 rounded w-16" />
          <div class="h-3 bg-slate-100 dark:bg-slate-800 rounded w-10" />
        </div>
      </div>
    </div>

    <!-- Error state -->
    <div v-else-if="error" class="flex flex-col items-center gap-3 py-16 text-slate-400 dark:text-slate-500">
      <div class="size-12 rounded-full bg-red-50 dark:bg-red-900/20 flex items-center justify-center">
        <ExclamationCircleIcon class="size-6 text-red-400" />
      </div>
      <p class="text-sm text-slate-500 dark:text-slate-400">{{ $t('repos.error') }}</p>
      <button
        @click="fetchRepos"
        class="text-xs font-bold px-4 py-1.5 rounded-lg border border-slate-200 dark:border-[#232B3E] hover:bg-slate-100 dark:hover:bg-[#1C2234] hover:border-slate-300 dark:hover:border-[#58a6ff] transition-all"
      >
        {{ $t('repos.retry') }}
      </button>
    </div>

    <!-- Repos grid -->
    <div v-else class="grid grid-cols-1 sm:grid-cols-2 gap-3">
      <a
        v-for="repo in repos"
        :key="repo.id"
        :href="repo.html_url"
        target="_blank"
        rel="noopener"
        class="group relative bg-white dark:bg-[#141A27] rounded-xl border border-slate-200 dark:border-[#232B3E] p-4 flex flex-col gap-3 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md dark:hover:shadow-black/30 overflow-hidden"
      >
        <div class="flex-1">
          <div class="flex items-center gap-1.5 mb-2">
            <BookmarkIcon class="size-3.5 text-red-400 shrink-0" />
            <span class="text-dark-500 font-semibold text-sm truncate">{{ repo.name }}</span>
            <span
              v-if="repo.private"
              class="text-[10px] border border-slate-300 dark:border-slate-600 text-slate-500 dark:text-slate-400 px-1.5 py-0.5 rounded-full ml-auto shrink-0"
            >
              Private
            </span>
          </div>
          <p class="text-slate-500 dark:text-slate-400 text-xs leading-5 line-clamp-2">
            {{ repo.description || $t('repos.no_desc') }}
          </p>
        </div>

        <div class="flex items-center gap-4 text-xs text-slate-400 dark:text-slate-500">
          <span v-if="repo.language" class="flex items-center gap-1.5">
            <span class="size-2.5 rounded-full shrink-0" :style="{ backgroundColor: langColors[repo.language] || '#888' }" />
            {{ repo.language }}
          </span>
          <span class="flex items-center gap-1">
            <StarIcon class="size-3 text-yellow-500" />{{ repo.stargazers_count }}
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
import { BookOpenIcon, BookmarkIcon, StarIcon, ShareIcon, ExclamationCircleIcon, ArrowTopRightOnSquareIcon } from '@heroicons/vue/20/solid'

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
  HTML: '#E34C26'
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

<template>
  <section class="pb-8">
    <h2 class="font-display text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white mb-5">{{ $t('projects.title') }}</h2>
    <div class="flex flex-col gap-3">
      <div
        v-for="proj in projects"
        :key="proj.name"
        class="bg-white dark:bg-[#141A27] rounded-xl border border-slate-200 dark:border-[#232B3E] p-5 hover:border-slate-300 dark:hover:border-[#58a6ff] transition-colors"
      >
        <div class="flex items-start justify-between gap-3 flex-wrap">
          <div>
            <a href="#" class="text-[#EC5B13] font-semibold text-base">{{ proj.name }}</a>
            <p class="text-slate-500 dark:text-slate-400 text-sm mt-1 leading-5">{{ proj.desc }}</p>
          </div>
          <span :class="['text-xs font-bold px-2 py-0.5 rounded uppercase tracking-wide shrink-0', statusColor[proj.status]]">
            {{ $t(`projects.status.${proj.status.toLowerCase()}`) }}
          </span>
        </div>
        <div class="flex flex-wrap gap-2 mt-3">
          <span
            v-for="t in proj.tech"
            :key="t"
            class="text-xs px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300"
          >
            {{ t }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'

const { t } = useI18n()

const projects = computed(() => [
  { name: 'DevPortfolio Platform', status: 'Active', desc: t('projects.portfolio_desc'), tech: ['Next.js', 'TypeScript', 'Prisma'] },
  { name: 'CloudDeploy CLI', status: 'Beta', desc: t('projects.cloud_deploy_desc'), tech: ['Rust', 'AWS', 'Docker'] },
  { name: 'OpenGraph Generator', status: 'Stable', desc: t('projects.opengraph_desc'), tech: ['Node.js', 'React', 'GraphQL'] }
])

const statusColor: Record<string, string> = {
  Active: 'text-green-700 dark:text-green-400 bg-green-100 dark:bg-green-900/40',
  Beta: 'text-blue-700 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/40',
  Stable: 'text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-700'
}
</script>

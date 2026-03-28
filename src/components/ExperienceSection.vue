<template>
  <section class="pb-8">
    <div class="flex items-center justify-between mb-6">
      <div class="flex items-center gap-2">
        <div class="size-7 rounded-lg bg-[#0EA5E9]/10 flex items-center justify-center">
          <BriefcaseBusiness class="size-4 text-[#0EA5E9]" />
        </div>
        <h2 class="font-display text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white">{{ $t('experience.title') }}</h2>
      </div>
      <a
        href="/cv.pdf"
        download
        class="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0EA5E9] text-white text-xs font-semibold hover:bg-[#0284C7] transition-all hover:shadow-md hover:shadow-[#0EA5E9]/20 active:scale-95"
      >
        <Download class="size-3.5" />
        {{ $t('experience.download_cv') }}
      </a>
    </div>

    <!-- Work Experience -->
    <div class="mb-8">
      <div class="flex items-center gap-2 mb-4">
        <Building2 class="size-3.5 text-slate-400 dark:text-slate-500" />
        <h3 class="font-display text-[10px] font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-[0.18em]">
          {{ $t('experience.work') }}
        </h3>
      </div>

      <div class="relative pl-6 flex flex-col gap-0">
        <!-- Vertical line -->
        <div class="absolute left-[7px] top-3 bottom-3 w-px bg-gradient-to-b from-[#0EA5E9]/50 via-slate-200 dark:via-[#232B3E] to-transparent" />

        <div v-for="(job, index) in jobs" :key="index" class="relative pb-6 last:pb-0">
          <!-- Timeline dot -->
          <div
            :class="[
              'absolute -left-6 top-2 size-3.5 rounded-full border-2 bg-white dark:bg-[#0F1219]',
              index === 0 ? 'border-[#0EA5E9]' : 'border-slate-300 dark:border-[#232B3E]'
            ]"
          >
            <!-- Pulse on current job -->
            <span
              v-if="index === 0"
              class="absolute inset-0 rounded-full bg-[#0EA5E9]/30 animate-ping"
            />
          </div>

          <div class="group bg-white dark:bg-[#141A27] rounded-xl border border-slate-200 dark:border-[#232B3E] p-4 hover:border-slate-300 dark:hover:border-[#58a6ff]/50 hover:shadow-sm dark:hover:shadow-black/20 transition-all duration-200">
            <div class="flex items-start justify-between gap-3 flex-wrap mb-3">
              <div>
                <p class="font-display font-bold tracking-tight text-slate-900 dark:text-white text-sm sm:text-base">{{ job.role }}</p>
                <p class="text-[#0EA5E9] text-xs font-semibold mt-0.5 flex items-center gap-1">
                  <Building2 class="size-3 shrink-0" />
                  {{ job.company }}
                </p>
              </div>
              <span class="text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-[#1C2234] px-2.5 py-1 rounded-full whitespace-nowrap font-medium">
                {{ job.from }} — {{ job.to === 'present' ? $t('experience.present') : job.to }}
              </span>
            </div>

            <p class="text-slate-500 dark:text-slate-400 text-sm leading-6 mb-3">{{ job.desc }}</p>

            <div class="flex flex-wrap gap-1.5">
              <span
                v-for="tech in job.tech"
                :key="tech"
                class="text-xs px-2 py-0.5 rounded-full bg-slate-100 dark:bg-[#1C2234] text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-[#232B3E] font-medium"
              >
                {{ tech }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Education -->
    <div>
      <div class="flex items-center gap-2 mb-4">
        <GraduationCap class="size-3.5 text-slate-400 dark:text-slate-500" />
        <h3 class="font-display text-[10px] font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-[0.18em]">
          {{ $t('experience.education') }}
        </h3>
      </div>

      <div class="relative pl-6 flex flex-col gap-0">
        <div class="absolute left-[7px] top-3 bottom-3 w-px bg-gradient-to-b from-blue-400/50 to-transparent" />

        <div v-for="(edu, index) in educations" :key="index" class="relative pb-6 last:pb-0">
          <div class="absolute -left-6 top-2 size-3.5 rounded-full border-2 border-blue-400 bg-white dark:bg-[#0F1219]" />

          <div class="bg-white dark:bg-[#141A27] rounded-xl border border-slate-200 dark:border-[#232B3E] p-4 hover:border-slate-300 dark:hover:border-blue-500/30 hover:shadow-sm dark:hover:shadow-black/20 transition-all duration-200">
            <div class="flex items-start justify-between gap-3 flex-wrap">
              <div>
                <p class="font-display font-bold tracking-tight text-slate-900 dark:text-white text-sm sm:text-base">{{ edu.degree }}</p>
                <p class="text-blue-500 text-xs font-semibold mt-0.5 flex items-center gap-1">
                  <GraduationCap class="size-3 shrink-0" />
                  {{ edu.school }}
                </p>
              </div>
              <span class="text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-[#1C2234] px-2.5 py-1 rounded-full whitespace-nowrap font-medium">
                {{ edu.from }} — {{ edu.to === 'present' ? $t('experience.present') : edu.to }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { BriefcaseBusiness, Building2, GraduationCap, Download } from 'lucide-vue-next'
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'

const { t } = useI18n()

const jobs = computed(() => [
  {
    role: t('experience.jobs.job1.role'),
    company: t('experience.jobs.job1.company'),
    from: '2023',
    to: 'present',
    desc: t('experience.jobs.job1.desc'),
    tech: ['PHP', 'Laravel', 'Livewire', 'Alpine.js', 'Vue.js', 'MySQL']
  },
  {
    role: t('experience.jobs.job2.role'),
    company: t('experience.jobs.job2.company'),
    from: '2022',
    to: '2023',
    desc: t('experience.jobs.job2.desc'),
    tech: ['PHP', 'Laravel', 'MySQL', 'HTML/CSS', 'JavaScript']
  }
])

const educations = computed(() => [
  {
    degree: t('experience.edu.degree1'),
    school: t('experience.edu.school1'),
    from: '2019',
    to: '2023'
  }
])
</script>

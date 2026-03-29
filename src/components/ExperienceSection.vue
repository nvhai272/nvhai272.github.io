<template>
  <section class="pb-8">
    <div class="flex items-center justify-between mb-6">
      <div class="flex items-center gap-2">
        <div class="size-7 rounded-lg bg-[#38bdf8]/10 flex items-center justify-center">
          <BriefcaseIcon class="w-4 h-4 text-[#38bdf8]" />
        </div>
        <h2 class="font-display text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white">{{ $t('experience.title') }}</h2>
      </div>
      <a
        href="/cv.pdf"
        download
        class="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-r from-[#38bdf8] to-[#f472b6] text-white text-xs font-bold hover:opacity-90 transition-all hover:shadow-md hover:shadow-[#f472b6]/20 active:scale-95"
      >
        <ArrowDownTrayIcon class="size-3.5" />
        {{ $t('experience.download_cv') }}
      </a>
    </div>

    <!-- Work Experience -->
    <div class="mb-8">
      <div class="flex items-center gap-2 mb-4">
        <BuildingOfficeIcon class="size-3.5 text-slate-700 dark:text-slate-300" />
        <h3 class="font-display text-[10px] font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-[0.18em]">
          {{ $t('experience.work') }}
        </h3>
      </div>

      <div class="relative pl-6 flex flex-col gap-0">
        <!-- Vertical line -->
        <div class="absolute left-[7px] top-3 bottom-3 w-px bg-gradient-to-b from-[#38bdf8]/70 to-[#f472b6]/50 dark:from-[#38bdf8] dark:to-[#f472b6]/80" />

        <div v-for="(job, index) in jobs" :key="index" class="relative pb-6 last:pb-0">
          <!-- Timeline dot -->
          <div
            :class="[
              'absolute -left-6 top-2 size-3.5 rounded-full border-2 bg-white dark:bg-white dark:ring-2 dark:ring-white/25',
              index === 0 ? 'border-[#38bdf8]' : 'border-slate-300 dark:border-slate-500'
            ]"
          >
            <!-- Pulse on current job -->
            <span
              v-if="index === 0"
              class="absolute inset-0 rounded-full bg-[#38bdf8]/30 animate-ping"
            />
          </div>

          <div class="group bg-white dark:bg-[#141A27] rounded-xl border border-slate-200 dark:border-[#232B3E] p-4 hover:border-slate-300 dark:hover:border-[#58a6ff]/50 hover:shadow-sm dark:hover:shadow-black/20 transition-all duration-200">
            <div class="flex items-start justify-between gap-3 flex-wrap mb-3">
              <div>
                <p class="font-display font-bold tracking-tight text-slate-900 dark:text-white text-sm sm:text-base">{{ job.role }}</p>
                <p class="text-green-500 text-xs font-semibold mt-0.5 flex items-center gap-1">
                  <BuildingOfficeIcon class="size-3 shrink-0" />
                  {{ job.company }}
                </p>
              </div>
              <span class="text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-[#1C2234] px-2.5 py-1 rounded-full whitespace-nowrap font-medium">
                {{ job.from }} — {{ job.to === 'present' ? $t('experience.present') : job.to }}
              </span>
            </div>

            <p class="text-slate-500 dark:text-slate-400 text-sm leading-6 mb-3 text-justify">{{ job.desc }}</p>

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
        <AcademicCapIcon class="size-3.5 text-slate-700 dark:text-slate-300" />
        <h3 class="font-display text-[10px] font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-[0.18em]">
          {{ $t('experience.education') }}
        </h3>
      </div>

      <div class="relative pl-6 flex flex-col gap-0">
        <div class="absolute left-[7px] top-3 bottom-3 w-px bg-gradient-to-b from-[#818cf8]/50 to-transparent dark:from-[#818cf8] dark:to-transparent" />

        <div v-for="(edu, index) in educations" :key="index" class="relative pb-6 last:pb-0">
          <div class="absolute -left-6 top-2 size-3.5 rounded-full border-2 border-[#818cf8] bg-white dark:bg-white dark:ring-2 dark:ring-white/25" />

          <div class="bg-white dark:bg-[#141A27] rounded-xl border border-slate-200 dark:border-[#232B3E] p-4 hover:border-slate-300 dark:hover:border-[#818cf8]/30 hover:shadow-sm dark:hover:shadow-black/20 transition-all duration-200">
            <div class="flex items-start justify-between gap-3 flex-wrap">
              <div>
                <p class="font-display font-bold tracking-tight text-slate-900 dark:text-white text-sm sm:text-base">{{ edu.degree }}</p>
                <p class="text-[#818cf8] text-xs font-semibold mt-0.5 flex items-center gap-1">
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
import { BriefcaseIcon, BuildingOfficeIcon, AcademicCapIcon, ArrowDownTrayIcon } from '@heroicons/vue/20/solid'
import { GraduationCap } from 'lucide-vue-next'
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'

const { t } = useI18n()

const jobs = computed(() => [
  {
    role: t('experience.jobs.job1.role'),
    company: t('experience.jobs.job1.company'),
    from: '2025',
    to: 'present',
    desc: t('experience.jobs.job1.desc'),
    tech: ['Laravel', 'Livewire', 'Alpine.js', 'Vue.js', 'MySQL', 'HTML/CSS', 'JavaScript']
  },
  {
    role: t('experience.jobs.job2.role'),
    company: t('experience.jobs.job2.company'),
    from: '2024',
    to: '2025',
    desc: t('experience.jobs.job2.desc'),
    tech: ['C#', 'Angular', 'SQL Server', 'HTML/CSS', 'JavaScript']
  }
])

const educations = computed(() => [
  {
    degree: t('experience.edu2.degree2'),
    school: t('experience.edu2.school2'),
    from: '2022',
    to: '2024'
  },
  {
    degree: t('experience.edu.degree1'),
    school: t('experience.edu.school1'),
    from: '2018',
    to: '2022'
  }
])
</script>

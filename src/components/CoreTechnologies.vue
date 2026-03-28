<template>
  <section>
    <div class="flex items-center gap-2 mb-5">
      <div class="size-7 rounded-lg bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center">
        <Grid3x3 class="size-4 text-blue-500" />
      </div>
      <h2 class="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">{{ $t('technologies.title') }}</h2>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
      <div
        v-for="tech in technologies"
        :key="tech.name"
        :class="['group relative bg-white dark:bg-[#141A27] rounded-xl border border-slate-200 dark:border-[#232B3E] p-4 flex gap-3 items-start transition-all duration-200 hover:-translate-y-1 hover:shadow-lg dark:hover:shadow-black/40 overflow-hidden cursor-default tech-card', tech.glow]"
      >
        <!-- Left accent bar on hover -->
        <div :class="['absolute left-0 top-0 bottom-0 w-0.5 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100', tech.accent]" />

        <div :class="['icon-container size-11 rounded-xl flex items-center justify-center shrink-0 border', tech.iconBg, tech.iconBorder]">
          <component :is="tech.icon" class="size-5" />
        </div>

        <div class="flex-1 min-w-0">
          <div class="flex items-center gap-2 mb-1">
            <span class="font-semibold text-slate-900 dark:text-white text-sm leading-tight">{{ tech.name }}</span>
          </div>
          <p class="text-slate-500 dark:text-slate-400 text-xs leading-[1.6]">{{ tech.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Grid3x3, FileCode2, Layers, Server, Database, Sparkles } from 'lucide-vue-next'
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'

const { t } = useI18n()

const technologies = computed(() => [
  {
    name: 'PHP · Laravel · Livewire · AlpineJS',
    icon: FileCode2,
    iconBg: 'bg-blue-50 dark:bg-blue-900/30',
    iconBorder: 'border-blue-100 dark:border-blue-800',
    accent: 'bg-blue-400',
    glow: 'hover-glow-blue',
    desc: t('technologies.php_desc')
  },
  {
    name: 'Vue.js',
    icon: Layers,
    iconBg: 'bg-emerald-50 dark:bg-emerald-900/30',
    iconBorder: 'border-emerald-100 dark:border-emerald-800',
    accent: 'bg-emerald-400',
    glow: 'hover-glow-emerald',
    desc: t('technologies.vue_desc')
  },
  {
    name: 'Linux · Ubuntu · POP!_OS',
    icon: Server,
    iconBg: 'bg-orange-50 dark:bg-orange-900/30',
    iconBorder: 'border-orange-100 dark:border-orange-800',
    accent: 'bg-orange-400',
    glow: 'hover-glow-orange',
    desc: t('technologies.linux_desc')
  },
  {
    name: 'MySQL · MongoDB · SQL Server',
    icon: Database,
    iconBg: 'bg-violet-50 dark:bg-violet-900/30',
    iconBorder: 'border-violet-100 dark:border-violet-800',
    accent: 'bg-violet-400',
    glow: 'hover-glow-violet',
    desc: t('technologies.db_desc')
  },
  {
    name: 'AI Tools · Git · Docker',
    icon: Sparkles,
    iconBg: 'bg-pink-50 dark:bg-pink-900/30',
    iconBorder: 'border-pink-100 dark:border-pink-800',
    accent: 'bg-pink-400',
    glow: 'hover-glow-pink',
    desc: t('technologies.other_desc')
  }
])
</script>

<style scoped>
/* Neon glow per technology color */
.hover-glow-blue:hover    { border-color: rgb(96 165 250 / 0.5);  box-shadow: 0 0 18px rgb(59 130 246 / 0.15),  0 4px 20px rgb(0 0 0 / 0.08); }
.hover-glow-emerald:hover { border-color: rgb(52 211 153 / 0.5);  box-shadow: 0 0 18px rgb(16 185 129 / 0.15), 0 4px 20px rgb(0 0 0 / 0.08); }
.hover-glow-orange:hover  { border-color: rgb(251 146 60  / 0.5); box-shadow: 0 0 18px rgb(249 115 22 / 0.15),  0 4px 20px rgb(0 0 0 / 0.08); }
.hover-glow-violet:hover  { border-color: rgb(167 139 250 / 0.5); box-shadow: 0 0 18px rgb(139 92 246 / 0.15),  0 4px 20px rgb(0 0 0 / 0.08); }
.hover-glow-pink:hover    { border-color: rgb(244 114 182 / 0.5); box-shadow: 0 0 18px rgb(236 72 153 / 0.15),  0 4px 20px rgb(0 0 0 / 0.08); }

/* Icon bounce on card hover */
.tech-card:hover .icon-bounce {
  animation: icon-pop 0.4s cubic-bezier(0.36, 0.07, 0.19, 0.97);
}
@keyframes icon-pop {
  0%   { transform: scale(1)    rotate(0deg);   }
  30%  { transform: scale(1.2)  rotate(-8deg);  }
  60%  { transform: scale(1.15) rotate(6deg);   }
  80%  { transform: scale(1.1)  rotate(-3deg);  }
  100% { transform: scale(1.1)  rotate(0deg);   }
}
</style>

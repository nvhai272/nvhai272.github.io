<template>
  <section>
    <SectionHeader index="02" :title="$t('sections.stack.title')" :meta="$t('sections.stack.meta')" />

    <div v-reveal="120" class="border-l-2 border-t-2 border-border">
      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
        <div
          v-for="(tech, index) in technologies"
          :key="tech.name"
          class="group relative border-r-2 border-b-2 border-border p-4 sm:p-5 min-h-[130px] flex flex-col items-center justify-center gap-3 hover:bg-foreground hover:text-background transition-colors duration-200"
        >
          <span class="absolute top-2 left-2 font-mono text-[10px] text-muted-foreground group-hover:text-background/60">
            {{ String(index + 1).padStart(2, '0') }}
          </span>
          <VIcon :name="tech.icon" :fill="tech.color" class="size-9 sm:size-10" />
          <span class="font-display font-semibold text-sm uppercase tracking-tight leading-none text-center">{{ tech.name }}</span>
        </div>

        <!-- Placeholder: more coming -->
        <div class="relative border-r-2 border-b-2 border-border p-4 sm:p-5 min-h-[130px] flex flex-col items-center justify-center gap-3 text-muted-foreground">
          <span class="absolute top-2 left-2 font-mono text-[10px] text-muted-foreground">
            {{ String(technologies.length + 1).padStart(2, '0') }}
          </span>
          <span class="font-display font-bold text-3xl leading-none animate-pulse">+</span>
          <span class="font-mono text-[14px] font-bold uppercase tracking-tight leading-snug text-center">{{ $t('technologies.coming_soon') }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import SectionHeader from './SectionHeader.vue'
import { OhVueIcon as VIcon, addIcons } from "oh-vue-icons";
import {
  SiLaravel,
  SiLivewire,
  SiAlpinedotjs,
  SiVuedotjs,
  SiLinux,
  SiMysql,
  SiMongodb,
  SiMicrosoftsqlserver,
  SiDocker,
  SiGit,
  SiOpenai
} from "oh-vue-icons/icons";

addIcons(
    SiLaravel, SiLivewire, SiAlpinedotjs, SiVuedotjs,
    SiLinux, SiMysql, SiMongodb, SiMicrosoftsqlserver,
    SiDocker, SiGit, SiOpenai
);

const technologies = computed(() => [
  { name: 'Laravel',  icon: SiLaravel.name,     color: '#FF2D20' },
  { name: 'Livewire', icon: SiLivewire.name,    color: '#FB70A9' },
  { name: 'Alpine.js', icon: SiAlpinedotjs.name, color: '#8BC0D0' },
  { name: 'Vue.js',   icon: SiVuedotjs.name,    color: '#4FC08D' },
  { name: 'MySQL',    icon: SiMysql.name,       color: '#4479A1' },
  { name: 'Docker',   icon: SiDocker.name,      color: '#2496ED' },
  { name: 'Git',      icon: SiGit.name,         color: '#F05032' },
  { name: 'AI agent / Ai skill',       icon: SiOpenai.name,      color: '#10A37F' },
  { name: 'Linux',    icon: SiLinux.name,       color: '#FCC624' },
])
</script>

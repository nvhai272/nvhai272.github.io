<template>
  <section class="w-full">
    <h2 class="text-2xl font-bold text-foreground mb-6">{{ $t('technologies.title') }}</h2>

    <div class="grid grid-cols-4 sm:grid-cols-5 gap-3 overflow-visible py-2">
      <div
        v-for="(tech, index) in technologies"
        :key="index"
        class="relative flex flex-col items-center justify-center gap-2 p-3 rounded-xl border border-border bg-card cursor-default transition-all duration-300 ease-out hover:scale-125 hover:z-10 hover:shadow-xl hover:border-emerald-500/30"
      >
        <div :class="['size-10 rounded-xl flex items-center justify-center p-2 border', tech.bgClass]">
          <VIcon :name="tech.icon" class="size-full" />
        </div>
        <span class="text-[10px] sm:text-xs text-foreground font-semibold text-center leading-tight">{{ tech.name }}</span>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'

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
  {
    name: 'Laravel',
    icon: SiLaravel.name,
    bgClass: 'bg-[#FF2D20]/10 text-[#FF2D20] border-[#FF2D20]/20'
  },
  {
    name: 'Livewire',
    icon: SiLivewire.name,
    bgClass: 'bg-[#FB70A9]/10 text-[#FB70A9] border-[#FB70A9]/20'
  },
  {
    name: 'Alpine.js',
    icon: SiAlpinedotjs.name,
    bgClass: 'bg-[#8BC0D0]/10 text-[#8BC0D0] border-[#8BC0D0]/20'
  },
  {
    name: 'Vue.js',
    icon: SiVuedotjs.name,
    bgClass: 'bg-[#41B883]/10 text-[#41B883] border-[#41B883]/20'
  },
  {
    name: 'MySQL',
    icon: SiMysql.name,
    bgClass: 'bg-[#4479A1]/10 text-[#4479A1] border-[#4479A1]/20'
  },
  // {
  //   name: 'SQL Server',
  //   icon: SiMicrosoftsqlserver.name,
  //   bgClass: 'bg-[#CC2927]/10 text-[#CC2927] border-[#CC2927]/20'
  // },
  // {
  //   name: 'MongoDB',
  //   icon: SiMongodb.name,
  //   bgClass: 'bg-[#47A248]/10 text-[#47A248] border-[#47A248]/20'
  // },
  {
    name: 'Docker',
    icon: SiDocker.name,
    bgClass: 'bg-[#2496ED]/10 text-[#2496ED] border-[#2496ED]/20'
  },
  {
    name: 'Git',
    icon: SiGit.name,
    bgClass: 'bg-[#F05032]/10 text-[#F05032] border-[#F05032]/20'
  },
  {
    name: 'AI',
    icon: SiOpenai.name,
    bgClass: 'bg-[#10a37f]/10 text-[#10a37f] border-[#10a37f]/20'
  },
  {
    name: 'Linux',
    icon: SiLinux.name,
    bgClass: 'bg-[#FCC624]/10 text-[#71717a] dark:text-[#FCC624] border-[#FCC624]/20'
  },
])
</script>
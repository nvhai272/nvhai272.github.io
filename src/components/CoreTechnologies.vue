<template>
  <section class="w-full">
    <div class="flex items-center gap-3">
      <div class="size-10 rounded-xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 shadow-sm">
        <Cpu class="size-5 text-emerald-500" />
      </div>
      <div>
        <h2 class="text-xl sm:text-2xl font-bold tracking-tight text-foreground">{{ $t('technologies.title') }}</h2>
      </div>
    </div>

    <div class="relative flex overflow-hidden group py-4">
      <div class="absolute inset-y-0 left-0 w-24 z-10 bg-gradient-to-r from-background via-background/50 to-transparent pointer-events-none"></div>
      <div class="absolute inset-y-0 right-0 w-24 z-10 bg-gradient-to-l from-background via-background/50 to-transparent pointer-events-none"></div>

      <div class="flex animate-marquee-slow gap-6 group-hover:[animation-play-state:paused] py-2">
        <div
            v-for="(tech, index) in [...technologies, ...technologies]"
            :key="index"
            class="flex shrink-0 items-center gap-4 px-6 py-4 rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] hover:scale-110 hover:border-emerald-500/30 hover:bg-card hover:shadow-xl group/item"
        >
          <div :class="['size-12 rounded-xl flex items-center justify-center shrink-0 p-2.5 transition-all duration-500 group-hover/item:rotate-3', tech.bgClass]">
            <VIcon :name="tech.icon" class="size-full" />
          </div>

          <div class="flex flex-col">
            <span class="text-foreground text-sm font-bold tracking-tight">{{ tech.name }}</span>
            <span class="text-[11px] text-muted-foreground/80 font-medium">{{ tech.sub }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Cpu } from 'lucide-vue-next'
import { computed } from 'vue'

// Import thư viện oh-vue-icons
import { OhVueIcon as VIcon, addIcons } from "oh-vue-icons";
import {
  SiLaravel,
  SiLivewire,
  SiAlpinedotjs, // Đã sửa từ SiAlpinejs
  SiVuedotjs,    // Đã sửa từ SiVuejs
  SiLinux,
  SiMysql,
  SiMongodb,
  SiMicrosoftsqlserver,
  SiDocker,
  SiGit,
  SiOpenai
} from "oh-vue-icons/icons";

// Đăng ký các logo
addIcons(
    SiLaravel, SiLivewire, SiAlpinedotjs, SiVuedotjs,
    SiLinux, SiMysql, SiMongodb, SiMicrosoftsqlserver,
    SiDocker, SiGit, SiOpenai
);

const technologies = computed(() => [
  {
    name: 'Laravel',
    sub: 'Backend Framework',
    icon: SiLaravel.name,
    bgClass: 'bg-[#FF2D20]/10 text-[#FF2D20] border-[#FF2D20]/20'
  },
  {
    name: 'Livewire',
    sub: '',
    icon: SiLivewire.name,
    bgClass: 'bg-[#FB70A9]/10 text-[#FB70A9] border-[#FB70A9]/20'
  },
  {
    name: 'Alpine.js',
    sub: '',
    icon: SiAlpinedotjs.name,
    bgClass: 'bg-[#8BC0D0]/10 text-[#8BC0D0] border-[#8BC0D0]/20'
  },
  {
    name: 'Vue.js',
    sub: 'Frontend Framework',
    icon: SiVuedotjs.name,
    bgClass: 'bg-[#41B883]/10 text-[#41B883] border-[#41B883]/20'
  },
  {
    name: 'Database',
    sub: 'MySQL + SQL Server + MongoDB',
    icon: SiMysql.name,
    bgClass: 'bg-[#4479A1]/10 text-[#4479A1] border-[#4479A1]/20'
  },
  {
    name: 'Docker',
    sub: 'Basic',
    icon: SiDocker.name,
    bgClass: 'bg-[#2496ED]/10 text-[#2496ED] border-[#2496ED]/20'
  },
  {
    name: 'AI Integration',
    sub: 'Basic',
    icon: SiOpenai.name,
    bgClass: 'bg-[#10a37f]/10 text-[#10a37f] border-[#10a37f]/20'
  },
  {
    name: 'Linux',
    sub: 'System Admin',
    icon: SiLinux.name,
    bgClass: 'bg-[#FCC624]/10 text-[#71717a] dark:text-[#FCC624] border-[#FCC624]/20' // Màu vàng Tux
  },
])
</script>

<style scoped>
.animate-marquee-slow {
  display: flex;
  width: max-content;
  /* 45s tạo cảm giác lướt chậm rãi, sang trọng */
  animation: marquee 45s linear infinite;
}

@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

/* Đảm bảo hiệu ứng mượt trên thiết bị di động */
@media (max-width: 640px) {
  .animate-marquee-slow {
    animation-duration: 30s;
  }
}
</style>
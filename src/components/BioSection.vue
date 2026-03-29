<script setup lang="ts">
</script>
<template>
  <div class="relative bg-white dark:bg-[#141A27] rounded-xl border border-slate-200 dark:border-[#232B3E] overflow-hidden transition-colors">
    <!-- Orange accent top bar -->
    <div class="h-0.5 w-full" />

    <div class="p-5 sm:p-6">
      <!-- Header -->
      <div class="flex items-start justify-between gap-3">
        <div>
          <h3 class="font-display text-xl sm:text-2xl font-bold tracking-tight text-pink-400 dark:text-pink-400 flex items-center gap-2">
            <span class="text-pink-400 text-base animate-sparkle">✦</span>
            {{ $t('sidebar.the_story.name') }}
          </h3>
        </div>
        <span class="font-display text-6xl italic text-[#818cf8]/20 dark:text-[#818cf8]/25 leading-none select-none -mt-2">"</span>
      </div>

      <!-- Bio content -->
      <div class="space-y-3 text-sm sm:text-base leading-[1.8]">
        <p class="text-sm font-medium text-slate-700 dark:text-slate-200 text-justify">{{ $t('sidebar.the_story.p1') }}</p>
        <p class="text-sm font-medium text-slate-700 dark:text-slate-200 text-justify">{{ $t('sidebar.the_story.p2') }}</p>
        <p class="text-sm font-medium text-slate-700 dark:text-slate-200 text-justify">{{ $t('sidebar.the_story.p3') }}</p>
        <p class="font-display italic font-bold text-sky-500 dark:text-sky-500 text-sm p-3 border-slate-100 dark:border-[#232B3E] rounded-lg text-right">
          {{ $t('sidebar.the_story.p4') }}
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.animate-sparkle {
  animation: sparkle-pulse 2s ease-in-out infinite;
}
@keyframes sparkle-pulse {
  0%, 100% { opacity: 1;   transform: scale(1)    rotate(0deg);   }
  50%       { opacity: 0.6; transform: scale(1.25) rotate(20deg);  }
}
</style>

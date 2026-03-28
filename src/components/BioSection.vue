<template>
  <div class="relative bg-white dark:bg-[#141A27] rounded-xl border border-slate-200 dark:border-[#232B3E] overflow-hidden transition-colors">
    <!-- Orange accent top bar -->
    <div class="h-0.5 w-full bg-gradient-to-r from-[#0EA5E9] via-sky-300 to-transparent" />

    <!-- Kanji watermark -->
    <span class="absolute -right-3 -bottom-4 text-[110px] font-bold leading-none select-none pointer-events-none text-slate-900/[0.03] dark:text-white/[0.04]">夢</span>

    <div class="p-5 sm:p-6">
      <!-- Header -->
      <div class="flex items-start justify-between mb-5 gap-3">
        <div>
          <h2 class="font-display text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white mb-2 flex items-center gap-2">
            <span class="text-pink-400 text-base animate-sparkle">✦</span>
            {{ $t('sidebar.the_story.name') }}
          </h2>
          <span class="inline-flex items-center gap-1.5 text-xs font-medium text-green-700 dark:text-green-400 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800/50 px-2.5 py-1 rounded-full">
            <span class="size-1.5 rounded-full bg-green-500 animate-pulse" />
            Open to opportunities
          </span>
        </div>
        <span class="font-display text-6xl italic text-[#0EA5E9]/20 dark:text-[#0EA5E9]/25 leading-none select-none -mt-2">"</span>
      </div>

      <!-- Bio content -->
      <div class="space-y-3 text-sm sm:text-base leading-[1.8]">
        <p class="font-medium text-slate-700 dark:text-slate-300">{{ $t('sidebar.the_story.p1') }}</p>
        <p class="text-slate-500 dark:text-slate-400">{{ $t('sidebar.the_story.p2') }}</p>
        <p class="text-slate-500 dark:text-slate-400">{{ $t('sidebar.the_story.p3') }}</p>
        <p class="font-display italic text-slate-400 dark:text-slate-500 text-sm pt-2 border-t border-slate-100 dark:border-[#232B3E]">
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

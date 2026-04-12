<script setup lang="ts">
</script>
<template>
  <div class="relative bg-amber-50/50 dark:bg-amber-900/5 rounded-xl overflow-hidden transition-colors">
    <div class="h-0.5 w-full" />

    <div class="p-5 sm:p-6">
      <!-- Header -->
      <div class="flex items-start justify-between">
        <div>
          <h3 class="font-display text-xl sm:text-2xl font-bold tracking-tight text-[#f472b6] flex items-center gap-2">
            <span class="text-[#f472b6] text-base">&#10022;</span>
            {{ $t('sidebar.the_story.name') }}
          </h3>
        </div>
        <span class="font-display text-6xl italic text-emerald-500 leading-none select-none -mt-2">"</span>
      </div>

      <!-- Bio content -->
      <div class="space-y-3 text-sm sm:text-base leading-[1.8]">
        <p class="text-sm font-medium text-foreground/80 text-justify">{{ $t('sidebar.the_story.p2') }}</p>
        <p class="text-sm font-medium text-foreground/80 text-justify">{{ $t('sidebar.the_story.p3') }}</p>
        <p class="font-display italic font-bold text-emerald-500 text-sm p-3 rounded-lg text-right">
          {{ $t('sidebar.the_story.p4') }}
        </p>
      </div>
    </div>
  </div>
</template>

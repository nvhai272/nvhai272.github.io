<template>
  <div v-reveal class=" sm:mb-3">
    <div class="flex items-end justify-between gap-4 pb-3 rule-ink">
      <div class="flex items-baseline gap-3 sm:gap-5 min-w-0">
        <!-- <span class="font-mono text-xs sm:text-sm text-accent shrink-0">({{ index }})</span> -->
        <h2 class="font-display font-bold uppercase tracking-tight text-foreground text-3xl sm:text-5xl leading-none truncate">
          {{ title }}
        </h2>
      </div>
      <span v-if="meta" class="hidden sm:block font-mono text-sm font-bold uppercase tracking-widest text-muted-foreground shrink-0 pb-1">
        {{ meta }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  index?: string
  title: string
  meta?: string
}>()
</script>

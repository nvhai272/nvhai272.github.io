<template>
  <section>
    <SectionHeader index="01" :title="$t('sections.about.title')" :meta="$t('sections.about.meta')" />

    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
      <!-- Lead -->
      <div v-reveal class="lg:col-span-5">
        <p class="font-display font-medium text-2xl sm:text-3xl leading-snug tracking-tight text-foreground">
          {{ $t('sidebar.bio_decide') }}
        </p>

        <dl class="mt-8 border-t-2 border-border">
          <div v-for="row in facts" :key="row.label" class="flex items-baseline justify-between gap-4 py-3 border-b border-border-soft">
            <dt class="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">{{ row.label }}</dt>
            <dd class="font-display font-semibold text-sm sm:text-base text-foreground text-right">{{ row.value }}</dd>
          </div>
        </dl>
      </div>

      <!-- Story -->
      <div v-reveal="100" class="lg:col-span-7 space-y-5 text-base sm:text-lg leading-relaxed text-muted-foreground">
        <p>{{ $t('sidebar.the_story.p2') }}</p>
        <p>{{ $t('sidebar.the_story.p3') }}</p>
        <p class="text-foreground font-medium">{{ $t('sidebar.the_story.p4') }}</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import SectionHeader from './SectionHeader.vue'

const { t } = useI18n()

const facts = computed(() => [
  { label: t('about.role_label'),  value: t('sidebar.job_title') },
  { label: t('about.based_label'), value: t('sidebar.location') },
  { label: t('about.focus_label'), value: t('about.focus_value') },
])
</script>

<template>
  <nav class="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-t border-border px-4 pb-safe">
    <div class="flex justify-around items-center h-13 max-w-md mx-auto">
      <button
        v-for="tab in tabs"
        :key="tab.id"
        @click="$emit('change', tab.id)"
        class="flex flex-col items-center justify-center gap-0.5 w-full relative group"
        :class="active === tab.id ? 'text-[#38bdf8]' : 'text-muted-foreground'"
      >
        <div
          class="p-1 rounded-lg transition-all duration-300"
          :class="active === tab.id ? 'bg-[#38bdf8]/10 scale-105' : 'group-hover:bg-secondary'"
        >
          <component :is="tab.icon" class="size-5" />
        </div>
        <span class="text-[11px] font-bold tracking-tighter uppercase transition-colors">
          {{ tab.label }}
        </span>
      </button>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { Squares2X2Icon, EnvelopeIcon } from '@heroicons/vue/20/solid'
import { useI18n } from 'vue-i18n'

type Tab = 'overview' | 'contact'

defineProps<{
  active: Tab
}>()

defineEmits<{
  change: [tab: Tab]
}>()

const { t } = useI18n()

const tabs = computed(() => [
  { id: 'overview' as Tab, label: t('tabs.overview'), icon: Squares2X2Icon },
  { id: 'contact' as Tab, label: t('tabs.contact'), icon: EnvelopeIcon }
])
</script>

<style scoped>
.pb-safe {
  padding-bottom: env(safe-area-inset-bottom);
}
</style>

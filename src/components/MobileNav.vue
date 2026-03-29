<template>
  <nav class="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#FAFAF7]/80 dark:bg-[#0F1219]/80 backdrop-blur-md border-t border-slate-200 dark:border-[#232B3E] px-4 pb-safe">
    <div class="flex justify-around items-center h-13 max-w-md mx-auto">
      <button
        v-for="tab in tabs"
        :key="tab.id"
        @click="$emit('change', tab.id)"
        class="flex flex-col items-center justify-center gap-0.5 w-full relative group"
        :class="active === tab.id ? 'text-[#0EA5E9]' : 'text-slate-500 dark:text-slate-400'"
      >
        <div
          class="p-1 rounded-lg transition-all duration-300"
          :class="active === tab.id ? 'bg-[#0EA5E9]/10 scale-105' : 'group-hover:bg-slate-100 dark:group-hover:bg-[#1C2234]'"
        >
          <component :is="tab.icon" class="size-5" />
        </div>
        <span class="text-[9px] font-bold tracking-tighter uppercase transition-colors">
          {{ tab.label }}
        </span>

      </button>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { Squares2X2Icon, BriefcaseIcon, EnvelopeIcon } from '@heroicons/vue/20/solid'
import { useI18n } from 'vue-i18n'

type Tab = 'overview' | 'experience' | 'contact'

defineProps<{
  active: Tab
}>()

defineEmits<{
  change: [tab: Tab]
}>()

const { t } = useI18n()

const tabs = computed(() => [
  { id: 'overview' as Tab, label: t('tabs.overview'), icon: Squares2X2Icon },
  { id: 'experience' as Tab, label: t('tabs.experience'), icon: BriefcaseIcon },
  { id: 'contact' as Tab, label: t('tabs.contact'), icon: EnvelopeIcon }
])
</script>

<style scoped>
.pb-safe {
  padding-bottom: env(safe-area-inset-bottom);
}
</style>

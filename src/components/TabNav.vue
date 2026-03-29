<template>
  <nav class="flex gap-1 overflow-x-auto scrollbar-none">
    <button
      v-for="tab in tabs"
      :key="tab.id"
      @click="$emit('change', tab.id)"
      :class="[
        'flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-bold transition-all duration-200 whitespace-nowrap shrink-0',
        active === tab.id
          ? 'border-2 border-slate-800 dark:border-white'
          : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-[#1C2234] border border-transparent'
      ]"
    >
      <component
        :is="tab.icon"
        :class="['size-3.5 shrink-0', active === tab.id ? 'text-[#38bdf8]' : 'text-slate-400 dark:text-slate-500']"
      />
      <span :class="active === tab.id ? 'bg-gradient-to-r from-[#38bdf8] via-[#818cf8] to-[#f472b6] bg-clip-text text-transparent' : ''">{{ tab.label }}</span>
    </button>
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

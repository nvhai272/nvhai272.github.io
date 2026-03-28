<template>
  <nav class="flex gap-1 overflow-x-auto scrollbar-none">
    <button
      v-for="tab in tabs"
      :key="tab.id"
      @click="$emit('change', tab.id)"
      :class="[
        'flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 whitespace-nowrap shrink-0',
        active === tab.id
          ? 'bg-[#EC5B13]/10 dark:bg-[#EC5B13]/15 text-[#EC5B13] border border-[#EC5B13]/30'
          : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-[#1C2234] border border-transparent'
      ]"
    >
      <component
        :is="tab.icon"
        :class="['size-3.5 shrink-0', active === tab.id ? 'text-[#EC5B13]' : 'text-slate-400 dark:text-slate-500']"
      />
      {{ tab.label }}
    </button>
  </nav>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { LayoutDashboard, BriefcaseBusiness, Mail } from 'lucide-vue-next'
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
  { id: 'overview' as Tab, label: t('tabs.overview'), icon: LayoutDashboard },
  { id: 'experience' as Tab, label: t('tabs.experience'), icon: BriefcaseBusiness },
  { id: 'contact' as Tab, label: t('tabs.contact'), icon: Mail }
])
</script>

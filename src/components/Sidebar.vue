<template>
  <aside :class="['w-full md:w-[272px] lg:w-[296px] shrink-0', mobileOpen ? 'block' : 'hidden md:block']">
    <!-- Avatar card with spinning gradient ring -->
    <div class="relative p-[3px] rounded-xl avatar-ring">
      <div class="rounded-[10px] overflow-hidden bg-slate-100 dark:bg-[#141A27] relative group">
        <img
          src="/img.jpg"
          alt="Hai Nguyen"
          class="w-full h-auto md:h-[260px] md:object-cover md:object-left-bottom transition-transform duration-500 group-hover:scale-[1.02]"
        />
        <!-- Online indicator -->
        <div class="absolute bottom-3 right-3 bg-white dark:bg-[#141A27] rounded-full border border-slate-200 dark:border-[#232B3E] p-1.5 shadow-sm">
          <div class="size-3.5 rounded-full bg-green-500 flex items-center justify-center">
            <div class="size-1.5 rounded-full bg-white" />
          </div>
        </div>
      </div>
    </div>

    <!-- Name & username -->
    <div class="mt-4 flex flex-col items-center">
      <h1 class="text-xl font-bold text-slate-700 dark:text-slate-200 truncate">Nguyen Van Hai</h1>
      <p class="text-slate-400 font-bold dark:text-slate-500 text-sm font-mono tracking-wider mt-2">@nvhai272</p>
    </div>

    <!-- Job title -->
    <div class="mt-2 text-center">
      <span class="text-sm font-bold tracking-wide text-slate-600 dark:text-slate-300">
        {{ $t('sidebar.job_title') }}
      </span>
    </div>

    <!-- View history button -->
    <button
      @click="$emit('view-history')"
      class="mt-4 flex items-center justify-center gap-1.5 w-full py-2 px-4 rounded-lg bg-gradient-to-r from-[#38bdf8] to-[#f472b6] text-white text-sm font-bold hover:opacity-90 transition-all hover:shadow-md hover:shadow-[#f472b6]/20 active:scale-[0.98]"
    >
      View CV
    </button>

    <!-- Profile items -->
    <div class="mt-4 flex flex-col gap-2.5">
      <div
        v-for="item in profileItems"
        :key="item.id"
        class="flex items-center gap-2.5 text-slate-700 dark:text-slate-200"
      >
        <component :is="item.icon" class="w-5 h-5 shrink-0 text-slate-600 dark:text-slate-300" />
        <component
          :is="item.link ? 'a' : 'span'"
          :href="item.link"
          :class="item.link
            ? 'text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-sky-500 transition-colors truncate'
            : 'text-sm font-medium text-slate-700 dark:text-slate-200 truncate'"
        >
          {{ item.text }}
        </component>
      </div>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { Feather, Navigation, AtSign } from 'lucide-vue-next'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

defineProps<{
  mobileOpen: boolean
}>()

defineEmits<{
  'view-history': []
}>()

const profileItems = computed(() => [
  {
    id: 'bio',
    icon: Feather,
    text: t('sidebar.bio_decide')
  },
  {
    id: 'location',
    icon: Navigation,
    text: t('sidebar.location')
  },
  {
    id: 'email',
    icon: AtSign,
    text: 'nvhai272@gmail.com',
    link: 'mailto:nvhai272@gmail.com'
  }
])
</script>

<style scoped>
.avatar-ring {
  background: conic-gradient(
    from 0deg,
    #38bdf8,
    #818cf8,
    #f472b6,
    #818cf8,
    #38bdf8
  );
  animation: spin-ring 4s linear infinite;
}

@keyframes spin-ring {
  from { --angle: 0deg; }
  to   { --angle: 360deg; }
}

/* Trickery: conic-gradient doesn't animate directly, animate via filter hue rotation */
.avatar-ring {
  animation: hue-spin 5s linear infinite;
}

@keyframes hue-spin {
  from { filter: hue-rotate(0deg); }
  to   { filter: hue-rotate(360deg); }
}
</style>

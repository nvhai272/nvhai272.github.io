<template>
  <aside :class="['w-full md:w-[272px] lg:w-[296px] shrink-0', mobileOpen ? 'block' : 'hidden md:block']">
    <!-- Avatar -->
    <div class="flex justify-center">
      <div class="rounded-full overflow-hidden border-2 border-[#38bdf8]/30">
        <img
          src="/img.jpg"
          alt="Hai Nguyen"
          class="w-28 h-28 md:w-36 md:h-36 object-cover object-left-bottom"
        />
      </div>
    </div>

    <!-- Name & username -->
    <div class="mt-3 flex flex-col items-center">
      <h1 class="text-xl font-bold text-foreground">Nguyen Van Hai</h1>
      <p class="text-muted-foreground font-bold text-sm font-mono tracking-wider mt-1">@nvhai272</p>
    </div>

    <!-- Job title -->
    <div class="mt-1.5 text-center">
      <span class="text-sm font-bold tracking-wide text-muted-foreground">
        {{ $t('sidebar.job_title') }}
      </span>
    </div>

    <!-- CV buttons -->
    <div class="mt-3 flex gap-2">
      <button
        @click="cvOpen = true"
        class="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg border border-[#38bdf8]/50 text-[#38bdf8] text-sm font-bold hover:bg-[#38bdf8]/10 transition-all active:scale-[0.98]"
      >
        <EyeIcon class="size-4 shrink-0" />
        {{ $t('sidebar.view_cv') }}
      </button>
      <a
        href="/cv.pdf"
        download
        class="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-gradient-to-r from-[#38bdf8] to-[#f472b6] text-white text-sm font-bold hover:opacity-90 transition-all hover:shadow-md hover:shadow-[#f472b6]/20 active:scale-[0.98]"
      >
        <DocumentArrowDownIcon class="size-4 shrink-0" />
        {{ $t('sidebar.download_cv') }}
      </a>
    </div>

    <CvModal :open="cvOpen" @close="cvOpen = false" />

    <!-- Profile items -->
    <div class="mt-3 flex flex-col gap-2">
      <div
        v-for="item in profileItems"
        :key="item.id"
        class="flex items-center gap-2.5 text-foreground min-w-0"
      >
        <component :is="item.icon" class="w-5 h-5 shrink-0 text-muted-foreground" />
        <component
          :is="item.link ? 'a' : 'span'"
          :href="item.link"
          :class="item.link
            ? 'text-sm font-medium text-foreground hover:text-emerald-500 transition-colors truncate'
            : 'text-sm font-medium text-foreground whitespace-nowrap'"
        >
          {{ item.text }}
        </component>
      </div>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { Feather, Navigation, AtSign } from 'lucide-vue-next'
import { DocumentArrowDownIcon, EyeIcon } from '@heroicons/vue/20/solid'
import { useI18n } from 'vue-i18n'
import CvModal from './CvModal.vue'

const { t } = useI18n()
const cvOpen = ref(false)

defineProps<{
  mobileOpen: boolean
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
<template>
  <aside :class="['w-full md:w-[272px] lg:w-[296px] shrink-0', mobileOpen ? 'block' : 'hidden md:block']">
    <!-- Avatar card with spinning gradient ring -->
    <div class="relative p-[3px] rounded-xl avatar-ring">
      <div class="rounded-[10px] overflow-hidden bg-slate-100 dark:bg-[#141A27] relative group">
        <img
          src="https://scontent.fhan18-1.fna.fbcdn.net/v/t39.30808-6/556909038_4030981993790214_327275188755709228_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=1d70fc&_nc_eui2=AeHrRayBxMXT1JtN1Guqq40YmEhBmHRk4-WYSEGYdGTj5RRVYR79e4A8JmXalsM5fCnaNjjznX3YyymHATWL9O-8&_nc_ohc=yVXEiG_nZr4Q7kNvwHACsDR&_nc_oc=AdkQYGIAfeIxYkVwfSthtcyQrdvtPDD1Y8-UGU_qUkRCA8LL1aDOhkcmzevuvAT3IQXcODXcERaLuACP8VNFF6ff&_nc_zt=23&_nc_ht=scontent.fhan18-1.fna&_nc_gid=f0KYr2SvjqauB3U_iBoKLQ&_nc_ss=8&oh=00_AfwzpMQVDlr52a3JB_reAFjDvgj8IsWROYCcvC7QFEPtqw&oe=69B7755C"
          alt="Hai Nguyen"
          class="w-full h-[260px] object-cover object-left-bottom transition-transform duration-500 group-hover:scale-[1.02]"
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
      <h1 class="text-xl font-bold text-slate-900 dark:text-white tracking-tight">Nguyen Van Hai</h1>
      <p class="text-slate-400 dark:text-slate-500 text-sm font-mono mt-0.5">@nvhai272</p>
    </div>

    <!-- Job title -->
    <div class="mt-2 text-center">
      <span class="inline-block text-sm font-medium text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-[#1C2234] border border-slate-200 dark:border-[#232B3E] px-3 py-1 rounded-full">
        {{ $t('sidebar.job_title') }}
      </span>
    </div>

    <!-- View history button -->
    <button
      @click="$emit('view-history')"
      class="mt-4 w-full py-2 px-4 rounded-lg border border-slate-200 dark:border-[#232B3E] bg-slate-50 dark:bg-[#1C2234] text-slate-700 dark:text-slate-200 font-semibold text-sm hover:bg-slate-100 dark:hover:bg-[#232B3E] hover:border-slate-300 dark:hover:border-[#58a6ff]/50 transition-all active:scale-[0.98]"
    >
      {{ $t('sidebar.view_history') }}
    </button>

    <!-- Profile items -->
    <div class="mt-4 flex flex-col gap-2.5">
      <div
        v-for="item in profileItems"
        :key="item.id"
        class="flex items-center gap-2.5 text-slate-500 dark:text-slate-400"
      >
        <component :is="item.icon" class="w-4 h-4 shrink-0 text-slate-400 dark:text-slate-500" />
        <component
          :is="item.link ? 'a' : 'span'"
          :href="item.link"
          :class="item.link
            ? 'text-sm text-slate-600 dark:text-slate-300 hover:text-[#EC5B13] transition-colors truncate'
            : 'text-sm text-slate-600 dark:text-slate-300 truncate'"
        >
          {{ item.text }}
        </component>
      </div>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { PenLine, MapPin, Clock, Mail } from 'lucide-vue-next'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

defineProps<{
  mobileOpen: boolean
}>()

defineEmits<{
  'view-history': []
}>()

const time = ref('')
let interval: number | undefined

const updateTime = () => {
  time.value = new Date().toLocaleTimeString('vi-VN', {
    timeZone: 'Asia/Ho_Chi_Minh',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  })
}

const profileItems = computed(() => [
  {
    id: 'bio',
    icon: PenLine,
    text: t('sidebar.bio_decide')
  },
  {
    id: 'location',
    icon: MapPin,
    text: t('sidebar.location')
  },
  {
    id: 'time',
    icon: Clock,
    text: `${time.value} (UTC+07:00)`
  },
  {
    id: 'email',
    icon: Mail,
    text: 'nvhai272@gmail.com',
    link: 'mailto:nvhai272@gmail.com'
  }
])

onMounted(() => {
  updateTime()
  interval = setInterval(updateTime, 1000)
})

onUnmounted(() => clearInterval(interval))
</script>

<style scoped>
.avatar-ring {
  background: conic-gradient(
    from 0deg,
    #EC5B13,
    #f97316,
    #fb923c,
    #f472b6,
    #a78bfa,
    #38bdf8,
    #34d399,
    #EC5B13
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

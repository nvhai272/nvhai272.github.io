<template>
  <section class="pb-8">
    <div class="flex items-center gap-2 mb-6">
      <div class="size-7 rounded-lg bg-[#38bdf8]/10 flex items-center justify-center">
        <EnvelopeIcon class="size-4 text-emerald-500" />
      </div>
      <h2 class="font-display text-xl sm:text-2xl font-bold tracking-tight text-foreground">{{ $t('contact.title') }}</h2>
    </div>

    <div class="relative bg-card rounded-xl border border-border overflow-hidden">
    <div class="grid grid-cols-1 lg:grid-cols-5">
      <!-- Contact info -->
      <div class="lg:col-span-2 flex flex-col gap-4 p-5 lg:border-r border-b lg:border-b-0 border-border">
          <p class="text-muted-foreground text-sm leading-6 mb-5 text-justify">{{ $t('contact.intro') }}</p>

          <!-- Availability -->
          <div class="flex items-center gap-2 p-3 rounded-lg bg-green-50 dark:bg-green-900/15 border border-green-200 dark:border-green-800/40">
            <span class="size-2 rounded-full bg-green-500 animate-pulse shrink-0" />
            <span class="text-xs font-medium text-green-700 dark:text-green-400">Available · usually replies within 24h</span>
          </div>

          <div class="flex flex-col gap-2.5">
            <a
              href="https://facebook.com/nvhai272"
              target="_blank"
              rel="noopener"
              class="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300 hover:text-[#38bdf8] transition-colors group"
            >
              <div class="size-8 rounded-lg bg-slate-100 dark:bg-[#1C2234] flex items-center justify-center shrink-0 group-hover:bg-[#38bdf8]/10 transition-colors">
                <FacebookIcon class="size-4 text-slate-500 group-hover:text-[#38bdf8] transition-colors" />
              </div>
              <span class="text-xs">facebook.com/nvhai272</span>
            </a>

            <a
              href="https://github.com/nvhai272"
              target="_blank"
              rel="noopener"
              class="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300 hover:text-[#38bdf8] transition-colors group"
            >
              <div class="size-8 rounded-lg bg-slate-100 dark:bg-[#1C2234] flex items-center justify-center shrink-0 group-hover:bg-[#38bdf8]/10 transition-colors">
                <GithubIcon class="size-4 text-slate-500 group-hover:text-[#38bdf8] transition-colors" />
              </div>
              <span class="text-xs">github.com/nvhai272</span>
            </a>
          </div>
      </div>

      <!-- Form -->
      <div class="lg:col-span-3 p-5">
        <form
          @submit.prevent="submitForm"
          class="flex flex-col gap-4"
        >
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div class="flex flex-col gap-1.5">
              <label class="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                {{ $t('contact.form.name') }} <span class="text-red-400">*</span>
              </label>
              <input
                v-model="form.name"
                type="text"
                :placeholder="$t('contact.form.name_placeholder')"
                :class="['px-3 py-2.5 rounded-lg border bg-secondary text-foreground text-sm placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-[#38bdf8]/30 focus:border-[#38bdf8] transition-all', errors.name ? 'border-red-400' : 'border-border']"
              />
              <span v-if="errors.name" class="text-red-400 text-xs">{{ errors.name }}</span>
            </div>
            <div class="flex flex-col gap-1.5">
              <label class="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                {{ $t('contact.form.email') }} <span class="text-red-400">*</span>
              </label>
              <input
                v-model="form.email"
                type="email"
                :placeholder="$t('contact.form.email_placeholder')"
                :class="['px-3 py-2.5 rounded-lg border bg-secondary text-foreground text-sm placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-[#38bdf8]/30 focus:border-[#38bdf8] transition-all', errors.email ? 'border-red-400' : 'border-border']"
              />
              <span v-if="errors.email" class="text-red-400 text-xs">{{ errors.email }}</span>
            </div>
          </div>

          <div class="flex flex-col gap-1.5">
            <label class="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
              {{ $t('contact.form.subject') }}
            </label>
            <input
              v-model="form.subject"
              type="text"
              :placeholder="$t('contact.form.subject_placeholder')"
              class="px-3 py-2.5 rounded-lg border border-border bg-secondary text-foreground text-sm placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-[#38bdf8]/30 focus:border-[#38bdf8] transition-all"
            />
          </div>

          <div class="flex flex-col gap-1.5">
            <label class="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
              {{ $t('contact.form.message') }} <span class="text-red-400">*</span>
            </label>
            <textarea
              v-model="form.message"
              rows="5"
              :placeholder="$t('contact.form.message_placeholder')"
              :class="['px-3 py-2.5 rounded-lg border bg-secondary text-foreground text-sm placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-[#38bdf8]/30 focus:border-[#38bdf8] transition-all resize-none', errors.message ? 'border-red-400' : 'border-border']"
            />
            <span v-if="errors.message" class="text-red-400 text-xs">{{ errors.message }}</span>
          </div>

          <!-- Status messages -->
          <div
            v-if="status === 'success'"
            class="flex items-center gap-2 text-green-700 dark:text-green-400 text-sm bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800/40 rounded-lg px-3 py-2.5"
          >
            <CheckCircleIcon class="size-4 shrink-0" />
            {{ $t('contact.form.success') }}
          </div>
          <div
            v-else-if="status === 'error'"
            class="flex items-center gap-2 text-red-600 dark:text-red-400 text-sm bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800/40 rounded-lg px-3 py-2.5"
          >
            <ExclamationCircleIcon class="size-4 shrink-0" />
            {{ $t('contact.form.error') }}
          </div>

          <button
            type="submit"
            :disabled="loading"
            class="flex items-center justify-center gap-2 py-2.5 px-5 rounded-lg bg-gradient-to-r from-[#38bdf8] to-[#f472b6] text-white font-bold text-sm hover:opacity-90 disabled:opacity-60 disabled:cursor-not-allowed transition-all hover:shadow-md hover:shadow-[#f472b6]/20 active:scale-[0.98]"
          >
            <ArrowPathIcon v-if="loading" class="size-4 animate-spin" />
            <PaperAirplaneIcon v-else class="size-4" />
            {{ loading ? $t('contact.form.sending') : $t('contact.form.send') }}
          </button>
        </form>
      </div>
    </div>
    </div>

    <div class="border-border mt-4">
      <div class="relative w-full h-[300px] sm:h-[400px] overflow-hidden rounded-xl border border-border shadow-sm">
        <div class="absolute inset-0 bg-emerald-500/5 pointer-events-none z-10" />

        <div class="absolute top-4 right-4 z-20" @click.stop>
          <button
            @click="dropdownOpen = !dropdownOpen"
            class="flex items-center gap-2 px-3 py-2 min-w-[140px] bg-card/60 backdrop-blur-md border border-border/50 rounded-xl shadow-lg cursor-pointer hover:bg-card/80 transition-colors"
          >
            <MapPinIcon class="size-4 text-emerald-500 shrink-0" />
            <span class="flex-1 text-[11px] font-bold text-emerald-500 uppercase tracking-wider">{{ locations[selectedLocation].name }}</span>
            <ChevronDownIcon :class="['size-3 text-emerald-500 shrink-0 transition-transform ml-auto', dropdownOpen ? 'rotate-180' : '']" />
          </button>

          <div
            v-show="dropdownOpen"
            class="absolute right-0 mt-1.5 min-w-full bg-card/80 backdrop-blur-md border border-border/50 rounded-xl shadow-lg overflow-hidden"
          >
            <button
              v-for="(loc, index) in locations"
              :key="index"
              @click="selectedLocation = index; dropdownOpen = false"
              :class="[
                'w-full flex items-center gap-2 px-3 py-2 text-[11px] font-bold uppercase tracking-wider transition-colors cursor-pointer',
                selectedLocation === index
                  ? 'text-emerald-500 bg-emerald-500/10'
                  : 'text-muted-foreground hover:text-emerald-500 hover:bg-emerald-500/5'
              ]"
            >
              <MapPinIcon class="size-3 shrink-0" />
              {{ loc.name }}
            </button>
          </div>
        </div>

        <iframe
            :src="mapSrc"
            class="absolute inset-0 w-full h-full origin-center grayscale-[0.3] contrast-[1.1] dark:invert-[0.9] dark:hue-rotate-180"
            style="border:0;"
            allowfullscreen="true"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
        ></iframe>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { EnvelopeIcon, PaperAirplaneIcon, ArrowPathIcon, CheckCircleIcon, ExclamationCircleIcon, MapPinIcon, ChevronDownIcon } from '@heroicons/vue/20/solid'
import { Facebook as FacebookIcon, Github as GithubIcon } from 'lucide-vue-next'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const locations = [
  { name: 'Company', lat: 21.0188, lng: 105.8263 },
  { name: 'Home', lat: 20.999810, lng: 105.872540 },
  { name: 'Gươm lake', lat: 21.0285, lng: 105.8523 },
]
const selectedLocation = ref(2)
const dropdownOpen = ref(false)

const closeDropdown = () => { dropdownOpen.value = false }
onMounted(() => document.addEventListener('click', closeDropdown))
onUnmounted(() => document.removeEventListener('click', closeDropdown))

const mapSrc = computed(() => {
  const loc = locations[selectedLocation.value]
  return `https://maps.google.com/maps?q=${loc.lat},${loc.lng}&z=15&output=embed`
})

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xpqoprpe'

const form = ref({ name: '', email: '', subject: '', message: '' })
const loading = ref(false)
const status = ref<'idle' | 'success' | 'error'>('idle')
const errors = ref({ name: '', email: '', message: '' })

const validate = () => {
  errors.value = { name: '', email: '', message: '' }
  if (!form.value.name.trim()) errors.value.name = t('contact.form.validation.name_required')
  if (!form.value.email.trim()) errors.value.email = t('contact.form.validation.email_required')
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.value.email)) errors.value.email = t('contact.form.validation.email_invalid')
  if (!form.value.message.trim()) errors.value.message = t('contact.form.validation.message_required')
  return !errors.value.name && !errors.value.email && !errors.value.message
}

const submitForm = async () => {
  if (!validate()) return
  loading.value = true
  status.value = 'idle'
  try {
    const res = await fetch(FORMSPREE_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(form.value)
    })
    if (res.ok) {
      status.value = 'success'
      form.value = { name: '', email: '', subject: '', message: '' }
    } else {
      status.value = 'error'
    }
  } catch {
    status.value = 'error'
  } finally {
    loading.value = false
  }
}
</script>

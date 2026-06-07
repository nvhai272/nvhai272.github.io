<template>
  <section>
    <SectionHeader index="04" :title="$t('sections.contact.title')" :meta="$t('sections.contact.meta')" />

    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
      <!-- Info -->
      <div v-reveal="120" class="lg:col-span-5 flex flex-col">
        <p class="mt-2 text-base sm:text-lg leading-relaxed text-muted-foreground">{{ $t('contact.intro') }}</p>

        <div class="mt-5 flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-muted-foreground">
          <span class="size-2 bg-green-500 inline-block animate-pulse" />
          {{ $t('hero.available') }}
        </div>

        <div class="mt-5 border-t-2 border-border">
          <a
            href="mailto:nvhai272@gmail.com"
            class="group flex items-center justify-between gap-4 py-4 border-b border-border-soft hover:text-accent transition-colors"
          >
            <span class="font-mono text-[11px] uppercase tracking-widest text-muted-foreground group-hover:text-accent">Email</span>
            <span class="font-display font-semibold text-sm sm:text-base">nvhai272@gmail.com</span>
          </a>
          <a
            href="https://github.com/nvhai272"
            target="_blank" rel="noopener"
            class="group flex items-center justify-between gap-4 py-4 border-b border-border-soft hover:text-accent transition-colors"
          >
            <span class="font-mono text-[11px] uppercase tracking-widest text-muted-foreground group-hover:text-accent">GitHub</span>
            <span class="font-display font-semibold text-sm sm:text-base">github.com/nvhai272</span>
          </a>
          <a
            href="https://facebook.com/nvhai272"
            target="_blank" rel="noopener"
            class="group flex items-center justify-between gap-4 py-4 border-b border-border-soft hover:text-accent transition-colors"
          >
            <span class="font-mono text-[11px] uppercase tracking-widest text-muted-foreground group-hover:text-accent">Facebook</span>
            <span class="font-display font-semibold text-sm sm:text-base">facebook.com/nvhai272</span>
          </a>
        </div>
      </div>

      <!-- Form -->
      <div v-reveal="200" class="lg:col-span-7">
        <form @submit.prevent="submitForm" class="flex flex-col gap-5">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div class="flex flex-col gap-2">
              <label :class="labelCls">{{ $t('contact.form.name') }} <span class="text-accent">*</span></label>
              <input
                v-model="form.name"
                type="text"
                :placeholder="$t('contact.form.name_placeholder')"
                :class="[inputCls, errors.name ? 'border-destructive' : 'border-border']"
              />
              <span v-if="errors.name" class="text-destructive font-mono text-xs">{{ errors.name }}</span>
            </div>
            <div class="flex flex-col gap-2">
              <label :class="labelCls">{{ $t('contact.form.email') }} <span class="text-accent">*</span></label>
              <input
                v-model="form.email"
                type="email"
                :placeholder="$t('contact.form.email_placeholder')"
                :class="[inputCls, errors.email ? 'border-destructive' : 'border-border']"
              />
              <span v-if="errors.email" class="text-destructive font-mono text-xs">{{ errors.email }}</span>
            </div>
          </div>

          <div class="flex flex-col gap-2">
            <label :class="labelCls">{{ $t('contact.form.subject') }}</label>
            <input
              v-model="form.subject"
              type="text"
              :placeholder="$t('contact.form.subject_placeholder')"
              :class="[inputCls, 'border-border']"
            />
          </div>

          <div class="flex flex-col gap-2">
            <label :class="labelCls">{{ $t('contact.form.message') }} <span class="text-accent">*</span></label>
            <textarea
              v-model="form.message"
              rows="5"
              :placeholder="$t('contact.form.message_placeholder')"
              :class="[inputCls, 'resize-none', errors.message ? 'border-destructive' : 'border-border']"
            />
            <span v-if="errors.message" class="text-destructive font-mono text-xs">{{ errors.message }}</span>
          </div>

          <div v-if="status === 'success'" class="flex items-center gap-2 border-2 border-border px-4 py-3 font-mono text-xs uppercase tracking-wider">
            <CheckCircleIcon class="size-4 shrink-0 text-green-500" />
            {{ $t('contact.form.success') }}
          </div>
          <div v-else-if="status === 'error'" class="flex items-center gap-2 border-2 border-destructive px-4 py-3 font-mono text-xs uppercase tracking-wider text-destructive">
            <ExclamationCircleIcon class="size-4 shrink-0" />
            {{ $t('contact.form.error') }}
          </div>

          <button
            type="submit"
            :disabled="loading"
            class="btn-accent h-12 px-6 flex items-center justify-center gap-2 font-mono text-sm font-bold uppercase tracking-wider disabled:opacity-60 disabled:cursor-not-allowed self-start"
          >
            <ArrowPathIcon v-if="loading" class="size-4 animate-spin" />
            <PaperAirplaneIcon v-else class="size-4" />
            {{ loading ? $t('contact.form.sending') : $t('contact.form.send') }}
          </button>
        </form>
      </div>
    </div>

    <!-- Map -->
    <div v-reveal="120" class="mt-10 relative border-2 border-border">
      <div class="absolute top-3 left-3 z-10 flex items-center gap-2 bg-background border-2 border-border px-3 py-1.5 font-mono text-[11px] font-bold uppercase tracking-widest">
        <MapPinIcon class="size-3.5 text-accent" />
        {{ $t('sidebar.location') }}
      </div>
      <iframe
        :src="mapSrc"
        class="w-full h-[300px] sm:h-[380px] dark:invert-[0.9] dark:hue-rotate-180"
        :class="mapActive ? '' : 'pointer-events-none'"
        style="border:0;"
        allowfullscreen="true"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
      <!-- Tap-to-activate overlay: lets the page scroll past the map on touch devices -->
      <button
        v-if="!mapActive"
        type="button"
        @click="mapActive = true"
        class="absolute inset-0 z-[5] flex items-end justify-center pb-4 bg-transparent"
        :aria-label="$t('contact.map_hint')"
      >
        <span class="bg-background border-2 border-border px-3 py-1.5 font-mono text-[11px] font-bold uppercase tracking-widest">
          {{ $t('contact.map_hint') }}
        </span>
      </button>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { PaperAirplaneIcon, ArrowPathIcon, CheckCircleIcon, ExclamationCircleIcon, MapPinIcon } from '@heroicons/vue/20/solid'
import { useI18n } from 'vue-i18n'
import SectionHeader from './SectionHeader.vue'

const { t } = useI18n()

const labelCls = 'font-mono text-[11px] font-semibold uppercase tracking-widest text-muted-foreground'
const inputCls = 'px-3.5 py-3 border-2 bg-card text-foreground text-sm placeholder-muted-foreground focus:outline-none focus:border-accent transition-colors'

const HOME = { lat: 20.999810, lng: 105.872540 }
const mapSrc = `https://maps.google.com/maps?q=${HOME.lat},${HOME.lng}&z=15&output=embed`
const mapActive = ref(false)

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

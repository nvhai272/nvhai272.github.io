<template>
  <section class="pb-8">
    <div class="flex items-center gap-2 mb-6">
      <div class="size-7 rounded-lg bg-[#38bdf8]/10 flex items-center justify-center">
        <EnvelopeIcon class="size-4 text-[#38bdf8]" />
      </div>
      <h2 class="font-display text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white">{{ $t('contact.title') }}</h2>
    </div>

    <div class="relative bg-white dark:bg-[#141A27] rounded-xl border border-slate-200 dark:border-[#232B3E] overflow-hidden">
      <div class="h-0.5 w-full bg-gradient-to-r from-[#38bdf8] via-[#818cf8] to-[#f472b6]" />
    <div class="grid grid-cols-1 lg:grid-cols-5">
      <!-- Contact info -->
      <div class="lg:col-span-2 flex flex-col gap-4 p-5 lg:border-r border-b lg:border-b-0 border-slate-200 dark:border-[#232B3E]">
          <p class="text-slate-600 dark:text-slate-300 text-sm leading-6 mb-5 text-justify">{{ $t('contact.intro') }}</p>

          <!-- Availability -->
          <div class="flex items-center gap-2 p-3 rounded-lg bg-green-50 dark:bg-green-900/15 border border-green-200 dark:border-green-800/40 mb-4">
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
              <label class="text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wide">
                {{ $t('contact.form.name') }} <span class="text-red-400">*</span>
              </label>
              <input
                v-model="form.name"
                type="text"
                :placeholder="$t('contact.form.name_placeholder')"
                :class="['px-3 py-2.5 rounded-lg border bg-slate-50 dark:bg-[#1C2234] text-slate-900 dark:text-white text-sm placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#38bdf8]/30 focus:border-[#38bdf8] transition-all', errors.name ? 'border-red-400 dark:border-red-500' : 'border-slate-200 dark:border-[#30363d]']"
              />
              <span v-if="errors.name" class="text-red-400 text-xs">{{ errors.name }}</span>
            </div>
            <div class="flex flex-col gap-1.5">
              <label class="text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wide">
                {{ $t('contact.form.email') }} <span class="text-red-400">*</span>
              </label>
              <input
                v-model="form.email"
                type="email"
                :placeholder="$t('contact.form.email_placeholder')"
                :class="['px-3 py-2.5 rounded-lg border bg-slate-50 dark:bg-[#1C2234] text-slate-900 dark:text-white text-sm placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#38bdf8]/30 focus:border-[#38bdf8] transition-all', errors.email ? 'border-red-400 dark:border-red-500' : 'border-slate-200 dark:border-[#30363d]']"
              />
              <span v-if="errors.email" class="text-red-400 text-xs">{{ errors.email }}</span>
            </div>
          </div>

          <div class="flex flex-col gap-1.5">
            <label class="text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wide">
              {{ $t('contact.form.subject') }}
            </label>
            <input
              v-model="form.subject"
              type="text"
              :placeholder="$t('contact.form.subject_placeholder')"
              class="px-3 py-2.5 rounded-lg border border-slate-200 dark:border-[#30363d] bg-slate-50 dark:bg-[#1C2234] text-slate-900 dark:text-white text-sm placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#38bdf8]/30 focus:border-[#38bdf8] transition-all"
            />
          </div>

          <div class="flex flex-col gap-1.5">
            <label class="text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wide">
              {{ $t('contact.form.message') }} <span class="text-red-400">*</span>
            </label>
            <textarea
              v-model="form.message"
              rows="5"
              :placeholder="$t('contact.form.message_placeholder')"
              :class="['px-3 py-2.5 rounded-lg border bg-slate-50 dark:bg-[#1C2234] text-slate-900 dark:text-white text-sm placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#38bdf8]/30 focus:border-[#38bdf8] transition-all resize-none', errors.message ? 'border-red-400 dark:border-red-500' : 'border-slate-200 dark:border-[#30363d]']"
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
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { EnvelopeIcon, PaperAirplaneIcon, ArrowPathIcon, CheckCircleIcon, ExclamationCircleIcon } from '@heroicons/vue/20/solid'
import { Facebook as FacebookIcon, Github as GithubIcon } from 'lucide-vue-next'

// Thay YOUR_FORM_ID bằng ID từ https://formspree.io (miễn phí)
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xpqoprpe'

const form = ref({ name: '', email: '', subject: '', message: '' })
const loading = ref(false)
const status = ref<'idle' | 'success' | 'error'>('idle')
const errors = ref({ name: '', email: '', message: '' })

const validate = () => {
  errors.value = { name: '', email: '', message: '' }
  if (!form.value.name.trim()) errors.value.name = 'Name is required'
  if (!form.value.email.trim()) errors.value.email = 'Email is required'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.value.email)) errors.value.email = 'Invalid email address'
  if (!form.value.message.trim()) errors.value.message = 'Message is required'
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

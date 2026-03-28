<template>
  <section class="pb-8">
    <div class="flex items-center gap-2 mb-6">
      <div class="size-7 rounded-lg bg-[#EC5B13]/10 flex items-center justify-center">
        <Mail class="size-4 text-[#EC5B13]" />
      </div>
      <h2 class="font-display text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white">{{ $t('contact.title') }}</h2>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-5 gap-5">
      <!-- Contact info -->
      <div class="lg:col-span-2 flex flex-col gap-4">
        <!-- Intro card -->
        <div class="relative bg-white dark:bg-[#141A27] rounded-xl border border-slate-200 dark:border-[#232B3E] p-5 overflow-hidden">
          <div class="h-0.5 w-full bg-gradient-to-r from-[#EC5B13] via-orange-300 to-transparent absolute top-0 left-0" />
          <p class="text-slate-600 dark:text-slate-300 text-sm leading-6 mb-5">{{ $t('contact.intro') }}</p>

          <!-- Availability -->
          <div class="flex items-center gap-2 p-3 rounded-lg bg-green-50 dark:bg-green-900/15 border border-green-200 dark:border-green-800/40 mb-4">
            <span class="size-2 rounded-full bg-green-500 animate-pulse shrink-0" />
            <span class="text-xs font-medium text-green-700 dark:text-green-400">Available · usually replies within 24h</span>
          </div>

          <div class="flex flex-col gap-2.5">
            <a
              href="mailto:nvhai272@gmail.com"
              class="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300 hover:text-[#EC5B13] transition-colors group"
            >
              <div class="size-8 rounded-lg bg-slate-100 dark:bg-[#1C2234] flex items-center justify-center shrink-0 group-hover:bg-[#EC5B13]/10 transition-colors">
                <Mail class="size-3.5 text-slate-400 group-hover:text-[#EC5B13] transition-colors" />
              </div>
              <span class="truncate text-xs">nvhai272@gmail.com</span>
            </a>

            <a
              href="https://github.com/nvhai272"
              target="_blank"
              rel="noopener"
              class="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300 hover:text-[#EC5B13] transition-colors group"
            >
              <div class="size-8 rounded-lg bg-slate-100 dark:bg-[#1C2234] flex items-center justify-center shrink-0 group-hover:bg-[#EC5B13]/10 transition-colors">
                <Github class="size-3.5 text-slate-400 group-hover:text-[#EC5B13] transition-colors" />
              </div>
              <span class="text-xs">github.com/nvhai272</span>
            </a>

            <div class="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300">
              <div class="size-8 rounded-lg bg-slate-100 dark:bg-[#1C2234] flex items-center justify-center shrink-0">
                <MapPin class="size-3.5 text-slate-400" />
              </div>
              <span class="text-xs">{{ $t('sidebar.location') }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Form -->
      <div class="lg:col-span-3">
        <form
          @submit.prevent="submitForm"
          class="bg-white dark:bg-[#141A27] rounded-xl border border-slate-200 dark:border-[#232B3E] p-5 flex flex-col gap-4"
        >
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div class="flex flex-col gap-1.5">
              <label class="font-display text-[10px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-[0.15em]">
                {{ $t('contact.form.name') }}
              </label>
              <input
                v-model="form.name"
                type="text"
                required
                :placeholder="$t('contact.form.name_placeholder')"
                class="px-3 py-2.5 rounded-lg border border-slate-200 dark:border-[#232B3E] bg-slate-50 dark:bg-[#0F1219] text-slate-900 dark:text-white text-sm placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-[#EC5B13]/30 focus:border-[#EC5B13] transition-all"
              />
            </div>
            <div class="flex flex-col gap-1.5">
              <label class="font-display text-[10px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-[0.15em]">
                {{ $t('contact.form.email') }}
              </label>
              <input
                v-model="form.email"
                type="email"
                required
                :placeholder="$t('contact.form.email_placeholder')"
                class="px-3 py-2.5 rounded-lg border border-slate-200 dark:border-[#232B3E] bg-slate-50 dark:bg-[#0F1219] text-slate-900 dark:text-white text-sm placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-[#EC5B13]/30 focus:border-[#EC5B13] transition-all"
              />
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
              class="px-3 py-2.5 rounded-lg border border-slate-200 dark:border-[#232B3E] bg-slate-50 dark:bg-[#0F1219] text-slate-900 dark:text-white text-sm placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-[#EC5B13]/30 focus:border-[#EC5B13] transition-all"
            />
          </div>

          <div class="flex flex-col gap-1.5">
            <label class="text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wide">
              {{ $t('contact.form.message') }}
            </label>
            <textarea
              v-model="form.message"
              required
              rows="5"
              :placeholder="$t('contact.form.message_placeholder')"
              class="px-3 py-2.5 rounded-lg border border-slate-200 dark:border-[#232B3E] bg-slate-50 dark:bg-[#0F1219] text-slate-900 dark:text-white text-sm placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-[#EC5B13]/30 focus:border-[#EC5B13] transition-all resize-none"
            />
          </div>

          <!-- Status messages -->
          <div
            v-if="status === 'success'"
            class="flex items-center gap-2 text-green-700 dark:text-green-400 text-sm bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800/40 rounded-lg px-3 py-2.5"
          >
            <CheckCircle class="size-4 shrink-0" />
            {{ $t('contact.form.success') }}
          </div>
          <div
            v-else-if="status === 'error'"
            class="flex items-center gap-2 text-red-600 dark:text-red-400 text-sm bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800/40 rounded-lg px-3 py-2.5"
          >
            <AlertCircle class="size-4 shrink-0" />
            {{ $t('contact.form.error') }}
          </div>

          <button
            type="submit"
            :disabled="loading"
            class="flex items-center justify-center gap-2 py-2.5 px-5 rounded-lg bg-[#EC5B13] text-white font-semibold text-sm hover:bg-[#d44f0e] disabled:opacity-60 disabled:cursor-not-allowed transition-all hover:shadow-md hover:shadow-[#EC5B13]/20 active:scale-[0.98]"
          >
            <Loader2 v-if="loading" class="size-4 animate-spin" />
            <Send v-else class="size-4" />
            {{ loading ? $t('contact.form.sending') : $t('contact.form.send') }}
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Mail, Github, MapPin, Send, Loader2, CheckCircle, AlertCircle } from 'lucide-vue-next'

// Thay YOUR_FORM_ID bằng ID từ https://formspree.io (miễn phí)
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID'

const form = ref({ name: '', email: '', subject: '', message: '' })
const loading = ref(false)
const status = ref<'idle' | 'success' | 'error'>('idle')

const submitForm = async () => {
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

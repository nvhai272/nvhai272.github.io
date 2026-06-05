<template>
  <Teleport to="body">
    <Transition name="modal">
      <div v-if="open" class="fixed inset-0 z-50 flex items-center justify-center p-4" @click.self="$emit('close')">
        <div class="absolute inset-0 bg-black/50 backdrop-blur-sm" @click="$emit('close')" />

        <div class="relative w-full max-w-4xl h-[90vh] bg-card border border-border rounded-2xl shadow-2xl flex flex-col overflow-hidden">
          <!-- Header -->
          <div class="flex items-center justify-between px-5 py-3 border-b border-border shrink-0">
            <h3 class="text-sm font-bold text-foreground uppercase tracking-wider">{{ $t('sidebar.view_cv') }}</h3>
            <div class="flex items-center gap-2">
              <a
                href="/cv.pdf"
                download
                class="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-r from-[#38bdf8] to-[#f472b6] text-white text-xs font-bold hover:opacity-90 transition-all active:scale-[0.98]"
              >
                <DocumentArrowDownIcon class="size-3.5 shrink-0" />
                {{ $t('sidebar.download_cv') }}
              </a>
              <button
                @click="$emit('close')"
                class="size-7 flex items-center justify-center rounded-lg hover:bg-secondary transition-colors"
              >
                <XMarkIcon class="size-4 text-muted-foreground" />
              </button>
            </div>
          </div>

          <!-- PDF iframe -->
          <iframe
            src="/cv.pdf"
            class="flex-1 w-full"
            frameborder="0"
          />
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { XMarkIcon, DocumentArrowDownIcon } from '@heroicons/vue/20/solid'

defineProps<{ open: boolean }>()
defineEmits<{ close: [] }>()
</script>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.25s ease;
}
.modal-enter-active .relative,
.modal-leave-active .relative {
  transition: transform 0.25s ease, opacity 0.25s ease;
}
.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
.modal-enter-from .relative {
  transform: scale(0.96) translateY(12px);
  opacity: 0;
}
.modal-leave-to .relative {
  transform: scale(0.96) translateY(12px);
  opacity: 0;
}
</style>
<template>
  <Teleport to="body">
    <Transition name="modal">
      <div v-if="open" class="fixed inset-0 z-50 flex items-center justify-center p-4" @click.self="$emit('close')">
        <div class="absolute inset-0 bg-foreground/30 backdrop-blur-sm" @click="$emit('close')" />

        <div class="relative w-full max-w-4xl h-[90vh] bg-card border-2 border-border shadow-[8px_8px_0_0_var(--border)] flex flex-col overflow-hidden">
          <!-- Header -->
          <div class="flex items-center justify-between px-5 h-12 border-b-2 border-border shrink-0">
            <h3 class="font-display font-bold text-sm text-foreground uppercase tracking-tight">{{ $t('sidebar.view_cv') }}</h3>
            <div class="flex items-center gap-2">
              <a
                href="/cv.pdf"
                download
                class="btn-accent flex items-center gap-1.5 px-3 h-8 font-mono text-[11px] font-bold uppercase tracking-wider"
              >
                <DocumentArrowDownIcon class="size-3.5 shrink-0" />
                {{ $t('sidebar.download_cv') }}
              </a>
              <button
                @click="$emit('close')"
                class="btn-brut size-8 flex items-center justify-center"
              >
                <XMarkIcon class="size-4" />
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
<template>
  <LoadingScreen v-if="!appReady" @done="appReady = true" />
  <div v-else id="top" class="flex flex-col min-h-screen bg-background text-foreground transition-colors antialiased">
    <Header :dark="dark" @toggle="toggleDark" />

    <main class="flex-1">
      <!-- Hero + About (merged) -->
      <section id="about" class="max-w-[1200px] mx-auto px-4 sm:px-8 scroll-mt-16 sm:scroll-mt-20">
        <HeroSection />
      </section>

      <!-- Sections -->
      <div class="max-w-[1200px] mx-auto px-4 sm:px-8 space-y-8">
        <section id="stack" class="scroll-mt-16 sm:scroll-mt-20"><CoreTechnologies /></section>
        <section id="work" class="scroll-mt-16 sm:scroll-mt-20"><ReposSection /></section>
        <section id="contact" class="scroll-mt-16 sm:scroll-mt-20"><ContactSection /></section>
      </div>
    </main>

    <Footer />
    <WeatherModal />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Header from './components/Header.vue'
import HeroSection from './components/HeroSection.vue'
import CoreTechnologies from './components/CoreTechnologies.vue'
import ReposSection from './components/ReposSection.vue'
import ContactSection from './components/ContactSection.vue'
import Footer from './components/Footer.vue'
import LoadingScreen from './components/LoadingScreen.vue'
import WeatherModal from './components/WeatherModal.vue'

const dark = ref(false)
const appReady = ref(false)

const toggleDark = () => {
  dark.value = !dark.value
  if (dark.value) {
    document.documentElement.classList.add('dark')
    localStorage.setItem('darkMode', 'true')
  } else {
    document.documentElement.classList.remove('dark')
    localStorage.setItem('darkMode', 'false')
  }
}

onMounted(() => {
  const savedDark = localStorage.getItem('darkMode')
  if (savedDark === 'true') {
    dark.value = true
    document.documentElement.classList.add('dark')
  }
})
</script>

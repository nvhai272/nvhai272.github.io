<template>
  <LoadingScreen v-if="!appReady" @done="appReady = true" />
  <div v-else class="flex flex-col min-h-screen bg-background text-foreground transition-colors font-sans antialiased">
    <SakuraPetals />
    <Header :dark="dark" @toggle="toggleDark" />

    <main class="flex-1">
      <div class="max-w-[720px] mx-auto px-4 sm:px-6 py-8 flex flex-col">
        <div id="hero"><HeroSection /></div>
        <div id="bio"><BioSection /></div>
        <div id="technologies" class="mt-12"><CoreTechnologies /></div>
        <div id="repos" class="mt-12"><ReposSection /></div>
        <div id="contact" class="mt-12"><ContactSection /></div>
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
import BioSection from './components/BioSection.vue'
import CoreTechnologies from './components/CoreTechnologies.vue'
import ReposSection from './components/ReposSection.vue'
import ContactSection from './components/ContactSection.vue'
import Footer from './components/Footer.vue'
import SakuraPetals from './components/SakuraPetals.vue'
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
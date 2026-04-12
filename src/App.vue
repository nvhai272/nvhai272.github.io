<template>
  <LoadingScreen v-if="!appReady" @done="appReady = true" />
  <div v-else class="flex flex-col min-h-screen bg-background text-foreground transition-colors font-sans antialiased">
    <SakuraPetals />
    <Header :dark="dark" :menu-open="mobileOpen" @toggle="toggleDark" @menu-toggle="toggleMobileMenu"></Header>

    <div class="flex-1 md:pb-8">
      <div class="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8 mt-5">
        <div class="flex flex-col md:flex-row gap-6 lg:gap-8 items-start">
          <Sidebar :mobile-open="mobileOpen" @view-history="setActiveTab('experience')"></Sidebar>

          <main class="flex-1 w-full min-w-0 min-h-[60vh] flex flex-col gap-2">
            <TabNav :active="activeTab" @change="setActiveTab"></TabNav>

            <div v-show="activeTab === 'overview'" class="flex flex-col gap-2">
              <BioSection></BioSection>
              <CoreTechnologies></CoreTechnologies>
              <ReposSection></ReposSection>
            </div>
            <div v-show="activeTab === 'experience'">
              <ExperienceSection></ExperienceSection>
            </div>
            <div v-show="activeTab === 'contact'">
              <ContactSection></ContactSection>
            </div>
          </main>
        </div>
      </div>
    </div>

    <Footer :dark="dark"/>
    <MobileNav :active="activeTab" @change="setActiveTab" />
    <WeatherModal />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Header from './components/Header.vue'
import Sidebar from './components/Sidebar.vue'
import TabNav from './components/TabNav.vue'
import MobileNav from './components/MobileNav.vue'
import BioSection from './components/BioSection.vue'
import CoreTechnologies from './components/CoreTechnologies.vue'
import ReposSection from './components/ReposSection.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import ContactSection from './components/ContactSection.vue'
import Footer from './components/Footer.vue'
import SakuraPetals from './components/SakuraPetals.vue'
import LoadingScreen from './components/LoadingScreen.vue'
import WeatherModal from './components/WeatherModal.vue'

type Tab = 'overview' | 'experience' | 'contact'

const dark = ref(false)
const appReady = ref(false)
const activeTab = ref<Tab>('overview')
const mobileOpen = ref(true)

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

const setActiveTab = (tab: Tab) => {
  activeTab.value = tab
}

const toggleMobileMenu = () => {
  mobileOpen.value = !mobileOpen.value
}

onMounted(() => {
  const savedDark = localStorage.getItem('darkMode')
  if (savedDark === 'true') {
    dark.value = true
    document.documentElement.classList.add('dark')
  }
})
</script>

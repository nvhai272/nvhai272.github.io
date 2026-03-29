<template>
  <LoadingScreen v-if="!appReady" @done="appReady = true" />
  <div v-else class="flex flex-col min-h-screen bg-[#FAFAF7] dark:bg-[#0F1219] text-slate-900 dark:text-white transition-colors font-sans antialiased">
    <!-- Background Lottie -->
    <!-- Background Lottie -->
    <!-- Background Lottie -->
    <dotlottie-wc
      src="https://lottie.host/aa77148d-b976-429c-b8cb-95a7e66dbe65/ip6xHS6nNP.lottie"
      autoplay
      loop
      background="transparent"
      class="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:top-auto md:left-auto md:translate-x-0 md:translate-y-0 md:right-0 md:bottom-28 w-72 h-72 md:w-96 md:h-96 opacity-30 pointer-events-none z-0 dark:hidden"
      style="background: transparent; mix-blend-mode: multiply;"
    />
    <SakuraPetals />
    <Header :dark="dark" :menu-open="mobileOpen" @toggle="toggleDark" @menu-toggle="toggleMobileMenu"></Header>

    <div class="flex-1 pb-20 md:pb-44">
      <div class="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8 py-8">
        <div class="flex flex-col md:flex-row gap-6 lg:gap-8 items-start">
          <Sidebar :mobile-open="mobileOpen" @view-history="setActiveTab('experience')"></Sidebar>

          <main class="flex-1 min-w-0 flex flex-col gap-6">
            <TabNav :active="activeTab" @change="setActiveTab"></TabNav>

            <template v-if="activeTab === 'overview'">
              <BioSection></BioSection>
              <CoreTechnologies></CoreTechnologies>
              <ReposSection></ReposSection>
            </template>
            <ExperienceSection v-else-if="activeTab === 'experience'"></ExperienceSection>
            <ContactSection v-else-if="activeTab === 'contact'"></ContactSection>
          </main>
        </div>
      </div>
    </div>

    <Footer :dark="dark"/>
    <MobileNav :active="activeTab" @change="setActiveTab" />
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

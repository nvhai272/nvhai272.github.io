<template>
  <div class="flex flex-col min-h-screen bg-[#FAFAF7] dark:bg-[#0F1219] text-slate-900 dark:text-white transition-colors font-sans antialiased">
    <SakuraPetals />
    <Header :dark="dark" @toggle="toggleDark" @menu-toggle="toggleMobileMenu"></Header>

    <div class="flex-1 pb-20 md:pb-0">
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

type Tab = 'overview' | 'experience' | 'contact'

const dark = ref(false)
const activeTab = ref<Tab>('overview')
const mobileOpen = ref(false)

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

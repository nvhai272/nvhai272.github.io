<template>
  <Teleport to="body">
    <Transition name="modal">
      <div v-if="visible" class="fixed inset-0 z-50 flex items-center justify-center p-4" @click.self="close">
        <div class="absolute inset-0 bg-black/40 backdrop-blur-sm" />

        <div class="relative w-full max-w-sm bg-card border border-border rounded-2xl shadow-2xl overflow-hidden">
          <!-- Header -->
          <div class="flex items-center justify-between px-5 pt-5 pb-3">
            <div class="flex items-center gap-2">
              <SunIcon v-if="!loading && !error" class="size-5 text-amber-500" />
              <h3 class="text-sm font-bold text-foreground uppercase tracking-wider">Weather Today</h3>
            </div>
            <button @click="close" class="size-7 flex items-center justify-center rounded-lg hover:bg-secondary transition-colors cursor-pointer">
              <XMarkIcon class="size-4 text-muted-foreground" />
            </button>
          </div>

          <!-- Loading -->
          <div v-if="loading" class="px-5 pb-6 flex flex-col items-center gap-3 py-8">
            <ArrowPathIcon class="size-6 text-emerald-500 animate-spin" />
            <span class="text-xs text-muted-foreground">Detecting location...</span>
          </div>

          <!-- Error -->
          <div v-else-if="error" class="px-5 pb-6 flex flex-col items-center gap-3 py-8">
            <ExclamationCircleIcon class="size-8 text-red-400" />
            <span class="text-xs text-muted-foreground text-center">{{ error }}</span>
          </div>

          <!-- Weather data -->
          <div v-else-if="weather" class="px-5 pb-5">
            <!-- Location -->
            <div class="flex items-center gap-1.5 mb-4">
              <MapPinIcon class="size-3.5 text-emerald-500" />
              <span class="text-xs text-muted-foreground">{{ weather.location }}</span>
            </div>

            <!-- Main temp + icon -->
            <div class="flex items-center justify-between mb-5">
              <div>
                <div class="text-5xl font-bold text-foreground tracking-tight">{{ weather.temperature }}°</div>
                <div class="text-sm text-muted-foreground mt-1">{{ weather.description }}</div>
              </div>
              <div class="text-5xl">{{ weather.icon }}</div>
            </div>

            <!-- Details grid -->
            <div class="grid grid-cols-3 gap-3">
              <div class="flex flex-col items-center gap-1 p-3 rounded-xl bg-secondary/50 border border-border/50">
                <span class="text-lg">💧</span>
                <span class="text-xs text-muted-foreground">Humidity</span>
                <span class="text-sm font-bold text-foreground">{{ weather.humidity }}%</span>
              </div>
              <div class="flex flex-col items-center gap-1 p-3 rounded-xl bg-secondary/50 border border-border/50">
                <span class="text-lg">💨</span>
                <span class="text-xs text-muted-foreground">Wind</span>
                <span class="text-sm font-bold text-foreground">{{ weather.wind }} km/h</span>
              </div>
              <div class="flex flex-col items-center gap-1 p-3 rounded-xl bg-secondary/50 border border-border/50">
                <span class="text-lg">🌡️</span>
                <span class="text-xs text-muted-foreground">Feels like</span>
                <span class="text-sm font-bold text-foreground">{{ weather.feelsLike }}°</span>
              </div>
            </div>

            <p class="text-center text-xs italic text-muted-foreground mt-4 pb-1">Have a great day! 🌟</p>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { XMarkIcon, ArrowPathIcon, ExclamationCircleIcon, MapPinIcon } from '@heroicons/vue/20/solid'
import { SunIcon } from '@heroicons/vue/24/outline'

const visible = ref(false)
const loading = ref(true)
const error = ref('')
const weather = ref<{
  temperature: number
  feelsLike: number
  humidity: number
  wind: number
  description: string
  icon: string
  location: string
} | null>(null)

const WMO_DESCRIPTIONS: Record<number, { text: string; icon: string }> = {
  0: { text: 'Clear sky', icon: '☀️' },
  1: { text: 'Mainly clear', icon: '🌤️' },
  2: { text: 'Partly cloudy', icon: '⛅' },
  3: { text: 'Overcast', icon: '☁️' },
  45: { text: 'Foggy', icon: '🌫️' },
  48: { text: 'Depositing rime fog', icon: '🌫️' },
  51: { text: 'Light drizzle', icon: '🌦️' },
  53: { text: 'Moderate drizzle', icon: '🌦️' },
  55: { text: 'Dense drizzle', icon: '🌧️' },
  61: { text: 'Slight rain', icon: '🌧️' },
  63: { text: 'Moderate rain', icon: '🌧️' },
  65: { text: 'Heavy rain', icon: '🌧️' },
  71: { text: 'Slight snow', icon: '🌨️' },
  73: { text: 'Moderate snow', icon: '🌨️' },
  75: { text: 'Heavy snow', icon: '❄️' },
  80: { text: 'Slight rain showers', icon: '🌦️' },
  81: { text: 'Moderate rain showers', icon: '🌧️' },
  82: { text: 'Violent rain showers', icon: '⛈️' },
  95: { text: 'Thunderstorm', icon: '⛈️' },
  96: { text: 'Thunderstorm with hail', icon: '⛈️' },
  99: { text: 'Thunderstorm with heavy hail', icon: '⛈️' },
}

const close = () => {
  visible.value = false
}

const fetchWeather = async (lat: number, lon: number) => {
  try {
    // Fetch weather + reverse geocoding in parallel
    const [weatherRes, geoRes] = await Promise.all([
      fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m`),
      fetch(`https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json&zoom=10`)
    ])

    const weatherData = await weatherRes.json()
    const geoData = await geoRes.json()

    const current = weatherData.current
    const wmo = WMO_DESCRIPTIONS[current.weather_code] || { text: 'Unknown', icon: '🌈' }

    const city = geoData.address?.city || geoData.address?.town || geoData.address?.village || ''
    const country = geoData.address?.country || ''
    const location = [city, country].filter(Boolean).join(', ')

    weather.value = {
      temperature: Math.round(current.temperature_2m),
      feelsLike: Math.round(current.apparent_temperature),
      humidity: current.relative_humidity_2m,
      wind: Math.round(current.wind_speed_10m),
      description: wmo.text,
      icon: wmo.icon,
      location: location || `${lat.toFixed(2)}°N, ${lon.toFixed(2)}°E`
    }
  } catch {
    error.value = 'Could not fetch weather data.'
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  setTimeout(() => {
    visible.value = true

    if (!navigator.geolocation) {
      error.value = 'Geolocation is not supported by your browser.'
      loading.value = false
      return
    }

    navigator.geolocation.getCurrentPosition(
      (pos) => fetchWeather(pos.coords.latitude, pos.coords.longitude),
      () => {
        // Fallback to Hanoi if denied
        fetchWeather(21.0285, 105.8523)
      }
    )
  }, 1500)
})
</script>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}
.modal-enter-active .relative,
.modal-leave-active .relative {
  transition: transform 0.3s ease, opacity 0.3s ease;
}
.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
.modal-enter-from .relative {
  transform: scale(0.95) translateY(10px);
  opacity: 0;
}
.modal-leave-to .relative {
  transform: scale(0.95) translateY(10px);
  opacity: 0;
}
</style>

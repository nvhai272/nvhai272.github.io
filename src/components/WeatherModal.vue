<template>
  <!-- Floating toggle -->
  <button
    @click="toggle"
    class="fixed z-40 bottom-5 right-5 btn-brut bg-background h-11 px-3 flex items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-widest shadow-[4px_4px_0_0_var(--accent)]"
    aria-label="Weather"
  >
    <span class="text-base leading-none">{{ weather?.icon || '☁' }}</span>
    <span v-if="weather">{{ weather.temperature }}°</span>
    <span v-else>Weather</span>
  </button>

  <Teleport to="body">
    <Transition name="modal">
      <div v-if="open" class="fixed inset-0 z-50 flex items-center justify-center p-4" @click.self="open = false">
        <div class="absolute inset-0 bg-foreground/30 backdrop-blur-sm" @click="open = false" />

        <div class="relative w-full max-w-sm bg-card border-2 border-border shadow-[8px_8px_0_0_var(--border)]">
          <!-- Header -->
          <div class="flex items-center justify-between px-5 h-12 border-b-2 border-border">
            <h3 class="font-display font-bold text-sm uppercase tracking-tight">Weather / Now</h3>
            <button @click="open = false" class="btn-brut size-7 flex items-center justify-center">
              <XMarkIcon class="size-4" />
            </button>
          </div>

          <!-- Loading -->
          <div v-if="loading" class="px-5 py-10 flex flex-col items-center gap-3">
            <ArrowPathIcon class="size-6 text-accent animate-spin" />
            <span class="font-mono text-xs uppercase tracking-wider text-muted-foreground">Detecting location…</span>
          </div>

          <!-- Error -->
          <div v-else-if="error" class="px-5 py-10 flex flex-col items-center gap-3">
            <ExclamationCircleIcon class="size-8 text-destructive" />
            <span class="font-mono text-xs text-muted-foreground text-center">{{ error }}</span>
          </div>

          <!-- Data -->
          <div v-else-if="weather" class="p-5">
            <div class="flex items-center gap-1.5 mb-4 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
              <MapPinIcon class="size-3.5 text-accent" />
              {{ weather.location }}
            </div>

            <div class="flex items-end justify-between mb-5">
              <div>
                <div class="font-display font-bold text-6xl tracking-tighter leading-none text-foreground">{{ weather.temperature }}°</div>
                <div class="mt-1 font-mono text-xs uppercase tracking-wider text-muted-foreground">{{ weather.description }}</div>
              </div>
              <div class="text-5xl">{{ weather.icon }}</div>
            </div>

            <div class="grid grid-cols-3 border-l-2 border-t-2 border-border">
              <div v-for="d in details" :key="d.label" class="border-r-2 border-b-2 border-border p-3 flex flex-col gap-1">
                <span class="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{{ d.label }}</span>
                <span class="font-display font-bold text-base text-foreground">{{ d.value }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { XMarkIcon, ArrowPathIcon, ExclamationCircleIcon, MapPinIcon } from '@heroicons/vue/20/solid'

const open = ref(false)
const loading = ref(false)
const error = ref('')
const fetched = ref(false)
const weather = ref<{
  temperature: number
  feelsLike: number
  humidity: number
  wind: number
  description: string
  icon: string
  location: string
} | null>(null)

const details = computed(() => weather.value ? [
  { label: 'Humidity', value: `${weather.value.humidity}%` },
  { label: 'Wind', value: `${weather.value.wind} km/h` },
  { label: 'Feels', value: `${weather.value.feelsLike}°` },
] : [])

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

const toggle = () => {
  open.value = !open.value
  if (open.value && !fetched.value) load()
}

const load = () => {
  fetched.value = true
  loading.value = true
  if (!navigator.geolocation) {
    error.value = 'Geolocation is not supported by your browser.'
    loading.value = false
    return
  }
  navigator.geolocation.getCurrentPosition(
    (pos) => fetchWeather(pos.coords.latitude, pos.coords.longitude),
    () => fetchWeather(21.0285, 105.8523)
  )
}

const fetchWeather = async (lat: number, lon: number) => {
  try {
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
</script>

<style scoped>
.modal-enter-active,
.modal-leave-active { transition: opacity 0.25s ease; }
.modal-enter-active .relative,
.modal-leave-active .relative { transition: transform 0.25s ease, opacity 0.25s ease; }
.modal-enter-from,
.modal-leave-to { opacity: 0; }
.modal-enter-from .relative,
.modal-leave-to .relative { transform: translate(6px, 6px); opacity: 0; }
</style>

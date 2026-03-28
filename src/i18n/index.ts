import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import vi from './locales/vi.json'

// Get saved locale or default to 'vi'
const getInitialLocale = () => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('locale') || 'vi'
  }
  return 'vi'
}

const i18n = createI18n({
  legacy: false,
  locale: getInitialLocale(),
  fallbackLocale: 'en',
  globalInjection: true,
  messages: {
    en,
    vi
  }
})

export default i18n

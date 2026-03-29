import { useI18n } from 'vue-i18n'

export function useLocale() {
  const { locale, t } = useI18n()

  const toggleLanguage = () => {
    locale.value = locale.value === 'en' ? 'vi' : 'en'
    localStorage.setItem('locale', locale.value)
  }

  const currentLocale = locale

  return {
    locale: currentLocale,
    t,
    toggleLanguage
  }
}

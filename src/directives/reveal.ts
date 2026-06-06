import type { Directive } from 'vue'

// v-reveal: fade/slide a node into view once it enters the viewport.
// Usage: <div v-reveal>…</div>  or  <div v-reveal="120"> (delay in ms)
const reveal: Directive<HTMLElement, number | undefined> = {
  mounted(el, binding) {
    el.setAttribute('data-reveal', '')

    const delay = binding.value
    if (typeof delay === 'number') el.style.transitionDelay = `${delay}ms`

    if (typeof IntersectionObserver === 'undefined') {
      el.classList.add('is-visible')
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add('is-visible')
            observer.unobserve(el)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    )
    observer.observe(el)
    ;(el as any).__revealObserver = observer
  },
  unmounted(el) {
    const observer = (el as any).__revealObserver as IntersectionObserver | undefined
    observer?.disconnect()
  },
}

export default reveal

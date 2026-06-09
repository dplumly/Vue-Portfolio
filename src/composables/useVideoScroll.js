// composables/useVideoScroll.js
import { onMounted, onUnmounted, ref } from 'vue'

export function useVideoScroll(threshold = 0.5) {
  const observer = ref(null)

  onMounted(() => {
    observer.value = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target
          if (entry.isIntersecting) {
            video.play().catch(() => {})
          } else {
            video.pause()
          }
        })
      },
      { threshold }
    )
  })

  function observe(el) {
    if (el) {
      // If observer isn't ready yet, wait for it
      if (observer.value) {
        observer.value.observe(el)
      } else {
        // Poll until mounted
        const interval = setInterval(() => {
          if (observer.value) {
            observer.value.observe(el)
            clearInterval(interval)
          }
        }, 50)
      }
    }
  }

  function unobserve(el) {
    if (observer.value && el) observer.value.unobserve(el)
  }

  onUnmounted(() => {
    observer.value?.disconnect()
  })

  return { observe, unobserve }
}
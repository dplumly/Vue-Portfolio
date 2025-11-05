// src/directives/scrollReveal.js
import ScrollReveal from 'scrollreveal'

export default {
  mounted(el, binding) {
    // Default options
    const defaultOptions = {
      duration: 600,      // slower animation
      distance: '12px',    // moves element a bit
      easing: 'ease-in ',
      viewFactor: 0.3,     // triggers when 30% of element is visible
      reset: false,
    }

    // Merge binding options with defaults
    const options = { ...defaultOptions, ...(binding.value || {}) }

    ScrollReveal().reveal(el, options)
  },
}

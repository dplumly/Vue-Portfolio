import { ref } from 'vue'

const isPushOpen = ref(false)
const isHamburgerOpen = ref(false)

export function useMenu() {
  const togglePushMenu = () => {
    isPushOpen.value = !isPushOpen.value
    isHamburgerOpen.value = !isHamburgerOpen.value
    document.body.classList.toggle('menu-open', isPushOpen.value)
  }

  const closeMenu = () => {
    isPushOpen.value = false
    isHamburgerOpen.value = false
    document.body.classList.remove('menu-open')
  }

  return { isPushOpen, isHamburgerOpen, togglePushMenu, closeMenu }
}

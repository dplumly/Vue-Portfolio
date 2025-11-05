<template>
  <div id="app">
    <!-- Scroll Progress Bar -->
    <div class="scroll-progress-container">
      <div class="scroll-progress-bar" :style="{ width: scrollProgress + '%' }"></div>
    </div>
    
    <Nav />
        <transition name="fade" mode="out-in">
        <div :key="$route.path">
            <router-view />
        </div>
        </transition>
    <Footer />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import Nav from './components/Nav.vue'
import Footer from './components/Footer.vue'

const scrollProgress = ref(0)

const updateScrollProgress = () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop
  const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
  const progress = (scrollTop / scrollHeight) * 100
  scrollProgress.value = progress
}

onMounted(() => {
  window.addEventListener('scroll', updateScrollProgress)
  updateScrollProgress() // Initial calculation
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateScrollProgress)
})
</script>

<style>
/*===================================

Scroll Progress Bar

===================================*/
.scroll-progress-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background-color: #9e1c2c;
  z-index: 9999;
}

.scroll-progress-bar {
  height: 100%;
  background-color: #61e3d3;
  transition: width 0.1s ease;
}

/*===================================

Page transitions

===================================*/
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
.fade-enter-to, .fade-leave-from {
  opacity: 1;
}

#app {
  overflow-x: hidden; 
}
</style>
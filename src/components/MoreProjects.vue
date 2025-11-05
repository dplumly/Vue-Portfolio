<template>
    <div class="row">
        <div class="button-container" @click="togglePushMenu">
             <span class="btn btn-1 btn-1e toggle-menu menu-right">More projects</span>
        </div>
    </div>   
</template>

<script setup>
import { useMenu } from '@/composables/useMenu'

const { togglePushMenu } = useMenu()

</script>


<style scoped>
/* Menu slide transition */
.slide-enter-active, .slide-leave-active {
  transition: transform 0.4s ease;
}
.slide-enter-from, .slide-leave-to {
  transform: translateX(100%);
}
</style>

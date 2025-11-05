import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import DF25 from '../views/DF25.vue'
import Google from '../views/Google.vue'
import IBM2020 from '../views/IBM2020.vue'
import LexusSoundbooth from '../views/LexusSoundbooth.vue'
import Litcar from '../views/Litcar.vue'
import VisceralReality from '../views/VisceralReality.vue'
import DustinsWords from '../views/DustinsWords.vue'
import ChingongPong from '../views/ChingongPong.vue'

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/df25', name: 'DF25', component: DF25 },
    { path: '/google', name: 'Google', component: Google },
    { path: '/ibm2020', name: 'IBM2020', component: IBM2020 },
    { path: '/lexussoundbooth', name: 'LexusSoundbooth', component: LexusSoundbooth },
    { path: '/litcar', name: 'Litcar', component: Litcar },
    { path: '/visceralreality', name: 'VisceralReality', component: VisceralReality },
    { path: '/chingongpong', name: 'ChingongPong', component: ChingongPong },
    { path: '/dustinswords', name: 'DustinsWords', component: DustinsWords },
]

const router = createRouter({
//   history: createWebHistory(),
    history: createWebHistory(import.meta.env.BASE_URL),

    routes,
    scrollBehavior(to, from, savedPosition) {
        // If there's a saved position (browser back/forward), use it
        if (savedPosition) {
        return savedPosition
        }
        // If there's a hash (#section), scroll to it
        if (to.hash) {
        return { el: to.hash, behavior: 'smooth' }
        }
        // Otherwise, scroll to top
        return { top: 0, behavior: 'smooth' }
    }
})

export default router

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import scrollReveal from './directives/scrollReveal' 

import './assets/css/reset.css'
import './assets/css/normalize.css'
import './assets/fonts/Lato/latofonts.css'
import './assets/fonts/OpenSans/open-sans.css'
import './assets/css/grid.css'
import './assets/css/main.css'


const app = createApp(App).use(router)
app.directive('scroll-reveal', scrollReveal)
app.mount('#app')
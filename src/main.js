import { createApp } from 'vue'
import App from './App.vue'

import '@/assets/scss/main.scss'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import router from './router'

import { 
    faEnvelope, 
    faPhone, 
    faFilePdf, 
    faAnglesRight 
} from "@fortawesome/free-solid-svg-icons"

import { 
    faLinkedinIn, 
    faTelegram 
} from '@fortawesome/free-brands-svg-icons'

library.add(
    faLinkedinIn, 
    faTelegram, 
    faEnvelope, 
    faPhone, 
    faFilePdf, 
    faAnglesRight
)

createApp(App)
.use(router)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')

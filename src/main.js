import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.min.js'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

// global methods
const sharedMethods = {
    navigateTo: function(routePath) {
        router.push(routePath)
    }
}

// setting globals
app.config.globalProperties.$sharedMethods = sharedMethods

app.use(router)

app.mount('#app')

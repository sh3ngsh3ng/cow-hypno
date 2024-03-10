import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.min.js'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

// global methods
const sharedMethods = {
    navigateTo: function (routePath) {
        window.scrollTo(0, 0)
        router.push(routePath)
    },
    openConsultWidget: function () {
        Calendly.initPopupWidget({ url: 'https://calendly.com/cowsoulmate/free_consultation' });
        return false;
    },
    bookSessionWidget: function () {
        Calendly.initPopupWidget({ url: 'https://calendly.com/cowsoulmate/booking-sessions' });
        return false;
    },
    redirectTo: function (link) {
        window.open(link, '_blank')
    }
}

// setting globals
app.config.globalProperties.$sharedMethods = sharedMethods

app.use(router)

app.mount('#app')

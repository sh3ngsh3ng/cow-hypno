import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from "../views/AboutView.vue"
import BookingView from "@/views/BookingView.vue"
import ContactView from "@/views/ContactView.vue"
import ServicesView from "@/views/ServicesView.vue"
import HypnosisView from "@/views/HypnosisView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: AboutView
      // component: () => import('../views/AboutView.vue')
    },
    {
      path: "/book",
      name: "book",
      component: BookingView
    },
    {
      path: "/contact",
      name: "contact",
      component: ContactView
    },
    {
      path: "/services",
      name: "services",
      component: ServicesView
    },
    {
      path: "/hypnosis",
      name: "hypnosis",
      component: HypnosisView
    }
  ]
})

export default router

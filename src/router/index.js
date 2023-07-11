import { createRouter, createWebHistory } from 'vue-router'
import HomeTest from '@/components/HomeTest.vue'
import AboutTest from '@/components/AboutTest.vue'
import QaTest from '@/components/QaTest.vue'
import ContactUser from '@/components/ContactUser.vue'
import LostTest from '@/components/LostTest.vue'
import LostTest2 from '@/components/LostTest2.vue'
import SearchTest from '@/components/SearchTest.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeTest
  },
  {
    path: '/about',
    name: 'abouttest',
    component: AboutTest
  },
  {
    path: '/qa',
    name: 'qatest',
    component: QaTest
  },

  {
    path: '/contact',
    name: 'ContactUser',
    component: ContactUser
  },
  
  {
    path: '/lost',
    name: 'Lost',
    component: LostTest
  },

  {
    path: '/lost2',
    name: 'Lost2',
    component: LostTest2
  },


  {
    path: '/search',
    name: 'searchtest',
    component: SearchTest
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
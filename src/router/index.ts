import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue'
import TabelaRyzyka from '../views/TabelaRyzyka.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    props: true
  },
  {
    path: '/tabelaRyzyka/:wiek/:plec/:papierosy/:cholesterol/:cisnienie/:jednostka',
    name: 'TabelaRyzyka',
    component: TabelaRyzyka,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

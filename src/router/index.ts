import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/shared/views/HomeView.vue'
import AboutView from '@/shared/views/AboutView.vue'
import { pokemonRoute } from '@/pokemons/router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    {
      ...pokemonRoute,//ruta padre e hijas definidas en pokemons/router
      path: '/pokemons',
      name: 'pokemons'
    },
    {
      path: '/counter',
      name: 'counter',
      component: () => import('@/counter/views/CounterView.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: () => ({name: 'home'})
    }
  ],
})

export default router

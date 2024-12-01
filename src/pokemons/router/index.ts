import type { RouteRecordRaw } from 'vue-router';

const ROUTE_LINK = 'pokemons'
export const pokemonRoute:RouteRecordRaw = {
  path: `/${ROUTE_LINK}`,
  redirect: `${ROUTE_LINK}/list`,
  component: () => import('@/pokemons/layouts/PokemonLayout.vue'),
  children: [
    {
      path: `${ROUTE_LINK}/list`,
      component: () => import('@/pokemons/pages/PokemonList.vue')
    },
    {
      path: `${ROUTE_LINK}/by/:id`,
      component: () => import('@/pokemons/pages/PokemonById.vue')
    },
    {
      path: `${ROUTE_LINK}/search`,
      component: () => import('@/pokemons/pages/PokemonSearch.vue')
    }
  ]

}
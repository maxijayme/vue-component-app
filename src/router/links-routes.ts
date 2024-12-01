export interface RouterLinks {
  name: string
  path: string
  title: string
}

export const routeLinks: RouterLinks[] = [
  {
    name: 'home',
    path: '/',
    title: 'Home'
  },
  {
    name: 'about',
    path: '/about',
    title: 'About'
  },
  {
    name: 'counter',
    path: '/counter',
    title: 'Counter'
  },
  {
    name: 'pokemons',
    path: '/pokemons',
    title: 'Pokémons'
  }
]
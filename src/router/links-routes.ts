export interface RouterLinks {
  name: string
  path: string
  title: string
  visible: boolean
}

export const routeLinks: RouterLinks[] = [
  {
    name: 'home',
    path: '/',
    title: 'Home',
    visible: true
  },
  {
    name: 'about',
    path: '/about',
    title: 'About',
    visible: true
  },
  {
    name: 'counter',
    path: '/counter',
    title: 'Counter',
    visible: true
  },
  {
    name: 'pokemons',
    path: '/pokemons',
    title: 'Pokémons',
    visible: true
  }
]
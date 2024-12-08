import { useQuery } from '@tanstack/vue-query'
import { getPokemons } from '../helpers/get-pokemons'
import { computed } from 'vue';

export const usePokemons = () => {
  const { isLoading, data:pokemons, error, isError } = useQuery({
    queryKey: ['pokemons'],
    queryFn: getPokemons,
  })

  return {
    pokemons,
    isLoading,
    error,
    isError,
    count: computed(() => pokemons.value?.length ?? 0)
  }
}
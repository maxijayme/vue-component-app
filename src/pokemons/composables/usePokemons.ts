import { useQuery } from '@tanstack/vue-query'
import { getPokemons } from '../helpers/get-pokemons'
import { computed, watchEffect } from 'vue';

export const usePokemons = () => {
  const { isLoading, data:pokemons, error, isError } = useQuery({
    queryKey: ['pokemons'],
    queryFn: getPokemons,
    retry: 0
  })

  watchEffect(()=> {
    
  })

  return {
    pokemons,
    isLoading,
    error,
    isError,
    count: computed(() => pokemons.value?.length ?? 0)
  }
}
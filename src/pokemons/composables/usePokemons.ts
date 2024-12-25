import { useQuery } from '@tanstack/vue-query'
import { getPokemons } from '../helpers/get-pokemons'
import { computed, watchEffect } from 'vue';
import { initialPokemons } from '../data/initialPokemons';

export const usePokemons = () => {
  const { isLoading, data:pokemons, error, isError } = useQuery({
    queryKey: ['pokemons'],
    queryFn: getPokemons,
    retry:0,
    initialData: initialPokemons
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
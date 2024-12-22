import { useQuery } from '@tanstack/vue-query'
import getPokemonById from "../helpers/get-pokemon-by-id";

export const usePokemon = (pokemonId: string) => {
  const { isLoading, data:pokemon, error, isError } = useQuery({
    queryKey: ['pokemon', pokemonId],
    queryFn: () => getPokemonById(pokemonId),
    retry: 0
  })

  return {
    pokemon,
    isLoading,
    error,
    isError
  }
}
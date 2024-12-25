import pokemonApi from "../api/pokeApi";
import type { PokemonsResponse } from "../interfaces/pokemon.response";
import type { Pokemon } from "../interfaces/pokemon";
import { sleep } from "./sleep";

const getPokemonById = async (id: string): Promise<Pokemon> => {

  await sleep(2)

  const { data } = await pokemonApi.get<PokemonsResponse>(`/pokemon/${id}`)
  const pokemon = {
    id: data.id,
    name: data.name,
    frontSprite: data.sprites.front_default
  }
  return pokemon
}

export default getPokemonById
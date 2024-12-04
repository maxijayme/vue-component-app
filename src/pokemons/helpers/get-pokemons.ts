import axios from "axios";
import pokemonApi from "../api/pokeApi";
import type { PokemonsResponse, Pokemon, PokemonListResponse } from "../interfaces";

export const getPokemons = async():Promise<Pokemon[]> => {

  const {data} = await pokemonApi.get<PokemonListResponse>('/pokemon')
  const PokemonsPromises: Promise<Pokemon>[] = []
  for (const {url} of data.results) {
    const pokemonPromise = axios.get<PokemonsResponse>(url).then( ({data}) => {
      return {
        id: data.id,
        name: data.name,
        frontSprite: data.sprites.front_default
      }
    })
    PokemonsPromises.push(pokemonPromise)
  }
  const pokemons = await Promise.all(PokemonsPromises)
  return pokemons
}
import axios from "axios";

const pokemonApi = axios.create({
  baseURL: "https://pokeapi.co/api/v2",
})

pokemonApi.get('/pokemon?limit10')

export default pokemonApi;
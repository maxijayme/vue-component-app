import { getPokemons } from "@/pokemons/helpers/get-pokemons"
import type { Pokemon } from "@/pokemons/interfaces"
import { reactive } from "vue"

interface Store {
  //state
  pokemons: {
    list: Pokemon[],
    count: number,
    isLoading: boolean,
    hasError: boolean,
    errorMessage?: string
  },
  //actions
  startLoadingPokemons: () => Promise<void>,
  loadedPokemons: (data: Pokemon[]) => void,
  setErrorMessage: (message: string) => void
}

const store = reactive<Store>({
  pokemons: {
    list: [],
    count: 0,
    isLoading: false,
    hasError: false,
    errorMessage: undefined
  },
  startLoadingPokemons: async function (): Promise<void> {
    this.pokemons = {
      ...this.pokemons,
      isLoading: false,
      hasError: false,
      errorMessage: undefined
    }
  },
  loadedPokemons: function (data: Pokemon[]): void {
    this.pokemons = {
      list: data,
      count: data.length,
      isLoading: false,
      hasError: false,
      errorMessage: undefined
    }
  },
  setErrorMessage: function (message: string): void {
    this.pokemons = {
      ...this.pokemons,
      isLoading: false,
      hasError: true,
      errorMessage: message
    }
  }
})

export default store
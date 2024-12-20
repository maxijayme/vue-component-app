import { computed, onMounted, ref } from "vue"
import type { Pokemon } from "../interfaces"
import { getPokemons } from "../helpers/get-pokemons"

export const usePokemons = () => {

  const pokemons = ref<Pokemon[]>()
  const isLoading = ref(true)

  onMounted(
    async () => {
      pokemons.value = await getPokemons()
      isLoading.value = false
    }
  )

  // getPokemons()
  //   .then( (data) => {
  //     pokemons.value = data
  //     isLoading.value = false
  //   })
  return {
    pokemons,
    isLoading,
    count: computed(() => pokemons.value?.length)
  }
}
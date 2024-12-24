<script setup lang="ts">
  import { useRouter } from 'vue-router';
import type { Pokemon } from '../interfaces';
import { useQueryClient } from '@tanstack/vue-query';
import getPokemonById from '../helpers/get-pokemon-by-id';

  const route = useRouter()
  const queryClient = useQueryClient()

  interface Props {
    pokemon: Pokemon
  }
  const props = defineProps<Props>()

  const goTo = () => {
    route.push({
      name: 'pokemon-id',
      params: {
        id: `${props.pokemon.id}`
      }
    })
  }

  const pokemonId = props.pokemon.id.toString()
  const prefetchPokemon = async() => {
    await queryClient.prefetchQuery({
      queryKey: ['pokemon', pokemonId],
      queryFn: () => getPokemonById(pokemonId),
    })
}

</script>

<template>
  <div class="pokemon-card" @click="goTo" @onmouseenter="prefetchPokemon">
    <img :src="pokemon.frontSprite" :alt="pokemon.name" />
    <p>{{ pokemon.name }}</p>
  </div>
</template>

<style scoped>
.pokemon-card {
  margin-right: 5px;
  margin-left: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;
  cursor: pointer;
}

img {
  width: 150px;
  border-radius: 5px 5px 0px 0px;
  box-shadow: 0px 2px 10px rgba(255, 255, 255, 0.1);
  transition: all 0.5s;
}

img:hover {
  box-shadow: 0px 2px 10px rgba(255, 255, 255, 0.5);
  transition: all 0.5s;
}
</style>
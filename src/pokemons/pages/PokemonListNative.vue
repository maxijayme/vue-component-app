<script setup lang="ts">
import store from '@/store/store';
import PokemonCardList from '../components/PokemonCardList.vue';
import { useQuery } from '@tanstack/vue-query';
import { getPokemons } from '../helpers/get-pokemons';

useQuery({
  queryKey: ['pokemons'],
  queryFn: getPokemons,
  select(data) {
    store.loadedPokemons(data)
  },
})

const props = defineProps<{
  title: string
}>()


</script>

<template>
  <h1 v-if="store.pokemons.isLoading">Loading...</h1>
  <div v-else-if="store.pokemons.hasError">{{ store.pokemons.errorMessage }}</div>
  <div v-else>
    <h1>{{ props.title }}</h1>
    <h3>{{ store.pokemons.count }} pokemons</h3>
  </div>
  <PokemonCardList :pokemons="store.pokemons.list" />
</template>
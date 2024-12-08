<script setup lang="ts">
import { usePokemons } from '../composables/usePokemons';
import PokemonCardList from '@/pokemons/components/PokemonCardList.vue';

const props = defineProps<{
  title: string
}>()

const { pokemons, isLoading, count, error, isError } = usePokemons()


</script>

<template>
  <h1 v-if="isLoading">Loading...</h1>
  <div v-else-if="isError">{{ error }}</div>
  <div v-else>
    <h1>{{ props.title }}</h1>
    <h3>{{ count }} pokemons</h3>
  </div>
  <PokemonCardList :pokemons="pokemons ?? []" />
</template>
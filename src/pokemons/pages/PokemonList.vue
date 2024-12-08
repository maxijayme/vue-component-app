<script setup lang="ts">
import { usePokemons } from '../composables/usePokemons';

const props = defineProps<{
  title: string
}>()

const { pokemons, isLoading, count } = usePokemons()


</script>

<template>
  <div>
    <h1>{{ props.title }}</h1>
    <h5>{{ count }} en total</h5>
  </div>
  <div>
    <span v-if="isLoading">Loading...</span>
    <ul>
      <li v-for="pokemon in pokemons" :key="pokemon.id">
        {{ pokemon.name }}
      </li>
    </ul>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { getPokemons } from '../helpers/get-pokemons';
import type { Pokemon } from '../interfaces';

const props = defineProps<{
  title: string
}>()

const data = await getPokemons()
const pokemons = ref<Pokemon[]>(data)

</script>

<template>
  <div>
    <h1>{{ props.title }}</h1>
  </div>
  <div>
    <ul>
      <li v-for="pokemon in pokemons" :key="pokemon.id">
        {{ pokemon.name }}
      </li>
    </ul>
  </div>
</template>
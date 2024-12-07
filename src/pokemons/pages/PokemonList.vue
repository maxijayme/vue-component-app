<script setup lang="ts">
import { useQuery } from '@tanstack/vue-query'
import { getPokemons } from '../helpers/get-pokemons'
import { computed } from 'vue';

const { isLoading, data:pokemons } = useQuery({
  queryKey: ['pokemons'],
  queryFn: getPokemons,
})

const count = computed(() => pokemons.value?.length ?? 0)

const props = defineProps<{
  title: string
}>()


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
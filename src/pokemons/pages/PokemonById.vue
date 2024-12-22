<script setup lang="ts">
import { useRoute } from 'vue-router';
import { usePokemon } from '../composables/usePokemon';

const route = useRoute()
const {id} = route.params
const {pokemon, isLoading, error, isError } = usePokemon(id.toString())
</script>

<template>
  <div>
    <h1>Pokemon By {{id}}</h1>
  </div>
  <h1 v-if="isLoading">Loading...</h1>
  <div v-else-if="isError">{{ error }}</div>
  <div v-else-if="pokemon">
    <h1>{{ pokemon.name }}</h1>
    <div class="character-container">
      <img :src="pokemon.frontSprite" :alt="pokemon.name">
    </div>
  </div>
</template>

<style scoped>
  .character-container {
    display: flex;
    flex-direction: row;
  }
  img {
    width: 150px;
    border-radius: 5px;
  }
</style>
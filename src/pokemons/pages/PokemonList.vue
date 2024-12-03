<script lang="ts">
import { getPokemons } from '../helpers/get-pokemons';


getPokemons().then(console.log)
</script>

<template>
  <div>
    <h1>Pokemon List</h1>
  </div>
</template>
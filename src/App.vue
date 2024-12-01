<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from '@/shared/components/NavBar.vue'
import { routeLinks } from './router/links-routes';

</script>

<template>
  <header>
    <NavBar title="Pokémon APP" :links="routeLinks" />
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}
</style>
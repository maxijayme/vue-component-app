<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from '@/shared/components/NavBar.vue'
import { routerLinks } from './router/links-routes';

</script>

<template>
  <header>
    <NavBar title="Pokémon APP" :links="routerLinks" />
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}
</style>
<script setup lang="ts">
import NavBar from '@/shared/components/NavBar.vue';
import { pokemonRoute } from '../router';
import type { RouterLinks } from '@/router/links-routes';

const routeLinks:RouterLinks[] = pokemonRoute.children?.map((route) => (
  {
    name: route.name?.toString() ?? '',
    path: route.path,
    title: (route.props as {title: string}).title
  }
)) || []

</script>

<template>
  <NavBar :links="routeLinks" is-secondary/>
  <div>
    <RouterView />
  </div>
</template>
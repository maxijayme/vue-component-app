<script setup lang="ts">
import NavBar from '@/shared/components/NavBar.vue';
import { pokemonRoute } from '../router';
import type { RouterLinks } from '@/router/links-routes';

const routeLinks:RouterLinks[] = pokemonRoute.children?.map((route) => {
  const {title, visible} = (route.props as {title: string, visible: boolean})
  const link = {
    name: route.name?.toString() ?? '',
    path: route.path,
    title: title,
    visible: visible
  }
  return link
}) || []



</script>

<template>
  <NavBar :links="routeLinks" is-secondary/>
  <div>
    <!-- <Suspense> -->
      <RouterView />
      <!-- <template #fallback>
          <p>Cargando...</p>
      </template>
    </suspense> -->
  </div>
</template>
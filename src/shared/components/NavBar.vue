<script setup lang="ts">
import type { RouterLinks } from '@/router/links-routes';


interface Props  {
  title?: string,
  links: Array<RouterLinks>,
  isSecondary?: boolean
}

withDefaults(
  defineProps<Props>(),
  {
    title:'CompoApp',
    isSecondary: false
  }
)

</script>

<template>
<nav>
  <template v-if="!isSecondary">
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="25" height="25" />
    <span>{{ title }}</span>
  </template>
  <RouterLink
    v-for="(route, index) in links"
    :key="index"
    :to="route"> {{ route.title }} </RouterLink>
</nav>
</template>

<style scoped>
nav {
    align-items: flex-start;
    display: flex;
    font-size: 12px;
    margin-top: 10px;
    text-align: center;
    width: 100%;
}
img {
    margin-right: 5px;
}

span {
    margin-right: 10px;
}

a {
   margin-right: 5px;
}

nav a.router-link-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
</style>
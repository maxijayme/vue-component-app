<script setup lang="ts">
import { useRoute } from 'vue-router';


const route = useRoute()
const {id} = route.params

</script>

<template>
  <div>
    <h1>Pokemon By {{id}}</h1>
  </div>
</template>
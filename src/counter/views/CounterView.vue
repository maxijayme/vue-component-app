<!-- si el setup ocupa menos de 20 líneas se sugiere script setup -->
<!-- <script setup lang="ts">
import { ref } from 'vue';

const counter = ref(1)
const increase = () => counter.value++

</script> -->

<!-- si el setup tiene muchas líneas, se sugiere usar composables o un archivo adicional -->
<script lang="ts" src="./counter.ts"></script>

<template>
  <h1>Counter view: {{counter}}</h1>
  <button @click="increase">+1</button>
</template>

<!-- también se puede incrementar sin usar una método extra. Vue ya lo interpreta -->
<!-- <template>
  <h1>Counter view: {{counter}}</h1>
  <button @click="couter++">+1</button>
</template> -->

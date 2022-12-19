<template>
  <nav>
    <router-link :to="{ name: 'home' }">Home</router-link>
    <router-link :to="{ name: 'toDos' }">To Dos</router-link>
    <router-link :to="{ name: 'addToDos' }">Add To Do</router-link>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({});
</script>

<style scoped lang="scss">
nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;
    padding: 0 10px;
    font-family: "Clash Display", sans-serif;
    font-weight: 700;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

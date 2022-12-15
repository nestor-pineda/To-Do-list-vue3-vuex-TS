<template>
  <MainNav />
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MainNav from "@/components/MainNav.vue";

export default defineComponent({
  components: {
    MainNav,
  },
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

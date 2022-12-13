<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <ToDosList />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ToDosList from "@/components/ToDosList.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    ToDosList,
  },
});
</script>

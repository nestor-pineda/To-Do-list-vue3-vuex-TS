<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <ToDosList />
    <AddToDo />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ToDosList from "@/components/ToDosList.vue";
import AddToDo from "@/components/AddToDo.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    ToDosList,
    AddToDo,
  },
});
</script>

<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <ToDosList />
    <AddToDo />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ToDosList from "@/components/toDos/ToDosList.vue";
import AddToDo from "@/components/toDos/AddToDo.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    ToDosList,
    AddToDo,
  },
});
</script>

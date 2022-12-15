<template>
  <FilterByPriority />
  <FilterByTitle />
  <ToDosList />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ToDosList from "@/components/toDos/ToDosList.vue";
import FilterByPriority from "@/components/toDos/FilterByPriority.vue";
import FilterByTitle from "@/components/toDos/FilterByTitle.vue";

export default defineComponent({
  name: "ToDosView",
  components: { ToDosList, FilterByPriority, FilterByTitle },
  setup() {
    return {};
  },
});
</script>

<style scoped></style>

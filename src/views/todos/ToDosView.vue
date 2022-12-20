<template>
  <FilterByPriority />
  <FilterByTitle />
  <ToDosList />
  <AddButton />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ToDosList from "@/components/toDos/ToDosList.vue";
import FilterByPriority from "@/components/toDos/FilterByPriority.vue";
import FilterByTitle from "@/components/toDos/FilterByTitle.vue";
import AddButton from "@/components/toDos/AddButton.vue";

export default defineComponent({
  name: "ToDosView",
  components: { ToDosList, FilterByPriority, FilterByTitle, AddButton },
  setup() {
    return {};
  },
});
</script>

<style scoped></style>

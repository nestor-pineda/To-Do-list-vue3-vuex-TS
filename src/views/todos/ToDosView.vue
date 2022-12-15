<template>
  <FilterToDos />
  <ToDosList />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ToDosList from "@/components/toDos/ToDosList.vue";
import FilterToDos from "@/components/toDos/FilterToDos.vue";

export default defineComponent({
  name: "ToDosView",
  components: { ToDosList, FilterToDos },
  setup() {
    return {};
  },
});
</script>

<style scoped></style>

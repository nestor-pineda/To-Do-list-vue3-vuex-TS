<template>
  <div v-if="error">{{ error }}</div>
  <div v-if="loading">...LOADING...</div>
  <div v-else class="notes-list">
    <div class="note" v-for="toDo in toDosList" :key="toDo.id">
      <ToDoExcerpt :toDo="toDo" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ToDoExcerpt from "./ToDoExcerpt.vue";
import { useFetchToDos, useGettersToDos } from "@/composables";

export default defineComponent({
  components: { ToDoExcerpt },
  setup() {
    useFetchToDos();
    const { toDosList, loading, error } = useGettersToDos();

    return { toDosList, loading, error };
  },
});
</script>

<style scoped lang="scss">
.notes-list {
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 20px;
  width: 100%;
  .note {
    /* flex-grow: 1; */
    flex-basis: 200px;
    aspect-ratio: 1;
  }
}
</style>

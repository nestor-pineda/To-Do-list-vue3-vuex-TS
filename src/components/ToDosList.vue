<template>
  <div><h1>Hello</h1></div>
  <div v-if="toDosList.length">
    <div v-for="item in toDosList" :key="item.id">
      <h3>{{ item.title }}</h3>
      <p>{{ item.description }}</p>
    </div>
  </div>
  <div v-else>Loading...</div>
</template>

<script lang="ts">
import { ToDoItemInterface } from "@/store/modules/to-dos";
import { computed, defineComponent } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  setup() {
    const store = useStore();
    store.dispatch("toDosModule/getToDos");
    const toDosList = computed<ToDoItemInterface[]>(() => store.getters["toDosModule/getToDosList"]);
    const loading = computed<boolean>(() => store.getters["toDosModule/isLoading"]);
    const error = computed<string>(() => store.getters["toDosModule/getError"]);

    return { toDosList, loading, error };
  },
});
</script>

<style scoped></style>

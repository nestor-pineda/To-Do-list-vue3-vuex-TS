<template>
  <div v-if="error">{{ error }}</div>
  <div v-if="loading">...LOADING...</div>
  <div v-else>
    <h1>{{ singleToDo.title }}</h1>
    <p>{{ singleToDo.description }}</p>
  </div>
  <router-link :to="{ name: 'editToDo', params: { id: toDoId } }">
    <p>Edit</p>
  </router-link>
</template>

<script lang="ts">
// import { ToDoItemInterface } from "@/store/modules/to-dos";
import { defineComponent, ref } from "vue";
import { RouterLink } from "vue-router";
// import { useStore } from "vuex";
import { useFetchToDoById, useGettersToDos } from "@/composables";

export default defineComponent({
  name: "SingleToDoView",
  props: ["id"],
  setup(props) {
    const toDoId = ref<string>(props.id);
    useFetchToDoById(props.id);

    const { singleToDo, loading, error } = useGettersToDos();

    return { singleToDo, loading, error, toDoId };
  },
});
</script>

<style scoped></style>

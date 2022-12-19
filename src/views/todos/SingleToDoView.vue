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
import { ToDoItemInterface } from "@/store/modules/to-dos";
import { computed, defineComponent, ref } from "vue";
import { RouterLink } from "vue-router";
import { useStore } from "vuex";

export default defineComponent({
  name: "SingleToDoView",
  components: {},
  props: ["id"],
  setup(props) {
    const store = useStore();
    const toDoId = ref<string>(props.id);
    store.dispatch("toDosModule/fetchToDoById", props.id);
    const singleToDo = computed<ToDoItemInterface>(() => store.getters["toDosModule/getSingleToDo"]);
    const loading = computed<boolean>(() => store.getters["toDosModule/isLoading"]);
    const error = computed<string>(() => store.getters["toDosModule/getError"]);

    return { singleToDo, loading, error, toDoId };
  },
});
</script>

<style scoped></style>

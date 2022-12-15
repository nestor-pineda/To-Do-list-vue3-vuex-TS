<template>
  <div v-if="error">{{ error }}</div>
  <div v-if="loading">...LOADING...</div>
  <div v-else>
    <h1>{{ singleToDo.title }}</h1>
    <p>{{ singleToDo.description }}</p>
  </div>
</template>

<script lang="ts">
import { ToDoItemInterface } from "@/store/modules/to-dos";
import { computed, defineComponent } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "SingleToDosView",
  components: {},
  props: ["id"],
  setup(props) {
    const store = useStore();
    store.dispatch("toDosModule/fetchToDoById", props.id);
    const singleToDo = computed<ToDoItemInterface>(() => store.getters["toDosModule/getSingleToDo"]);
    const loading = computed<boolean>(() => store.getters["toDosModule/isLoading"]);
    const error = computed<string>(() => store.getters["toDosModule/getError"]);

    return { singleToDo, loading, error };
  },
});
</script>

<style scoped></style>

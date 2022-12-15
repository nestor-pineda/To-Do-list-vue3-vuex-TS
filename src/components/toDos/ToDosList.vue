<template>
  <div><h1>Hello</h1></div>
  <div v-if="error">{{ error }}</div>
  <div v-if="loading">...LOADING...</div>
  <div v-else>
    <div v-for="toDo in toDosList" :key="toDo.id">
      <ToDoExcerpt :toDo="toDo" />
      <!-- <h3 :class="item.priority === 'important' ? 'important' : item.priority === 'critical' ? 'critical' : 'default'">{{ item.title }}</h3>
      <p>{{ item.description }}</p>
      <router-link :to="{ name: 'singleToDos', params: { id: item.id } }">
        <p>Read more</p>
      </router-link>
      <button @click="handleDelete(item.id)">Delete</button> -->
    </div>
  </div>
</template>

<script lang="ts">
import { ToDoItemInterface } from "@/store/modules/to-dos";
import { computed, defineComponent } from "vue";
import { useStore } from "vuex";
import ToDoExcerpt from "./ToDoExcerpt.vue";

export default defineComponent({
  components: { ToDoExcerpt },
  setup() {
    const store = useStore();
    store.dispatch("toDosModule/fetchToDos");
    const toDosList = computed<ToDoItemInterface[]>(() => store.getters["toDosModule/getToDosList"]);
    const loading = computed<boolean>(() => store.getters["toDosModule/isLoading"]);
    const error = computed<string>(() => store.getters["toDosModule/getError"]);

    return { toDosList, loading, error };
  },
});
</script>

<style scoped>
.critical {
  color: red;
}
.important {
  color: orange;
}
.default {
  color: grey;
}
</style>

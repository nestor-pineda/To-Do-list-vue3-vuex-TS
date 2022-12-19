<template>
  <h3 :class="toDo.priority === 'important' ? 'important' : toDo.priority === 'critical' ? 'critical' : 'default'">{{ toDo.title }}</h3>
  <p>{{ toDo.description }}</p>
  <router-link :to="{ name: 'singleToDos', params: { id: toDo.id } }">
    <p>Read more</p>
  </router-link>
  <button @click="handleDelete(toDo.id)">Delete</button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  props: ["toDo"],
  setup() {
    const store = useStore();
    const handleDelete = (id: number) => {
      store.dispatch("toDosModule/deleteToDo", id);
    };
    return { handleDelete };
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

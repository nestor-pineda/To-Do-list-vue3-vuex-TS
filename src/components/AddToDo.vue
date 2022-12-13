<template>
  <form>
    <label for="">Title</label>
    <input type="text" required v-model="newToDo.title" />
    <label for="">Description</label>
    <input type="text" required v-model="newToDo.description" />
    <label for="">Add tags</label>
    <input type="text" v-model="tag" />
    <button @click.prevent="addTag">ADD</button>

    <button @click.prevent="handleSubmit">Submit</button>
  </form>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import { useStore } from "vuex";
import { NewToDoItemInterface } from "@/interfaces/toDosInterface";

export default defineComponent({
  setup() {
    const store = useStore();

    const newToDo: NewToDoItemInterface = {
      title: "",
      description: "",
      tags: [], // we need a function to add tags here
      // priority: [], // Radio buttons
    };

    // When submited we use the sotre action
    const handleSubmit = () => {
      store.dispatch("toDosModule/addToDo", newToDo);
      console.log(newToDo);
    };

    const tag = ref("");

    const addTag = () => {
      newToDo.tags.push(tag.value);
    };

    return { newToDo, handleSubmit, addTag, tag };
  },
});
</script>

<style scoped></style>

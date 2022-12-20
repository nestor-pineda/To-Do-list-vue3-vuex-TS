<template>
  <form @submit.prevent="handleSubmit">
    <label for="title">Title</label>
    <input type="text" required v-model="newToDo.title" id="title" />

    <label for="desciption">Description</label>
    <input type="text" required v-model="newToDo.description" id="desciption" />

    <label for="">Add tags</label>
    <input type="text" v-model="tag" />

    <button @click.prevent="addTag">ADD</button>

    <label for="">Critical</label>
    <input type="radio" name="critical" value="critical" id="critical" v-model="newToDo.priority" />
    <label for="">Important</label>
    <input type="radio" name="important" value="important" id="important" v-model="newToDo.priority" />

    <!-- <button type="submit">Submit</button> -->
    <button type="submit" :disabled="isDisabled">Submit</button>
  </form>

  <ul v-for="item in newToDo.tags" :key="item">
    <li>{{ item }}</li>
  </ul>
</template>

<script lang="ts">
import { computed, defineComponent, ref, reactive, watchEffect } from "vue";
import { useStore } from "vuex";
import { NewToDoItemInterface } from "@/interfaces/toDosInterface";

export default defineComponent({
  setup() {
    const store = useStore();

    let tag = ref("");

    const addTag = () => {
      const pattern = /^[a-zA-Z]{1,20}$/;
      if (pattern.test(tag.value)) {
        newToDo.tags.push(tag.value);
      }
    };

    let newToDo: NewToDoItemInterface = reactive({
      title: "",
      description: "",
      tags: [],
      priority: "",
    });

    watchEffect(() => {
      console.log(
        newToDo.tags.map((item) => {
          return item;
        })
      );
    });

    const isDisabled = computed(() => (newToDo.title && newToDo.description ? false : true));

    const handleSubmit = () => {
      store.dispatch("toDosModule/addToDo", newToDo);
      newToDo.title = "";
      newToDo.description = "";
      newToDo.tags = [];
      newToDo.priority = "";
    };

    return { newToDo, handleSubmit, addTag, tag, isDisabled };
  },
});
</script>

<style scoped></style>

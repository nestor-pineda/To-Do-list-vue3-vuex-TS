<template>
  <AddToDo />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AddToDo from "@/components/toDos/AddToDo.vue";

export default defineComponent({
  name: "AddToDoView",
  components: { AddToDo },
  setup() {
    return {};
  },
});
</script>

<style scoped></style>

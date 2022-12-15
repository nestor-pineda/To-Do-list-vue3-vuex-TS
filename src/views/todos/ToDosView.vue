<template>
  <ToDosList />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ToDosList from "@/components/toDos/ToDosList.vue";

export default defineComponent({
  name: "ToDosView",
  components: { ToDosList },
  setup() {
    return {};
  },
});
</script>

<style scoped></style>

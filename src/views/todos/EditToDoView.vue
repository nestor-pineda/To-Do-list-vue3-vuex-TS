<template>
  <div>
    <input type="text" v-model="objChange.title" />
    Thi id of this is: {{ objChange.id }}
    <button @click="handleEdit">save change</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
import { useStore } from "vuex";
import { EditPayloadInterface } from "@/store/modules/to-dos";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "EditToDoView",
  components: {},
  props: ["id"],
  setup(props) {
    const store = useStore();
    const router = useRouter();

    const objChange: EditPayloadInterface = reactive({
      title: "",
      id: props.id,
    });

    const handleEdit = async () => {
      await store.dispatch("toDosModule/editToDo", objChange);
      await router.push({ name: "singleToDos", params: { id: props.id } });
    };

    return { objChange, handleEdit };
  },
});
</script>

<style scoped></style>

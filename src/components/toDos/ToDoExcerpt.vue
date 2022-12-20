<template>
  <div class="note-content" :class="toDo.priority === 'critical' ? 'critical' : toDo.priority === 'important' ? 'important' : 'default'">
    <h3 class="note-title">{{ title }}</h3>

    <p class="note-excerpt">{{ excerpt }}...</p>

    <div class="icons">
      <router-link :to="{ name: 'singleToDos', params: { id: toDo.id } }">
        <span class="material-symbols-rounded icon read"> visibility </span>
      </router-link>
      <router-link :to="{ name: 'editToDo', params: { id: toDo.id } }"> <span class="material-symbols-rounded icon edit"> edit </span> </router-link>
      <span @click="handleDelete(toDo.id)" class="material-symbols-rounded icon delete"> delete </span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useStore } from "vuex";
import { ToDosStateInterface } from "@/store/modules/to-dos";
import { useFetchToDoById } from "@/composables";
import { RouterLink } from "vue-router";

export default defineComponent({
  props: ["toDo", "id"],
  setup(props) {
    const store = useStore<ToDosStateInterface>();
    const handleDelete = (id: number) => {
      store.dispatch("toDosModule/deleteToDo", id);
    };

    // const handleDelete = (id: number) => {
    //   useDeleteToDo(id);
    // };

    const handleEdit = () => {
      useFetchToDoById(props.id);
    };

    // Limit description and title length
    let excerpt = ref(props.toDo.description);
    excerpt.value.length > 60 ? (excerpt = excerpt.value.substring(0, 60)) : excerpt;

    let title = ref(props.toDo.title);
    title.value.length > 18 ? (title = title.value.substring(0, 18)) : title;

    return { excerpt, title, handleEdit, handleDelete };
  },
});
</script>

<style scoped lang="scss">
.note-content {
  width: 100%;
  height: 100%;
  background-color: #eee;
  padding: 20px;
  .icons {
    width: 100%;
    display: flex;
    justify-content: end;
    .icon {
      color: rgba(34, 34, 34, 1);
      cursor: pointer;
      font-size: 20px;
      padding: 5px;
      background-color: rgba(34, 34, 34, 0.116);
      border-radius: 50px;
      margin-left: 5px;
      &:hover {
        color: rgba(237, 237, 237, 0.83);
      }
    }
  }
}
.critical {
  background-color: rgb(239, 125, 125);
  color: rgb(34, 34, 34);
}
.important {
  background-color: rgb(239, 186, 125);
  color: rgb(34, 34, 34);
}
.default {
  background-color: rgb(222, 222, 222);
  color: rgb(34, 34, 34);
}
</style>

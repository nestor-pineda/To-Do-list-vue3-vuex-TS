<template>
  <div class="button-container" @click="handleAddButton">
    <span class="material-symbols-rounded add-button"> add_circle </span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  setup() {
    const router = useRouter();

    const handleAddButton = () => {
      router.push("/add-todo");
    };

    return { handleAddButton };
  },
});
</script>

<style scoped lang="scss">
.button-container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  .add-button {
    padding: 10px;
    font-size: 40px;
    color: rgb(34, 34, 34);
    background-color: rgb(214, 214, 214);
    border-radius: 50px;
    cursor: pointer;
    &:hover {
      padding: 8px;
      font-size: 36px;
      color: rgba(34, 34, 34, 0.6);
    }
  }
}
</style>

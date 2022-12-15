<template>
  <div class="filter-box">
    <div class="filter-box__button" @click="handleFilter('')">All</div>
    <div class="filter-box__button" @click="handleFilter('critical')">Critical</div>
    <div class="filter-box__button" @click="handleFilter('important')">Important</div>
    <div class="filter-box__button" @click="handleFilter('medium')">Medium</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  setup() {
    const store = useStore();

    const handleFilter = (priority: string) => {
      store.commit("toDosModule/GET_TO_DO_FILTERED", priority);
    };

    return { handleFilter };
  },
});
</script>

<style scoped lang="scss">
.filter-box {
  width: 100%;
  max-width: 400px;
  background-color: rgb(174, 174, 174);
  display: flex;
  margin: 0 auto;
  .filter-box__button {
    width: 80px;
    padding: 20px 10px;
    text-align: center;
    color: black;
    &:hover {
      color: aqua;
    }
  }
}
</style>

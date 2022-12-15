<template>
  <div class="search-box">
    <input type="text" @keyup="handleSearch" v-model="titleSearch" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  setup() {
    const store = useStore();

    const titleSearch = ref("");

    const handleSearch = () => {
      store.commit("toDosModule/GET_TO_DO_BY_STATUS", titleSearch.value);
      console.log(titleSearch.value);
    };

    return { handleSearch, titleSearch };
  },
});
</script>

<style scoped lang="scss">
.search-box {
  width: 100%;
  max-width: 400px;
  padding: 20px;
  margin: 0 auto;
  margin-top: 30px;
}
</style>

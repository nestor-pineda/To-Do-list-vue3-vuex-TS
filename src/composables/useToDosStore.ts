import { ToDoItemInterface, ToDosStateInterface } from "@/store/modules/to-dos";
import { computed } from "vue";
import { useStore } from "vuex";

export const useFetchToDos = () => {
  const store = useStore<ToDosStateInterface>();
  store.dispatch("toDosModule/fetchToDos");
  return;
};

// export const useDeleteToDo = (id: number) => {
//   const store = useStore<ToDosStateInterface>();
//   store.dispatch("toDosModule/deleteToDo", id);
//   return;
// };

export const useGettersToDos = () => {
  const store = useStore<ToDosStateInterface>();
  const toDosList = computed<ToDoItemInterface[]>(() => store.getters["toDosModule/getToDosListFilter"]);
  const loading = computed<boolean>(() => store.getters["toDosModule/isLoading"]);
  const error = computed<string>(() => store.getters["toDosModule/getError"]);
  const singleToDo = computed<ToDoItemInterface>(() => store.getters["toDosModule/getSingleToDo"]);
  return { toDosList, loading, error, singleToDo };
};

export const useFetchToDoById = (id: any) => {
  const store = useStore<ToDosStateInterface>();
  store.dispatch("toDosModule/fetchToDoById", id);
  return;
};

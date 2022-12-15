import { GetterTree, MutationTree, ActionTree } from "vuex";
import { RootState } from "@/store/index";
import { NewToDoItemInterface } from "@/interfaces/toDosInterface";

export interface ToDosStateInterface {
  toDos: ToDoItemInterface[];
  toDosFilter: ToDoItemInterface[];
  loading: boolean;
  error: string;
  toDo: ToDoItemInterface;
  newToDo: NewToDoItemInterface;
}

export interface ToDoItemInterface {
  title: string;
  description: string;
  tags: string[];
  priority: string;
  id: number;
}

const state: ToDosStateInterface = {
  toDos: [],
  toDosFilter: [],
  loading: false,
  error: "",
  toDo: {} as ToDoItemInterface,
  newToDo: {
    title: "",
    description: "",
    tags: [],
    priority: "",
  },
};

const getters: GetterTree<ToDosStateInterface, RootState> = {
  getToDosList(state: ToDosStateInterface): ToDoItemInterface[] {
    return state.toDos;
  },
  getToDosListFilter(state: ToDosStateInterface): ToDoItemInterface[] {
    return state.toDosFilter;
  },
  isLoading(state: ToDosStateInterface): boolean {
    return state.loading;
  },
  getError(state: ToDosStateInterface): string {
    return state.error;
  },
  getSingleToDo(state: ToDosStateInterface): ToDoItemInterface {
    return state.toDo;
  },
};

const mutations: MutationTree<ToDosStateInterface> = {
  // Used to set the fetched data into the State
  SET_TO_DOS(state: ToDosStateInterface, payload: ToDoItemInterface[]) {
    state.toDos = payload;
  },
  // Used to set the filtered data into the State
  SET_TO_DOS_FILTER(state: ToDosStateInterface, payload: ToDoItemInterface[]) {
    state.toDosFilter = payload;
  },
  // Used to toggle the loading State
  SET_LOADING(state: ToDosStateInterface, payload: boolean) {
    state.loading = payload;
  },
  // Used to set the Error message State
  SET_ERROR(state: ToDosStateInterface, payload: string) {
    state.error = payload;
  },
  // Used to set a new To Do in the State
  SET_NEW_TO_DO(state: ToDosStateInterface, payload: NewToDoItemInterface) {
    state.newToDo = payload;
  },
  DELETE_TO_DO(state: ToDosStateInterface, payload) {
    const itemIntex = state.toDos.indexOf(payload);
    state.toDos.splice(itemIntex, 1);
  },
  SET_SINGLE_TO_DO(state: ToDosStateInterface, paylod: ToDoItemInterface) {
    state.toDo = paylod;
  },
  // Used to set the array of item filtered by prioroty
  GET_TO_DO_FILTERED(state: ToDosStateInterface, payload) {
    const result = state.toDos.filter((item) => {
      return item.priority.includes(payload);
    });
    state.toDosFilter = result;
  },
};

const actions: ActionTree<ToDosStateInterface, RootState> = {
  async fetchToDos({ commit }): Promise<void> {
    commit("SET_LOADING", true);
    try {
      const data = await fetch("http://localhost:3000/to-dos");
      if (!data.ok) {
        throw Error("Failed to set To Dos");
      }
      const json = await data.json();
      commit("SET_TO_DOS", json);
      commit("SET_TO_DOS_FILTER", json);
    } catch (error) {
      commit("SET_ERROR", error);
      console.log(error);
    } finally {
      commit("SET_LOADING", false);
    }
  },
  async fetchToDoById({ commit }, payload: string): Promise<void> {
    commit("SET_LOADING", true);
    try {
      const data = await fetch(`http://localhost:3000/to-dos/${payload}`);
      if (!data.ok) {
        throw Error("Failed to set To Dos");
      }
      const json = await data.json();
      commit("SET_SINGLE_TO_DO", json);
    } catch (error) {
      commit("SET_ERROR", error);
      console.log(error);
    } finally {
      commit("SET_LOADING", false);
    }
  },
  async addToDo({ commit }, payload: NewToDoItemInterface): Promise<void> {
    commit("SET_LOADING", true);
    try {
      const data = await fetch("http://localhost:3000/to-dos", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          "x-access-token": "token-value",
        },
        body: JSON.stringify(payload),
      });
      if (!data.ok) {
        const message = `An error has occured: ${data.status} - ${data.statusText}`;
        throw new Error(message);
      }
      const json = await data.json;
      commit("SET_NEW_TO_DO", json);
    } catch (error) {
      commit("SET_ERROR", error);
      console.log(error);
    } finally {
      commit("SET_LOADING", false);
    }
  },
  async deleteToDo({ commit }, payload) {
    commit("SET_LOADING", true);
    try {
      await fetch(`http://localhost:3000/to-dos/${payload}`, {
        method: "delete",
      });

      commit("DELETE_TO_DO", payload);
    } catch (error) {
      commit("SET_ERROR", error);
      console.log(error);
    } finally {
      commit("SET_LOADING", false);
    }
  },
};

export const toDosModule = {
  state,
  getters,
  mutations,
  actions,
  namespaced: true,
};

import { GetterTree, MutationTree, ActionTree } from "vuex";
import { RootState } from "@/store/index";

export interface ToDosStateInterface {
  toDos: ToDoItemInterface[];
  loading: boolean;
  error: string;
}

export interface ToDoItemInterface {
  title: string;
  description: string;
  tags: string[];
  priority: string[];
  id: number;
}

const state: ToDosStateInterface = {
  toDos: [],
  loading: false,
  error: "",
};

const getters: GetterTree<ToDosStateInterface, RootState> = {
  // Returns all To dos items State
  getToDosList(state: ToDosStateInterface): ToDoItemInterface[] {
    return state.toDos;
  },
  // Returns the loading State
  isLoading(state: ToDosStateInterface): boolean {
    return state.loading;
  },
  getError(state: ToDosStateInterface): string {
    return state.error;
  },
};

const mutations: MutationTree<ToDosStateInterface> = {
  // Used to set the fetched data into the State
  SET_TO_DOS(state: ToDosStateInterface, payload: ToDoItemInterface[]) {
    state.toDos = payload;
    console.log(state.toDos);
  },
  // Used to toggle the loading State
  SET_LOADING(state: ToDosStateInterface, payload: boolean) {
    state.loading = payload;
  },
  // Used to set the Error message State
  SET_ERROR(state: ToDosStateInterface, payload: string) {
    state.error = payload;
  },
};

const actions: ActionTree<ToDosStateInterface, RootState> = {
  async getToDos({ commit }): Promise<void> {
    commit("SET_LOADING", true);
    try {
      const data = await fetch("http://localhost:3000/to-dos");
      if (!data.ok) {
        throw Error("Failed to set To Dos");
      }
      const json = await data.json();
      commit("SET_TO_DOS", json);
      // commit("SET_LOADING", false);
    } catch (err) {
      commit("SET_ERROR", err);
      console.log(err);
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

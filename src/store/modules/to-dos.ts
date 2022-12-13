import { GetterTree, MutationTree, ActionTree } from "vuex";
import { StoreInterface } from "@/store/index";

export interface ToDosInterface {
  toDos: ToDoIteminterface[];
}

export interface ToDoIteminterface {
  title: string;
  description: string;
  tags: string[];
  priority: string[];
  id: number;
}

const state: ToDosInterface = {
  toDos: [],
};

export const toDoModule = {
  state,
  namespace: true,
};

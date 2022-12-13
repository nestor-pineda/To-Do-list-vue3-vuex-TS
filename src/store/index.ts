import { createStore } from "vuex";
import { toDosModule, ToDosStateInterface } from "./modules/to-dos";

export interface RootState {
  toDosModule: ToDosStateInterface;
}

export default createStore<RootState>({
  modules: {
    toDosModule,
  },
});

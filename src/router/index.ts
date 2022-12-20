import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import ToDosView from "@/views/toDos/ToDosView.vue";
import SingleToDoView from "@/views/toDos/SingleToDoView.vue";
import EditToDoView from "@/views/toDos/EditToDoView.vue";
import AddToDoView from "@/views/toDos/AddToDoView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },

  {
    path: "/todos",
    name: "toDos",
    component: ToDosView,
  },
  {
    path: "/add-todo",
    name: "addToDos",
    component: AddToDoView,
  },
  {
    path: "/todos/:id",
    name: "singleToDos",
    component: SingleToDoView,
    props: true,
  },
  {
    path: "/todos/edit/:id",
    name: "editToDo",
    component: EditToDoView,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

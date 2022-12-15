import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import ToDosView from "@/views/toDos/ToDosView.vue";
import SingleToDosView from "@/views/toDos/SingleToDosView.vue";
import EditToDoView from "@/views/toDos/EditToDoView.vue";
import AddToDoView from "@/views/toDos/AddToDoView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
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
    component: SingleToDosView,
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

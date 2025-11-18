import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    name: "home",
    path: "/",
    component: () => import("../components/PaginaInicial.vue"),
    meta: {
      title: "Página Inicial",
    },
  },
  {
    name: "dioappwine",
    path: "/vinho",
    component: () => import("../components/DioAppWine.vue"),
    meta: {
      title: "DioAppWine",
    },
  },
  {
    name: "diobook",
    path: "/livro",
    component: () => import("../components/DioBook.vue"),
    meta: {
      title: "DioBook",
    },
  },
  {
    name: "diocc",
    path: "/cc",
    component: () => import("../components/DioCC.vue"),
    meta: {
      title: "DioCC",
    },
  },
  {
    name: "dioea",
    path: "/ea",
    component: () => import("../components/DioEA.vue"),
    meta: {
      title: "DioEA",
    },
  },
  {
    name: "diostore",
    path: "/store",
    component: () => import("../components/DioStoreConnect.vue"),
    meta: {
      title: "DioStoreConnect",
    },
  },
  {
    name: "diotasks",
    path: "/tasks",
    component: () => import("../components/DioTasks.vue"),
    meta: {
      title: "DioTasks",
    },
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

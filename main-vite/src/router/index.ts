import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    redirect: "/vite/",
  },
  {
    path: "/vite/:page*",
    name: "vite",
    component: () => import("../pages/vite.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
});

export default router;

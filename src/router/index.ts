import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "login",
      component: () => import("../views/LyLogin.vue"),
    },
    {
      path: "/content",
      name: "content",
      component: () => import("../views/LyContent.vue"),
    },
  ],
});

export default router;

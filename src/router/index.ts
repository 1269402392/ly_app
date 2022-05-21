import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
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
router.beforeEach((to, form) => {
  const token = localStorage.token;
  if (to.path === "/content") {
    if (!token) {
      return "/";
    }
  }
});
export default router;

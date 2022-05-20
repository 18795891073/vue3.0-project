import { createRouter, createWebHashHistory } from "vue-router";
// createWebHashHistory：路径里面含有# ，createWebHistory：路径里面不含#号

const routes = [
  {
    path: "/",
    name: "login",
    component: () => import("@/view/login/IndexTem.vue")
  },
  {
    path: "/main",
    name: "main",
    component: () => import("@/view/MainTem.vue")
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
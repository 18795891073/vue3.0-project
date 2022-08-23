import { createRouter, createWebHashHistory } from "vue-router";
// createWebHashHistory：路径里面含有# ，createWebHistory：路径里面不含#号

const routes = [
  {
    path: "/",
    name: "主页面",
    component: () => import("@/view/MainTem.vue")
  },
  {
    path: "/login",
    name: "登录",
    component: () => import("@/view/login/IndexTem.vue")
  },
  {
    path: "/loop",
    name: "循环",
    component: () => import("@/view/loop/MultipleLoop.vue")
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
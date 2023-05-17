import { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: async () => import("../pages/DashboardPage.vue"),
  },
  {
    path: "/login",
    component: async () => import("../pages/LoginPage.vue"),
  },
];

export default routes;

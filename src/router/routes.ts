import { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: async () => import("../pages/DashboardPage.vue"),
  },
];

export default routes;

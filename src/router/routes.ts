import { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: async () => import("../pages/DashboardPage.vue"),
    name: "MainPage",
  },
  {
    path: "/login",
    component: async () => import("../pages/LoginPage.vue"),
    name: "LoginPage",
  },
  {
    path: "/signup",
    component: async () => import("../pages/SignupPage.vue"),
    name: "SignupPage",
  },
];

export default routes;

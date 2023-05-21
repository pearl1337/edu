import { createRouter, createWebHistory, RouteRecordName } from "vue-router";
import { User } from "../models/User";
import routes from "./routes";

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const routesForGuests: RouteRecordName[] = [
  "LoginPage",
  "SignupPage",
  "LandingPage",
];

router.beforeEach((to, _, next) => {
  if (!to?.name) {
    next();
    return;
  }
  if (routesForGuests.includes(to.name) && User.isAuthenticated()) {
    next({ name: "MainPage" });
    return;
  }
  if (!routesForGuests.includes(to.name) && !User.isAuthenticated()) {
    next({ name: "LoginPage" });
    return;
  }
  next();
});

export default router;

import Vue from "vue";
import VueRouter from "vue-router";
import api from "@api";
import routes from "./routes";

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: "hash",
  // Simulate native-like scroll behavior when navigating to a new
  // route and using back/forward buttons.
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
});

router.beforeEach((to, from, next) => {
  const loggedIn = api.loggedIn;
  const publicRoute = to.matched.some((record) => record.meta.publicRoute);

  if (loggedIn === false) {
    if (publicRoute) {
      return next();
    }

    if (from.fullPath === "/") {
      return next({ name: "login" });
    }

    return next({
      name: "login",
      query: { redirect: to.fullPath },
    });
  }

  return next();
});

export default router;

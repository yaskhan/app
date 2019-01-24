import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes";

Vue.user(VueRouter);

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

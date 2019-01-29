import Vue from "vue";
import router from "@router";
import store from "@state/store";
import App from "./app";

// Register all base components as globals
import "@components/base/";

// Don't warn about using the dev version of Vue in development.
Vue.config.productionTip = process.env.NODE_ENV === "production";

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

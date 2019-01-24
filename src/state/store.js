import Vue from "vuex";
import Vuex from "vuex";

import modules from "./modules";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules,
  // Enable strict mode to get a warning when mutation the state outside of a
  // mutation (only in dev mode)
  strict: process.env.NODE_ENV !== "production",
});

// Automatically run the `init` action for every module,
// if one exists.
for (const moduleName of Object.keys(modules)) {
  if (modules[moduleName].actions && modules[moduleName].actions.init) {
    store.dispatch(`${moduleName}/init`);
  }
}

export default store;

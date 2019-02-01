# Repo Architecture

- [docs](#docs)
- [public](#public)
  - [index.html](#index.html)
- [src](#src)
  - [assets](#assets)
  - [components](#components)
  - [design](#design)
  - [router](#router)
  - [state](#state)
  - [utils](#utils)
  - [app.vue](#app.vue)
  - [main.js](#main.js)
- [vue.config.js](#vue.config.js)

## docs

The thing you're reading right now.

## public

Where you'll keep any static assets that need to be skipped by the build system.

### index.html

This file actually _does_ get processed by the build system. It's the base template which is used to generate the final `index.html` file with.

The paths to the CSS / JS files will be automatically added to this file.

## src

Where we keep all the "actual" source files for the application.

### assets

The project uses [Vue CLI](https://cli.vuejs.org) to bundle the static assets into the application. This means that any file you import relatively in the code will the processed and optimized by the buildchain. To learn more about this, read [the Vue CLI docs on Static Asset Handling](https://cli.vuejs.org/guide/html-and-static-assets.html#relative-path-imports).

### components

Where most of the components of the app live, [including the global base components](./development.md).

### design

Where we keep all the CSS Custom Properties that are used in the application.

### router

Where the router, routes, and any routing-related components live. See [the doc on routing](./routing.md) for more info.

### state

Where all our global state (store) management lives. See [the state management doc](./state.md) for more info.

### utils

Utility functions that are shared across multiple components in the application. These functions have to be **pure functions**. These functions should never directly affect the DOM or interface with the global Vuex state.

## app.vue

The root Vue component that delegates rendering to the router-view. This is the only component that's allowed to have global CSS.

## main.js

The entry point to our app. Where we create our Vue instance and mount it to the DOM.

## vue.config.js

Options that will be used during the build of the application. To learn more about it's available options, checkout [the Vue CLI docs](https://cli.vuejs.org/config/#vue-config-js).

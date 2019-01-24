# State management

## Overview

Directus uses [Vuex](https://vuex.vuejs.org), which we initialize in [`src/state/store.js`].

## Modules

The [`src/state/modules`](../src/state/modules) directory is where all shared application state lives. Any JS file added here will be automatically registered in the store as a [namespaced module](https://vuex.vuejs.org/en/modules.html#namespacing).

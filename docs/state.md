# State management

## Overview

Directus uses [Vuex](https://vuex.vuejs.org), which we initialize in [`src/state/store.js`].

## Modules

The [`src/state/modules`](../src/state/modules) directory is where all shared application state lives. Any JS file added here will be automatically registered in the store as a [namespaced module](https://vuex.vuejs.org/en/modules.html#namespacing).

## Structure

The application state tries to follow the API endpoints as closely as follows. Data is being stored in the "raw" format it's being returned in by the API. You can use various getters to get easy access to the specific items you need.

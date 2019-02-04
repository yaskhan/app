# Routing, layouts, and views

- [Overview](#overview)
- [Layouts](#layouts)
- [Views](#views)

## Overview

Directus uses [Vue Router](https://router.vuejs.org), which we initialize in [`src/router/index.js`](../src/router/index.js), with routes defined in [`src/router/routes.js`](../src/router/routes.js). Inside the [`src/router`](../src/router/) folder, there are also two sub-folders, both containing route-specific components: `layouts` and `views`.

## Layouts

Every view components must use a layout component as its base and register it as `Layout`. Layouts aren't very complex and shouldn't have any state. They only contain shared layout elements like headers, footers, and navigation that surrounds the main content in the view.

## Views

Each view component will be used by at least one route in [`src/router/routes.js`](../src/router/routes.js) to provide a template for the page.

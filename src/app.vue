<template>
  <div id="app">
    <RouterView :key="$route.fullPath" />
  </div>
</template>

<script>
export default {
  name: "Directus",
};
</script>

<!-- This should be the only global CSS in the app -->
<style lang="scss">
// Allow element/type selectors, because this is global CSS.
// stylelint-disable selector-max-type, selector-class-pattern

// Normalize default styles across browsers,
// https://necolas.github.io/normalize.css/
@import "~normalize.css/normalize.css";

// Import all the global CSS Custom Properties so they can be used in the components
@import "@design";

::selection {
  background: var(--blue-gray-100);
}

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  font-family: inherit;
  font-size: inherit;
  font-weight: inherit;
  line-height: inherit;
  color: inherit;
}

html,
body {
  height: 100%;
}

body {
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  -moz-osx-font-smoothing: grayscale;
  font-family: var(--font-text);
  font-weight: 500;
  line-height: 1.3;
}

// Get rid of the default button styles
button {
  cursor: pointer;
  background: transparent;
  border: none;
  border-radius: 0;
}

// Don't show the yellow auto-fill color
input:-webkit-autofill {
  -webkit-box-shadow: 0 0 0 30px white inset;
}
</style>

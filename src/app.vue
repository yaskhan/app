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
</style>

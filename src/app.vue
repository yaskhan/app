<template>
  <div id="app">
    <RouterView :key="$route.fullPath" />
  </div>
</template>

<script>
export default {
  name: "Directus",
  created() {
    // If the app loads with the project query parameter included, switch the
    // project in use to the one provided in the query parameter
    if (this.$route.query.project) {
      this.$store.dispatch("projects/setCurrent", this.$route.query.project);

      // Get rid of the project query parameter in the url
      const newQuery = Object.assign({}, this.$route.query);
      delete newQuery.project;
      this.$router.replace({
        query: newQuery,
      });

      // If the sdk was already logged in...
      if (this.$api.loggedIn) {
        // Logout of the api and forget the used url and project
        this.$api.reset();

        // Clear the store so we don't end up with conflicting cached data
        this.$store.dispatch("reset");

        // Redirect to the login view
        this.$router.push({ name: "login" });
      }
    }
  },
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

#app {
  position: relative;
  width: 100%;
  height: 100%;
}
</style>

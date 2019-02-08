<docs>
  # Public Layout

  The layout in use for all the public routes. This includes login, password reset, etc.

  Will be rendered as a white card on a (by default) dark gray background.

  Passed content will be rendered in this card.
</docs>

<template>
  <div class="container">
    <div class="window">
      <img v-if="customLogoSource" :src="customLogoSource" :alt="projectName" class="logo" />
      <img v-else src="~@assets/img/logo-dark.svg" :alt="projectName" class="logo" />
      <slot />
    </div>

    <small class="powered-by">Powered by Directus</small>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Public",
  computed: {
    ...mapGetters({ project: "projects/current" }),

    projectName() {
      return this.project.project_name;
    },

    customLogoSource() {
      if (!this.project.project_logo) {
        return null;
      }

      return this.project.project_logo.full_url;
    },
  },
};
</script>

<style lang="scss">
.container {
  width: 100%;
  height: 100%;
  background-color: var(--blue-gray-900);
}

.window {
  position: absolute;
  top: 50%;
  right: 0;
  left: 0;
  width: 100%;
  max-width: 340px;
  max-height: 576px;
  padding: 40px 40px 30px;
  margin: 0 auto;
  background-color: var(--white);
  border-radius: var(--border-radius);
  transform: translateY(-50%);

  h1 {
    font: var(--font-extra-large);
  }
}

.logo {
  height: 40px;
  margin-bottom: 40px;
}

.powered-by {
  position: absolute;
  right: 0;
  bottom: 20px;
  left: 0;
  margin: 0 auto;
  font-size: 10px;
  font-weight: 700;
  line-height: 10px;
  color: var(--blue-gray-300);
  text-align: center;
  text-transform: uppercase;
  cursor: help;
}
</style>

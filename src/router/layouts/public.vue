<docs>
  # Public Layout

  The layout in use for all the public routes. This includes login, password reset, etc.

  Will be rendered as a white card on a (by default) dark gray background.

  Passed content will be rendered in this card.
</docs>

<template>
  <div class="container">
    <div class="window">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: "Public",
};
</script>

<style lang="scss">
.container {
  width: 100%;
  height: 100%;
  background-color: var(--color-primary);
}

.window {
  background-color: var(--white);
}
</style>

<docs>
  # Base Spinner

  Renders a spinner.

  ## Usage

  ```vue
  <BaseSpinner size="14" color="success" />
  ```

  ## Props

  `size`: the size in px of the spinner
  `color`: the color of the spinner
</docs>

<template>
  <div
    class="spinner"
    :style="{
      color: `var(--${color})`,
      width: `${size}px`,
      height: `${size}px`,
    }"
  />
</template>

<script>
export default {
  name: "BaseSpinner",
  props: {
    color: {
      type: String,
      default: "primary",
    },
    size: {
      type: Number,
      default: 32,
    },
  },
};
</script>

<style lang="scss" scoped>
.spinner {
  width: 100%;
  height: 100%;
  background-color: transparent;
  border: 2px solid currentColor;
  border-bottom-color: transparent;
  border-radius: 100%;
  animation: rotate 750ms linear infinite;
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>

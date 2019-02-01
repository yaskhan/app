# Single File Components

Structure:

```vue
<docs>
  # Base Button

  Documentation about the component here
</docs>

<template>
  <button class="button">
    <slot />
  </button>
</template>

<script>
export default {
  name: "BaseButton",
};
</script>

<style lang="scss" scoped>
.button {
  color: var(--red);
}
</style>
```

<docs>
  # Base Button

  Renders a styled button. Wraps a native button element.

  ## Usage

  ```vue
  <BaseButton color="danger" full-width />
  ```

  ### Props

  | Name       | Description                                         | Default |
  |------------|-----------------------------------------------------|---------|
  | color      | "gray", "lighter-gray", danger", "warning", "white" | "gray"  |
  | full-width | Force width to 100%                                 | false   |
  | busy       | Show a spinner                                      | false   |

  \* Required

</docs>

<template>
  <button
    class="button"
    :class="[color, { full: fullWidth }]"
    :disabled="busy"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <BaseSpinner v-if="busy" size="14" class="spinner" />
    <slot />
  </button>
</template>

<script>
export default {
  model: {
    event: "update",
  },
  props: {
    color: {
      type: String,
      default: null,
    },
    fullWidth: {
      type: Boolean,
      default: false,
    },
    busy: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.button {
  display: inline-block;
  width: 100%;
  max-width: 200px;
  padding: 10px;
  margin: 0;
  font-size: 14px;
  font-weight: 700;
  line-height: 18px;
  color: var(--white);
  text-align: center;
  text-transform: uppercase;
  background: none;
  background-color: var(--page-700);
  border: 2px solid var(--page-700);
  border-radius: var(--border-radius);
  transition: var(--easing-medium) var(--easing-standard) all;

  &[disabled] {
    cursor: not-allowed;
    background-color: var(--page-100);
    border-color: var(--page-100);
  }

  &:hover:not([disabled]) {
    background-color: var(--page-900);
    border-color: var(--page-900);
  }
}

.full {
  max-width: none;
}

.spinner {
  margin-right: 2px;
  vertical-align: -2px;
}

.danger {
  color: var(--white);
  background-color: var(--danger);
  border: 2px solid var(--danger);

  &[disabled] {
    color: var(--danger);
    background-color: var(--danger-light);
    border-color: var(--danger);
  }

  &:hover:not([disabled]) {
    background-color: var(--danger-dark);
    border-color: var(--danger-dark);
  }
}

.warning {
  color: var(--white);
  background-color: var(--warning);
  border: 2px solid var(--warning);
  &:hover:not([disabled]) {
    background-color: var(--warning-dark);
    border-color: var(--warning-dark);
  }
}
</style>

<docs>
  # Base Material Input

  Mimics the browser native `<input>` component. Can be used with `v-model`. Is styled to look like a Material Design input

  ## Usage

  ```vue
  <BaseMaterialInput v-model="value" label="Password" />
  ```

  ### Props

  | Name    | Description                   | Default |
  |---------|-------------------------------|---------|
  | label\* | The label to add to the input | null    |
  | id\*    | A unique id for this input    | null    |

  \* Required

  ## Notes

  * In order to support `v-model`, the input event is only emitting the raw value.
    To get the native event, use `@input.native` instead of `@input`
</docs>

<template>
  <div class="base-material-input">
    <input
      :id="id"
      class="input"
      :class="{ hasValue: hasValue }"
      :value="value"
      v-bind="$attrs"
      v-on="listeners"
    />
    <label class="label" :for="id">{{ label }}</label>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    value: {
      type: [String, Number],
      default: "",
    },
    label: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
  },
  computed: {
    listeners() {
      return {
        ...this.$listeners,
        input: (event) => this.$emit("input", event.target.value),
      };
    },
    hasValue() {
      return this.value && this.value.length > 0;
    },
  },
};
</script>

<style lang="scss" scoped>
.base-material-input {
  position: relative;
  width: 100%;
  margin: 40px 0 20px;
}

.label {
  position: absolute;
  top: 50%;
  left: 0;
  font-size: 16px;
  font-weight: 400;
  color: var(--blue-gray-300);
  pointer-events: none;
  user-select: none;
  transition: all var(--easing-fast) var(--easing-standard);
  transform: translateY(-50%);
  transform-origin: left;
}

.input {
  width: 100%;
  padding: 12px 0 6px;
  font-size: 16px;
  color: var(--blue-gray-500);
  border: 0;
  border-bottom: 2px solid var(--blue-gray-100);
  border-radius: 0;
  transition: border-color var(--easing-fast) var(--easing-standard);

  &:-webkit-autofill {
    color: var(--blue-gray-500) !important;
    -webkit-box-shadow: 0 0 0 1000px var(--white) inset;
    -webkit-text-fill-color: var(--blue-gray-500);
  }

  &[disabled] {
    cursor: not-allowed;
  }

  &:focus {
    color: var(--blue-gray-500);
    border-color: var(--blue-gray-800);
    outline: 0;

    &:-webkit-autofill {
      color: var(--blue-gray-800) !important;
      -webkit-box-shadow: 0 0 0 1000px var(--white) inset;
      -webkit-text-fill-color: var(--blue-gray-800);
    }
  }

  .hasValue,
  .input:focus {
    + .label {
      top: -10px;
      color: var(--blue-gray-800);
      transform: scale(0.8);
    }
  }

  &:hover:not([disabled]) {
    border-color: var(--blue-gray-500);
    transition: none;

    &:focus {
      border-color: var(--blue-gray-800);
    }
  }
}
</style>

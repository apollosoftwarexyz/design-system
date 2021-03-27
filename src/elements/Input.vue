<template>
  <input type="text" :class="{ error }" />
</template>

<script>
/**
 * The input component wraps the vanilla HTML input element and adds common theming options.
 *
 * Inputs are commonly used in forms to request data from the user.
 */
export default {
  name: "Input",
  status: "prototype",

  props: {
    /**
     * If a validation error occurs, either set this to an error message or to `true`.
     *
     * If the field is set to `true`, the field accent colors will be changed to `$color-error`, however
     * no message will be displayed. If the field is set to a string, the accent colors will be changed to
     * `$color-error` **and** the error message will be displayed as a hint to the user.
     */
    error: {
      type: [Boolean, String],
      required: false,
    },
  },
}
</script>

<style lang="scss" scoped>
input {
  box-shadow: $shadow-md;

  border-radius: $radius-rounded;
  border-color: $color-apollo;

  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  background-color: $color-white;
  border-width: 1px;
  padding: $space-xxs $space-xs;
  margin: $space-xxs $space-xs;
  font-size: $size-sm;
  line-height: 1.5rem;

  box-sizing: border-box;
  border-style: solid;

  font-family: $font-text;
  color: $color-apollo-dark;

  width: 300px;

  &:focus {
    border-color: $color-apollo;
    outline: 2px solid transparent;
    outline-offset: 2px;
    box-shadow: 0 0 0 0 #fff, 0 0 0 calc(1px + 0px) $color-apollo, 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  }

  &.error {
    color: $color-error;
    border-color: $color-error;

    &:focus {
      box-shadow: 0 0 0 0 #fff, 0 0 0 calc(1px + 0px) $color-error, 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    }
  }
}
</style>

<docs>
```vue
<div>
    <Input placeholder="First name" />
    <Input placeholder="Last name" error />
</div>
```
</docs>

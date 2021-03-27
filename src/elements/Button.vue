<template>
  <button :class="{ pointer, block, secondary }"><slot /></button>
</template>

<script>
export default {
  name: "Button",
  status: "prototype",

  props: {
    /**
     * When true, the button is classed as a 'secondary' button. This applies a muted color to the button to
     * ensure that focus is directed towards a primary button instead.
     */
    secondary: {
      type: Boolean,
      required: false,
      default: false,
    },

    /**
     * When true, forces the cursor to take the 'link' appearance when hovering over the button.
     *
     * If you're building a web application, you should generally prefer this to be `false`, however
     * for websites it may appear more natural to set this to `true` as it more closely matches the
     * user's expectation.
     */
    pointer: {
      type: Boolean,
      required: false,
      default: false,
    },

    /**
     * Whether the button should fill the width of its parent container.
     */
    block: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
}
</script>

<style lang="scss" scoped>
button {
  background-color: $color-apollo;
  border-color: $color-apollo;

  border-radius: $radius-rounded;
  box-shadow: $shadow-s-inset;

  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  -webkit-user-select: none;
  user-select: none;

  border-width: 1px;
  font-size: $size-ui-default;

  box-sizing: border-box;
  border-style: solid;

  font-family: $font-text;
  //font-weight: $weight-semi-bold;
  color: $color-white;

  letter-spacing: $tracking-wide;
  text-align: center;

  line-height: 1.25rem;

  padding: $space-xs #{$space-m - $space-xxs};

  transition: color 0.2s ease, border-color 0.2s ease, background-color 0.2s ease,
    transform 0.2s ease;

  &.pointer {
    cursor: pointer;
  }

  &.block {
    display: block;
    width: 100%;
  }

  &:hover {
    background-color: $color-apollo-light;
    border-color: $color-apollo-light;
  }

  &:active {
    transform: scale(0.95);
  }

  &.secondary {
    background-color: $color-silver;
    border-color: $color-silver;

    &:hover {
      background-color: $color-pale-silver;
      border-color: $color-pale-silver;
    }
  }
}
</style>

<docs>
  ```vue
  <div class="container">
    <Button>Button</Button>
    <Button secondary>Button</Button>
    <Button pointer>Button</Button>

    <Button block>Continue to <b>Unknown Application</b> &rarr;</Button>
  </div>
  ```
</docs>

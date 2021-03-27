<template>
  <button
    @click.prevent="$emit('click', $event)"
    :class="{ pointer, block, secondary, disabled }"
    :disabled="disabled"
    :type="submit ? 'submit' : null"
  >
    <slot />
  </button>
</template>

<script>
/**
 * The Button element wraps the vanilla HTML button and adds common theming options.
 *
 * Buttons are used to invoke a specific action in the context of its parent container. Buttons should **not** be
 * used for navigation, you should use a [Link](#/Elements/Link) instead.
 *
 * The caption of the button should be kept as concise as possible. For example, you should prefer "Login" and
 * "Register" over "Sign in" and "Sign up" (particularly as the two can be easily conflated by inexperienced users
 * due to their apparent similarity).
 *
 * Additionally, extra details should only be included to draw the user's attention to a certain aspect of the
 * action that will be performed. For example, "Continue to Unknown Application" might be used on a shared login page
 * instead of "Continue" to emphasize to the user the application they are logging into.
 */
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

    /**
     * Whether or not the button is disabled. If it is, user interaction is disabled and the button
     * will appear 'grayed-out' to indicate as such to the user.
     */
    disabled: {
      type: Boolean,
      required: false,
      default: false,
    },

    /**
     * If you want to use the button to submit an HTML form, you may apply the `submit` property.
     */
    submit: {
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
  box-shadow: $shadow-md;

  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  -webkit-user-select: none;
  user-select: none;

  border-width: 1px;
  font-size: $size-sm;

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

  &:not(.disabled):active {
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

  &.disabled {
    background-color: lighten($color-silver, 30%);
    border-color: lighten($color-silver, 30%);
  }
}
</style>

<docs>
  ```vue
  <template>
    <div class="container">
      <Button @click="handleClick">Click</Button>
      <Button @click="resetClicks" secondary>Reset</Button>
      <Button pointer>Button</Button>
      <Button disabled>{{ clicked }} click(s)</Button>

      <Button block>Continue to <b>Unknown Application</b> &rarr;</Button>
    </div>
  </template>

  <!-- Included for demo purposes. -->
  <script>
    export default {
      data: () => ({ clicked: 0 }),

      methods: {
        handleClick () { this.clicked += 1; },
        resetClicks () { this.clicked  = 0; }
      }
    }
  </script>
  ```
</docs>

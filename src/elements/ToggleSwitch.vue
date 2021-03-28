<template>
  <div @click.prevent="toggle" class="switch" :class="{ on: value, large }">
    <span class="handle" />
  </div>
</template>

<style scoped lang="scss">
@mixin sizedSwich($width: 32px, $height: 16px, $handleSpacing: 4px) {
  width: $width;
  height: $height;

  .handle {
    margin: $handleSpacing;
    height: #{$height - ($handleSpacing * 2)};
    width: #{$height - ($handleSpacing * 2)};
  }

  &.on {
    .handle {
      left: #{$width - $height};
    }
  }
}

.switch {
  @include sizedSwich();

  &.large {
    @include sizedSwich(48px, 24px, 6px);
  }

  position: relative;
  display: inline-block;
  border-radius: $radius-full;
  padding: 0;
  margin: $space-xxs;
  cursor: default;

  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;

  vertical-align: text-bottom;

  &.pointer {
    cursor: pointer;
  }

  background: $color-pale-silver;
  border: 1px solid $color-pale-silver;

  .handle {
    position: absolute;
    display: inline-block;
    border-radius: $radius-full;
    pointer-events: none;

    transition: all 0.2s ease-in-out;
    background: $color-white;

    left: 0;
  }

  &.on {
    background: $color-apollo;
    border: 1px solid $color-apollo;
  }
}
</style>

<script>
/**
 * ### Switches allow you to toggle a value between two possible states.
 *
 * ##### This element has been named **ToggleSwitch** instead of Switch to prevent collision with the HTML [`<switch>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/switch) element which has conflicting functionality.
 *
 * They are commonly used for switching a value between 'on' or 'off' states as an alternative to a checkbox
 * [Input](#/Elements/Input).
 *
 * Generally you choose between a checkbox and a Switch based on when the change will be applied. With Switches,
 * the changes are usually applied immediately after toggling the switch meaning switches are generally used for
 * values that can be toggled immediately or close to immediately. Checkboxes, on the other hand, are typically
 * used in forms or dialogs.
 *
 * You should **avoid** using Switches in forms or modal dialogs as it is not intuitively clear if the change will
 * be applied immediately after toggling the value or upon form submission or modal close.
 */
export default {
  name: "ToggleSwitch",
  status: "review",
  version: "0.0.1",

  props: {
    large: {
      type: Boolean,
      default: false,
      required: false,
    },

    value: {
      type: Boolean,
      default: false,
      required: false,
    },
  },

  methods: {
    toggle() {
      this.$emit("input", (this.value = !this.value))
    },
  },
}
</script>

<docs>
```vue
<template>
  <div>
    <p><ToggleSwitch v-model="value" /> {{ value }}</p>
    <p><ToggleSwitch large v-model="value" /></p>
  </div>
</template>

<script>
export default {
  data: () => ({ value: false })
}
</script>
```
</docs>

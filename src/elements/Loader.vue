<template>
  <div class="loader">
    <div class="inner" :class="{ large }">
      <svg class="circular" viewBox="25 25 50 50">
        <circle class="path path3" cx="50" cy="50" r="20" />
        <circle class="path path2" cx="50" cy="50" r="20" />
        <circle class="path" cx="50" cy="50" r="20" />
      </svg>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$loader-color: $color-apollo;

.loader {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;

  margin: $space-s;
}

.inner {
  position: relative;
  display: inline-block;
  height: 32px;
  width: 32px;

  &.large {
    height: 52px;
    width: 52px;

    .path {
      stroke-width: 4px;
    }
  }

  -webkit-transform: rotate(280deg);
  transform: rotate(280deg);
}

.circular {
  -webkit-animation: loader 2s linear infinite;
  animation: loader 2s linear infinite;
  height: 100%;
  width: 100%;
}

.path {
  -webkit-animation: segment 2s ease-in-out infinite;
  animation: segment 2s ease-in-out infinite;
  stroke-dasharray: 1, 200;
  stroke-dashoffset: 0;
  fill: none;
  stroke-width: 6;
  stroke-miterlimit: 10;
  stroke-linecap: round;

  stroke: $color-apollo;
}

.path2 {
  -webkit-animation-delay: 0.15s;
  animation-delay: 0.15s;

  stroke: $color-apollo-light;
  opacity: 0.6;
}

.path3 {
  -webkit-animation-delay: 0.23s;
  animation-delay: 0.23s;

  stroke: $color-apollo-lighter;
  opacity: 0.3;
}

@keyframes loader {
  to {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes segment {
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 130, 200;
  }

  to {
    stroke-dasharray: 130, 200;
    stroke-dashoffset: -124;
  }
}
</style>

<script>
export default {
  name: "Loader",
  status: "review",

  props: {
    /**
     * If set, renders a large loader widget instead.
     */
    large: {
      type: Boolean,
      default: false,
      required: false,
    },
  },
}
</script>

<docs>
```vue
<div>
    <Loader />
    <Loader large />
</div>
```
</docs>

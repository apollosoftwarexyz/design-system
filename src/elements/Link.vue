<template>
  <router-link :to="to" v-if="router && !blank"><slot /></router-link>
  <a @click="handleClick" :href="to" :target="blank ? '_blank' : null" v-else>
    <slot /><template v-if="blank && !iconless">
      <svg
        width="12"
        height="12"
        xmlns="http://www.w3.org/2000/svg"
        fill-rule="evenodd"
        clip-rule="evenodd"
        viewBox="0 0 24 24"
      >
        <path
          d="M14 4h-13v18h20v-11h1v12h-22v-20h14v1zm10 5h-1v-6.293l-11.646 11.647-.708-.708 11.647-11.646h-6.293v-1h8v8z"
        /></svg
    ></template>
  </a>
</template>

<style lang="scss" scoped>
a {
  text-decoration: none;
  color: $color-apollo;
  font-family: $font-text;

  &:hover {
    color: $color-apollo-dark;
  }

  svg {
    margin: 0 4px;
  }
}
</style>

<script>
/**
 * ### Links are navigational elements generally used in sentences or paragraphs to redirect the user to another page.
 *
 * Links are purely navigational elements. They should **not** be used for invoking specific actions, you should use a
 * [Button](#/Elements/Button) instead. A notable exception to this rule is that you might use a link to open a modal
 * dialog containing extra content though arguably this is a form of navigation.
 *
 * When deciding upon what part of a text paragraph to make a link, you should generally try to encapsulate the
 * smallest [imperative clause](https://en.wikipedia.org/wiki/Imperative_mood#English) relevant to the link. For example, considering the phrase "...for more information,
 * please read our terms and conditions", you should encapsulate "read our terms and conditions" with the link.
 *
 * The other recommended way to use links is used frequently throughout this documentation; providing context to a term
 * or phrase by encapsulating it with a link - see the above example with the term "imperative clause". This is suitable
 * when the link provides an explaination or meaning of the encapsulated term, notice that it is intuitively clear
 * that the link explains the term when this is done correctly.
 *
 * Links generally should not be used on their own as that would suggest the use of a Button is more suitable. For
 * example, a section of promotional text would be better followed by a 'Sign Up' or 'Buy Now' button rather than a
 * standalone link as it can be considered a specific action that the user may perform rather than just purely a page
 * redirect, however as suggested above a link might be used inside the text section to link to a terms and conditions
 * page.
 *
 * A link's caption should make it immediately obvious what action is going to be performed so you should avoid
 * captioning a link with "click here", for example.
 */
export default {
  name: "Link",
  status: "review",
  version: "0.0.1",

  props: {
    /**
     * The target of the link.
     *
     * This property is required because links are purely navigational elements and should not be used to perform
     * actions.
     *
     * **(!) NOTE:** If you *need* a link to execute code (e.g. to generate the target URL), you must explicitly set
     * this to `#` and then use the `@click` event. If you do not set the link target to `#`, the event handler will
     * be ignored.
     */
    to: {
      type: String,
      required: true,
    },

    /**
     * If you're using Vue with `vue-router` (or Nuxt.js), you can set `router` to true to render
     * a `router-link` instead of a plain HTML `<a>` tag.
     */
    router: {
      type: Boolean,
      default: false,
      required: false,
    },

    /**
     * Opens the link in a new tab or window (depending on the browser, though most commonly a new tab is opened).
     *
     * **NOTE:** When this is set, the value of `router` will be ignored.
     */
    blank: {
      type: Boolean,
      default: false,
      required: false,
    },

    /**
     * Hides the icon that is automatically generated when `blank` is `true` to indicate that the link will open
     * in a new tab/window.
     *
     * If `blank` is not set, this property will be ignored.
     */
    iconless: {
      type: Boolean,
      default: false,
      required: false,
    },
  },

  methods: {
    handleClick($event) {
      if (this.to == "#") {
        $event.preventDefault()
        this.$emit("click", $event)
      }
    },
  },

  computed: {
    clickEvent() {
      if (this.to == "#") return "click.prevent"
      else return null
    },
  },
}
</script>

<docs>
```vue
<template>
    <div>
        <Link to="https://google.com/" blank>Link</Link>
        <Link to="https://google.com/" blank iconless>Link</Link>

        <p>For more information, please <Link to="#" @click="readTerms">read our terms and conditions</Link>.</p>
    </div>
</template>

<script>
export default {
    methods: {
        readTerms () { alert("Terms and conditions modal goes here..."); }
    }
}
</script>
```
</docs>

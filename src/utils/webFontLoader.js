/**
 * The Web Font Loader handles font loading.
 * For full documentation, see: https://github.com/typekit/webfontloader
 */
import WebFont from "webfontloader"

WebFont.load({
  google: {
    families: ["Jost:300,400,500,600,700", "Inter:300,400,500,600,700"],
  },
  /*custom: {
    families: ["Jost"],
    urls: ["https://static.apollosoftware.xyz/branding/fonts/?no_styles=true"],
  },*/
})

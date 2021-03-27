/**
 * The Web Font Loader handles font loading.
 * For full documentation, see: https://github.com/typekit/webfontloader
 */
import WebFont from "webfontloader"

WebFont.load({
  /*google: {
    families: ["Fira+Sans:300,400,400i,600,700"],
  },*/
  custom: {
    families: ["Jost"],
    urls: ["https://static.apollosoftware.xyz/branding/fonts/?no_styles=true"],
  },
})

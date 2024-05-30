import theme from "@lando/vitepress-theme-default-plus";
import Layout from "./Layout.vue";
import "./custom.css";

export default {
  extends: theme,
  Layout,
  NotFound: () => "404", // <- this is a Vue 3 functional component
  enhanceApp({ app, router, siteData }) {
    // app is the Vue 3 app instance from createApp()
    // router is VitePress' custom router (see `lib/app/router.js`)
    // siteData is a ref of current site-level metadata.
  },
};

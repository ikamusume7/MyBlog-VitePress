import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";
import Layout from "./views/Layout.vue";
import "./styles/custom.css";
import DemoPreview, { useComponents } from "@vitepress-code-preview/container";
import "@vitepress-code-preview/container/dist/style.css";

export default {
  extends: DefaultTheme,
  Layout,
  NotFound: () => "404", // <- this is a Vue 3 functional component
  enhanceApp({ app, router, siteData }) {
    // app is the Vue 3 app instance from createApp()
    // router is VitePress' custom router (see `lib/app/router.js`)
    // siteData is a ref of current site-level metadata.
    useComponents(app, DemoPreview);
  },
} satisfies Theme;

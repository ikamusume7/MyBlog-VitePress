import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";
import Layout from "./views/Layout.vue";
import "./styles/custom.css";
import { Sandbox } from "vitepress-plugin-sandpack";
import "vitepress-plugin-sandpack/dist/style.css";
import "vitepress-markdown-timeline/dist/theme/index.css";
import "overlayscrollbars/overlayscrollbars.css";
import { onMounted } from "vue";
import { OverlayScrollbars } from "overlayscrollbars";

export default {
  extends: DefaultTheme,
  Layout,
  NotFound: () => "404", // <- this is a Vue 3 functional component
  enhanceApp({ app, router, siteData }) {
    // app is the Vue 3 app instance from createApp()
    // router is VitePress' custom router (see `lib/app/router.js`)
    // siteData is a ref of current site-level metadata.
    app.component("Sandbox", Sandbox);
  },
  setup() {
    onMounted(() => {
      OverlayScrollbars(document.body, {
        scrollbars: { theme: "os-theme-custom" },
      });
    });
  },
} satisfies Theme;

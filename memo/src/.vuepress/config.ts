import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { searchProPlugin } from "vuepress-plugin-search-pro";
import { removePWAPlugin } from "vuepress-plugin-remove-pwa";

export default defineUserConfig({
  base: "/",
  lang: "zh-CN",
  title: "Yorun's Memorandum",
  theme,
  plugins: [
    searchProPlugin({
      indexContent: true,
    }),
    removePWAPlugin({}),
  ],
});

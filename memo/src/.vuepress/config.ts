import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { searchPlugin } from "@vuepress/plugin-search";

export default defineUserConfig({
  base: "/",
  lang: "zh-CN",
  title: "Yorun's Memorandum",
  theme,
  plugins: [searchPlugin()],
});

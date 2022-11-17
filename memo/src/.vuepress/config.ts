import { getDirname, path } from "@vuepress/utils";
import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { searchPlugin } from "@vuepress/plugin-search";

const __dirname = getDirname(import.meta.url);

export default defineUserConfig({
  base: "/",
  lang: "zh-CN",
  title: "Yorun's Memorandum",

  theme,

  alias: {
    "@theme-hope/components/HomePage.js": path.resolve(
      __dirname,
      "../../node_modules/vuepress-theme-hope/lib/client/modules/blog/components/BlogHero.js"
    ),
  },

  plugins: [searchPlugin()],
});

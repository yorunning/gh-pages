import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { searchProPlugin } from "vuepress-plugin-search-pro";
import { removePWAPlugin } from "vuepress-plugin-remove-pwa";
import { autoCatalogPlugin } from "vuepress-plugin-auto-catalog";

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
    autoCatalogPlugin({
      frontmatter: (path) => {
        const frontmatterArgs = { title: "", icon: "" };
        if (path === "/linux/") {
          frontmatterArgs.title = "Linux";
          frontmatterArgs.icon = "linux";
        }
        if (path === "/linux/archlinux/") {
          frontmatterArgs.title = "ArchLinux安装";
          frontmatterArgs.icon = "archlinux";
        }
        return frontmatterArgs;
      },
    }),
  ],
});

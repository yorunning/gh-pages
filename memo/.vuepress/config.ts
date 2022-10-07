import { defineUserConfig } from "vuepress";
import type { DefaultThemeOptions } from "vuepress";
import recoTheme from "vuepress-theme-reco";

export default defineUserConfig({
  title: "Yorun\'s Memorandum",
  description: "Just playing around",
  theme: recoTheme({
    style: "@vuepress-reco/style-default",
    logo: "/logo1.png",
    author: "Yorun",
    docsRepo: "https://github.com/vuepress-reco/vuepress-theme-reco-demo",
    docsBranch: "demo/2.x",
    docsDir: "/",
    lastUpdatedText: "",
    navbar: [
      { text: "Home", link: "/" },
      {
        text: "Docs",
        children: [{ text: "vuepress-reco", link: "/docs/theme-reco/theme" }],
      },
    ],
    series: {
      "/docs/theme-reco/": [
        {
          text: "module one",
          children: ["home", "theme"],
        },
        {
          text: "module two",
          children: ["api", "plugin"],
        },
      ],
    },
  }),
});

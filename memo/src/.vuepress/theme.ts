import { hopeTheme } from "vuepress-theme-hope";
import { Navbar } from "./navbar.js";
import { Sidebar } from "./sidebar.js";

export default hopeTheme({
  hostname: "https://memo.yorun.me",

  author: {
    name: "Yorun",
    url: "https://yorun.me",
  },

  logo: "/logo.png",
  repo: "https://github.com/yorunning/gh-pages/tree/main/memo",

  navbar: Navbar,
  sidebar: Sidebar,

  pageInfo: ["Author", "Date", "Word", "ReadingTime"],
  editLink: false,

  displayFooter: true,
  footer: (() => "Copyright © 2022-" + new Date().getFullYear().toString() + " Yorun")(),
  copyright: false,

  iconAssets: "//at.alicdn.com/t/c/font_3746206_8xqwnciqdog.css",

  plugins: {
    readingTime: {
      wordPerMinute: 60,
    },
    
    mdEnhance: {
      align: true,
      attrs: true,
      chart: true,
      codetabs: true,
      container: true,
      demo: true,
      echarts: true,
      flowchart: true,
      gfm: true,
      imageLazyload: true,
      imageTitle: true,
      imageSize: true,
      include: true,
      katex: true,
      mark: true,
      mermaid: true,
      playground: {
        presets: ["ts", "vue"],
      },
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
      stylize: [
        {
          matcher: "Recommanded",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommanded",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,
      vuePlayground: true,
    },
  },
});

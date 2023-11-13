import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme({
  hostname: "https://memo.yorun.me",

  author: {
    name: "Yorun",
    url: "https://yorun.me",
  },

  logo: "/logo.png",
  repo: "https://github.com/yorunning/gh-pages/tree/main/memo",

  navbar,
  sidebar,

  pageInfo: ["Author", "Date", "Word", "ReadingTime"],
  editLink: false,

  displayFooter: true,
  footer: (() =>
    "Copyright © 2022-" + new Date().getFullYear().toString() + " Yorun")(),
  copyright: false,

  iconAssets: "//at.alicdn.com/t/c/font_3746206_bcbv3eyzazq.css",

  plugins: {
    readingTime: {
      wordPerMinute: 60,
    },

    mdEnhance: {
      align: true,
      attrs: true,

      // install chart.js before enabling it
      // chart: true,

      codetabs: true,

      // insert component easily
      // component: true,

      demo: true,

      // install echarts before enabling it
      // echarts: true,

      figure: true,

      // install flowchart.ts before enabling it
      // flowchart: true,

      // gfm requires mathjax-full to provide tex support
      // gfm: true,

      imgLazyload: true,
      imgSize: true,
      include: true,

      // install katex before enabling it
      // katex: true,

      // install mathjax-full before enabling it
      // mathjax: true,

      mark: true,

      // install mermaid before enabling it
      // mermaid: true,

      playground: {
        presets: ["ts", "vue"],
      },

      // install reveal.js before enabling it
      // revealJs: {
      //   plugins: ["highlight", "math", "search", "notes", "zoom"],
      // },

      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,

      // install @vue/repl before enabling it
      // vuePlayground: true,
    },
  },
});

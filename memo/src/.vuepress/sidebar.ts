import { sidebar } from "vuepress-theme-hope";

export const Sidebar = sidebar({
  "/archlinux/": [
    {
      text: "ArchLinux安装",
      // prefix: "/archlinux/",
      children: [
        "preinstallation",
        "basic-installation",
        "desktop-environment-installation",
        "use-configuration",
        "dual-system",
      ],
    },
  ],
});

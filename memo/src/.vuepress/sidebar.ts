import { sidebar } from "vuepress-theme-hope";

export const Sidebar = sidebar({
  "/": [
    {
      text: "ArchLinux安装",
      icon: "linux",
      prefix: "archlinux/",
      children: [
        "preinstallation",
        "basic-installation",
        "desktop-environment-installation",
        "use-configuration",
        "dual-system",
      ],
    },
  ],

  "/archlinux/": [
    {
      text: "ArchLinux安装",
      icon: "linux",
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

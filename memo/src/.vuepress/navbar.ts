import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "Linux",
    icon: "linux",
    prefix: "/linux/",
    children: [
      {
        text: "ArchLinux安装",
        icon: "archlinux",
        link: "archlinux/preinstallation",
      },
      "pacman",
    ],
  },
]);

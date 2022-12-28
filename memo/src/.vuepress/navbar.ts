import { navbar } from "vuepress-theme-hope";

export const Navbar = navbar([
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

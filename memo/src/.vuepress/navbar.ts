import { navbar } from "vuepress-theme-hope";

export const Navbar = navbar([
  {
    text: "Home",
    icon: "home",
    link: "/",
  },
  {
    text: "Linux",
    icon: "linux",
    children: [
      {
        text: "ArchLinux安装",
        icon: "archlinux",
        link: "/archlinux/preinstallation",
      },
    ],
  },
]);

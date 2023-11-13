import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "ArchLinux安装",
      icon: "archlinux",
      link: "linux/archlinux/",
      prefix: "linux/archlinux/",
      // collapsible: true,
      children: [
        "preinstallation",
        "basic-installation",
        "desktop-environment-installation",
        "use-configuration",
        "dual-system",
      ],
    },
    "linux/pacman",
  ],

  // "/linux/": [
  //   {
  //     text: "ArchLinux安装",
  //     icon: "archlinux",
  //     link: "archlinux/",
  //     prefix: "archlinux/",
  //     children: [
  //       "preinstallation",
  //       "basic-installation",
  //       "desktop-environment-installation",
  //       "use-configuration",
  //       "dual-system",
  //     ],
  //   },
  //   "pacman",
  // ],
});

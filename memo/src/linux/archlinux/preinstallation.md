---
title: 安装前准备
icon: article
date: 2022-10-24
---

### 1.制作安装盘

[https://www.ventoy.net/cn/download.html](https://www.ventoy.net/cn/download.html)

### 2.下载安装镜像

[https://archlinux.org/download/](https://archlinux.org/download/)

### 3.BIOS 设置

关闭 secure boot，调整启动模式为 UEFI mode，设置安装 U 盘为第一启动项。

### 4.分区方案

Arch Linux：

|    分区    | 挂载点 |   容量   |
| :--------: | :----: | :------: |
|  EFI 分区  | /boot  |   512M   |
|   根目录   |   /    |   128G   |
| 用户家目录 | /home  | 剩余容量 |
| Swap 分区  |        |   10G    |

Windows（可选）

|   分区   | 挂载点 | 容量 |
| :------: | :----: | :--: |
| EFI 分区 |  共享  |      |
|  系统盘  |  C:\   | 128G |
|  文件盘  |  D:\   | 300G |

### 5.相关链接

[Installation guide](https://wiki.archlinux.org/title/Installation_guide)

[AchLinuxTutorial](https://archlinuxstudio.github.io/ArchLinuxTutorial/#/)

[ArchLinux 简明指南](https://arch.icekylin.online/)

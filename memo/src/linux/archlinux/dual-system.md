---
title: 双系统相关问题
icon: article
date: 2022-10-24
---

### 1.开机始终进 Windows

进入 Windows 系统电源选项关闭快速启动，BIOS 引导项设置为 refind。

### 2.EFI 分区容量太小

直接用 Windows 镜像安装会创建一个 100M 的 EFI 分区，先用 archiso 创建 EFI 分区，再安装 Windows 时会使用自定义大小的 EFI 分区。

[Arch Wiki](https://wiki.archlinux.org/title/Dual_boot_with_Windows#The_EFI_system_partition_created_by_Windows_Setup_is_too_small)

### 3.时间错乱

原因：Windows 会将硬件时间（BIOS 上显示的）作为本地时间（系统内显示的），Linux 采用硬件时间+时区的形式作为本地时间。

修复方法：修改 Windows 硬件时钟为 UTC 时间。

```powershell
reg add "HKEY_LOCAL_MACHINE\System\CurrentControlSet\Control\TimeZoneInformation" /v RealTimeIsUniversal /d 1 /t REG_DWORD /f
```

[Arch Wiki](https://wiki.archlinux.org/title/System_time#UTC_in_Microsoft_Windows) | [https://eason0210.github.io/post/clock-issue-with-dual-system/](https://eason0210.github.io/post/clock-issue-with-dual-system/)

### 4.启动动画分辨率低

高分屏启动画面拉伸、模糊，开启最高图形模式以修复。

```powershell
bcdedit /set highestmode yes
```

开机动画显示主板徽章而不显示 Windows 徽章，进入 BIOS 设置关闭主板徽章项。

[bcdedit docs](https://learn.microsoft.com/en-us/windows-hardware/drivers/devtest/bcdedit--set#display-settings)

### 5.关闭休眠

```powershell
powercfg -h off
```

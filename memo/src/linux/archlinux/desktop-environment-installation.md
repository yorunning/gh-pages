---
title: 桌面环境安装
icon: article
date: 2022-10-24
order: 3
---

### 1.更新系统

```bash
pacman -Syu
```

### 2.添加新用户

```bash
useradd -m -G wheel -s /bin/bash yorun  # 添加用户
passwd yorun                            # 设置密码
EDITOR=vim visudo  # 编辑sudoers配置文件，去掉#%wheel ALL=(ALL) ALL行注释
```

### 3.安装桌面环境和软件

```bash
pacman -S plasma-meta konsole dolphin ark kate gwenview vlc spectacle
```

### 4.开启 display manager

```bash
systemctl enable sddm
```

### ~~5.开启 32 位支持库~~

```bash
vim /etc/pacman.conf  # 去掉[multilib]一节中的注释
pacman -Syu           # 刷新
reboot                # 重启
```

### 6.网络设置

```bash
sudo systemctl enable --now NetworkManager
sudo pacman -Rs dhcpcd
```

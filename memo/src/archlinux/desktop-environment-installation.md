---
title: 桌面环境安装
date: 2022-10-24
---

### 1.连接网络

```bash
systemctl start dhcpcd  # 立即启动dhcp
ping www.baidu.com      # 测试网络连接
```

### 2.更新系统

```bash
pacman -Syu
```

### 3.添加新用户

```bash
useradd -m -G wheel -s /bin/bash yorun  # 添加用户
passwd yorun                            # 设置密码
EDITOR=vim visudo  # 编辑sudoers配置文件，去掉#%wheel ALL=(ALL) ALL行注释
```

### 4.安装 plasma 桌面环境和 kde 软件

```bash
pasman -S plasma-meta konsole dolphin ark kate gwenview vlc  # partitionmanaer kdf
```

### 5.开启 display manager

```bash
systemctl enable sddm
```

### 6.开启 32 位支持库

```bash
vim /etc/pacman.conf  # 去掉[multilib]一节中的注释
pacman -Syu           # 刷新
reboot                # 重启
```

### 7.网络设置

```bash
sudo systemctl disable --now iwd
sudo systemctl enable --now NetworkManager
```

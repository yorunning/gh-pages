---
title: 基础安装
date: 2022-10-24
---

### 1.禁用 reflector

```bash
systemctl stop reflector.service
```

### 2.确保是否为 UEFI mode

```bash
ls /sys/firmware/efi/efivars
```

### 3.连接网络（有线）

```bash
ping www.baidu.com  # 测试网络连通性
```

### 4.更新系统时钟

```bash
timedatectl set-ntp true  # 将系统时间与网络时间进行同步
timedatectl status        # 检查服务状态
```

### 5.分区

将磁盘转换为 gpt 类型

```bash
lsblk                     # 显示分区情况，找到你想安装的磁盘名称
parted /dev/nvme0n1       # 执行parted，进入交互式命令行，进行磁盘类型变更
(parted)mktable           # 输入mktable
New disk label type? gpt  # 输入gpt，将磁盘类型转换为gpt，如磁盘有数据会警告，输入yes即可
quit                      # 最后quit退出parted命令行交互
```

根据分区方案对磁盘分区

```bash
cfdisk /dev/nvme0n1  # 来执行分区操作，分配各个分区大小，类型
fdisk -l             # 分区结束后，复查磁盘情况
```

### 6.格式化

```bash
mkfs.ext4 /dev/nvme0n1px  # 格式化根目录和home目录的两个分区
mkfs.vfat /dev/nvme0n1px  # 格式化efi分区
mkswap /dev/nvme0n1px     # 格式化swap分区
```

### 7.挂载

```bash
mount /dev/nvme0n1px /mnt       # 挂载根目录
mkdir /mnt/boot                 # 创建boot目录
mount /dev/nvme0n1px /mnt/boot  # 挂载EFI分区
mkdir /mnt/home                 # 创建home目录
mount /dev/nvme0n1px /mnt/home  # 挂载home分区
swapon /dev/nvme0n1px           # 挂载swap分区
```

### 8.配置镜像源

```bash
vim /etc/pacman.d/mirrorlist
```

```
Server = https://mirrors.ustc.edu.cn/archlinux/$repo/os/$arch  # 中科大
```

### 9.安装系统

```bash
pacstrap /mnt base linux linux-firmware  # 基础包
pacstrap /mnt dhcpcd iwd vim bash-completion  # 功能性包
```

### 10.生成 fstab 文件

```bash
genfstab -U /mnt >> /mnt/etc/fstab  # 生成
cat /mnt/etc/fstab                  # 复查
```

### 11.change root

```bash
arch-chroot /mnt  # 切换至新系统
```

### 12.时区设置

```bash
ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime  # 设置时区
hwclock --systohc  # 硬件时间设置
```

### 13.设置 Locale 进行本地化

```bash
vim /etc/locale.gen  # 去掉en_US.UTF-8和zh_CN.UTF-8所在行的注释
locale-gen           # 生成locale
echo 'LANG=en_US.UTF-8'  > /etc/locale.conf
```

### 14.设置主机名

```bash
vim /etc/hostname  # yorun-PC
vim /etc/hosts
```

```
127.0.0.1  localhost
::1        localhost
127.0.1.1  yorun-PC
```

### 15.为 root 用户设置密码

```bash
passwd root
```

### 16.安装微码

```bash
pacman -S amd-ucode  # AMD
```

### 17.安装引导程序

```bash
pacman -S refind
refind-install
blkid                        # 查看UUID
vim /boot/refind-linux.conf  # 填写UUID
```

### 18.完成安装

```bash
exit            # 退回安装环境
umount -R /mnt  # 卸载新分区
reboot          # 重启
```

```bash
systemctl start dhcpcd  # 立即启动dhcp
ping www.baidu.com      # 测试网络连接
```

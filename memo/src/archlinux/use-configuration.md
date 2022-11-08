---
title: 使用配置
date: 2022-10-24
---

### 1.安装显卡驱动

```bash
sudo pacman -S mesa lib32-mesa xf86-video-amdgpu vulkan-radeon lib32-vulkan-adeon libva-mesa-driver lib32-libva-mesa-driver mesa-vdpau lib32-mesa-vdpau
```

### 2.安装 aur 助手

```bash
sudo pacman -S --needed base-devel git
git clone https://aur.archlinux.org/paru-bin.git
cd paru-bin
makepkg -si
```

### 3.安装代理软件

```bash
paru -S clash-for-windows-bin
```

### 4.安装字体

```bash
sudo pacman -S noto-fonts-cjk noto-fonts-emoji  # 系统字体
sudo pacman -S ttf-fira-code                    # 编程字体
paru -S ttf-meslo-nerd-font-powerlevel10k       # 终端字体
paru -S noto-color-emoji-fontconfig             # 补全emoji
```

### 5.配置 zsh

```bash
sudo pacman -S zsh zsh-completions zsh-autosuggestions zsh-syntax-highlightig zsh-history-substring-search zsh-theme-powerlevel10k
paru -S oh-my-zsh-git

chsh -l             # 列出所有shell
chsh -s /full/path  # 切换shell

cd /usr/share/zsh/plugins/zsh-syntax-highlighting
sudo ln -s zsh-syntax-highlighting.zsh zsh-syntax-highlighting.plugin.zsh

cd /usr/share/zsh/plugins/zsh-history-substring-search
sudo ln -s zsh-history-substring-search.zsh zsh-history-substring-search.pluin.zsh

cd /usr/share/oh-my-zsh/custom/plugins
sudo ln -s /usr/share/zsh/plugins/zsh-autosuggestions
sudo ln -s /usr/share/zsh/plugins/zsh-syntax-highlighting
sudo ln -s /usr/share/zsh/plugins/zsh-history-substring-search

cd /usr/share/oh-my-zsh/custom/themes
sudo ln -s /usr/share/zsh-theme-powerlevel10k/powerlevel10k.zsh-theme

vim ~/.zshrc  # 配置theme和plugins
powerlevel10k
zsh-syntax-highlighting
zsh-autosuggestions
zsh-history-substring-search

p10k configure  # 设置主题
```

### 6.安装输入法

```bash
sudo pacman -S fcitx5-im fcitx5-chinese-addons fcitx5-pinyin-zhwiki
sudo vim /etc/environment
```

```
GTK_IM_MODULE=fcitx
QT_IM_MODULE=fcitx
XMODIFIERS=@im=fcitx
SDL_IM_MODULE=fcitx
```

### 7.确保 Discover 可用

```bash
sudo pacman -S packagekit-qt5
```

### 8.sddm 设置中文

```bash
sudo vim /usr/lib/systemd/system/sddm.service
```

```
Environment=LANG=zh_CN.UTF-8  # [Service]下添加
```

### 9.美化

|   item   | package                                 |
| :------: | :-------------------------------------- |
|  theme   | Sweet Ambar Blue                        |
|          | Sweet Mars                              |
| widgets  | Window Title Applet                     |
|          | Latte Spacer                            |
|          | Latte Separator                         |
|          | Better inline clock                     |
|          | Netspeed Widget                         |
|          | mediacontroller_plus                    |
|          | plasma5-applets-virtual-desktop-bar-git |
|    im    | fcitx5-skin-fluentdark-git              |
|  refind  | refind-theme-regular-git                |
| plymouth | plymouth-theme-arch-glow                |
|          | plymouth-theme-arch-breeze-git          |
|          | plymouth-theme-monoarch                 |

#### 桌面美化

```bash
sudo pacman -S latte-dock  # 任务栏增强
sudo pacman -S kvantum     # 窗口主题增强
paru -S kwin-bismuth-bin   # 窗口平铺
sudo pacman -S ksysguard   # Netspeed Widget依赖
```

#### refind 美化

```bash
paru -S refind-theme-regular-git  # 安装主题
vim /boot/EFI/refind/refind.conf  # 配置
```

```
timeout 5  # 启动菜单等待时间
dont_scan_dirs ESP:/EFI/boot  # 忽略启动菜单引导项
include themes/refind-theme-regular/theme.conf  # 设置主题
```

若启动菜单不能正确显示主题图标，原因为[如果/boot 是一个单独分区](https://wiki.archlinux.org/title/REFInd#For_kernels_automatically_detected_by_rEFInd)，refind 无法猜测发行版，从而显示了默认主题的图标。需要创建名为 **vmlinuz-linux.png** 和 **bootmgfw.png** 的图标到 **vmlinuz-linux** 和 **bootmgfw.efi** 对应的文件夹。

[Arch Wiki](https://wiki.archlinux.org/title/REFInd)

#### plymouth 美化

```bash
paru -S plymouth-git  # 安装Plymouth
lspci -v | grep -A10 VGA | grep driver  # 查看内核驱动
vim /etc/mkinitcpio.conf  # 编辑初始镜像配置，修改MODULES HOOKS
vim /boot/EFI/refind/refind_linux.conf  # 附加内核参数
```

```
quiet log_level=3 splash rd.udev.log_level=3 vt.global_cursor_default=0
```

```bash
paru -S plymouth-theme-arch-glow  # 安装主题
plymouth-set-default-theme -l     # 列出主题
sudo plymouth-set-default-theme -R  arch-glow  # 切换主题
```

[Arch Wiki](https://wiki.archlinux.org/title/Plymouth)

### 10.常用软件

| source | package                            |
| :----: | :--------------------------------- |
|  Arch  |                                    |
|  AUR   | telegram-desktop-bin               |
|        | icalingua++                        |
|        | yesplaymusic                       |
|        | netease-cloud-music                |
|        | microsoft-edge-stable-bin          |
|        | visual-studio-code-bin             |
|        | intellij-idea-ultimate-edition-jre |
|        | dbeaver-ee                         |

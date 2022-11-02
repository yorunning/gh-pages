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

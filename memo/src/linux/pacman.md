---
title: Pacman常用操作
icon: pacman
date: 2022-12-28
order: 2
---

| Action                   | Arch                             | Debian                         |
| :----------------------- | :------------------------------- | :----------------------------- |
| 搜索包                   | pacman -Ss                       | apt search                     |
| 安装包                   | pacman -S                        | apt install                    |
| 升级包                   | pacman -Syu                      | apt update && apt full-upgrade |
| 移除包                   | pacman -R                        | apt remove                     |
| 移除包及其依赖           | pacman -Rs                       | apt autoremove                 |
| 移除包及其配置           | pacman -Rn                       | apt purge                      |
| 移除包及其依赖和配置     | pacman -Rsn                      | apt autoremove --purge         |
| 移除不再需要的依赖包     | pacman -Qdtq &#124; pacman -Rs - | apt autoremove                 |
| 清除本地包缓存（未安装） | pacman -Sc                       | apt autoclean                  |
| 清除本地包缓存（全部）   | pacman -Scc                      | apt clean                      |
| 显示本地包信息           | pacman -Qi                       | apt show                       |
| 列出已安装但不在源中的包 | pacman -Qm                       |                                |
| 列出所有显式安装的包     | pacman -Qe                       |                                |

相关链接

[Pacman](https://wiki.archlinux.org/title/Pacman) | [Pacman/Rosetta](https://wiki.archlinux.org/title/Pacman/Rosetta)

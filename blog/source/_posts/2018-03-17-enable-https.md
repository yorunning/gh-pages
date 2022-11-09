---
title: 给网站挂把小绿锁
date: 2018-03-17 00:45:18
categories:
  - Web
---

话说现在谷歌、火狐都在全面推行 https，当浏览特定网站时，其浏览器就会出现一个很小的绿锁，并在地址旁标有“安全”字样。这个标志意味着这家网站使用了加密的网络协议 HTTPS。虽说我这个博客是个静态网站，但是也应该尽可能提高安全性能，巴拉巴拉... 好吧，我就是想增加逼格。(￢\_￢)

首先，GitHub Pages 不支持上传 SSL 证书。
[**CloudFlare**](https://www.cloudflare.com)是一家 CDN 提供商，它提供了免费的 https 服务(但不是应用 SSL 证书)。实现模式就是，用户到 CDN 服务器的连接为 https，而 CDN 服务器到 GithubPage 服务器的连接为 http，就是在 CDN 服务器那里加上反向代理。

1.注册并登录 CloudFlare，添加自己的域名并自动解析域名的 DNS 服务器，然后在域名注册商的控制台把自己域名的 DNS 服务器地址换成 CloudFlare 提供的 DNS 地址。等待域名在 Cloudflare 上处于活动状态。

2.在 DNS 页中添加两条 A 记录，把域名分别指向
192.30.252.153
192.30.252.154
这两个 GitHub 空间的地址。

3.在 Crypto 页中把 SSL 选项选为 Flexible，就是浏览器到 Cloudflare 为 https，Cloudflare 到 GitHub 还是 http。

4.稍等片刻～

完

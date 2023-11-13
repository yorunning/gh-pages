---
title: django部署小记
date: 2017-08-26 22:24:50
categories:
  - Programming
---

这段时间用 django 开发了我的第一个网站，正好可以拿来学习一下如何部署，折腾了几天，大致走通了，赶忙记录下来。

## 1.准备

有一台可以通过外网访问的服务器，我这里使用的是阿里云的学生机，9 块 9 一个月，非常实惠。

## 2.创建一个拥有超级权限的新用户

```
# 创建一个新用户
root@localhost:~# useradd -m -s /bin/bash yorun
# 加入超级权限组
root@localhost:~# usermod -a -G sudo yorun
# 设置密码
root@localhost:~# passwd yorun
# 切换到新用户
root@localhost:~# su - yorun
# 切换成功，@符号前面已经是新用户名而不是 root 了
yorun@localhost:~$
```

## 3.更新软件源

```
# 以下都是在控制台下执行，后文省去控制台前缀
yorun@localhost:~$ sudo apt update && sudo apt dist-upgrade -y
```

## 4.搭建 Python3 环境

```bash
# 安装相关依赖
sudo apt install python3-pip
sudo pip3 install virtualenv
sudo pip3 install virtualenvwrapper

# 配置.baserc文件
sudo vi ~/.baserc
# 输入以下内容
if [ -f /usr/local/bin/virtualenvwrapper.sh ];then
    export WORKON_HOME=~/.virtualenvs
    export VIRTUALENVWRAPPER_PYTHON=/usr/bin/python3
    source /usr/local/bin/virtualenvwrapper.sh
fi

# 切换到Python虚拟环境
mkvirtualenv new_project
```

## 5.从 GitHub 下载项目以及安装项目所需依赖

```
git clone 仓库地址
pip install -r requirements.txt
```

## 6.配置 nginx 服务器

```
# 修改Nginx的配置文件
vi /etc/nginx/sites-available/default
# 替换至以下内容
listen 80;
server_name 127.0.0.1;
location / {
	# First attempt to serve request as file, then
	# as directory, then fall back to displaying a 404.
	# try_files $uri $uri/ =404;
    proxy_pass http://127.0.0.1:8000;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
}
location /static {
	alias /home/yorun/sites/demo.xiaohuo.com/xiaohuo/static;
}
```

## 7.安装 MySQL

```
sudo apt-get install mysql-server mysql-common mysql-client
sudo apt-get install libmysql-dev
sudo apt-get install libmysqlclient-dev
sudo apt-get install python-dev
pip install mysqlclient

# 导入初始数据
mysql -u root -p name < dump.txt
```

## 8.启动服务

```
# 启动gunicorn动态服务器
gunicorn --worker-class=gevent xiaohuo.wsgi:application
# 启动Nginx静态服务器
sudo service nginx restart
```

部署流程基本完成，小结下：
架构上 Nginx 做为静态服务器，是真正的 http 服务器，用于处理静态文件资源；
gunicorn 做为动态服务器，位于 http 服务器和应用层之间，用于处理后台数据。
Nginx 反向代理 gunicorn，gunicorn 与应用间使用 wsgi 通信。
![django-deploy](/images/django-deploy/django-deploy.png)

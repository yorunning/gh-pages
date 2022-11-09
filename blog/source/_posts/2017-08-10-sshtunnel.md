---
title: sshtunnel操作远程主机上的服务
date: 2017-08-10 23:25:51
categories:
  - Programming
---

有这样一个场景，A 主机上有一个爬虫程序，要把爬取的数据保存到 B 主机的数据库上。最先想到的就是`pymysql.connect(host='B主机的IP')`，但是有一个问题是要登录 B 主机后才能操作 B 主机的数据库。解决方案是使用端口绑定。

使用的模块：pymysql,sshtunnel

```python
import pymysql # python操作mysql的模块
from sshtunnel import SSHTunnelForwarder # 端口绑定模块

'''
打开ssh登录远程主机，把远程主机3306端口绑定到本地10000端口，
在本地操作10000端口就是在操作远程3306端口。
'''
with SSHTunnelForwarder(
    ('B主机的IP', 22),  # 使用ssh端口（22）登录
    ssh_username="host_name",   # B主机账号
    ssh_password="host_passwd", # B主机密码
    # ssh_pkey="/home/kk/key.pem", # 公匙登录，可选
    remote_bind_address=('127.0.0.1', 3306), # B主机端口，mysql：3306
    local_bind_address=('127.0.0.1',10000)   # A主机端口，不要用内定的(0-1023）
) as tunnel:

conn = pymysql.connect(
    host='127.0.0.1',
    port=10000, # 在A主机操作10000端口就行了
    user='username',
    passwd='passwd',
    db='dbname',
    charset='utf8',
    cursorclass=pymysql.cursors.DictCursor
)

try:
    with conn.cursor() as cursor:
        sql = 'insert into tablename (id,name,age) values (%s,%s,%s)'
        cursor.execute(sql, (id,name,age))
        conn.commit()
finally:
    conn.close()
```

# 网站部署

## ecs服务器



## nginx下载、配置

在阿里云lnmp环境配置中，下载安装，默认安装在/etc/nginx

使用nginx时关闭防火墙

nginx监听80端口，设置云服务器的安全组

启动nginx使用sudo

nginx.conf

```shell
# 进入/usr/local/nginx/conf/目录
$ vim nginx.conf

# 在最后一行大括号结束之前，加入以下配置，并将it235换成你的域名
	# http域名配置
	server {
    	listen 80;
    	server_name www.it235.com it235.com;
    	
    	# 域名默认映射到 http://127.0.0.1:7777
        location / {
               proxy_pass http://127.0.0.1:7777;
               proxy_redirect off;
               proxy_set_header Host $host;
               proxy_set_header X-Real-IP $remote_addr;
               proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
               proxy_set_header Upgrade $http_upgrade;
               proxy_set_header Connection "upgrade";

               root html;
               index index.html index.html;
        }
    
	}

```



## 域名解析

云服务器dns解析

## 使用脚本后台启动node服务

```shell
#!/bin/bash
# 切入源码目录，以确保能正常执行
cd /root/my_blog/vuepress_blog

# 拉取最新代码
git pull

# 杀死目前已启动进程
ID=`ps -ef|grep node | grep vuepress|awk '{print $2}'`
echo --- the process is $ID ---
kill -9  $ID
echo  "Killed $ID"

# 启动
nohup vuepress dev docs&

```

# HTTPS配置

1阿里云申请免费证书，下载ssl证书.pem   密码.key文件拷贝至服务器

2nginx配置https

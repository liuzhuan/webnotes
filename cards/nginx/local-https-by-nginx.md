# 搭建本地 HTTPS 测试环境

by 吴彦欣, 2016-12-26

## 生成证书

### 1. 使用 openssl 生成密钥 privkey.pem:

```sh
$ openssl genrsa -out privkey.pem 1024/2038
```

### 2. 使用密钥生成证书 server.pem:

```sh
$ openssl req -new -x509 -key privkey.pem -out server.pem -days 365
```

证书信息可以随便填或者留空，只有 `Common Name` 要根据你的域名填写。

比如：

```
Common Name (e.g. server FQDN or YOUR name) []: wuyanxin.com
```

也可以通过 `*.yourdomain.com` 来匹配你的二级域名。

## 配置 nginx

```
server {
    listen 443;
    server_name youdomain.com;

    ssl on;

    ssl_certificate /path/to/server.pem;
    ssl_certificate_key /path/to/privkey.pem;

    location / {
        root /path/to/your/local/root;
	index index.html index.htm
    }
}
```

验证配置，重启 nginx

```sh
$ sudo nginx -t && sudo nginx -s reload
```

## 信任证书

### 1. 点击地址栏前面的红色感叹号，点击“详细信息”

### 2. 点击 "View certificate"

### 3. 将上图证书拖拽到桌面，生成 "wuyanxin.com.cer" 文件

### 4. 双击打开，输入密码

### 5. 在系统钥匙串列表中找到你的证书，双击打开

### 6. 将证书改为 “始终信任”，然后关闭窗口，输入密码

### 7. 刷新页面，将获得一个绿色小锁（valid HTTPS）

> 图解步骤需要查看原始网址

## Reference
- [搭建本地 HTTPS 测试环境](http://www.jianshu.com/p/d047872b40b8)

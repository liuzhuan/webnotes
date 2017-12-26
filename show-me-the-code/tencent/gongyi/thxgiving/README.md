# 温暖冬日，感恩有你

[在线地址][online]

## 技术点

前端截图。

前端截图涉及到跨域读取图片，即 `http://ssl.gongyi.qq.com` 的 javascript 代码需要操作 `http://mat1.gtimg.com/` 的图片。为了实现跨域请求，图片服务器上做了设置，会返回 `Access-Control-Allow-Origin:http://ssl.gongyi.qq.com`

## 运行方式

1. 首先使用 `npm install` 安装依赖的包 `anywhere`
2. 运行 `npm start` 开启本地服务器
3. 在打开的浏览器地址栏后增加 `?pid=5888` 即可

## 版权声明

仅为学习目的，所有代码和图片版权归版权所有者所有。

## 代码

- [首页](./index.html)

[online]: http://ssl.gongyi.qq.com/m/wxact/thxgiving.html?ADTAG=17tg.share&et=17tg&pid=5888

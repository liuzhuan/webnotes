X-Frame-Options HTTP 响应头是用来给浏览器指示允许一个页面可否在 `<frame>`, `<iframe>` 或者 `<object>` 中展现的标记。网站可以使用此功能，来确保网站的内容没有被嵌套到别人的网站中去，从而避免点击劫持（clickjacking）的攻击。

## 使用 X-Frame-Options

X-Frame-Options 有三个值：

### DENY
表示该页面不允许在 frame 中展示，即便是在相同页面中嵌套也不允许。

### SAMEORIGIN
表示该页面可以在相同域名页面的 frame 中展示。

### ALLOW-FROM uri
表示该页面可以在指定来源的 frame 中展示。

## 配置 Apache

配置 Apache 在所有页面上发送 X-Frame-Options 响应头，需要把下面这行添加到 `site` 的配置中：

```
Header always append X-Frame-Options SAMEORIGIN
```

## 配置 nginx

配置 nginx 发送 X-Frame-Options 响应头，把下面这行添加到 `http`, `server` 或 `location` 配置中：

```
add_header X-Frame-Options SAMEORIGIN;
```

## 配置 IIS

配置 IIS 发送 X-Frame-Options 响应头，添加下面的配置到 Web.config 文件中：

```
<system.webServer>
    ...
    <httpProtocol>
        <customHeaders>
            <add name="X-Frame-Options" value="SAMEORIGIN" />
        </customHeaders>
    </httpProtocol>
    ...
</system.webServer>
```

## References
- [X-Frame-Options 响应头 - HTTP | MDN](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/X-Frame-Options)

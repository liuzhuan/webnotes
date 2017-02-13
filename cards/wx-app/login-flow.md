# 登陆流程

## wx.login(OBJECT)

调用接口获取**登陆凭证（code）**进而换取用户登陆态信息，包括用户的**唯一标识（openid）**及本次登陆的**会话密钥（session_key）**。用户数据的加解密通讯需要依赖会话密钥完成。

**OBJECT参数说明：**

success, fail, complete 全部是回调函数

success 返回参数说明：

参数名 | 类型 | 说明
----- | ---- | ---
errMsg | String | 调用说明
code | String | 用户允许登陆后，回调内容会带上 code (有效期五分钟)，开发者需要将 code 发送到开发者服务器后台，使用 `code 换取 session_key` api, 将 code 换成 openid 和 session_key 

示例代码：

```js
App({
    onLaunch: function() {
        wx.login({
            success: function(res) {
                if (res.code) {
                    wx.request({
                        url: 'https://test.com/onLogin',
                        data: {
                            code: res.code
                        }
                    })
                } else {
                    console.log('获取用户登陆态失败！' + res.errMsg);
                }
            }
        })
    }
})
```

## code 换取 session_key

这是一个 HTTPS 接口，开发者服务器使用**登陆凭证 code** 换取  session_key 和 openid。其中 session_key 是对用户数据进行加密签名的密钥。为了自身应用安全，**session_key 不应该在网络上传输**。

接口地址：

```
https://api.weixin.qq.com/sns/jscode2session?appid=APPID&secret=SECRET&js_code=JSCODE&grant_type=authorization_code
```

请求参数：

参数 | 说明
--- | ---
appid | 小程序唯一标识
secret | 小程序的 app secret
js_code | 登录时获取的 code 
grant_type | 填写为 authorization_code

返回参数：

参数 | 说明
--- | ---
openid | 用户唯一标识
session_key | 会话密钥

返回说明：

```js
// 正常返回的 JSON 数据包
{
    "openid": "OPENID",
    "session_key": "SESSIONKEY"
}

// 错误时返回 JSON 数据包
{
    "errcode": 40029,
    "errmsg": "invalid code"
}
```

## 登陆态维护

通过 wx.login() 获取到用户登陆态之后，需要维护登陆态。开发者要注意，**不应该直接把 session_key, openid 等字段作为用户的标识或者 session 的标识**，而应该自己派发一个 session 登陆态。

### 登陆时序图

![login sequence chart](https://mp.weixin.qq.com/debug/wxadoc/dev/image/login.png?t=201729)

## wx.checkSession(OBJECT)

检查登陆态是否过期

success, fail, complete

示例代码：

```js
wx.checkSession({
    success: function() {},
    fail: function() {
        wx.login();
    }
})
```


## Reference 
- [wx.login - 小程序](https://mp.weixin.qq.com/debug/wxadoc/dev/api/api-login.html)
- [用户数据的签名验证和加解密](https://mp.weixin.qq.com/debug/wxadoc/dev/api/signature.html)
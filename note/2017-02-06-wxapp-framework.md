# 框架

框架的核心是一个响应的数据绑定系统。

整个系统分为：视图层（View）和逻辑层（App Service）。

## 目录结构

小程序包含一个描述整体程序的 app 和多个描述各自页面的 page。

一个小程序主体部分由三个文件组成，必须放在项目的根目录，如下：

文件 | 必填 | 作用
--- | --- | ---
app.js | 是 | 小程序逻辑
app.json | 是 | 小程序公共设置
app.wxss | 否 | 小程序公共样式表

一个小程序页面由四个文件组成，分别是：

文件类型 | 必填 | 作用
------- | --- | ---
js | 是 | 页面逻辑
wxml | 是 | 页面结构
wxss | 否 | 页面样式表
json | 否 | 页面配置

**注意：为了方便开发者减少配置项，描述页面的四个文件必须具有相同路径与文件名**

## 配置

我们使用 `app.json` 文件来对微信小程序进行全局配置，决定页面文件的路径、窗口表现、设置网络超时时间、设置多 tab 等。

比如：

```json
{
    "pages": [
        "pages/index/index",
        "pages/logs/logs"
    ],
    "window": {
        "navigationBarTitleText": "Demo"
    },
    "tabBar": {
        "list": [
            {
                "pagePath": "pages/index/index",
                "text": "首页"
            },
            {
                "pagePath": "pages/logs/logs",
                "text": "日志"
            }
        ]
    },
    "networkTimeout": {
        "request": 10000,
        "downloadFile": 10000
    },
    "debug": true
}
```

### app.json 配置项列表

属性 | 类型 | 必填 | 描述
--- | ---- | ---- | ----
pages | String Array | 是 | 设置页面路径
window | Object | 否 | 设置默认页面的窗口表现
tabBar | Object | 否 | 设置底部 tab 的表现
networkTimeout | Object | 否 | 设置网络超时时间
debug | Boolean | 否 | 设置是否开启 debug 模式

### pages

数组的第一项代表小程序的初始页面。小程序新增/减少页面，都需要对 pages 数组进行修改。

### window

用于设置小程序的状态栏、导航条、标题、窗口背景色。

属性 | 类型 | 默认值 | 描述
---- | ---- | ---- | ----
navigationBarBackgroundColor | HexColor | #000000 | 导航栏背景颜色
navigationBarTextStyle | String | white | 导航栏标题颜色，仅支持 black/white
navigationBarTitleText | String |  | 导航栏标题文字内容
backgroundColor | HexColor | #ffffff | 窗口的背景色
backgroundTextStyle | String | dark | 下拉背景字体、loading 图的样式，仅支持 dark/light
enablePullDownRefresh | Boolean | false | 是否开启下拉刷新

### tabBar

注意：通过页面跳转（wx.navigateTo）或重定向（wx.redirectTo）到达的页面，不会显示底部 tab 栏。

tabBar 是一个数组，只能配置最少 2 个、最多 5 个 tab。

属性说明：

属性 | 类型 | 必填 | 默认值 | 描述
---- | ---- | ---- | ---- | ----
color | HexColor | 是 | | tab 上的文字默认颜色
selectedColor | HexColor | 是 | | tab 上的文字选中时颜色
backgroundColor | HexColor | 是 | | tab 的背景色
borderStyle | String | 否 | black | tabbar 上边框的颜色，仅支持 black/white
list | Array | 是 |  | tab 的列表
position | String | 否 | bottom | 可选值：bottom, top

其中 list 接受一个数组，数组中的每个项都是一个对象，其属性值如下：

属性 | 类型 | 必填 | 描述
--- | --- | --- | ---
pagePath | String | 是 | 页面路径，必须在 pages 中先定义
text | String | 是 | tab 上按钮文字
iconPath | String | 是 | 图片路径，icon 大小限制为 40kb，建议尺寸为 81px * 81px
selectedIconPath | String | 是 | 选中时的图片路径，限制同上

### networkTimeout

可以设置各种网络请求的超时时间。

## 逻辑层（App Service）

逻辑层将数据进行处理后发送给视图层，同时接受视图层的事件反馈。小程序在 JavaScript 基础上，做了如下修改：

* 增加 App 和 Page 方法，进行程序和页面的注册。
* 增加 getApp 和 getCurrentPages 方法，分别用来获取 App 实例和当前页面栈。
* 提供丰富的 API，如微信用户数据，扫一扫，支付等微信特有能力。
* 每个页面有独立的作用域，并提供模块化能力。

## App

`App()` 函数用来注册一个小程序，接收一个 object 参数，指定小程序的生命周期函数等。

object 参数说明：

属性 | 类型 | 描述 | 触发时机
--- | ---- | --- | ----
onLaunch | Function | 监听小程序初始化 | 当小程序初始化完成时触发（全局只触发一次）
onShow | Function | 监听小程序显示 | 启动，或从后台进入前台显示
onHide | Function | 监听小程序隐藏 | 前台进入后台
onError | Function | 错误监听函数 | 发生脚本错误，或者 api 调用失败
其他 | Any | | 自定义函数或数据，用 this 可以访问

注意：

* 不要在定义于 App() 内的函数中调用 getApp()，使用 this 就可以拿到 app 实例。
* 不要在 onLaunch 时调用 `getCurrentPages()` ，此时 page 还没有生成。

## 模块化

通过全局函数 `getApp()` 可以获取全局的应用实例，如果需要全局数据可以在 `App()` 中设置，如：

```js
// app.js
App({
    globalData: 1
})
```

```js
// a.js
var localValue = 'a';
var app = getApp();
app.globalData++;
```

```js
// b.js
var localValue = 'b';
console.log(getApp().globalData);
```

> 如何将全局变量绑定至某一页面？

我们可以将一些公共的代码抽离成为一个单独的js文件，作为一个模块。模块只有通过 `module.exports` 或 `exports` 才能对外暴露接口。

> 是否可以实现组件化？

注意：
* 推荐使用 `module.exports` 来暴露模块接口。
* 不支持直接引入 `node_modules`。

```js
function sayHello(name) {
    console.log(`Hello ${name}!`);
}

function sayGoodbye(name) {
    console.log(`Goodbye ${name}!`);
}

module.exports.sayHello = sayHello;
exports.sayGoodbye = sayGoodbye;
```

在需要使用这些模块的文件中，使用 `require(path)` 将公共代码引入

```js
var common = require('common.js');
Page({
    helloMINA: function() {
        common.sayHello('MINA');
    },

    goodbyeMINA: function() {
        common.sayGoodbye('MINA');
    }
})
```

## References
- [框架·小程序](https://mp.weixin.qq.com/debug/wxadoc/dev/framework/MINA.html)
- [目录结构·小程序](https://mp.weixin.qq.com/debug/wxadoc/dev/framework/structure.html)
- [配置·小程序](https://mp.weixin.qq.com/debug/wxadoc/dev/framework/config.html)
- [逻辑层·小程序](https://mp.weixin.qq.com/debug/wxadoc/dev/framework/app-service/)
- [注册程序·小程序](https://mp.weixin.qq.com/debug/wxadoc/dev/framework/app-service/app.html)
- [模块化·小程序](https://mp.weixin.qq.com/debug/wxadoc/dev/framework/app-service/module.html)
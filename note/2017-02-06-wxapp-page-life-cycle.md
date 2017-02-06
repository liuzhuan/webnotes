`Page()` 函数用来注册一个页面。接受一个 object 参数，其指定页面的初始数据、生命周期函数、事件处理函数等。

## object  参数说明：

属性 | 类型 | 描述
----- | ----- | ----
data | Object | 页面初始数据
onLoad | Function | 监听页面加载
onReady | Function | 监听页面初次渲染完成
onShow | Function | 监听页面显示
onHide | Function | 监听页面隐藏
onUnload | Function | 监听页面卸载
onPullDownRefresh | Function | 监听用户下拉动作
onReachBottom | Function | 监听上拉触底事件
onShareAppMessage | Function | 用户点击右上角分享
其他 | Any | 开发者自定义数据或函数，使用 `this` 访问

> Page 和 App 里的 Object 参数应该是不同的吧？待求证。

## 生命周期函数

* `onLoad`: 页面加载
  * 一个页面只会调用一次
  * 接收页面参数可以获取 `wx.navigateTo` 和 `wx.redirectTo` 及 `<navigator />` 中的 `query`。

* `onShow`: 页面显示
  * 每次打开页面都会调用一次

* `onReady`: 页面初次渲染完成
  * 一个页面只会调用一次，代表页面已经准备妥当，可以和视图层进行交互。
  * 对界面的设置如 `wx.setNavigationBarTitle` 请在 `onReady` 之后设置。

* `onHide`: 页面隐藏
  * 当 `navigateTo` 或底部 `tab` 切换时调用

* `onUnload`: 页面卸载
  * 当 `redirectTo` 或 `navigateBack` 时调用

## 页面相关事件处理函数

* `onPullDownRefresh`: 下拉刷新
  * 监听用户下拉刷新事件
  * 需要在 config 的 window 选项中开启 `enablePullDownRefresh`
  * 当处理完数据刷新后，`wx.stopPullDownRefresh` 可以停止当前页面的下拉刷新。

* `onShareAppMessage`: 用户分享
  * 只有定义了此事件处理函数，右上角菜单才会显示“分享”按钮
  * 用户点击分享按钮时调用
  * 此事件需要返回一 Object，用户自定义分享内容

自定义分享字段

字段 | 说明 | 默认值
----- | ----- | -----
title | 分享标题 | 当前小程序名称
desc | 分享描述 | 当前小程序名称
path | 分享路径 | 当前页面 path，必须是以 / 开头的完整路径

示例代码

```js
Page({
  onShareAppMessage: function(){
    return {
      title: '自定义分享标题',
      desc: '自定义分享描述',
      path: '/page/user?id=123'
    }
  }
})
```

## 事件处理函数

```html
<view bindtap="viewTap"> click me </view>
```

```js
Page({
  viewTap: function(){
    console.log('view tap');
  }
})
```

## Page.prototype.setData()

`setData` 函数用于将数据从逻辑层发送到视图层，同时改变对应的 `this.data` 的值。

注意：

1. 直接修改 this.data 无效，无法改变页面的状态，还会造成数据不一致。
2. 单次设置的数据不能超过 1024 kB，请尽量避免一次设置过多的数据。

注意，`bindtap` 是全小写

## getCurrentPages()

`getCurrentPages()` 函数用于获取当前页面栈的实例，以数组形式按栈的顺序给出，第一个元素为首页，最后一个元素为当前页面。

框架以栈的形式维护了当前的所有页面。当发生路由切换时，页面栈的表现如下：

路由方式 | 页面栈表现
------- | -------
初始化 | 新页面入栈
打开新页面 | 新页面入栈
页面重定向 | 当前页面出栈，新页面入栈
页面返回 | 页面不断出栈，直到目标返回页，新页面入栈
Tab 切换 | 页面全部出栈，只留下新的 Tab 页面

## 生命周期

![mina lifecycle](https://mp.weixin.qq.com/debug/wxadoc/dev/image/mina-lifecycle.png)

## 页面的路由

小程序的所有路由通过框架管理，对于路由的触发方式以及页面生命周期函数如下：

路由方式 | 触发时机 | 路由后页面 | 路由前页面
------- | ------- | -------- | --------
初始化 | 小程序打开的第一个页面 | onLoad, onShow |
打开新页面 | 调用 `wx.navigateTo` 或使用组件 `<navigator open-type="navigate"/>` | onLoad, onShow | onHide
页面重定向 | 调用 `wx.redirectTo` 或使用组件 `<navigator open-type="redirect" />` | onLoad, onShow | onUnload
页面返回 | 调用 `wx.navigateBack` 或按左上角返回按钮 | onShow | onUnload（多层页面返回每个页面都会按顺序触发 onUnload）
Tab 切换 | 调用 `wx.switchTab` 或使用组件 `<navigator open-type="switchTab" />` 或用户切换 Tab | | 各种情况参考下表

Tab 切换对应的生命周期（以A、B页面为 Tabbar 页面，C 是从 A 页面打开的页面，D 页面是从 C 页面打开的页面为例）：

当前页面 | 路由后页面 | 触发的生命周期（按顺序）
------- | -------- | -------------------
A | A | Nothing happended
A | B | A.onHide(), B.onLoad(), B.onShow()
A | B（再次打开）| A.onHide(), B.onShow()
C | A | C.onUnload(), A.onShow()
C | B | C.onUnload(), B.onLoad(), B.onShow()
D | B | D.onUnload(), C.onUnload(), B.onLoad(), B.onShow()
D（从分享进入） | A | D.onUnload(), A.onLoad(), A.onShow()
D（从分享进入） | B | D.onUnload(), B.onLoad(), B.onShow()

## Reference
- [注册页面](https://mp.weixin.qq.com/debug/wxadoc/dev/framework/app-service/page.html)
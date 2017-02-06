# 理解小程序视图层

## WXML

WXML 是框架设计的一套标签语言，结合基础组件、事件系统，可以构建出页面的结构。

以下例子展示 WXML 的能力：

### 数据绑定

### 列表渲染

```xml
<!-- wxml -->
<view wx:for="{{array}}">{{item}}</view>
```

```js
// page.js
Page({
    data: {
        array: [1, 2, 3, 4, 5]
    }
})
```

### 条件渲染

```xml
<view wx:if="{{view == 'WEBVIEW'}}">WEBVIEW</view>
<view wx:elif="{{view == 'APP'}}">APP</view>
<view wx:else="{{view == 'MINA'}}">MINA</view>
```

```js
Page({
    data: {
        view: 'MINA'
    }
})
```

如果想一次判断多个组件标签，可以使用 `<block />` 包装元素。

### 模版

```xml
<template name="staffName">
    <view>
        FirstName: {{firstName}}, LastName: {{lastName}}
    </view>
</template>

<template is="staffName" data="{{...staffA}}"></template>
<template is="staffName" data="{{...staffB}}"></template>
<template is="staffName" data="{{...staffC}}"></template>
```

```js
Page({
    data: {
        staffA: { firstName: 'Hulk', lastName: 'Hu' },
        staffB: { firstName: 'Shang', lastName: 'You' },
        staffC: { firstName: 'Gideon', lastName: 'Lin' }        
    }
})
```

> 此处的 `{{...staffA}}` 是什么语法？扩展运算符。

### 事件

```
<view bindtap="add">{{count}}</view>
```

```js
Page({
    data: {
        count: 1
    },
    add: function(e) {
        this.setData({
            count: this.data.count + 1
        })
    }
})
```

## Reference
- [视图层·小程序](https://mp.weixin.qq.com/debug/wxadoc/dev/framework/view/)
- [WXML·小程序](https://mp.weixin.qq.com/debug/wxadoc/dev/framework/view/wxml/)
- [条件渲染·小程序](https://mp.weixin.qq.com/debug/wxadoc/dev/framework/view/wxml/conditional.html)
- [列表渲染·小程序](https://mp.weixin.qq.com/debug/wxadoc/dev/framework/view/wxml/list.html)
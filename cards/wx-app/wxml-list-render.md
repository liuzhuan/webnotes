# 列表渲染

在组件上使用 `wx:for` 控制属性绑定一个数组，就能使用数组重复渲染该组件。

默认数组的当前项索引值为 `index`，当前项变量名是 `item`

```xml
<view wx:for="{{array}}">
    {{index}}: {{item.message}}
</view>
```

```js
Page({
    data: {
        array: [
            { message: 'foo' },
            { message: 'bar' }
        ]
    }
})
```

## Reference
- [列表渲染·小程序](https://mp.weixin.qq.com/debug/wxadoc/dev/framework/view/wxml/list.html)
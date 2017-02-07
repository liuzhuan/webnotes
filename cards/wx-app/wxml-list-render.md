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

使用 `wx:for-item` 指定当前元素的变量名；`wx:for-index` 指定当前索引值变量名：

```xml
<view wx:for="{{array}}" wx:for-index="idx" wx:for-item="itemName">
    {{idx}}: {{itemName.message}}
</view>
```

`wx:for` 也可以嵌套，下面是一个九九乘法表：

```xml
<view wx:for="{{[1, 2, 3, 4, 5, 6, 7, 8, 9]}}" wx:for-item="i">
    <view wx:for="{{[1, 2, 3, 4, 5, 6, 7, 8, 9]}}" wx:for-item="j">
        <view wx:if="{{ i <= j }}">
            {{i}} * {{j}} = {{ i * j}}
        </view>
    </view>
</view>
```

## block wx:for

类似 `block wx:if`，也可以将 `wx:for` 用在 `<block />` 标签上，以渲染一个包含多节点的结构块。例如：

```xml
<block wx:for="{{[1, 2, 3]}}">
    <view>{{index}}:</view>
    <view>{{item}}</view>
</block>
```

## wx:key



## Reference
- [列表渲染·小程序](https://mp.weixin.qq.com/debug/wxadoc/dev/framework/view/wxml/list.html)
# Using jCarousel

## HTML 结构

至少需要一个根元素，一个列表元素和一些子元素。结构示意如下：

```
<div class="jcarousel"> <----------------------| 根元素
	<ul> <-------------------------| 列表元素  |
		<li>...</li> <---| 子元素  |           |
		<li>...</li> <---| 子元素  |           |
	</ul> <------------------------|           |
</div> <---------------------------------------|
```

## 最少的样式代码

```css
.jcarousel {
	position: relative;
	overflow: hidden;
}

.jcarousel ul {
	width: 2000em;
	position: relative;

	list-style: none;
	margin: 0;
	padding: 0;
}

.jcarousel li {
	float: left;
}
```

## 常用配置参数

### animation

滚动速度，取值可以是字符串（`"slow"` 或者 `"fast"`），或者以毫秒为单位的整数。

```javascript
$('.jcarousel').jcarousel({
	animation: 'slow'
})

$('.jcarousel').jcarousel({
	animation: {
		duration: 800,
		easing: 'linear',
		complete: function() { }
	}
})
```

### transitions

如果值为 true, 将使用 CSS3 过渡动画。取值范围可以是一个 Object 类型，其中包括：

* transforms: 2D transforms
* transforms3d: 3D transforms
* easing: 取值范围是 [transition-timing-function](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transition-timing-function)，比如 `ease`, `ease-in`, `ease-in-out`

```javascript
$('.jcarousel').jcarousel({
	transitions: true
})

$('.jcarousel').jcarousel({
	transitions: Modernizr.csstransitions ? {
		transforms: Modernizr.csstransforms,
		transforms3d: Modernizr.csstransforms3d,
		easing: 'ease'
	} : false
})
```

### wrap

设定在首尾处的动作处理，可选的值有 `first`, `last`, `both` 或者 `circular`，字符串类型。

> Specifies whether to wrap at the first or last item (or both) and jump back to the start/end.

```javascript
$('jcarousel').jcarousel({
	wrap: 'both'
})
```

### vertical

设定 jCarousel 是否垂直运动。

```javascript
$('.jcarousel').jcarousel({
	vertical: true
})
```

## References

* [jCarousel Configuration](http://sorgalla.com/jcarousel/docs/reference/configuration.html)
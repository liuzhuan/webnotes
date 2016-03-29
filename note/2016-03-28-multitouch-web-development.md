# 多点触摸 WEB 开发

## Touch events

大部分移动设备都支持三种触控事件：

* touchstart
* touchmove
* touchend

每个触控事件都包含三种触点列表：

* touches: 屏幕上所有触点
* targetTouches: 当前 DOM 元素的触点
* changedTouches: 当前事件涉及的触点。比如在 touchend 事件中被移除的触点。

这些列表元素包含以下触点信息：

* identifier: 当前触控中每个触点的唯一标识符
* target: 动作的目标 DOM 元素
* 触点坐标
* 触点半径和旋转角度

`touchstart`, `touchmove` 和 `touchend` 三个事件组合可提供丰富特性以支持常用的手势组合，比如缩放，旋转等。

以下代码可以使用单个手指拖动一个 DOM 元素：

```javascript
var obj = document.getElementById('id');
obj.addEventListener('touchmove', function(e){
	if (e.targetTouches.length == 1) {
		var touch = e.targetTouches[0];

		obj.style.left = touch.pageX + 'px';
		obj.style.left = touch.pageY + 'px';
	}
})
```

下面代码可显示所有触点位置，给用户更好的视觉反馈：

```javascript
// 设置 canvas 和 context 代码略
canvas.addEventListener('touchmove', function(e){
	var touch = e.touches[i];
	ctx.beginPath();
	ctx.arc(touch.pageX, touch.pageY, 20, 0, 2 * Math.PI, true);
	ctx.fill();
	ctx.stroke();
})
```

## 最佳实践

禁止缩放

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
```

禁止滚动

```javascript
document.body.addEventListener('touchmove', function(e){
	e.preventDefault();
}, false);
```

优化渲染

如果需要处理复杂的手势，为了提高性能，可以在另外的循环中单独渲染：

```javascript
var touches = [];
canvas.addEventListener('touchmove', function(e){
	touches = e.touches;
}, false);

timer = setInterval(function(){
	renderTouches(touches);
}, 15);
```

这里的 setInterval 可以换成更新的 `requestAnimationFrame` 。

## 参考资料

* [Developing for Multi-Touch Web Browsers](http://www.html5rocks.com/en/mobile/touch/)
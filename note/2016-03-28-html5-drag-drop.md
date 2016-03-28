# HTML5 拖放

在 HTML5 中，任意元素都可以拖放。下面是一个样例：

```html
<div id="div1" ondrop="drop(event)" ondragover="allowDrop(event)"></div>

<img src="img_logo.gif" id="drag1" 
  draggable="true"
  ondragstart="drag(event)"
  width="336" height="69">
```

```javascript
function drag(e) {
	e.dataTransfer.setData("text", e.target.id);
} 

function allowDrop(e) {
	e.preventDefault();
}

function drop(e) {
	e.preventDefault();

	var data = e.dataTransfer.getData("text");
	e.target.appendChild(document.getElementById(data));
}
```

首先，让元素可拖动，使其 `draggable` 属性为真：

```html
<img draggable="true">
```

然后设定拖动事件处理函数 `ondragstart` ，并使用 `dataTransfer.setData()` 设定数据类型和拖放数值。

`ondragover` 设定数据是否被接受。默认情况下，数据或者元素不能放置到其他元素上。为了允许放置，需要阻止默认的事件处理 `event.preventDefault()` 。

当数据被放置后，需要调用 `ondrop` 事件处理函数。

## 参考资料

* [HTML5 Drag and Drop](http://www.w3schools.com/html/html5_draganddrop.asp)
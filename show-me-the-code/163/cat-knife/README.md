# 你工位有猫，我工位有刀

[在线地址][online]

## 技术点

前端拼图。

### html2canvas

> [html2canvas](https://html2canvas.hertzen.com/), Screenshots with JavaScript

```js
html2canvas($("#wrap")[0], {
    scale: scale,
    canvas: canvas,
    width: width,
    height: height,
    useCORS: true
}).then(function (canvas) {
    imgData = canvas.toDataURL("image/jpg");
    $("#finalDesk").attr("src",imgData);
    showEndPage();
})
```

### AlloyFinger

> [AlloyFinger](https://github.com/AlloyTeam/AlloyFinger), super tiny size multi-touch gestures library for the web

```js
var gesture = new AlloyFinger(el, {
    pinchStart: function () {
        initScale = el.scaleX
    },

    pinch: function (evt) {
        el.scaleX = el.scaleY = initScale * evt.zoom
    },
    
    pressMove: function (evt) {
        el.translateX += evt.deltaX;
        el.translateY += evt.deltaY;
    }
})
```

### iscroll

> [iScroll](http://iscrolljs.com/), smooth scrolling for the web

```js
var myScroll1  = new IScroll('#wrapper1', {
    mouseWheel: true,
    useTransition: false,
    click: true
})
```

### zepto

> [zepto.js](http://zeptojs.com/), a minimalist JavaScript library for modern browsers with a largely jQuery-compatible API.

## 代码

[首页](./index.html)

## 版权声明

仅为学习目的，所有代码和图片版权归版权所有者所有。

[online]: http://h5.zxhong.com/web/li/180312wyDesk/index.html
# 全屏操作

作者：阮一峰

时间：2014年1月29日

## 进入全屏

```js
function launchFullscreen(element) {
  if(element.requestFullscreen) {
    element.requestFullscreen();
  } else if(element.mozRequestFullScreen) {
    element.mozRequestFullScreen();
  } else if(element.msRequestFullscreen){
    element.msRequestFullscreen();
  } else if(element.webkitRequestFullscreen) {
    element.webkitRequestFullScreen();
  }
}

launchFullscreen(document.documentElement);
launchFullscreen(document.getElementById("videoElement"));
```

## 退出全屏

```js
function exitFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  }
}

exitFullscreen();
```

## 全屏属性

`document.fullscreenElement`

fullscreenElement 属性返回正处于全屏状态的 Element 节点，如果当前没有节点处于全屏状态，则返回 null。

```js
var fullscreenElement =
  document.fullscreenElement ||
  document.mozFullScreenElement ||
  document.webkitFullscreenElement;
```

## 全屏事件

```js
document.addEventListener("fullscreenchange", function( event ) {
  if (document.fullscreenElement) {
    console.log('进入全屏');
  } else {
    console.log('退出全屏');
  }
});
```

## 参考资料

* [Fullscreen API: 全屏操作 - 阮一峰](http://javascript.ruanyifeng.com/htmlapi/fullscreen.html)
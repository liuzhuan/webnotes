# 媒体查询（Media Queries）

从 CSS 版本2开始，就可以通过媒体类型在 CSS 中获得媒体支持。

```html
<link rel="stylesheet" href="site.css" media="screen">
<link rel="stylesheet" href="print.css" media="print">
```

在上述代码中，`media` 属性定义了不同媒体类型的样式表：

* screen 适用于计算机彩色屏幕
* print 适用于打印预览模式下查看的内容或打印内容

CSS3 可以扩展媒体类型函数，并使用更精确的显示规则。

媒体查询包含一个**媒体类型**，后跟一个或多个**检查特定条件**（如*最小的屏幕宽度*）的表达式。比如：

```css
@media all and (min-width: 800px) { ... }
```

## References

* [使用 CSS 媒体查询创建响应式网站](http://www.ibm.com/developerworks/cn/web/wa-cssqueries/index.html)
* [CSS 媒体查询 - Web 开发者指南 | MDN](https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Media_queries)
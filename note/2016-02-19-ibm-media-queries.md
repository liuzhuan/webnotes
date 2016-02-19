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

## 语法

```html
<!-- link 元素中的 CSS 媒体查询 -->
<link rel="stylesheet" media="(max-width: 800px)" href="example.css">

<!-- 样式表中的 CSS 媒体查询 -->
<style>
	@media (max-width: 600px) {
		.facet_sidebar {
			display: none;
		}
	}
</style>
```

媒体查询包含一个**媒体类型**，后跟一个或多个**检查特定条件**（如*最小的屏幕宽度*）的表达式。比如：

```css
@media all and (min-width: 800px) { ... }
@media tv and (min-width: 700px) and (orientation: landscape) { ... }
```

可以省略关键词 `all` 和 `and`：

```css
@media (min-width: 800px) { ... }
```

媒体查询也可以包含复杂的表达式。比如，创建一个仅在最小宽度为 800 像素且最大宽度为1200像素时应用的样式：

```css
@media (min-width: 800px) and (max-width: 1200px) { ... }
@media (min-width: 800px) and (orientation: portrait) { ... }
```

除了 and 关键词，还有 `or` 关键词和 `note` 关键词：

```css
@media (min-width: 800px) or (orientation: portrait) { ... }
```

如果宽度至少是 800 像素**或者**方向是纵向的，就会应用此规则。

```css
@media (not min-width: 800px) { ... }
```

当最小宽度不是800像素时，则会应用此规则。

## 有用的媒体特性

媒体很多特性，比如宽度、颜色和网格，都可以在媒体查询中使用。要设计响应式网站，只需要了解：方向、宽度和高度。方向值可以是 `portrait` 或 `landscape`。


## 常见媒体查询

因为 Apple 首次推出智能手机和平板电脑产品，所以下列大多数媒体查询都是基于这些型号的设备。

横向模式智能手机：
```css
@media (min-width: 321px) { ... }
```

纵向模式智能手机：
```css
@media (max-width: 320px) { ... }
```

横向模式 iPad：
```css
@media (orientation: landscape) { ... }
```

纵向模式 iPad：
```css
@media (orientation: portrait) { ... }
```

因为 iPhone 不支持 orientation 媒体特性，所以需要使用 width 模拟方向断点。

## SASS 中的媒体查询

SASS 行为中的媒体查询与普通 CSS 完全相同，但有一个例外：他们可以嵌套在其他 CSS 规则中：

```css
#header {
	width: 400px;
	@media (min-width: 800px) {
		width: 100%;
	}
}
```

以上代码编译结果是：

```css
#header {
	width: 400px;
}

@media (min-width: 800px) {
	#header {
		width: 100%;
	}
}
```



## References

* [使用 CSS 媒体查询创建响应式网站](http://www.ibm.com/developerworks/cn/web/wa-cssqueries/index.html)
* [CSS 媒体查询 - Web 开发者指南 | MDN](https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Media_queries)
# Flex 布局教程：语法篇

2009 年，W3C 提出了 Flex 布局，可以简便、完整、响应式地实现各种页面布局。

## Flex 布局是什么？

任何一个容器都可以制定为 Flex 布局

```css
.box {
	display: flex;
}
```

行内元素也可以使用 Flex 布局

```css
.box {
	display: inline-flex;
}
```

## 基本概念

采用 Flex 布局的元素，称为 Flex 容器（flex container）。它的所有子元素自动成为容器成员，称为 Flex 项目（flex item），简称“项目”。

![flex diagram](http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071004.png)

容器默认存在两根轴：水平的主轴（main axis）和垂直的交叉轴（cross axis）。主轴的开始位置叫做 `main start`，结束位置叫做 `main end`；交叉轴的开始位置叫做 `cross start`，结束位置叫做 `cross end`。

项目默认沿主轴排列。单个项目占据的主轴空间叫做 `main size`，占据的交叉轴空间叫做 `cross size`。

## 容器的属性

以下 6 个属性设置在容器上。

* `flex-direction` 主轴方向 row | row-reverse | column | column-reverse
* `flex-wrap` 如何换行 nowrap | wrap | wrap-reverse
* `flex-flow` 以上两者的简写 <flex-direction> || <flex-wrap>
* `justify-content` 主轴对齐方式 flex-start | flex-end | center | space-between | space-around
* `align-items` 交叉轴对齐方式 flex-start | flex-end | center | baseline | stretch
* `align-content` 多根轴线对齐方式 flex-start | flex-end | center | space-between | space-around | stretch

## 项目的属性

以下6个属性设置在项目上

* order 排列顺序 0
* flex-grow 放大比例 0
* flex-shrink 缩小比例 0
* flex-basis 分配多余空间之前，项目占据的主轴空间 <length> | auto
* flex 简写 none | auto | [<flex-grow> <flex-shrink> || <flex-basis>]
* align-self 单个项目与其他项目不一样的对齐方式 auto | flex-start | flex-end | center | baseline | stretch

## Reference
- [Flex 布局教程：语法篇](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)
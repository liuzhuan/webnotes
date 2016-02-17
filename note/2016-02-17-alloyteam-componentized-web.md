`Webpack` + `React` 是当前组件化的核心技术

# React

## 组件生命周期

`React` 组件自身有生命周期方法，jsx 自带模板功能。

`React` 组件生命周期的三个状态：

* Mount: 插入 DOM
* Update: 更新 DOM
* Unmount: 从 DOM 中删除

每个组件状态会有两种处理函数，一前一后，`will` 函数和 `did` 函数

* `componentWillMount()` 准备插入前
* `componentDidMount()` 插入后
* `componentWillUpdate()` 准备更新前
* `componentDidUpdate()` 更新后
* `componentWillUnmount()` 准备拔出前

# Webpack

## Refereces

* [We will be componentized](http://www.alloyteam.com/2015/11/we-will-be-componentized-web-long-text/)
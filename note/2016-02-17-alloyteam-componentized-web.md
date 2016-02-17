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

`React` 另外一个核心：数据模型 `props` 和 `state`，对应各自状态方法：

* `getInitialState()` 获取初始化 state
* `getDefaultProps()` 获取默认 props。对于没有父组件传递的 props，通过该方法设置默认的 props
* `componentWillReceiveProps()` 已插入的组件收到新的 props 时调用
* `shouldComponentUpdate()` 判断组件是否需要 update，用于优化处理
* `render()` 渲染组件

`getInitialState`, `componentDidMount`, `render` 这三个函数是 *最常用方法*。

`React` 组件的状态方法流如下：

![react component lifecycle](http://cdn.alloyteam.com/wp-content/uploads/2015/11/line_comp.jpg)

有两点需要特殊说明：

### 1. 二次渲染

组件的 render 函数不需要自己触发。请求 CGI 一般都是异步，必定带来二次渲染。只是空数据渲染的时候，有可能被 React 优化掉。当数据回来，通过 `setState`，触发二次渲染。

### 2. componentWillMount 和 componentDidMount 的差别

ajax 请求建议在 `willMount` 方法内执行，可尽早减少二次渲染的时间。

`willMount` 只会执行一次，适合 init
`didMount` 也执行一次，适合**事件绑定**和**complete类**的逻辑

# Webpack 资源组件化

Webpack 是一个模块加载打包工具，与 requirejs 模块加载工具，grunt/gulp 构建工具，不尽相同。

# Refereces

* [We will be componentized](http://www.alloyteam.com/2015/11/we-will-be-componentized-web-long-text/)
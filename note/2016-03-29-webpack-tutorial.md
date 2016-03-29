# Webpack 入门

## What is Webpack

Webpack 是构建工具，也是模块打包工具。可以这么使用它：

```javascript
import stylesheet from 'styles/my-styles.scss';
import logo from 'img/my-logo.svg';
import someTemplate from 'html/some-template.html';

console.log(stylesheet); // "body {font-size: 12px; }"
console.log(logo); // "data:image/svg+xml;base64,....."
console.log(someTemplate) // "<html><body>....</body></html>"
```

所有资源都是模块，可以被导入，修改和其他处理，最终打包输出发布文件。

为了能够实现这样的功能，需要在 Webpack 配置文件中注册 `loaders`。loaders 是一种简单插件，可以实现“当你遇到这种类型文件，就这么处理它”。以下是一些样例：

```javascript
{
	test: /\.ts/,
	loader: 'typescript',
},
{
	// 图像先被 image-webpack （imagemin包装器）压缩，然后当做 data64 URLs 格式插入文档
	test: /\.(png|jpg|svg)/,
	loaders: ['url', 'image-webpack']
},
{
	// scss 文件首先被 node-sass 处理，然后 autoprefixer 增加前缀，最后返回 css 格式字符串
	test: /\.scss/,
	loaders: ['css', 'autoprefixer', 'sass']
}
```

食物链的顶端，所有 loader 都返回字符串。

## small demo app

推荐安装 Node 4 和 NPM 3，因为在使用 webpack 时，扁平的依赖树可以避免很多问题。如果没有安装 NPM 3，可以通过 `npm install npm@3 -g` 安装。

在项目中本地安装

```
npm install webpack --save-dev
```

## References

* [installation](http://webpack.github.io/docs/installation.html)
* [Webpack your bags - madewithlove](http://blog.madewithlove.be/post/webpack-your-bags/)
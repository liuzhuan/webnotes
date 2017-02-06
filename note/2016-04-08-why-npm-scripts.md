# 为什么使用 npm 脚本?

作者：[Damon Bauer](http://damonbauer.me/)

日期：2016年2月12日

## 构建工具的三个问题

* 过于依赖插件作者
* 插件更新滞后，文档不匹配
* 不易处理错误

## 编译 SCSS

可以使用 `node-sass` 或者直接使用 sass。若直接 `sass`，在命令行可以这样调用：

```
sass --update src/scss:dist/css --style compressed
```

放入 package.json 中是这个样子：

```
"scripts": {
	"scss": "sass --update src/scss:dist/css --style compressed"
}
```

使用以下方式调用：

```
npm run scss
```

## 使用 Autoprefix 和 PostCSS

安装两个模块，因为 PostCSS 默认什么也做不了，需要依赖 Autoprefixer 之类的插件才能处理 CSS ：

```
npm install --save-dev postcss-cli autoprefixer
```

在 scripts 字段中增加如下命令：

```
"scripts": {
	...
	"autoprefixer": "postcss -u autoprefixer -r dist/css/*"
}
```

上面命令的意思是：嘿！postcss！拿 `autoprefixer` 把 `dist/css` 目录下的所有 `css` 文件替换更新！如果要改变默认的浏览器支持情况，可以做如下调整：

```
"autoprefixer": "postcss -u autoprefixer --autoprefixer.browsers '> 5%, ie 9' -r dist/css/*"
```

## Linting JavaScript

保持标准格式和编码风格可以让错误最少，更能提升编码效率。"Linting" 帮我们自动完成这些工作，在JS中可以使用[eslint](https://github.com/eslint/eslint)

这次用简写方式安装：

```
npm i -D eslint
npm install --save-dev eslint # 跟上面作用相同
```

安装完毕后，可以使用 `eslint` 建立一些简单的规则。键入命令：

```
eslint --init
```

在 `package.json` 中输入字段：

```
"scripts": {
	...
	"lint": "eslint src/js"
}
```

## 压缩合并 JS

可以使用 [uglify-js](https://github.com/mishoo/UglifyJS2) 压缩合并 js 文件。首先安装 `uglify-js`：

```
npm i -D uglify-js
```

然后在 `packge.json` 中配置 uglify 任务：

```
"scripts": {
	...
	"uglify": "mkdir -p dist/js && uglifyjs src/js/*.js -m -o dist/js/app.js"
}
```

实际使用时发现 `*.js` 并没有被正确展开。正确的是匹配所有的 js 文件，但是被误认为是文件名 `*.js`。

## 压缩图片

安装 imagemin-cli：

```
npm i -D imagemin-cli
```

Imagemin 会将大部分类型的图片压缩，包括 GIF, JPG, PNG 和 SVG。可以传给它一个图片文件夹，它会进行自动压缩：

```
"scripts": {
	...
	"imagemin": "imagemin src/images dist/images -p",
}
```

`-p` 选项用来创造**渐进下载(progressive)**的图像。

## 基于 BrowserSync 的自动更新

BrowserSync 可以：启动本地服务器，将更改的文件自动注入连接的浏览器，然后在浏览器中同步点击和滚动动作。首先，安装：

```
npm i -D browser-sync
```

配置：

```
"scripts": {
	...
	"server": "browser-sync start --server --files 'dist/css/*.css, dist/js/*.js'"
}
```

## 参考链接

* [Why npm Scripts?](https://css-tricks.com/why-npm-scripts/)
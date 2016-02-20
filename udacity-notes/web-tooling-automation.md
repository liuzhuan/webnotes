# Web Tooling & Automation

本课程涉及到的工具包括 `Sass`, `Gulp`, `Sublime` 等。

## Lesson 1: Productive Editing

Sublime Plugins to Install

* `Emmet`
* Sidebar Enhancements (没有安装成功，没搜索到安装文件)
* `Color Picker` ( 调用快捷键：`ctrl+shift+c` )
* `Color Highlighter`

## Lesson 2: Powerful Builds

`Gulp` 使用代码配置文件，基于 `stream` 流，IO操作次数较 Grunt 更少，速度更快。

### 全局安装 gulp 

```
npm install -g gulp-cli
```

### 将 gulp 安装到项目的 devDependencies: 

```
npm install --save-dev gulp
```

### 在项目根目录建立 `gulpfile.js`

```javascript
var gulp = require('gulp')

gulp.task('default', function(){
	// place code for your default task here
})
```



## References
* [Web Tooling & Automation](https://www.udacity.com/course/viewer#!/c-ud892/l-5331771247/m-5327290827)
* [Get Started with Gulp.js](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md)
---
title: VS Code 编辑 TypeScript 的功能
date: 2016-11-27 21:26:19
tags:
---

如果某一目录包含 `tsconfig.json`， VS Code 会把它作为 TypeScript 工程根目录。使用 `tsc -p .` 可以编译整个工程。

一个典型的 tsconfig.json 如下：

```javaScript
{
    "compilerOptions": {
        "target": "es5",
        "module": "commonjs",
        "sourceMap": true
    }
}
```

## 将 TypeScript 转译为 JavaScript

可以使用 `Task Runner` 自动将 ts 转义为 js。当在工程目录下定义好 `task.json` 之后，就可以通过 `Shift+Command+B` 来运行任务。

## 符号定义列表和查找

使用 `Shift+Command+O` 可以列出当前ts文件定义的所有符号。
`Command+T` 则可以在工程目录中查找符号。

## 格式化代码

`Shift+Alt+F` 能格式化当前文档。

## JSDoc 支持

VS Code 支持 JSDoc 语法。


## 参考文档
[Editing Typescript](https://code.visualstudio.com/docs/languages/typescript)
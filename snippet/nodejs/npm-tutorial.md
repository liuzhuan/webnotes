# NPM Tutorial

npm 的官方视频做的生动有趣。

## 常用 npm 命令

查看 node 版本 `node -v`

因为 npm 的更新频率比 node 更快，所以可以通过如下命令更新 npm :

```bash
npm install npm -g
```

获取 npm 的安装路径： 

```
npm config get prefix
```

## 在本地安装 npm 包

如果当前的 node 项目有依赖项，可以在 `package.json` 中指定。首先，在 package.json 中填写 `name` 和 `version` 两个必选项：

```json
{
	"name": "demo-app",
	"version": "1.0.0"
}
```

然后，使用 `npm install lodash --save` 选项下载 npm 包，并将其写到 package.json 的 `dependencies` 选项中：

```json
{
	"name": "demo-app",
	"version": "1.0.0",
	"dependencies": {
		"lodash": "^4.5.0"
	}
}
```

## 使用 packge.json

管理本地安装 npm 包的最好方式是使用 packge.json 文件。

package.json 提供了很多好处：

* 它详细列出项目的所有依赖项
* 可以指定包的版本号
* 便于构建过程复制

可以使用 `npm init` 在交互命令行中创建 package.json。

## 语义版本 Semantic Versioning

如果一个项目要同其他人分享，它的版本号应该至少是 1.0.0 。版本号更新应该遵循如下原则：

* 如果只是修复 bug，`Patch release`, 增加最小版本号， 比如 1.0.1
* 如果增加新特性，没有破坏现有的特性，`Minor release`, 增加中间版本号，比如 1.1.0
* 如果增加的新特性破坏了现有特性，则是 `Major release`，需要增加最大版本号，比如 2.0.0

如果要使用其他人的包，可以使用以下规则指定包的版本号：

* Patch release, `~1.0.4`
* Minor release, `^1.0.4`
* Major release, `*` 或者 x

## 更新本地包

列出本地已安装的包：

```bash
npm ls
```

列出已过期的包：

```bash
npm outdated
```

更新本地安装包

```bash
npm update
```

删除本地安装包

```bash
npm uninstall lodash
npm uninstall lodash --save # 同时从 package.json 中删除
npm prune # 删除本地多余包
```

显示全局安装的包

```bash
npm ls -g --depth=0
```

删除全局安装的包

```bash
npm uninstall -g lodash
```

## References

* [01 - What is npm?](https://docs.npmjs.com/getting-started/what-is-npm)
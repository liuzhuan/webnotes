# youtbe-dl

youtube-dl 是一个命令行小工具，可以从 Youtube.com 或者其他网站下载视频。需要 Python 2.6, 2.7 或 3.2+ 解释器，可以在 Unix, Windows 或者 Mac OS X 上运行。

## 安装

pip 在 Python 3.4 中默认安装，位于 `C:\Python34\Scripts\` 目录下。

```
sudo pip install youtube-dl
```

## 命令格式

```
youtube-dl [OPTIONS] URL [URL...]
```

## 选项

```
-h, --help		打印帮助信息
--version 		打印版本信息
-U, --update	更新程序至最新版
-i, --ignore-errors		忽略错误继续下载
--abort-on-error		遇到错误停止下载
--dump-user-agent		输出当前浏览器信息
--list-extractors		列出所有支持的提取器
--extractor-descriptions		输出所有提取器的描述信息
--force-generic-extractor		强制使用通用提取器
--default-search PREFIX			对于不合法的URL地址使用该选项。
								可取的值有 "auto", "error", "fixup_error"
--ignore-config			忽略配置文件选项
--flat-playlist			不从列表中提取视频，仅作展示
--mark-watched			将视频标记为已读（仅适用于 YouTube）
--no-mark-watched		将视频标记为未读（仅适用于 YouTube）
--no-color				输出中不显示颜色代码
```

## 网络选项

```
--proxy URL			
```

## 参考资料
* [youtube-dl --- github.com](https://github.com/rg3/youtube-dl/)
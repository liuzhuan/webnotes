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
--proxy URL			使用指定的 HTTP/HTTPS 代理
--socket-timeout SECONDS		指定放弃前等待时间，单位是秒
--source-address IP			客户端绑定的IP地址（试验中）
-4， --force-ipv4			所有连接使用 IPV4（试验中）
-6, --force-ipv6			所有连接使用 IPV6（试验中）
--cn-verification-proxy URL			针对一些中国网站，使用该代理来检测IP地址（试验中）
```

## 视频选择

```
--playlist-start NUMBER			播放列表的开始位置（默认是1）
--playlist-end NUMBER			播放列表的结束位置（默认是 last）
--playlist-items ITEM_SPEC			指定播放列表中需要下载的索引值，逗号隔开，
									比如 "--playlist-items 1,2,5,8"
									还能指定范围 "--playlist-items 1-3,7,10-13"
--match-tile REGEX				只下载能够匹配标题的视频（正则表达式或者不分大小写的字符串）
--reject-title REGEX			忽略匹配标题的视频
--max-downloads NUMBER			最大下载文件数
--min-filesize SIZE			最小文件体积（比如 50k 或 44.5m）
--max-filesize SIZE			最大文件体积
--date DATE					只下载这个时间上传的视频
--datebefore DATE			只下载该日期之前上传的视频（含该日期）
--dateafter DATE			只下载该日期之后上传的视频（含该日期）
--min-views COUNT			指定视频最小浏览量
--max-views COUNT			指定视频最大浏览量
--match-filter FILTER			指定过滤器（试验中）
--no-playlist			仅下载视频
--yes-playlist			下载播放列表
--age-limit YEARS			仅下载适合该年龄的视频
--download-archive FILE			仅下载没有在归档文件中列出的视频。记录所有下载视频的ID。
--include-ads			同时下载广告
```

## 下载选项

```
-r, --rate-limit LIMIT			最大下载速率，单位：字节每秒（比如： 50k, 4.2M）
-R, --retries RETRIES			重连次数（默认是10），或者"infinite"
--fragment-retries RETRIES			某个片段的重连次数
--buffer-size SIZE			下载缓冲区大小（比如 1024 或 16k）（默认为 1024）
--no-resize-buffer			禁止动态调整缓冲区大小
--playlist-reverse			逆向下载播放列表
```

## 视频格式选项

```
-f, --format FORMAT			视频格式代码
--all-formats				下载所有可用的视频格式
-F, --list-formats			列出所有可用的格式
```

## 使用方法

首先用 `-F` 列出这个视频有哪些格式 & 分辨率组合可供下载

```
youtube-dl <video-url> -F
```

使用 `-f <format-code>` 下载指定的格式

```
youtube-dl <video-url> -f <format-code>
```

## 参考资料
* [youtube-dl --- github.com](https://github.com/rg3/youtube-dl/)
* [用终端下载 Youtube 视频](http://ohmystack.com/articles/download-youtube-in-terminal/)
* [youtube-dl 支持的网站](http://rg3.github.io/youtube-dl/supportedsites.html)
# Wget 常见用法

> wget utility is the best option to download files from internet.

本文会举例说明一些常用的 wget 命令

## 单文件下载

```
wget http://www.example.com/hello.zip
```

## 下载后重命名文件

```
wget -O hello.zip http://www.vim.org/scripts/download_script.php?src_id=7701
```

## 限制下载速度

```
wget --limit-rate=200k http://www.openss7.org/repos/tarballs/strx25-0.9.2.1.tar.bz2
```

## 断点续传

```
wget -c http://www.openss7.org/repos/tarballs/strx25-0.9.2.1.tar.bz2
```

## 转入后台下载

对于大文件下载，可以使用 `-b` 选项转入后台下载：

```
wget -b http://www.openss7.org/repos/tarballs/strx25-0.9.2.1.tar.bz2
```

可以用 `tail -f wget-log` 随时查看下载进度。

## 检测下载地址

```
wget --spider DOWNLOAD-URL
```

## 增加重试次数

```
wget --tries=75 DOWNLOAD-URL
```

## 下载多个文件

首先把多个地址保存到文本文件，比如 `download-file-list.txt` 中。然后，使用 `-i` 选项从外部文件读取网址列表：

```
wget -i download-file-list.txt
```

## 镜像复制整个网站

```
wget --mirror -p --convert-links -P ./LOCAL-DIR WEBSITE-URL
```

其中：

* `--mirror`: 开启适合镜像的选项
* `-p`: 下载所有相关文件，以便正常显示 HTML 网页
* `--convert-links`: 下载结束，转换文档中的链接以便本地浏览
* `-P ./LOCAL-DIR`: 把所有文件和目录保存到指定目录

以上选项更详细的解释如下：

### `-m`, `--mirror`

这个选项打开递归和时间戳，嵌套深度无限并且列出 FTP 文件目录。相当于 `-r -N -l inf --no-remove-listing`。

### `-r`, `--recursive`

打开递归选项。默认最大递归层级是5.

### `-N`, `--timestamping`

打开时间戳选项。

### `-l depth`, `--level=depth`

指定最大递归层级

### `--no-remove-listing`

不要删除 FTP 检索时生成的临时文件 `.listing` 。

## 禁止下载某些文件类型

```
wget --reject=gif WEBSITE-TO-BE-DOWNLOADED
wget -R mpg,mpeg,au
wget -R "bjork*" # 禁止下载 bjork 开头的文件，加引号是防止被 shell 展开
```

## 重定向日志文件

```
wget -o download.log DOWNLOAD_URL
```

## 设定下载最大值

超过最大值，则下载过程自动停止。

```
wget -Q5m -i FILE-WHICH-HAS-URLS
```

## 只下载某种类型文件

```
wget -r -A.pdf http://url-to-webpage-with-pdfs/
```

## FTP 下载

```
wget ftp-url # 匿名下载
wget --ftp-user=USERNAME --ftp-password=PASSWORD DOWNLOAD-URL # 设定用户名和密码
```

## 参考资料

* [The Ultimate Wget Download Guide With 15 Awesome Examples](http://www.thegeekstuff.com/2009/09/the-ultimate-wget-download-guide-with-15-awesome-examples/)
* [GNU Wget 1.17.1 Manual](https://www.gnu.org/software/wget/manual/wget.html)
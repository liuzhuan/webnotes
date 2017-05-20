# alias for VSCode on macOS

https://segmentfault.com/q/1010000005104983

首先，编辑 `~/.profile` 文件：

```
$ vim ~/.profile
```

增加如下内容：

```
alias code="/Applications/Visual\ Studio\ Code.app/Contents/Resources/app/bin/code"
```

重新读取 `~/.profile`:

```
. ~/.profile
```

> `~/.profile` 是做什么用的？
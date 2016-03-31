# Git 常用命令

## 日志

```
git log # 查看日志
git log --pretty=oneline # 单行日志格式
git reflog # 记录每一次命令
```

## 更改当前版本

```
git reset --hard HEAD^ # 回退到上一个版本
git reset --hard <commit_id> # 回退到特定 commit_id 对应版本
```

## 丢弃更改

```
git checkout -- file # 丢弃工作区修改
git reset HEAD file # 丢弃暂存区修改
```

## 删除文件

```
git rm file # 从版本库删除文件
```

## 参考文档

* [Git 教程 - 廖雪峰](http://www.liaoxuefeng.com/wiki/0013739516305929606dd18361248578c67b8067c8c017b000)
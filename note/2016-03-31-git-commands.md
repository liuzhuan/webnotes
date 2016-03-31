# Git 常用命令

## 日志

```
git log # 查看日志
git log --pretty=oneline # 单行日志格式
git reflog # 记录每一次命令
git log --graph --pretty=oneline --abbrev-commit # 图形查看 git 分支
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

## 创建 SSH Key

```
ssh-keygen -t -rsa -C "youremail@example.com" # 生成 id_rsa 和 id_rsa.pub
```

## 远程库

```
git remote add origin git@git.com:liuzhuan/learngit.git # 将本地仓库关联到远程仓库
git push -u origin master # 第一次推送 master 分支的所有内容
git push origin master # 后续推送 master 分支

git clone git@github.com:liuzhuan/gitskills.git # 克隆远程库到本地

git remote # 查看远程的信息
git remote -v # 显示远程详细信息

git checkout -b dev origin/dev #  创建远程 origin 的 dev 分支到本地

git pull # 获取远程更新
git branch --set-upstream dev origin/dev # 设置 dev 和 origin/dev 的链接
```

## 分支管理

```
git branch dev # 创建 dev 分支
git checkout dev # 切换到 dev 分支
git checkout -b dev # 创建并切换到 dev 分支
git branch # 查看当前分支

git merge dev # 合并 dev 分支到当前分支

git branch -d dev # 删除 dev 分支
git branch -D <name> # 删除一个没有被合并的分支

git merge --no-ff -m "merge with no-ff" dev # 禁用 fast forward 的合并分支
```

## Bug 分支

```
git stash # 储藏工作现场
git stash list # 查看已储存的工作现场
git stash pop # 回到工作现场
```

## 标签管理

```
git tag v1.0 # 创建标签
git tag # 查看所有标签
git tag v0.9 6224937 # 给指定 commit_id 增加标签
git show <tagname> # 查看标签信息
git tag -a v0.1 -m "version 0.1 released" 3628164 # 创建带有说明的标签 -a:标签名 -m:说明文字
git tag -s v0.2 -m 'signed version 0.2 released' fec145a # 用私钥签名一个标签

git tag -d v0.1 # 删除标签
git push origin <tagname> # 推送标签到远程
git push origin --tags # 一次性推送全部尚未推送到远程的本地标签
git push origin :refs/tags/v0.9 # 删除远程标签（前提是删除本地标签）
```

## 自定义 Git

```
git config --global color.ui true # 让 Git 显示颜色
git config --global alias.st status # 配置别名
```

## 搭建 Git 服务器

```
sudo apt-get install git # 安装 git
sudo adduser git # 创建 git 用户，运行 git 服务
```

创建证书登陆，将所有公钥导入到 `/home/git/.ssh/authorized_keys` 文件中，一行一个。

```
sudo git init --bare sample.git # 初始化 Git 仓库
sudo chown -R git:git sample.git # 把 owner 改为 git
# 禁用 shell 登陆 代码略
git clone git@server:/srv/sample.git # 克隆 git 库
```

## 参考文档

* [Git 教程 - 廖雪峰](http://www.liaoxuefeng.com/wiki/0013739516305929606dd18361248578c67b8067c8c017b000)
	* [搭建 Git 服务器](http://www.liaoxuefeng.com/wiki/0013739516305929606dd18361248578c67b8067c8c017b000/00137583770360579bc4b458f044ce7afed3df579123eca000)
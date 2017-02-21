# How to Install Homebew

The missing package manager for macOS

## Install Homebrew

```sh
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

## What Does Homebrew Do?

Homebrew installs the stuff you need that Apple didn't.

```sh
$ brew install wget
```

Homebrew installs packages to their own directory and then symlinks their files into `/usr/local`.

```sh
$ cd /usr/local
$ find Cellar
Cellar/wget/1.16.1
Cellar/wget/1.16.1/bin/wget
Cellar/wget/1.16.1/share/man/man1/wget.1

$ ls -l bin
bin/wget -> ../Cellar/wget/1.16.1/bin/wget
```

Homebrew won't install files outside its prefix, and you can place a Homebrew installation wherever you like.

## Reference
- [Homebrew - The missing package manager for macOS](https://brew.sh/)

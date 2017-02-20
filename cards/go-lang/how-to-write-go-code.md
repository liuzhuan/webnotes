# How to Write Go Code

This document demonstrates the development of a simple Go package and introduces the `go tool`, the standard way to fetch, build, and install Go packages and commands.

The go tool requires you to organize your code in a specific way.

A similar explanation is available as a [screencast](https://www.youtube.com/watch?v=XCsL89YtqCs).

## Code organization

### Overview

- Go programmers typically keep all their Go code in a single *workspace*.
- A workspace contains many version control *repositories*.
- Each repository contains one or more *packages*.
- Each package consists of one or more Go source files in a single directory.
- The path to a package's directory determines its *import path*.

### Workspaces

A workspace is a directory hierarchy with three directories at its root:

- `src` contains Go source files,
- `pkg` contains package objects, and
- `bin` contains executable commands.

The `src` subdirectory typically contains multiple version control repositories that track the development of one or more source packages.

### The `GOPATH` environment variable

Note that this must not be the same path as your Go installation.

```sh
mkdir $HOME/workshop
export GOPATH=$HOME/workshop
```

For convenience, add the workspace's bin subdirectory to your PATH:

```sh
export PATH=$PATH:$GOPATH/bin
```

## Reference
- [How to Write Go Code](https://golang.org/doc/code.html)

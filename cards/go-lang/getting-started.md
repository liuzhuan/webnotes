# Getting Started

## Mac OS X package installer

The package installs the Go distribution to `/usr/local/go`.

The package should put the `/usr/local/go/bin` directory in your PATH environment variable.

## Test your installation

Create a directory to contain your workspace, $HOME/work for example, and set the GOPATH environment variable to point to that location.

```sh
$ export GOPATH=$HOME/work
```

You should put the above command in your shell startup script (`$HOME/.profile` for example).

Next, make the directories `src/github.com/user/hello` inside your workspace, and inside the hello directory create a file named hello.go with the following contents:

```go
package main

import "fmt"

func main() {
    fmt.Printf("hello, world\n")
}
```

Then compile it with the go tool:

```sh
$ go install github.com/usr/hello
```

The command above will put an executable command named hello inside the bin directory of your workspace. Execute the command to see the greeting:

```sh
$ $GOPATH/bin/hello
hello, world
```

If you see the "hello, world" message then your Go installation is working.

Before rushing off to write Go code please read the [How to Write Go Code document](how-to-write-go-code.md), which describe some essential concepts about using the Go tools.

## Uninstalling Go

To remove an existing Go installation from your system delete the `go` directory. This is usually `/usr/local/go` under Linux, Mac OS X, and FreeBSD or `c:\Go` under Windows.

You should also remove the Go `bin` directory from your PATH environment variable. If you installed Go with the Mac OS X package then you should remove the `/etc/paths.d/go` file.

## Reference
- [Getting Started](https://golang.org/doc/install?download=go1.7.5.darwin-amd64.pkg)

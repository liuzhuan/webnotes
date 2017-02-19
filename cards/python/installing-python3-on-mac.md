# Installing Python 3 on Mac OS X

The version of Python that ships with OS X is great for learning but it's not good for development.

Before installing Python, you'll need to install `GCC`.

Mac needs a package manager. `Homebrew` fills this void.

To install Homebrew, open Terminal and run:

```sh
$ ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

对于上面 curl 的命令行参数解释如下：

参数 | 含义
--- | ---
-f, --fail | Fail silently on server errors
-s, --silent | Silent or quiet mode.
-S, --show-error | When used with `-s, --silent`, it makes curl show an error message if it fails. 
-L, --location | If the server reports that the requested page has moved to a different location, this option will make curl redo the request on the new place.

Now, we can install Python 3:

```sh
$ brew install python3
```

## Working with Python 3

At this point, you have the system Python 2.7 available, and the Homebrew version of Python 3 as well.

`python` will launch the Python 2 interpreter.

`python3` will launch the Python 3 interpreter.

## Virtual Environments

A Virtual Environment (commonly referred to as a `virtualenv`) is a tool to keep the dependencies required by different projects in separate places, by creating virtual Python environments for them.

To start using this and see more information: [Virtual Environments](http://docs.python-guide.org/en/latest/dev/virtualenvs/#virtualenvironments-ref) docs.

## Reference
- [Installing Python 3 on Mac OS X](http://docs.python-guide.org/en/latest/starting/install3/osx/)
- [Homebrew - The missing package manager for macOS](https://brew.sh/)
- [curl - How to Use](https://curl.haxx.se/docs/manpage.html)
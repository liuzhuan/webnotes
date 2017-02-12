# Shell Scripting Primer

Shell scripts are a fundamental part of the OS X programming environment. 

## Login Scripts

OS X provides support for login scripts and environment property lists to allow you set environment variables and aliases that are automatically set whenever you run a new shell. There are two ways to do this:

### Bourne shell (bash, zsh, and so on):

To persistently set environment varibles and add aliases, you can add the appropriate `alias`, variable assignment, and `export` commands to the following files:

* `~/.profile` --- executed automatically for all login shells.
* `~/.bash_profile` --- similar to `.profile`, but only  runs for `bash` login shells.
* `~/.bashrc` and `~/.zshrc` --- executed automatically for all non-login `bash` or `zsh` shells (when you explicitly type `bash` or `zsh` on the command line or run a script that starts with `#!/bin/bash` or `#!/bin/zsh`).

You may also find it useful to create a `.bashrc` file that sources your `.profile` file. For example:

```
. $HOME/.profile
```

### C shell (csh, tcsh, and so on)

* `~/.login`
* `~/.cshrc`

## Reference
- [Shell Scripting Primer](https://developer.apple.com/library/content/documentation/OpenSource/Conceptual/ShellScripting/Introduction/Introduction.html#//apple_ref/doc/uid/TP40004268-TP40003516-SW1)
- [Before You Begin](https://developer.apple.com/library/content/documentation/OpenSource/Conceptual/ShellScripting/BeforeYouBegin/BeforeYouBegin.html)

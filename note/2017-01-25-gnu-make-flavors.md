There are two ways that a variable in GNU `make` can have a value; we call them the two `flavors` of variables. The two flavors are distinguished in how they are defined and in what they do when expanded.

The first flavor of variable is a `recursively expanded` variable. Variables of this sort are defined by lines using `=` or by the `define` directive. 

For example:

```
foo = $(bar)
bar = $(ugh)
ugh = Huh?

all:;echo $(foo)
```

will echo `Huh?`.

This flavor of variable is the only sort supported by most other versions of `make`. It has its advantages and its disadvantages. An advantage (most would say) is that:

```
CFLAGS = $(include_dirs) -O
include_dirs = -Ifoo -Ibar
```

will do what was intended: when `CFLAGS` is expanded in a recipe, it will expand to `-Ifoo -Ibar -O`. A major disadvantage is that **you cannot append something on the end of a variable**, as in 

```
CFLAGS = $(CFLAGS) -O
```

because it will cause an infinite loop in the variable expansion. (Actually `make` detects the infinite loop and reports an error.)

Another disadvantage is that any functions referenced in the definition will be executed every time the variable is expanded. This makes `make` run slower; worse, it causes the `wildcard` and `shell` functions to give unpredictable results because you cannot easily control when they are called, or even how many times.

To avoid all the problems and inconveniences of recursively expanded varaibles, there is another flavor: simply expanded variables.

`Simply expand` variables are defined by lines using `:=` or `::=`. Both forms are equivalent in GNU make.

The value of a simply expanded variable is scanned once and for all, expanding any references to other variables and functions, when the variable is defined. The actual value of the simply expanded variable is the result of expanding the text that you write. Therefore,

```
x := foo
y := $(x) bar
x := later
```

is equivalent to 

```
y := foo bar
x := later
```

Simply expanded varaibles generally make complicated makefile programming more predictable because they work like variables in most programming languages. They allow you to redefine a variable using its own value. 

There is another assignment operator for variables, `?=`. This is called a conditional variable operator, because it only has an effect if the variable is not defined. This statement:

```
FOO ?= bar
```

is exactly equivalent to this:

```
ifeq ($(origin FOO), undefined)
    FOO = bar
endif
```

## Reference
- [GNU make: Flavors](https://www.gnu.org/software/make/manual/html_node/Flavors.html)
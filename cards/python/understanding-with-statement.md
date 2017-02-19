# Understanding Python's "with" statement

by Fredrik Lundh, 2006-10

After contemplating a number of alternatives, GvR and the Python-dev team finally came up with a genaralization, using an object instead of a generator to control the behaviour of an external piece of code:

```python
class controlled_execution:
    def __enter__(self):
        set things up
        return thing
    def __exit__(self, type, value, traceback):
        tear things down

with controlled_execution() as thing:
    some code
```

Now, when the `with` statement is executed, Python evaluates the expression, calls the `__enter__` method on the resulting value (which is called a `context guard`), and assigns whatever `__enter__` returns to the variable given by `as`. Python will then execute the code body, and no matter what happens in that code, call the guard object's `__exit__` method.

In Python 2.5, the file object has been equipped with `__enter__` and `__exit__` methods; the former simply returns the file object itself, and the latter closes the file.

So to open a file, process its contents, and make sure to close it, you can simply do:

```python
with open('x.txt') as f:
    data = f.read()
    # do something with data
```

## Reference
- [Understanding Python's "with" statement](http://effbot.org/zone/python-with-statement.htm)
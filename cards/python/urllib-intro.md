# urllib

`urllib` is a package that collects several modules for working with URLs:

* `urllib.request` for opening and reading URLs
* `urllib.error` containing the exceptions raised by `urllib.request`
* `urllib.parse` for parsing URLs
* `urllib.robotparser` for parsing `robots.txt` files

## Examples

This example gets the python.org main page and displays the first 300 bytes of it.

```python
import urllib.request
with urllib.request.urlopen('http://www.python.org/') as f:
    print(f.read(300))
```

Note that urlopen returns a bytes object. This is because there is no way for urlopen to automatically determine the encoding of the byte stream it receives from the HTTP server. In general, a program will decode the returned object to string once it determines or guesses the appropriate encoding.

## Reference
- [urllib - URL handling modules](https://docs.python.org/3/library/urllib.html)
- [urllib.request](https://docs.python.org/3/library/urllib.request.html#module-urllib.request)
- [HOWTO Fetch Internet Resources Using The urllib Package](https://docs.python.org/3/howto/urllib2.html)
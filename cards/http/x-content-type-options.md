# X-Content-Type-Options 响应头

The `X-Content-Type-Options` response HTTP header is a marker used by the server to indicate that the MIME types advertised in the Content-Type headers should not be changed and be followed. This allows to opt-out(选择排除) of MIME type sniffing, or, in other words, it is a way to say that the webmasters knew what they were doing.

This header was introduced by Microsoft IE 8 as a way for webmasters to block content sniffing that could transform non-executable MIME types into executable MIME types.

Site security testers usually expect this header to be set.

## Syntax

```
X-Content-Type-Options: nosniff
```

## Directives

**nosniff** blocks a request if the requested type is:

* "style" and the MIME type is not "text/css", or
* "script" and the MIME type is not a JavaScript MIME type.

## References
- [X-Content-Type-Options 响应头 - HTTP | MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Content-Type-Options)
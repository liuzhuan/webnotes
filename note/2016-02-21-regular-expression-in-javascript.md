# Regular Expressions

Regular Expressions are used with the `exec` and `test` methods of `RegExp`, and with the `match`, `replace`, `search`, and `split` methods of `String`. 

## Creating a regular expression

```javascript
var re = /ab+c/; // literal; better performance
var re = new RegExp("ab+c"); 
```

## special characters

* `\` make normal character special and make special character normal
* `^` beginning of input
* `$` end of input
* `*` 0 or more, = `{0,}`
* `+` 1 or more, = `{1,}`
* `?` 0 or 1, = `{0,1}`
	* if used after `*`, `+`, `?` or `{}`, make the match `non-greedy`
	* lookahead assertion, such as `x(?=y)` and `x(?!y)`
* 


## References

* [Regular Expressions - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)
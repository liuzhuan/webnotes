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
* `.` any single character except the newline character.
* `(x)` matches 'x' and remembers the match. The parentheses are called `capturing parentheses`.
	* `/(foo) (bar) \1 \2/` `\1`, `\2`, `\n` are used in the matching part
	* `'bar foo'.replace(/(...) (...)/, '$2 $1')`, `$1`, `$2`, `$n` are used in the replacement part
* `(?:x)` Match 'x' but does not remember the match. The parentheses are called `non-capturing parentheses`.
* `x(?=y)` Matches 'x' only if 'x' is followed by 'y'. This is called a `lookahead`.
* `x(?!y)` Matches 'x' only if 'x' is not followed by 'y'. This is called a `negated lookahead`.
* `\b` word boundary
* `\B` non-word boundary
* `\d` a digit character
* `\D` any non-digit character
* `\s` a single white space character
* `\S` a single character other than white space
* `\w` any alphanumeric character including the underscore
* `\W` any non-word character
* `\n` where `n` is a positive integer, a `back reference` to the last substring matching the n parenthetical in the regular expression.

## Working with regular expressions

### RegExp methods

* `exec` returns an array of information
* `test` return true or false

### String methods

* `match` returns an array of information or null on a mismatch
* `search` tests for a match in a string. It returns the index of the match, or -1 if the search fails.
* `replace` replaces the matched substring with a replacement substring
* `split` uses a regular expression or a fixed string to break a string into an array of substrings

## References

* [Regular Expressions - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)
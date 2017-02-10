# Destructuring Assignment in ECMAScript 6

by Nick Fitzgerald, 2013-08-15

## Destructuring Arrays

Without destructuring assignment, you might access the first three items in an array like this:

```js
let first = someArray[0];
let second = someArray[1];
let third = someArray[2];
```

With destructuring assignment, the equivalent code becomes more concise and read-able:

```js
let [first, second, third] = someArray;
```

You can nest patterns as deep as you would like:

```js
var [foo, [[bar], baz]] = [1, [[2], 3]];
```

You can skip over items in the array being destructed:

```js
var [,,third] = ['foo', 'bar', 'baz'];
```

And you can capture all trailing items in an array with a "rest" pattern:

```js
var [head, ...tail] = [1, 2, 3, 4];
console.log(tail);
// [2, 3, 4]
```

## Destructuring Objects

```js
var robotA = { name: "Bender" };
var { name: nameA } = robotA;
console.log(nameA);
// "Bender"
```

There is a helpful syntactical shortcut for when the property and variable names are the same:

```js
var {foo, bar} = {foo:'lorem', bar:'ipsum'};
console.log(foo);
```

## Practical Applications of Destructuring

### Function Parameter Definitions

```js
function removeBreakpoint({url, line, column}) {
    // ...
}
```

### Configuration Object Parameters

```js
jQuery.ajax = function(url, {
    async = true,
    beforeSend = function(){},
    cache = true,
    complete = function(){},
    crossDomain = false,
    global = true,
    // ... more config
}) {
    // ... do stuff
}
```

### With the ES6 Iteration Protocol

```js
var map = new Map();
map.set(window, 'the global');
map.set(document, 'the document');

for (let [key, value] of map) {
    console.log(`${key} is ${value}`);
}
```

### Multiple Return Values

```js
function returnMultipleValues() {
    return [1, 2];
}

var [foo, bar] = returnMultipleValues();
```

### Importing a Subset of a Module

```js
const {SourceMapConsumer, SourceNode} = require('source-map');
```

## Reference
- [Destructuring Assignment in ECMAScript 6](http://fitzgeraldnick.com/2013/08/15/destructuring-assignment-in-es6.html)
# Clean Code JavaScript

## Variables 

### Use meaningful and pronounceable variable names
### Use the same vocabulary for the same type of variable
### Use searchable names
### Use explanatory variables

    ```js
    const address = 'One Infinite Loop, Cupertino 98014';
    const cityZipCodeRegex = /^[^,\\]+[,\\\s]+(.+?)\s*(\d{5})?$/;
    const [, city, zipCode] = address.match(cityZipCodeRegex) || [];
    saveCityZipCode(city, zipCode);
    ```

### Avoid Mental Mapping

Explicit is better than implicit.

    ```js
    const locations = ['Austin', 'New York', 'San Francisco'];
    locations.forEach((location) => {
        doStuff();
        doSomeOtherStuff();
        // ...
        dispatch(location);
    })
    ```

### Don't add unneeded context
### Use default arguments instead of short circuiting or conditionals

    ```js
    function createMicrobrewery(breweryName = 'Hipster Brew Co.') {
        console.log(`Hello ${breweryName}!`);
    }
    ```

## Functions

### Function arguments (2 or fewer ideally)

To make it obvious what properties the function expects, you can use the ES2015/ES6 **destructuring** syntax. 

```js
function createMenu({title, body, bottonText, cancellable}) {
    // ...
}

createMenu({
    title: 'Foo',
    body: 'Bar',
    buttonText: 'Baz',
    cancellable: true
});
```

### Function should do one thing
### Function names should say what they do 
### Functions should only be one level of abstraction
### Remove duplicate code
## Set default objects with Object.assign

> By the way, what is Object.assign?

```js
const menuConfig = {
    title: 'Order',
    buttonText: 'Send',
    cancellable: true
};

function createMenu(config) {
    config = Object.assign({
        title: 'Foo',
    })
}
```

### Don't use flags as function parameters
### Avoid Side Effects

```js
const addItemToCart = (cart, item) => {
    return [...cart, {item, date:Date.now() }];
};
```

### Don't write to global functions

```js
class SuperArray extends Array {
    diff(comparisonArray) {
        const hash = new Set(comparisonArray);
        return this.filter(elem => !hash.has(elem));
    }
}
```

> What is Set? How to use it?

### Favor functional programming over imperative programming
### Encapsulate conditionals
### Avoid negative conditionals
### Avoid conditionals --- Use polymorphism
### Avoid type-checking
### Don't over-optimize
### Remove dead code

## Objects and Data Structures

## Reference 
- [Clean Code JavaScript](https://github.com/ryanmcdermott/clean-code-javascript)
- [Object.assign() - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
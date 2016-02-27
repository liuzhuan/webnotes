# Vue.js in Action

> Vue.js is a library for building interactive web interfaces. The goal of Vue.js is to provide the benefits of **reactive data binding** and **composable view components** with an API that is as simple as possible.

## Hello World

```html
<div id="app">
	{{ message }}
</div>
```

```js
new Vue({
	el: '#app',
	data: {
		message: 'Hello Vue.js!'
	}
})
```

## The Vue Instance

Every Vue.js app is bootstrapped by creating a **root Vue instance** with the `Vue` constructor function: 

```js
var vm = new Vue({
	// options
})
```

当实例化 Vue 时，需要传入选项参数，其中包括 data, template, el, methods, lifecycle callbacks 等。

可以扩展 Vue 构造函数，产生新的可复用的组件构造函数，其中有预定义的参数：

```js
var MyComponent = Vue.extend({
	// extension options
})

// all instances of `MyComponent` are created with 
// the pre-defined extension options
var myComponentInstance = new MyComponent()
```

Although you can create extended instance imperatively, in most cases you will be registering a component constructor as a custom element and composing them in templates declaratively.

## Two-way Binding (`v-model`)

```html
<div id="app">
	<p>{{ message }}</p>
	<input v-model="message">
</div>
```

```js
new Vue({
	el: '#app',
	data: {
		message: 'Hello Vue.js!'
	}
})
```

The `v-model` attribute you are seeing is called **Directive**. Directives are prefixed with `v-` to indicate that they are special attributes provided by Vue.js.

```html
<div id="app">
	<p v-if="greeting">Hello!</p>
</div>
```

```js
var example = new Vue({
	el: '#app',
	data: {
		greeting: true
	}
})
```

## Render a List (`v-for`)

```html
<div id="app">
	<ul>
		<li v-for="todo in todos">
			{{ todo.text }}
		</li>
	</ul>
</div>
```

```js
new Vue({
	el: '#app',
	data: {
		todos: [
			{ text: 'Learn JavaScript' },
			{ text: 'Learn Vue.js' },
			{ text: 'Build Something Awesome' }
		]
	}
})
```

## Handle User Input (`v-on:click`)

```html
<div id="app">
	<p>{{ message }}</p>
	<button v-on:click="reverseMessage">
		Reverse Message
	</button>
</div>
```

```js
new Vue({
	el: '#app',
	data: {
		message: 'Hello Vue.js!'
	},
	methods: {
		reverseMessage: function() {
			this.message = this.message.split("").reverse().join('')
		}
	}
})
```

## 制作一个待办清单 (`v-on:keyup.enter`)

```html
<div id="app">
	<input v-model="newTodo" v-on:keyup.enter="addTodo">
	<ul>
		<li v-for="todo in todos">
			<span>{{ todo.text }}</span>
			<button v-on:click="removeTodo($index)">X</button>
		</li>
	</ul>
</div>
```

```js
new Vue({
	el: '#app',
	data: {
		todos: [
			{ text: "Hello World!" }
		],
		newTodo: ''
	},
	methods: {
		addTodo: function() {
			var text = this.newTodo.trim()

			if (text) {
				this.todos.push({ text: text })
				this.newTodo = ''
			}
		},

		removeTodo: function(idx) {
			this.todos.splice(idx, 1);
		}
	}
})
```

## Component System

Vue.js components works consistently in all supported browser (IE9 and above). The component system is the foundation for building large apps with Vue.js.

## Properties and Methods

Each Vue instance proxies all the properties found in its `data` object. It should be noted that only these proxied properties are **reactive**. If you attach a new property to the instance after it has been created, it will not trigger any view updates.

Vue instances expose a number of useful instance properties and methods. Those properties and methods are prefixed with `$` to differentiate from proxied data properties. For example:

```js
var data = { a: 1 }
var vm = new Vue({
	el: '#example',
	data: data
})

vm.$data === data // -> true
vm.$el === document.getElementById("example") // -> true

vm.$watch('a', function(newVal, oldVal){
	// this callback will be called when `vm.a` changes
})
```

## Instance Lifecycle

Each Vue instance goes through a series of initialization steps when it is created - for example, it needs to set up data observation, compile the template, and create the necessary data bindings. Along the way, it will also invoke some **lifecycle hooks**, which gives us the opportunity to execute custom logic. For example, the `created` hook is called after the instance is created: 

```js
var vm = new Vue({
	data: {
		a: 1
	},
	created: function(){
		// `this` points to the vm instance
		console.log('a is: ' + this.a)
	}
})
```

## References

* [Getting Started - vue.js](http://vuejs.org/guide/)
* [Overview - vue.js](http://vuejs.org/guide/overview.html)
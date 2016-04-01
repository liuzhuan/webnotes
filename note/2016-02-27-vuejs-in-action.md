# Vue.js in Action

> Vue.js is a library for building interactive web interfaces. The goal of Vue.js is to provide the benefits of **reactive data binding** and **composable view components** with an API that is as simple as possible.

## Hello World

```html
<div id="app">
	{{ message }}
</div>
```

## 双向绑定

使用 `v-model`

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

## 渲染列表

使用 `v-for`

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

## 处理用户输入

使用 `v-on:click`

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

## 待办清单 

综合应用

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

## 属性和方法

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

## 生命周期

每个 Vue 实例诞生时，都会经历一系列初始化步骤，比如：设置数据观察者模式，编译模板以及创建必要的数据绑定。其中会调用一些“钩子函数”，以便执行自定义逻辑。比如，`created` 钩子会在创建后调用：

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

其他的钩子有：`compiled`, `ready` and `destroyed`。整个实例生命周期如下图所示：

![Lifecycle Diagram](http://vuejs.org/images/lifecycle.png)

## 过滤器

Vue.js 允许在表达式后添加 `filters`，用管道符号 `|` 表示。比如，让 `message` 通过内置 `capitalize` 过滤器处理：

```js
{{ message | capitalize }}
```

过滤器可以串联：

```js
{{ message | fiterA | filterB }}
```

也可以传入参数：

```js
{{ message | filterA 'arg1' arg2 }}
```

## 指令

指令是带有 `v-` 前缀的特殊属性。她的职责在于，当表达式变化时，给 DOM 施加特殊的动作。

### 属性

Some directives can take an "argument", denoted by a colon after the directive name. For example, the `v-bind` directive is used to reactively update an HTML attribute:

```html
<a v-bind:href="url"></a>
```

### 修饰器

Modifiers are special postfixes denoted by a dot, which indicates that a directive should be bound in some special way. For example, the `literal` modifier tells the directive to interpret its attribute value as a literal string rather than an expression:

```html
<a v-bind:href.literal="/a/b/c"></a>
```

### 简写方式

`v-bind:` 可简写成 `:`；`v-on:` 可简写成 `@`。

```html
<!-- v-bind Shorthand -->
<a v-bind:href="url"></a>
<a :href="url"></a>

<button v-bind:disabled="someDynamicCondition">Button</button>
<button :disabled="someDynamicCondition">Button</button>

<!-- v-on Shorthand -->
<a v-on:click="doSomething"></a>
<a @click="doSomething"></a>
```

## 类名和类型绑定

当 `v-bind` 绑定的属性是 `class` 和 `style` 时，其取值除了是字符串，还可以是 Object 和 Array。

### 绑定类名

Object Syntax

```html
<div class="static" v-bind:class="{'class-a': isA, 'class-b': isB}"></div>
```

```js
data: {
	isA: true,
	isB: false
}
```

which will render: 

```html
<div class="static class-a"></div>
```

When you use a CSS property that requires vendor prefixes in `v-bind:style`, for example `transform`, Vue.js will automatically detect and add appropriate prefixes to the applied styles.

## 条件渲染

使用 `v-if` 和 `v-else`

```js
<h1 v-if="ok">Yes</h1>
<h1 v-else>No</h1>
```

## 计算属性

For any logic that requires more than one expression, you should use a **computed property**.

```html
<div id="app">
	a={{a}}, b={{b}}
</div>
```

```js
var vm = new Vue({
	el: "#app",
	data: {
		a: 1
	},
	computed: {
		b: function(){
			return this.a + 1;
		}
	}
})
```

## References

* [Getting Started - vue.js](http://vuejs.org/guide/)
* [Overview - vue.js](http://vuejs.org/guide/overview.html)
* [Data Binding Syntax - vue.js](http://vuejs.org/guide/syntax.html)
* [Computed Properties](http://vuejs.org/guide/computed.html)
* [Class and Style Bindings](http://vuejs.org/guide/class-and-style.html)
* [Conditional Rendering](http://vuejs.org/guide/conditional.html)
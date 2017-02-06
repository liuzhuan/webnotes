require("./scss/style.scss")
var foo = require("./popup")

function hello(uname) {
	console.log("Hello " + uname + "!");
}

hello("Liu Zhuan");

$("<p class='output'>Hello world</p>").appendTo("body")

$(".output").css("background-color", "black")

foo.myFunc("Xie Meng");

alert("Hello world!")
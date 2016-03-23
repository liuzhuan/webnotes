# PHP 入门

## 目录

* [Hello World!](#hello-world!)
* [大小写不敏感](#大小写不敏感)
* [变量](#variables)
* [数据类型](#data-types)
* [参考资料](#参考资料)

## Hello World!

```php
<?php
  // php 支持单行注释
  # 这也是单行注释
  /*
    也支持多行注释
  */
  echo "Hello World!";

  $x = 5 + 5;
  echo $x;
?>
```

## 大小写不敏感

所有的关键词，类名，函数和用户定义的函数都是大小写**不敏感**的，所以如下代码是一样的：

```php
<?php
  ECHO "Hello World!<br>";
  echo "Hello World!<br>";
  Echo "Hello World!<br>";
?>
```

## Variables

PHP 的变量以 `$` 打头，后跟变量名：

```php
<?php
  $txt = "Hello world!";
  $x = 5;
  $y = 10.5;
?>
```

注意，PHP **变量名是大小写敏感**的！所以，`$age` 和 `$AGE` 是两个不同的变量。

### 输出变量

```php
  <?php
    $txt = "W3Schools.com";
    echo "I love $txt!";

    echo "I love " . $txt . "!"; # 等价于上面语句

    $x = 5;
    $y = 4;
    echo $x + $y; # PHP 是弱类型语言
  ?>
```

### 作用域

PHP 有三种不同的作用域：

* 局部变量 local
* 全局变量 global
* 静态变量 static

在函数外声明的变量具有全局作用域，只能在函数外访问。函数内省名的变量具有局部作用域，只能在函数内访问。

如果想在函数内访问全局变量，可以使用 `global` 关键词：

```php
<?php
  $x = 5;
  $y = 10;

  function myTest() {
    global $x, $y;
    $y = $x + $y;
  }

  myTest();
  echo $y; // output 15
?>
```

PHP 把所有的全局变量储存在 `$GLOBALS[index]` 数组中，其中 `index` 是变量名称。可以在函数内访问这个数组并直接更改全局变量值。所以，上面的代码可以修改成：

```php
# ...
function myTest(){
	$GLOBALS['y'] = $GLOBALS['x'] + $GLOBALS['y'];
}
# ...
```

通常，函数结束后，其中的局部变量就会被删除。如果为了保留这些值，可以使用 `static` 关键词。

```php
<?php
  function myTest() {
    static $x = 0;
    echo $x;
    $x++;
  }

  myTest();
  myTest();
  myTest();
?>
```

## Data Types

PHP 支持如下数据类型：

* String 字符串
* Integer 整数
* Float 浮点数
* Boolean 布尔值
* Array 数组
* Object 对象
* NULL 空数值
* Resource 资源

PHP 的整数范围是 `-2,147,483,648` 和 `2,147,483,647` 之间。有十进制、十六进制和八进制三种规格。

在下面例子中，`var_dump()` 函数返回数据类型和数值：

```php
$x = 5985;
var_dump($x); // 输出：int(5985)
```

数组可以在一个变量名中存储多个数值：

```php
$cars = array("Volvo", "BMW", "Toyota");
var_dump($cars); // output: array(3) { [0]=> string(5) "Volvo" [1]=> string(3) "BMW" [2]=> string(6) "Toyota" }
```

对象可以包含数据，以及处理这些数据的方法。首先，要使用 `class` 关键词声明类型：

```php
class Car {
  function Car() {
    $this->model = "VW";
  }
}

$herbie = new Car();

echo $herbie->model;
```

如果在 PHP 7 中运行如下代码，可能会报错：`PHP Deprecated:  Methods with the same name as their class will not be constructors in a future version of PHP; Car has a deprecated constructor in F:\wwwroot\test.php on line 2`。在 PHP 5+ 中，需要使用 [__construct()](http://php.net/manual/en/language.oop5.decon.php) 作为构造函数。这个细微改变，当类名改变时，不需要改变构造函数名称，让程序更健壮。

资源类型不是一种真正的数据类型，用来存储 PHP 之外数据和资源的引用，比如数据库访问调用。

## String API

```php
echo strlen("Hello world!"); // 12

// 统计单词个数
echo str_word_count("Hello world!"); // 2

echo strrev("Hello world!"); // !dlrow olleH

// 查找字符串
echo strpos("Hello world!", "world"); // 6

// 替换字符串
echo str_replace("world", "Dolly", "Hello world!"); // Hello Dolly!
```

## Constants

常量一经声明，不能改变。常量名前不需要 $ 前缀。使用 define() 函数定义常量：

```php
// Syntax
define(name, value, case-insensitive);

define("GREETING", "Welcome to W3Schools.com!");
echo GREETING;

define("GREETING", "Welcome to W3Schools.com!", true)
echo greeting;
```

## conditional statements

下面的例子会输出 "Have a good day!"，如果当前的小时小于20：

```php
$t = date("H");

if ($t < "20") {
	echo "Have a good day!";
}

```

复杂分支的条件语句，需要使用 `elseif` 和 `else` ：

```php
  $t = date("H");

  if ($t < "10") {
  	echo "Have a good morning!";
  }	elseif ($t < "20") {
  	echo "Have a good day!";
  } else {
  	echo "Have a good night!";
  }
```

## loops

while 循环

```php
  $x = 1;

  while ($x <= 5) {
  	echo "The number is: $x <br>";
  	$x++;
  }
```

for 循环

```php
  for ($x = 0; $x <= 10; $x++) {
  	echo "The number is: $x <br>";
  }
```

foreach 循环

```php
  $colors = array("red", "green", "blue", "yellow");
  foreach ($colors as $value) {
  	echo "$value <br>";
  }
```

## array

PHP 有三种类型数组：

* 索引数组
* 关联数组
* 多维数组

创建索引数组有两种方式：

```php
$cars = array("Volvo", "BMW", "Toyota");

$cars[0] = "Volvo";
$cars[1] = "BMW";
$cars[2] = "Toyota";
```

获取数组长度

```php
$cars = array("Volvo", "BMW", "Toyota");
echo count($cars);
```

## 参考资料

* [PHP 5 介绍 | w3schools.com](http://www.w3schools.com/php/php_intro.asp)
* [__construct() vs SameAsClassName() for constructor in PHP][1]

[1]: http://stackoverflow.com/questions/217618/construct-vs-sameasclassname-for-constructor-in-php
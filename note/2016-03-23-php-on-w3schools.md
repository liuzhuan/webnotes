# PHP 入门

## 目录

* [Hello World!](#Hello World!)
* [大小写不敏感](#大小写不敏感)

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

## 参考资料

* [PHP 5 介绍 | w3schools.com](http://www.w3schools.com/php/php_intro.asp)
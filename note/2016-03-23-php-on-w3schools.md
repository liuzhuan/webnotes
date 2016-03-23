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

所有的关键词，类名，函数和用户定义的函数都是大小写**不敏感**的，所以以下代码是一样的：

```php
<?php
  ECHO "Hello World!<br>";
  echo "Hello World!<br>";
  Echo "Hello World!<br>";
?>
```

## 参考资料

* [PHP 5 介绍 | w3schools.com](http://www.w3schools.com/php/php_intro.asp)
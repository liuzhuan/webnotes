# MongoDB Tutorial

MongoDB 是一个基于分布式文件存储的数据库，介于关系数据库和非关系数据库之间。

## 关系型数据库

关系型数据库遵循 ACID 原则

1. Atomicity 原子性
2. Consistency 一致性
3. Isolation 独立性
4. Durability 持久性

## NoSQL 简介

NoSQL (Not Only SQL)，意即“不仅仅是 SQL”。NoSQL 用于超大规模数据的存储。

NoSQL 一词最早出现于 1998年，是 Carlo Strozzi 开发的一个轻量、开源、不提供 SQL 功能的关系数据库。

2009年，Last.fm 的 Johan Oskarsson 发起了一次关于分布式开源数据库的讨论，来自 Rackspace 的 Eric Evans 再次提出了 NoSQL 的概念，这时的 NoSQL 主要指非关系型、分布式、不提供ACID的数据库设计模式。

2009年在亚特兰大举行的"no:sql(east)"讨论会是一个里程碑，其口号是 `select fun, profit from real_world where relational=false;`。因此，对 NoSQL 最普遍的解释是"非关联型的"，强调 `Key-Value Stores` 和文档数据库的优点，而不是单纯的反对 RDBMS。

## CAP定理（CAP theorem）

在计算机科学中, CAP定理（CAP theorem）, 又被称作 布鲁尔定理（Brewer's theorem）, 他指出对于一个分布式计算系统来说，不可能同时满足以下三点:

* 一致性(Consistency) (所有节点在同一时间具有相同的数据)
* 可用性(Availability) (保证每个请求不管成功或者失败都有响应)
* 分隔容忍(Partition tolerance) (系统中任意信息的丢失或失败不会影响系统的继续运作)


## References

* [MongoDB 教程 | 菜鸟教程](http://www.runoob.com/mongodb/mongodb-tutorial.html)
* [Downloads | MongoDB](https://www.mongodb.org/downloads)
# BEM 命名法

BEM 是 Yandex 团队开发的方法论，帮助创建可重用的组件。

- B: `Block` 具有独立意义的块
- E: `Element` 附属于块，自身无独立意义
- M: `Modifier` 修饰器，修改样式的标识位

## 命名规范

元素 | 命名规范 | 示例
--- | ------- | ---
Block | 简短拉丁单词 | `.block`
Element | 双下划线 | `.block__elem`
Modifier | 双短线 | `.block--mod`, `.block__elem--mod`

## 优势

- **模块化** Modularity
- **可重用**
- **结构** 简单易懂，结构坚固

## Reference
- [BEM 命名法](http://getbem.com/naming/)
- [BEM 简介](http://getbem.com/introduction/)
- [MindBEMding - getting your head'round BEM syntax](https://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/)
- [Yandex 搜索引擎](https://www.yandex.com/)
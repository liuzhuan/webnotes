# 浅谈 VisMooc 前端工程化

## 问题

* 代码难以维护
  * 缺少统一编码规范
  * 变量名随意起
  * 模块化和组件化的特性较弱
  * 遗留代码腐烂
* 项目难以维护
  * 缺少项目管理工具
  * 代码依赖混乱
  * .gitignore 混乱
* 部署难以维护
  * 没有版本号、内容指纹
  * 覆盖式发布，升级不够平滑

## 解决方案

* 前端渲染 Vuejs
* 构建打包 Webpack
* 依赖包管理 npm 

## 项目目录的设计

```
Project
    |-node_modules        // npm 上的第三方资源
    |-src
        |-Components      // 存放组件资源
        |-Filters         // Custom vuejs filters
        |-Directives      // Custom vuejs directives
        |-Static          // 存放非组件资源
        |-lib             // 存放不在 npm 上的第三方资源
```

## 组件化开发

![组件化开发](http://chenzhutian.org/blog/2016/%E6%B5%85%E8%B0%88VisMooc%E7%9A%84%E5%89%8D%E7%AB%AF%E5%B7%A5%E7%A8%8B%E5%8C%96/components1.png)

example.vue

![example.vue](http://chenzhutian.org/blog/2016/%E6%B5%85%E8%B0%88VisMooc%E7%9A%84%E5%89%8D%E7%AB%AF%E5%B7%A5%E7%A8%8B%E5%8C%96/vuejs-component.png)

## References

* [浅谈 VisMooc 的前端工程化](http://chenzhutian.org/blog/2016/%E6%B5%85%E8%B0%88VisMooc%E7%9A%84%E5%89%8D%E7%AB%AF%E5%B7%A5%E7%A8%8B%E5%8C%96/)
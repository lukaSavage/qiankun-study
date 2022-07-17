# qiankun-demo

## 一、介绍

​	为了解决庞大的一整块后端服务带来的变更与扩展方面的限制，出现了[微服务架构](https://link.zhihu.com/?target=http%3A//www.ayqy.net/blog/%e5%be%ae%e6%9c%8d%e5%8a%a1%e6%9e%b6%e6%9e%84%ef%bc%88microservices%ef%bc%89/)

	微服务是面向服务架构（SOA）的一种变体，把应用程序设计成一系列松耦合的细粒度服务，并通过轻量级的通信协议组织起来
	具体地，将应用构建成一组小型服务。这些服务都能够独立部署、独立扩展，每个服务都具有稳固的模块边界，甚至允许使用不同的编程语言来编写不同服务，也可以由不同的团队来管理

​	然而，越来越重的前端工程也面临同样的问题，自然地想到了将微服务思想应用（照搬）到前端，于是有了「微前端（micro-frontends）」的概念：

​	**将前端应用分解成一些更小、更简单的能够独立开发、测试、部署的小块，而在用户看来仍然是内聚的单个产品**

### 1.1 为什么去使用它？

​	首先，我们需要知道它出现的背景，在学习前需要思考如下几个问题：

- 不同团队件开发同一个应用技术栈不同怎么破？

- 希望每个团队都可以独立开发，独立部署怎么破？

- 项目中还需要老的应用代码怎么破

  ```
  我们是不是可以将一个应用划分成若干个子应用，将子应用打包成一个个的lib。当路径切换时加载不同的子应用。这样每个子应用都是独立的，技术栈也不用做限制了。从而解决了前端协同开发问题。
  ```

### 1.2 与iframe的区别？

1. url 不同步。浏览器刷新 iframe url 状态丢失、后退前进按钮无法使用。
2. UI 不同步，DOM 结构不共享。想象一下屏幕右下角 1/4 的 iframe 里来一个带遮罩层的弹框，同时我们要求这个弹框要浏览器居中显示，还要浏览器 resize 时自动居中..
3. 全局上下文完全隔离，内存变量不共享。iframe 内外系统的通信、数据同步等需求，主应用的 cookie 要透传到根域名都不同的子应用中实现免登效果。
4. 慢。每次子应用进入都是一次浏览器上下文重建、资源重新加载的过程。

### 1.3 微前端解决的问题

- 不同团队（技术栈不同），同时开发一个应用
- 每个团队开发的模块都可以独立开发，独立部署

### 1.4 如何实现微前端

我们可以将一个应用划分成多个若干个子应用，将子应用打包成一个个的模块。当路径切换加载不同的子应用，这样每个子应用都是独立的，技术栈也不用做限制了！从而解决了前端协同开发问题。（子应用需要暴露固定的钩子bootstrap、mount）

- `iframe`、`webComponent`
- 2018年`Single-spa`诞生了，`Single-spa`是一个用于前端微服务化的`JavaScript`前端解决方案（本身没有处理样式隔离，js执行隔离）实现了路由劫持和应用加载
- 2019年`qiankun`基于Single-spa，提供了更加开箱即用的`API`(`single-spa`+`sandbox`+`import-html-entry`)做到了技术栈无关、并且介入简单（像`iframe`一样简单）

```markdown
总结：子应用可以独立构建，运行时动态加载，主子应用完全解耦，技术栈无关，靠的是协议介入（子应用必须导出bootstrap、mount、unmount方法）
```

> 拓展：微前端与iframe的区别？
>
> ​	iframe的子应用切换路由时用户刷新页面会切换到原有的页面去

## 二、System.js

`SystemJs`是一个通用的模块加载器，它能在浏览器上动态加载模块。微前端的核心就是加载微应用，我们将一个个应用打包成模块，在浏览器汇总通过SystemJs来加载模块。

### 2.1 搭建React开发环境

```bash
npm init -y
npm i webpack webpack-cli webpack-dev-server babel-loader @babel/core @babel/preset-env @babel/preset-react html-webpack-plugin -D
npm i react react-dom
```

  

三、Single-Spa实战

1. 需要安装的包

   ```
   yarn add single-spa-vue    // 用于实现路由和应用加载，该包可以帮助我们导出单页面子应用
   ```

2. 具体用法

   - vue-child：  src/main.js文件

     ```js
     import Vue from 'vue';
     import App from './App.vue';
     import singleSpaVue from 'single-spa-vue';
     
     Vue.config.productionTip = false;
     
     /* 
     new Vue({
     	render: h => h(App),
     }).$mount('#app');
      */
     
     const appOptions = {
     	el: '#vue', // 挂载到父应用中的id为vue的标签中
     	render: h => h(App),
     };
     
     // note: ①、协议接入，定好了协议，父应用会调用这些方法
     export const { bootstrap, mount, unmount } = singleSpaVue({
     	Vue,
     	appOptions,
     });
     
     // note: ②、我们需要父应用加载子应用，将子应用打包成一个个的lib去给父应用使用
     ```

   - vue-child    src/vue.config.js

     ```js
     const { defineConfig } = require('@vue/cli-service');
     module.exports = defineConfig({
         configureWebpack: {
             output: {
                 library: 'singleVue',  // 打包类库的名字
                 library: 'umd'         // 打包后的模块类型，umd:会把导出后的模块放入到window上
             },
             devServer: {
                 port: 10000
             }
         },
     	transpileDependencies: true,
     });
     
     ```

   - vue-parent  
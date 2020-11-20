import { IConfig } from 'umi-types';

// ref: https://umijs.org/config/
const config: IConfig =  {
  treeShaking: true,
  routes: [
    {
      path: '/',
      component: '../layouts/index',
      routes: [
        { path: '/', component: '../pages/index' }
      ]
    }
  ],
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    // 使用这个插件集合将umi和dve结合  
    ['umi-plugin-react', {
      // 启用后自动配置 babel-plugin-import 实现 antd, antd-mobile
      //  和 antd-pro 的按需编译，并且内置 antd, antd-mobile 依赖，无需手动在项目中安装
      antd: false,
      // dva可以直接赋值为true 也可以写成对象进行配置
      // dva: true,
      dva:{
        // 在这里可以使用immer 简写reducer
        // immer也可以在app.js中使用
        immer:true
        // hmr，是否启用 dva 的 hmr  其实就是热模块替换
      },

      // 配置路由动态加载  就是懒加载
      // 是否启用动态加载，单独打包文件，需要另一个页面的东西，动态加载就好了
      // 开启是true
      // 开启之后在Network里面加载文件时候就会有 什么thunk.css其实就是懒加载
      // dynamicImport: true,
      dynamicImport: {
        // 这里面可以配置  全局刷新  跳转  出现的loading加载中库
        // 可以找一些效果图  这里只是放一个组件  而组件里面就自定义了
        loadingComponent:"./components/Loading",
        // 可以配置打包时候文件名有意义不会使用哈希值
        webpackChunkName:true,
        // 指定按需加载的路由等级
        // 这里面配置按需编译的级别  配置1  可能只在1级路由做按需编译，其他子路由不会
        // 
        level:1
      },
      title: 'umi-app-dva',
      
      
      // 路由相关配置 基于 umi-plugin-routes 实现，用于批量修改路由。
      routes: {
        // 用于忽略某些路由，比如使用 dva 后，通常需要忽略 models、components、services 等目录
        exclude: [
          /components\//,
        ],
        // update, 值为 Function，用于更新路由
        // update
      },
      // locale
      // 基于 umi-plugin-locale 和 react-intl 实现，用于解决 i18n 问题。
      locale:{
        // default:"zh-CN",//默认语言 中文  然后各种支持的语言在node-module/antd/lib/local文件夹下
        default:"en-US",//默认语言 英语
        baseNavigator: false,// 为true时,使用navigator.language 的值作为默认语言
        antd: false, //是否启用antd 的 组件国际化
      },
      // 可能切换底层库为 preact 或 react。
      // library:{

      // }

      // dll
      // 通过 webpack 的 dll 插件预打包一份 dll 文件来达到二次启动提速的目的。
      // 就是提高编译速度
      // dll: false,
      dll:{
        include:["dva/router","dva/saga","dva/fetch"],
        exclude:["@babel/runtime"]
      }
    }],
  ],
}

export default config;

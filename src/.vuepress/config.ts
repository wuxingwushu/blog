import { defineUserConfig } from "vuepress";
import { commentPlugin } from '@vuepress/plugin-comment'// 评论插件

import theme from "./theme.js";



export default defineUserConfig({
  base: "/blog/",

  lang: "zh-CN",
  title: "博客内容",
  description: "vuepress-theme-hope 的博客演示",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,


  // 评论插件
  plugins: [
    commentPlugin({
      provider: 'Giscus', // Artalk | Giscus | Waline | Twikoo

      repo:"wuxingwushu/blog",
      repoId:"R_kgDONNlfTQ",
      category:"1eedbe9df934c939e186392bf036c60eeb983d25",
      categoryId:"Ov23liD4rzasgpgB9jjv",
    }),
  ],


});



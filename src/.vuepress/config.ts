import { commentPlugin } from '@vuepress/plugin-comment'// 评论插件
import { markdownImagePlugin } from '@vuepress/plugin-markdown-image'// 图片插件
import { defineUserConfig } from "vuepress";


import theme from "./theme.js";



export default defineUserConfig({
  base: "/blog/",

  lang: "zh-CN",
  title: "博客内容",
  description: "vuepress-theme-hope 的博客演示",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,


  
  plugins: [
    // 评论插件
    commentPlugin({
      provider: 'Giscus', // Artalk | Giscus | Waline | Twikoo

      repo:'wuxingwushu/blog',
      repoId:"R_kgDONNlfTQ",
      category:"General",
      categoryId:"DIC_kwDONNlfTc4CkPBG",
    }),

    // 图片插件
    markdownImagePlugin({
      // 启用 figure
      figure: true,
      // 启用图片懒加载
      lazyload: true,
      // 启用图片标记
      mark: true,
      // 启用图片大小
      size: true,
    }),
  ],

  

});



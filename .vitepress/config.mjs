import { defineConfig } from 'vitepress'
import { set_sidebar } from "./utils/auto_sidebar.mjs";	
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "CODE WITH ZEN",
  description: "A VitePress Site",
  head: [["link", { rel: "icon", href: "/vitepress/huli.svg" }]],
  base: "/vitepress/",
  themeConfig: {
    sidebar: false, // 关闭侧边栏
    aside: "left", // 设置右侧侧边栏在左侧显示
    outlineTitle:"目录",
    outline:[2,6],
    logo: '/icon1.png',
    nav: [
      { text: 'Home', link: '/' },
      {
        text: '导航',
        items: [
          { text: '编程', link: "/C/C1" },
          { text: '图片', link: "/C/C2" }
        ]
      },
      {
        text: '兴趣',
        items: [
          { text: '脱口秀', link: "/B/B1" },
          { text: '说唱', link: "/B/B2" },
          { text: '电影', link: "/B/B3" }
        ]
      },
      {
        text: '学习',
        items: [
          { text: '敬请期待', link: "/A/A1" },
          { text: '敬请期待', link: "/A/A2" },
          { text: '敬请期待', link: "/A/A3" }
        ]
      }
    ],
  
    socialLinks: [
      { icon: 'github', link: 'https://github.com/code-with-zen' },
      { icon: 'bilibili', link: 'https://space.bilibili.com/398590449' },
      { icon: 'xiaohongshu', link:'https://www.xiaohongshu.com/user/profile/6489b684000000001f005fc2' }
    ],

    footer:{
      copyright:"Copyright © 2025-present Zen"
    },

    search:{
      provider: 'local', 
      options:{
        translations:{
          button:{
            buttonText:"搜索",
            buttonAriaLabel:"搜索",
          },
          modal:{
            noResultsText:"没有找到结果",
            resetButtonTitle:"重置搜索",
            footer:{
              selectText:"选择",
              navigateText:"切换",
            }
          }
        }
      }
    }
  }
})

import { defineConfig } from 'vitepress'
import { set_sidebar } from "./utils/auto_sidebar.mjs";	
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "程序练习生",
  description: "A VitePress Site",
  head: [["link", { rel: "icon", href: "/icon1.png" }]],
  base: "/vitepress/",
  themeConfig: {
    sidebar: false, // 关闭侧边栏
    aside: "left", // 设置右侧侧边栏在左侧显示
    outlineTitle:"目录",
    outline:[2,6],
    logo: '/icon1.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'A', 
        items: [
          { text: 'A1', link: "/A/A1" },
          { text: 'A2', link: "/A/A2" },
          { text: 'A3', link: "/A/A3" }
        ]
      },
      {
        text: 'B',
        items: [
          { text: 'B1', link: "/B/B1" },
          { text: 'B2', link: "/B/B2" },
          { text: 'B3', link: "/B/B3" }
        ]
      },
      {
        text: 'C',
        items: [
          { text: 'C1', link: "/C/C1" },
          { text: 'C2', link: "/C/C2" },
          { text: 'C3', link: "/C/C3" }
        ]
      }
    ],
  
    socialLinks: [
      { icon: 'github', link: 'https://github.com/code-with-zen' }
    ],

    footer:{
      copyright:"Copyright © 2025-present Sunheart"
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

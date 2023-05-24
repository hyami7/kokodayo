import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "HAL",
  base: '/hal/',
  description: "个人博客",
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    nav: [
      { text: '笔记', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: '笔记',
        items: [
          { text: '示例1', link: '/markdown-examples' },
          { text: '示例2', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})

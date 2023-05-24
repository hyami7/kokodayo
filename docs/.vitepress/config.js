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
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '开发文档', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: '开发文档',
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

const moment = require('moment');
module.exports = {
  title: 'WTDR',
  base: "/",
  plugins: [
    ['vuepress-plugin-auto-sidebar', {
      titleMap: {
        Docs: '文档',
        WP_Docs: 'WTDR.Pack 文档'
      }
    }],
    ['@vuepress/last-updated', {
      transformer: (timestamp) => moment(timestamp).format(' YYYY 年 MM 月 DD 日 HH:mm:ss')
    }],
    ['@vuepress/back-to-top', true],
    ['@vuepress/medium-zoom', true]
  ],
  themeConfig: {
    search: false,
    sidebarDepth: 2,
    lastUpdated: '上次修改',
    docsDir: 'docs',
    repo: 'whatk233/WTDR-Docs',
    editLinks: true,
    editLinkText: '编辑文档',
    smoothScroll: true,
    // sidebar: sidebar,
    // sidebar: 'auto',
    nav: [{
        text: '首页',
        link: '/'
      },
      {
        text: '获取',
        link: '/Get'
      },
      {
        text: 'WTDR 文档',
        link: '/Docs/'
      },
      {
        text: 'WTDR.Pack 文档',
        link: '/WP_Docs/'
      },
      {
        text: 'WTDR!',
        link: 'https://forum.wtdr.whatk.me/',
        target: '_blank'
      },
      {
        text: 'Whatk',
        link: 'https://whatk.me',
        target: '_blank'
      },
      {
        text: 'Windsys',
        link: 'https://windsys.win',
        target: '_blank'
      },
      {
        text: '投食',
        link: 'https://blog.whatk.me/donate',
        target: '_blank'
      },
    ]
  },
  description: '操作系统部署辅助工具',
  // 注入到当前页面的 HTML <head> 中的标签
  head: [
    ['link', {
      rel: 'icon',
      href: '/favicon.ico'
    }] // 增加一个自定义的 favicon(网页标签的图标)
  ],
  markdown: {
    lineNumbers: true // 代码块显示行号
  }
}
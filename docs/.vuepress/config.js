const path = require('path')
module.exports = {
  base: '/eazy-ui/',
  title: 'Eazy-UI',
  description: '一个好用的UI框架',
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    nav: [
      {text: '主页', link: '/'},
      {text: '源码', link: 'https://github.com/luckzhu/eazy-ui'},
      {text: 'Github', link: 'https://github.com/luckzhu/'},
    ],
    sidebar: [
      {
        title: '入门',
        collapsable: false,
        children: [
          '/install/',
          '/get-started/',
        ]
      },
      {
        title: '组件',
        collapsable: false,
        children: [
          '/components/button',
          '/components/tabs',
          '/components/popover',
          '/components/toast',
          '/components/input',
          '/components/grid',
          '/components/layout',
        ]
      },

    ]
  },
  scss:{
    includePaths: [path.join(__dirname, '../../styles')]
  }
}

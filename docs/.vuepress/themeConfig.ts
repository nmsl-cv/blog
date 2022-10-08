import {hopeTheme} from 'vuepress-theme-hope'
import navbar from './navbar'
import sidebar from './sidebar'

export default hopeTheme({
  hostname: 'https://nmsl-cv.github.io/blog/',

  author: {
    name: 'nmsl-cv',
    url: 'https://github.com/nmsl-cv'
  },

  iconPrefix: 'iconfont icon-',

  logo: '/avatar.png',

  repo: 'https://github.com/nmsl-cv/blog',

  docsDir: '/docs',

  navbar: navbar,

  sidebar: false,
  // sidebar: sidebar,
  blog: {
    description: '一个前端开发者',
    // intro: '/intro.html',
    medias: {
      GitHub: 'https://github.com/nmsl-cv'
    }
  },

  footer: '船到桥头自然直',

  displayFooter: true,

  pageInfo: ['Author', 'Original', 'Date', 'Category', 'Tag', 'ReadingTime'],

  // locales: {
  //   '/': {
  //     navbar: false,

  //     sidebar: false
  //   }
  // },

  encrypt: {
    config: {
      '/guide/encrypt.html': ['111']
    }
  },

  plugins: {
    blog: {
      autoExcerpt: true,
      article: '/'
    },
    seo: false,

    // 你也可以使用 Waline
    comment: false,
    mdEnhance: {
      enableAll: true,
      presentation: {
        plugins: ['highlight', 'math', 'search', 'notes', 'zoom']
      }
    }
  }
})

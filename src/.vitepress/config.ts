import { defineConfig } from '@jcamp/vitepress-blog-theme/config'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Tintamarre',
  description: 'Personal blog of Martin Erpicum',
  themeConfig: {
    blog: {
      title: "",
      description: "Some thoughts",
      defaultAuthor: 'Martin Erpicum',
      categoryIcons: {
        article: 'i-[heroicons-outline/book-open]',
        tutorial: 'i-[heroicons-outline/academic-cap]',
        document: 'i-[heroicons-outline/annotation]',
        experimentation: 'i-[heroicons-outline/beaker]'
      },
      tagIcons: {
        github: 'i-[carbon/logo-github]',
        vue: 'i-[carbon/logo-vue]',
      },
    },
    footer: {
      message: 'Made with ❤️',
      copyright: 'WTFPL License | <a href="https://github.com/tintamarre/tintamarre.github.io">Source code</a>'
    },
    search: {
      provider: 'local',
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      // { text: 'Examples', link: '/markdown-examples' },
      // { text: 'Theme Test', link: '/theme-test' },
      {
        text: 'Blog',
        items: [
          {
            text: 'Blog Home',
            link: '/blog/',
            activeMatch: '/blog/$',
          },
          {
            text: 'Tags',
            link: '/blog/tags',
            activeMatch: '/blog/tags',
          },
          {
            text: 'Archives',
            link: '/blog/archives',
            activeMatch: '/blog/archives',
          },
          // {
          //   text: 'RSS Feed',
          //   link: '/blog/feed.rss',
          // },
        ],
      },
    ],
    // socialLinks: [
    //   {
    //     icon: 'github',
    //     link: 'https://github.com/tintamarre',
    //   },
    // ],
  },

})

// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import { TintamarreBlogTheme } from '../tintamarre-blog/theme'
import './style.css'
import CustomBlogHeader from './CustomBlogHeader.vue'
import ImageCenter from './ImageCenter.vue'

export default {
  ...TintamarreBlogTheme,
  Layout: () => {
    return h(TintamarreBlogTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    TintamarreBlogTheme.enhanceApp({ app, router, siteData })
    app.component('CustomBlogHeader', CustomBlogHeader),
    app.component('ImageCenter', ImageCenter)
  },
}

// if you're not using custom components, this file can be as simple as
/*
import { TintamarreBlogTheme } from '../tintamarre-blog/theme'
import './style.css'
export default TintamarreBlogTheme
*/

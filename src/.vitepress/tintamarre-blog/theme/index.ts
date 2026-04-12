// https://vitepress.dev/guide/custom-theme
import type { Component } from 'vue'
import type { Awaitable } from 'vitepress'
import type { EnhanceAppContext, Theme } from 'vitepress/client'
import DefaultTheme from 'vitepress/theme'
import './style.css'

import TintamarreBlogHome from './components/TintamarreBlogHome.vue'
import TintamarreBlogLayout from './components/TintamarreBlogLayout.vue'
import TintamarreBlogArchives from './components/TintamarreBlogArchives.vue'
import TintamarreBlogTags from './components/TintamarreBlogTags.vue'
import TintamarreBlogTestComponent from './components/TintamarreBlogTestComponent.vue'
import TintamarreBlogHomePost from './components/TintamarreBlogHomePost.vue'

// components
export { default as TintamarreBlogArchives } from './components/TintamarreBlogArchives.vue'
export { default as TintamarreBlogHome } from './components/TintamarreBlogHome.vue'
export { default as TintamarreBlogHomeAuthor } from './components/TintamarreBlogHomeAuthor.vue'
export { default as TintamarreBlogHomePost } from './components/TintamarreBlogHomePost.vue'
export { default as TintamarreBlogLayout } from './components/TintamarreBlogLayout.vue'
export { default as TintamarreBlogLayoutAuthorAsideBottom } from './components/TintamarreBlogLayoutAuthorAsideBottom.vue'
export { default as TintamarreBlogLayoutAuthorTop } from './components/TintamarreBlogLayoutAuthorTop.vue'
export { default as TintamarreBlogLayoutPostAsideBottom } from './components/TintamarreBlogLayoutPostAsideBottom.vue'
export { default as TintamarreBlogLayoutPostAsideTop } from './components/TintamarreBlogLayoutPostAsideTop.vue'
export { default as TintamarreBlogLayoutPostBottom } from './components/TintamarreBlogLayoutPostBottom.vue'
export { default as TintamarreBlogLayoutPostTop } from './components/TintamarreBlogLayoutPostTop.vue'
export { default as TintamarreBlogPostAuthor } from './components/TintamarreBlogPostAuthor.vue'
export { default as TintamarreBlogPostCategory } from './components/TintamarreBlogPostCategory.vue'
export { default as TintamarreBlogPostDate } from './components/TintamarreBlogPostDate.vue'
export { default as TintamarreBlogPostDetails } from './components/TintamarreBlogPostDetails.vue'
export { default as TintamarreBlogPostLinks } from './components/TintamarreBlogPostLinks.vue'
export { default as TintamarreBlogTagIcon } from './components/TintamarreBlogTagIcon.vue'
export { default as TintamarreBlogTags } from './components/TintamarreBlogTags.vue'
export { default as TintamarreBlogTestComponent } from './components/TintamarreBlogTestComponent.vue'

// composables
export { useArchives } from './composables/useArchives'
export { useAuthors } from './composables/useAuthors'
export { usePosts } from './composables/usePosts'
export { useTags } from './composables/useTags'

interface TintamarreBlogTheme {
  Layout: Component
  enhanceApp: (ctx: EnhanceAppContext) => Awaitable<void>
  extends?: Theme
}

const theme = {
  ...DefaultTheme,
  Layout: TintamarreBlogLayout,
  enhanceApp({ app, router, siteData }) {
    // call the base themes enhanceApp
    DefaultTheme.enhanceApp({ app, router, siteData })
    app.component('TintamarreBlogHome', TintamarreBlogHome)
    app.component('TintamarreBlogArchives', TintamarreBlogArchives)
    app.component('TintamarreBlogTags', TintamarreBlogTags)
    app.component('TintamarreBlogTestComponent', TintamarreBlogTestComponent)
    app.component('TintamarreBlogHomePost', TintamarreBlogHomePost)
  },
} as TintamarreBlogTheme

export { theme as TintamarreBlogTheme }
export type * from './theme-types'

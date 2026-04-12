<script setup lang="ts">
import { useData, withBase } from 'vitepress'
import { usePosts } from '../composables/usePosts'
import type { TintamarreBlogThemeConfig } from '..'
import TintamarreBlogPostAuthor from './TintamarreBlogPostAuthor.vue'
import TintamarreBlogPostCategory from './TintamarreBlogPostCategory.vue'
import TintamarreBlogTagIcon from './TintamarreBlogTagIcon.vue'

const { site } = useData()
const { post } = usePosts()
const theme = site.value.themeConfig as TintamarreBlogThemeConfig
const path = withBase(theme.blog?.tagsPath ?? '/blog/tags')
</script>

<template>
  <span
    class="bg-primary-100 inline-flex items-center rounded text-sm font-medium"
  >
    <TintamarreBlogPostCategory :category="post.category"></TintamarreBlogPostCategory>
  </span>
  <span class="bg-primary-100 inline-flex rounded text-sm font-medium">
    <div class="flex flex-wrap gap-2 py-5">
      <a
        v-for="tagName in post.tags"
        :key="tagName"
        class="rounded-sm bg-gray-100 px-2 py-1 text-xs font-semibold text-gray-600"
        :href="`${path}?init=${tagName}`"
      >
        <TintamarreBlogTagIcon :tag="tagName" />
        {{ tagName }}
      </a>
    </div>
  </span>
  <TintamarreBlogPostAuthor />
</template>

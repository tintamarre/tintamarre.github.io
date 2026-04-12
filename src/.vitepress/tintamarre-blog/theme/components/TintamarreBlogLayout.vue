<script setup lang="ts">
import { useData } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import TintamarreBlogLayoutPostTop from './TintamarreBlogLayoutPostTop.vue'
import TintamarreBlogLayoutPostBottom from './TintamarreBlogLayoutPostBottom.vue'
import TintamarreBlogLayoutPostAsideTop from './TintamarreBlogLayoutPostAsideTop.vue'
import TintamarreBlogLayoutPostAsideBottom from './TintamarreBlogLayoutPostAsideBottom.vue'
import TintamarreBlogLayoutAuthorAsideBottom from './TintamarreBlogLayoutAuthorAsideBottom.vue'
import TintamarreBlogLayoutAuthorTop from './TintamarreBlogLayoutAuthorTop.vue'

const { Layout } = DefaultTheme
const { frontmatter } = useData()
</script>

<template>
  <Layout>
    <template #doc-before>
      <TintamarreBlogLayoutPostTop v-if="frontmatter.blog === 'post'" />
      <TintamarreBlogLayoutAuthorTop v-if="frontmatter.blog === 'author'" />
    </template>
    <template #doc-footer-before>
      <TintamarreBlogLayoutPostBottom v-if="frontmatter.blog === 'post'" />
    </template>
    <template #aside-top>
      <TintamarreBlogLayoutPostAsideTop v-if="frontmatter.blog === 'post'" />
    </template>
    <template #aside-bottom>
      <TintamarreBlogLayoutPostAsideBottom v-if="frontmatter.blog === 'post'" />
      <TintamarreBlogLayoutAuthorAsideBottom v-if="frontmatter.blog === 'author'" />
    </template>
  </Layout>
</template>

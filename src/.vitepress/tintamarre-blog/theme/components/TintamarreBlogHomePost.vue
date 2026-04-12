<script setup lang="ts">
import type { Post } from '../theme-types'
import TintamarreBlogPostCategory from './TintamarreBlogPostCategory.vue'
import TintamarreBlogHomeAuthor from './TintamarreBlogHomeAuthor.vue'

defineProps<{
  post: Post
}>()
</script>

<template>
  <article
    class="rounded-lg border border-[color:var(--vp-c-brand-light)] p-6 shadow-md dark:border-[color:var(--vp-c-brand-dark)]"
  >
    <div class="mb-5 flex items-center justify-between text-gray-500">
      <span
        class="bg-primary-100 inline-flex items-center rounded text-sm font-medium text-[color:var(--vp-c-brand-light)] dark:text-[color:var(--vp-c-brand-dark)]"
      >
        <TintamarreBlogPostCategory :category="post.category">
          <span class="text-sm">{{ post.date.since }}</span>
        </TintamarreBlogPostCategory>
      </span>
    </div>
    <h2
      class="mb-2 text-2xl font-bold tracking-tight text-[color:var(--vp-c-brand-light)] dark:text-[color:var(--vp-c-brand-dark)]"
    >
      <a :href="post.url">{{ post.title }}</a>
    </h2>
    <div class="mb-5 font-light" v-html="post.excerpt"></div>
    <div class="flex items-center justify-between">
      <TintamarreBlogHomeAuthor :name="post.author" />
      <a
        :href="post.url"
        class="inline-flex items-center font-medium hover:text-[color:var(--vp-c-brand-dark)]"
      >
        Read more
        <div class="i-[bx/right-arrow-alt] ml-2" />
      </a>
    </div>
  </article>
</template>

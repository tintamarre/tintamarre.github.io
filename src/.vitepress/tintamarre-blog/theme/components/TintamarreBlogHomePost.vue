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
    class="group relative rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-colors duration-200 hover:border-[color:var(--vp-c-brand)] dark:border-slate-200/10 dark:bg-transparent dark:hover:border-[color:var(--vp-c-brand)]"
  >
    <span
      class="absolute -top-3 right-4 inline-flex items-center rounded border border-gray-200 bg-white px-2.5 py-1 text-xs font-medium text-[color:var(--vp-c-text-light-2)] shadow-sm dark:border-slate-200/10 dark:bg-[color:var(--vp-c-bg)] dark:text-[color:var(--vp-c-text-dark-2)]"
    >
      <TintamarreBlogPostCategory :category="post.category" />
    </span>
    <h2 class="tintamarre-blog-card-heading pr-24 sm:pr-28">
      <a
        :href="post.url"
        class="tintamarre-blog-card-title block transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--vp-c-brand)] focus-visible:ring-offset-4 focus-visible:ring-offset-white dark:focus-visible:ring-offset-[color:var(--vp-c-bg)]"
      >
        {{ post.title }}
      </a>
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

<style scoped>
.tintamarre-blog-card-title {
  color: inherit;
  font-weight: inherit;
  text-decoration: none;
}

.tintamarre-blog-card-heading {
  margin: 0 0 0.75rem;
  border-top: 0;
  padding-top: 0;
  color: var(--vp-c-text-light-1);
  font-size: 1.25rem;
  font-weight: 600;
  letter-spacing: 0;
  line-height: 1.375;
}

:root.dark .tintamarre-blog-card-heading {
  color: var(--vp-c-text-dark-1);
}

.tintamarre-blog-card-title:hover,
.tintamarre-blog-card-title:focus-visible {
  color: var(--vp-c-brand);
  text-decoration: none;
}
</style>

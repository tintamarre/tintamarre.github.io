<script setup lang="ts">
import { useData } from 'vitepress'
import type { TintamarreBlogThemeConfig } from '../theme-types'

defineProps<{
  category: string
}>()
const { theme } = useData<TintamarreBlogThemeConfig>()
</script>

<template>
  <span class="inline-flex items-center">
    <div
      v-if="
        theme.blog?.categoryIcons &&
        theme.blog.categoryIcons[category.toLowerCase()]
      "
      :class="theme.blog.categoryIcons[category.toLowerCase()]"
      class="mr-1.5"
    />
    <span>{{ category }}</span>
  </span>
</template>

<style scoped>
a {
  font-weight: 500;
  color: var(--vp-c-brand);
  text-decoration-style: dotted;
  transition: color 0.25s;
}
</style>

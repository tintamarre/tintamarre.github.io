<script setup lang="ts">
import { useData } from 'vitepress'
import type { TintamarreBlogThemeConfig } from '../theme-types'

defineProps<{
  tag: string
}>()
const { theme } = useData<TintamarreBlogThemeConfig>()
</script>

<template>
  <div
    v-if="theme.blog?.tagIcons && theme.blog.tagIcons[tag.toLowerCase()]"
    :class="theme.blog.tagIcons[tag.toLowerCase()]"
    class="mr-2"
  />
</template>

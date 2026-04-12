<script setup lang="ts">
import { usePosts } from '../composables/usePosts'
import TintamarreBlogPostCategory from './TintamarreBlogPostCategory.vue'
import TintamarreBlogPostAuthor from './TintamarreBlogPostAuthor.vue'

defineProps<{
  insideDoc?: boolean
}>()

const { post } = usePosts()
</script>

<template>
  <div
    class="flex justify-center space-x-8 sm:space-x-12 xl:block xl:space-x-0 xl:space-y-8"
    :class="{ 'xs:show xl:hidden': insideDoc }"
  >
    <span
      class="bg-primary-100 inline-flex items-center rounded text-sm font-medium"
    >
      <TintamarreBlogPostCategory :category="post.category" />
    </span>
  </div>
  <TintamarreBlogPostAuthor inside-doc />
</template>

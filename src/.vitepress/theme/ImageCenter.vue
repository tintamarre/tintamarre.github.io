<template>
<div align="center" class="">
    <img :src="src" :alt="alt" :width="width" class="rounded object-cover" />
    <div class="inline-flex items-center">
        <span class="text-gray-600 dark:text-gray-400">{{ alt }}</span>
    </div>
</div>
</template>

<script>
export default {
    name: 'ImageCenter',
    props: {
        src: {
            type: String,
            required: true
        },
        alt: {
            type: String,
            required: true
        },
        width: {
            type: String,
            default: '100%'
        }
    }
}
</script>
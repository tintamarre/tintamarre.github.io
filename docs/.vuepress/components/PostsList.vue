<template>
    <ul>
        <li v-for="post in posts" :key="post.id">
            <router-link :to="post.path">{{ post.title }}</router-link>
        </li>
    </ul>
  </template>
  
  <script>

    export default {
      data() {
        return {
            msg: 'Hello this is <demo-component>',
            posts: [
                {
                id: 1,
                title: 'Foo',
                path: '/blog/foo'
                },
                
            ]
        }
      }
    }
  </script>
  
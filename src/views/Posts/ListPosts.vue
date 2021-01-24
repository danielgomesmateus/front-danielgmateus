<template>
  <v-app>
    <v-container>
      <list-posts :title="title" :posts="posts" :count="postsCount" />
    </v-container>
  </v-app>
</template>

<script>
  import ListPosts from '../../components/Posts/List'

  import { mapGetters } from 'vuex'

  export default {
    components: {
      'list-posts': ListPosts
    },
    data() {
      return {
        title: '',
      }
    },
    computed: {
      ...mapGetters({
        getPostsGetter: 'post/getPosts'
      }),
      posts() {
        return this.getPostsGetter.results
      },
      postsCount() {
        return this.getPostsGetter.count
      }
    }
  }
</script>
    
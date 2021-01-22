<template>
  <v-app>
    <v-container>
      <list-posts :title="titlePosts" :posts="posts" :count="posts_count" />
      <list-projects :title="titleProjects" :projects="projects" :count="projects_count" />
    </v-container>
  </v-app>
</template>

<script>
  import ListPosts from '../components/Posts/List'
  import ListProjects from '../components/Projects/List'

  import { mapGetters } from 'vuex'

  export default {
    components: {
      'list-posts': ListPosts,
      'list-projects': ListProjects
    },
    data() {
      return {
        titlePosts: 'Postagens',
        titleProjects: 'Projetos'
      }
    },
    computed: {
      ...mapGetters({
        getPosts: 'post/getPosts',
        getProjects: 'project/getProjects'
      }),
      posts() {
        return this.getPosts.results
      },
      posts_count() {
        return this.getPosts.count
      },
      projects() {
        return this.getProjects.results
      },
      projects_count() {
        return this.getProjects.count
      }
    }
  }
</script>

<style>
  .container--fluid {
    padding: 0px;
  }
</style>

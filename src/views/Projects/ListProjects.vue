<template>
  <v-app>
    <v-container>
      <list-projects :title="title" :projects="projects" :count="projects_count" />
    </v-container>
  </v-app>
</template>

<script>
  import ListProjects from '../../components/Projects/List'

  import { mapGetters } from 'vuex'

  export default {
    components: {
      'list-projects': ListProjects
    },
    data() {
      return {
        title: '',
      }
    },
    computed: {
      ...mapGetters({
        getProjectsGetter: 'project/getProjects'
      }),
      projects() {
        return this.getProjectsGetter.results
      },
      projects_count() {
        return this.getProjectsGetter.count
      }
    }
  }
</script>
    
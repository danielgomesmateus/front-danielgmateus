<template>
  <v-app>
    <v-container>
      <list-projects :title="title" :projects="projectsCategories" :key="key" />
    </v-container>
  </v-app>
</template>

<script>
  import ListProjects from '../../components/Projects/List'

  import { mapGetters, mapActions } from 'vuex'

  export default {
    components: {
      'list-projects': ListProjects
    },
    data() {
      return {
        title: '',
        key: 0
      }
    },
    watch: {
      $route (to) {
        this.getProjectCategoryBySlugAction(to.params.slug)
        this.key += 1
      }
    },
    computed: {
      ...mapGetters({
        getProjectCategoryBySlugGetter: 'projectCategory/getProjectCategoryBySlug'
      }),
      projectsCategories() {
        return this.getProjectCategoryBySlugGetter.projects
      }
    },
    methods: {
      ...mapActions({
        getProjectCategoryBySlugAction: 'projectCategory/getProjectCategoryBySlug'
      }),
    },
    created() {
      const slug = this.$route.params.slug

      this.getProjectCategoryBySlugAction(slug)
        .then(response => {
          if (response == undefined) {
            this.$router.push({ path: '/pagina-nao-encontrada' })
          }
        })
        .catch(e => {
          this.$router.push({ path: '/pagina-nao-encontrada' })
          console.error(e.message)
        })
    }
  }
</script>
    
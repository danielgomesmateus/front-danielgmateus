<template>
  <v-app>
    <v-container fluid>
      <v-parallax
        dark
        :src="post.cover_image"
        height="300"
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            class="text-center"
            cols="12"
          >
            <h1 class="display-1 font-weight-thin mb-4">
              {{ post.name }}
            </h1>
            <h4 class="subheading">
              {{ post.description_short }}
            </h4>
          </v-col>
        </v-row>
      </v-parallax>
    </v-container>
    <v-container>
      <v-row>
        <v-col cols="12" md="12">
          <p class="subtitle-2 font-weight-bold">
            Última atualização: {{ post.updated_at | getFormattedDateTime('DD/MM/YYYY HH:mm:ss') }}
          </p>
          <div class="text-left text-content" v-html="post.content">
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>
<script>
  import { mapActions } from 'vuex'

  export default {
    data() {
      return {
        post: {}
      }
    },
    methods: {
      ...mapActions({
        getPostBySlugAction: 'post/getPostBySlug'
      })
    },
    mounted: function() {
      const slug = this.$route.params.slug
      
      this.getPostBySlugAction(slug)
        .then(response => {
          if (response == undefined) {
            this.$router.push({ path: '/pagina-nao-encontrada' })
            return false
          }

          this.post = response
        })
        .catch(e => {
          this.$router.push({ path: '/pagina-nao-encontrada' })
          console.error(e.message)
        })
    }
  }
</script>

<style scoped>
  .text-content {
    line-height: 32px;
  }
</style>
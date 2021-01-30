<template>  
  <v-row>
    <v-col cols="12" md="12" v-if="count == 0">    
      <alert :alert="alert" />
    </v-col>
    <v-col cols="12" md="12" v-if="title && count >= 1">
      <h1 class="title content-title">
        {{ title }}
        <v-chip
          class="float-right"
          color="green"
          text-color="white"
        >
          <v-avatar
            left
            class="green darken-4"
          >
            {{ count }}
          </v-avatar>
          postagens
        </v-chip>
      </h1>
    </v-col>

    <v-col cols="12" md="4" v-for="(post, index) in posts" :key="index">

      <v-card
        class="mx-auto"
        max-width="400"
      >
        <v-img
          class="white--text align-end"
          height="200px"
          :src="post.cover_image"
        >
        </v-img>

        <v-card-title class="content-title font-weight-bold">
          {{ post.name }}
        </v-card-title>
    
        <v-card-subtitle class="pb-2">
          <v-chip
            color="primary"
            label
            small
            text-color="white"
          >
            {{ post.category.name }}
          </v-chip>
        </v-card-subtitle>
    
        <v-card-text class="text--primary">
          {{ post.description_short }}
        </v-card-text>

        <v-divider class="mx-4"></v-divider>
    
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            small 
            color="success" 
            dark 
            @click="$router.push({ path: `/postagem/${ post.slug }` }).catch(err => {})"
          >
            Visualizar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
  import DefaultAlert from '../../components/Alerts/Default'

  export default {
    name: 'ListPosts',
    components: {
      'alert': DefaultAlert
    },
    props: ['title', 'posts', 'count'],
    data() {
      return {
        alert: {
          value: true,
          type: 'warning',
          message: 'Nenhum artigo publicado por aqui ainda.'
        }
      }
    }
  }
</script>

<style scoped>
  .v-card__subtitle, .v-card__text, .v-card__title {
    padding: 10px;
  }
</style>

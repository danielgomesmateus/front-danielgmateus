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
      >
        <v-img
          :src="post.cover_image"
        ></v-img>
    
        <v-card-title>
          <p>
            {{ post.name }}
          </p>
        </v-card-title>
    
        <v-card-subtitle>
          <p class="subtitle-2">
            {{ post.description_short }}
          </p>
          <p class="subtitle-2 font-weight-bold">
            Última atualização: {{ post.updated_at | getFormattedDateTime('DD/MM/YYYY HH:mm:ss') }}
          </p>
        </v-card-subtitle>
    
        <v-card-actions>
          <v-btn small color="info" dark @click="$router.push({ path: `/postagem/${ post.slug }` }).catch(err => {})">
            <v-icon>mdi-magnify</v-icon>  <span class="font-weight-bold">Visualizar</span>
          </v-btn>
        </v-card-actions>
    
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
  import Alert from '../../components/Alerts/Alert'

  export default {
    name: 'ListPosts',
    components: {
      'alert': Alert
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

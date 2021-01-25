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
          projetos
        </v-chip>
      </h1>
    </v-col>
    <v-col cols="12" md="4" v-for="(project, index) in projects" :key="index">
      <v-card
        class="mx-auto"
      >
        <v-img
          :src="project.cover_image"
        ></v-img>
    
        <v-card-title>
          {{ project.name }}
        </v-card-title>
    
        <v-card-subtitle>
          {{ project.description_short }}
        </v-card-subtitle>
    
        <v-card-actions>
          <v-btn small color="info" dark @click="$router.push({ path: `/projeto/${ project.slug }` }).catch(err => {})">
            <v-icon>mdi-magnify</v-icon>  <span class="font-weight-bold">Visualizar</span>
          </v-btn>
        </v-card-actions>
    
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
  import DefaultAlert from '../../components/Alerts/Default'

  export default {
    name: 'ListProjects',
    components: {
      'alert': DefaultAlert
    },
    props: ['title', 'projects', 'count'],
    data() {
      return {
        alert: {
          value: true,
          type: 'warning',
          message: 'Nenhum projeto publicado por aqui ainda.'
        }
      }
    }
  }
</script>
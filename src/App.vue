<template>
    <v-app>
      <v-app-bar
        app
        color="primary"
        dark
      >
        <v-avatar>
          <v-img
            src="./assets/avatar-image.jpeg"
            title="danielgmateus - Bem vindo!"
            alt="danielgmateus - Bem vindo!"
          ></v-img>
        </v-avatar>
        
        <span class="pa-5 subtitle-1 font-weight-bold">
          danielgmateus
        </span>

        <v-spacer></v-spacer>

        <v-btn
          class="hidden-sm-and-down"
          v-for="(item, index) in items"
          :key="index"
          :to="item.path"
          text
        >{{ item.title }}</v-btn>

        <v-menu
          left
          bottom
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              icon
              v-bind="attrs"
              v-on="on"
              class="hidden-md-and-up"
            >
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </template>

          <v-list>
            <v-list-item
              v-for="(item, index) in items"
              :key="index"
              @click="$router.push({ path: item.path }).catch(err => {})"
            >
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>

      </v-app-bar>

      <v-content>
        <vue-page-transition name="zoom">
          <router-view />
        </vue-page-transition>
      </v-content>
    
      <v-footer
        dark
        padless
      >
        <v-card
          flat
          tile
          class="black accent-3 white--text text-center"
          width="100%"
        >
        <v-card-text>
            <v-btn
              v-for="item in socialNetworks"
              :key="item"
              :href="item.link" 
              target="_blank"
              class="mx-4 white--text"
              icon
            >
              <v-icon size="24px">{{ item.icon }}</v-icon>
            </v-btn>
          </v-card-text>

          <v-card-text class="white--text text-center">
            <v-icon>mdi-email-check</v-icon> contato@danielgmateus.com.br
          </v-card-text>
    
          <v-card-text class="white--text text-center">
            "Bem-aventurado o homem que acha sabedoria, e o homem que adquire conhecimento." - Provérbios 3:13
          </v-card-text>
    
          <v-divider></v-divider>
    
          <v-card-text class="white--text">
            {{ new Date().getFullYear() }} - <strong>danielgmateus</strong>
          </v-card-text>
        </v-card>
      </v-footer>
    </v-app>
</template>

<script>
  import { mapActions, mapState } from 'vuex'

  export default {
    name: 'App',
    data: () => ({}),
    computed: {
      ...mapState({
        socialNetworks: state => state.socialNetworks,
        items: state => state.items
      })
    },
    methods: {
      ...mapActions({
        getProjectsAction: 'project/getProjects',
        getProjectsCategoriesAction: 'projectCategory/getProjectsCategories',
        getPostsAction: 'post/getPosts',
        getPostsCategoriesAction: 'postCategory/getPostsCategories',
        getExperiencesAction: 'experience/getExperiences',
        getSkillsAction: 'skill/getSkills',
        getAcademicFormationsAction: 'academicFormation/getAcademicFormations'
      })
    },
    created() {
      this.getProjectsAction() 
      this.getProjectsCategoriesAction()
      this.getPostsAction()  
      this.getPostsCategoriesAction()    
      this.getExperiencesAction()
      this.getSkillsAction()
      this.getAcademicFormationsAction()
    }
  }
</script>

<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
    <!--
      <div class="d-flex align-center">
        <v-img
          alt="danielgmateus logo"
          class="shrink mr-2"
          contain
          src="./assets/logo.png"
          transition="scale-transition"
          width="210"
        />
      </div>
      -->
      <v-spacer></v-spacer>

      <v-menu bottom left>
        <template v-slot:activator="{ on }">
          <v-btn
            dark
            icon
            v-on="on"
          >
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <template v-for="(item, index) in items">
            <v-list-item
              v-if="item.action"
              :key="item.title"
              @click="$router.push({ path: item.path }).catch(err => {})"
            >
              <v-list-item-action>
                <v-icon>{{ item.action }}</v-icon>
              </v-list-item-action>

              <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-divider
              v-else-if="item.divider"
              :key="index"
            ></v-divider>

            <v-subheader
              v-else-if="item.header"
              :key="item.header"
            >
              {{ item.header }}
            </v-subheader>
          </template>
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
        class="orange accent-3 white--text text-center"
        width="100%"
      >
        <v-card-text class="black">
          <help :donation="donation" :contact="contact" />
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text>
          <v-row
            justify="center"
            no-gutters
          >
            <v-btn
              v-for="(page, index) in pages"
              :key="index"
              color="white"
              text
              @click="$router.push({ path: `/pagina/${ page.slug }` }).catch(err => {})"
            >
              {{ page.title }}
            </v-btn>
          </v-row>
        </v-card-text>

        <v-divider></v-divider>

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
  import Help from './components/Dialogs/Help'

  import { mapGetters, mapActions, mapState } from 'vuex'

  export default {
    name: 'App',
    components: {
      'help': Help
    },
    data: () => ({
      donation: false,
      contact: true
    }),
    computed: {
      ...mapGetters({
        getPagesGetter: 'page/getPages',
      }),
      ...mapState({
        socialNetworks: state => state.socialNetworks,
        items: state => state.items
      }),
      pages() {
        return this.getPagesGetter.results
      }
    },
    methods: {
      ...mapActions({
        getProjectsAction: 'project/getProjects',
        getProjectsCategoriesAction: 'projectCategory/getProjectsCategories',
        getPostsAction: 'post/getPosts',
        getPostsCategoriesAction: 'postCategory/getPostsCategories',
        getPagesAction: 'page/getPages',
        getExperiencesAction: 'experience/getExperiences',
        getSkillsAction: 'skill/getSkills'
      })
    },
    created() {
      this.getProjectsAction() 
      this.getProjectsCategoriesAction()
      this.getPostsAction()  
      this.getPostsCategoriesAction()    
      this.getPagesAction()
      this.getExperiencesAction()
      this.getSkillsAction()
    }
  }
</script>

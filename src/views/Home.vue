<template>
  <v-app>
    <v-container>
      <list-experiences :title="titleExperiences" :experiences="experiences" />
      <list-skills :title="titleSkills" :skills="skills" />
    </v-container>
  </v-app>
</template>

<script>
  import ListExperiences from '../components/Experiences/List'
  import ListSkills from '../components/Skills/List'

  import { mapGetters } from 'vuex'

  export default {
    components: {
      'list-experiences': ListExperiences,
      'list-skills': ListSkills
    },
    data() {
      return {
        titleExperiences: 'Experiências',
        titleSkills: 'Habilidades'
      }
    },
    computed: {
      ...mapGetters({
        getExperiencesGetter: 'experience/getExperiences',
        getSkills: 'skill/getSkills'
      }),
      experiences() {
        return this.getExperiencesGetter.results
      },
      skills() {
        return this.getSkills.results
      }
    }
  }
</script>

<style>
  .container--fluid {
    padding: 0px;
  }
</style>

<template>
  <v-app>
    
    <v-container fluid>
      <v-parallax
        dark
        src="../assets/header-background.jpg"
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
              danielgmateus
            </h1>
            <h4 class="subheading">
              Analista de desenvolvimento | Python | PHP | NodeJS | VueJS
            </h4>
          </v-col>
        </v-row>
      </v-parallax>
    </v-container>

    <v-container>
      <v-row>
        <v-col cols="12" md="12">
          <div class="headline content-title font-weight-bold">
            Um pouco sobre mim
          </div>
          <div class="content body-1">
            <p>
              Meu nome é Daniel e tenho 27 anos. Sou apaixonado pela programação, pelo blues e por video games.
            </p>
            <p>
              Estou sempre em busca de novos conhecimentos e desafios. Gosto e tenho facilidade no 
              aprendizado de novas tecnologias. Trabalho com grande foco no backend para aplicações 
              web, porém, gosto bastante de trabalhar também no frontend da aplicação.
            </p>
            <p>
              Utilizo tecnologias como: Python, Django, VueJS, NodeJS, CakePHP, MongoDB, MySQL, Docker, Linux, AWS e outros.
            </p>
            <p>
              Gosto sempre de estar estudando e propondo novas tecnologias que possam facilitar e agregar ao 
              desenvolvimento de algum produto ou serviço.
            </p>
            <p>
              Tenho um grande interesse pelo universo da internet e pelo mundo Linux. Procuro sempre trabalhar de uma 
              forma que a qualidade esteja sempre presente no desenvolvimento dos projetos.
            </p>
            <p>
              Tenho facilidade no relacionamento e na comunicação com outras pessoas no ambiente de trabalho e com 
              clientes. Gosto de estar sempre buscando formas de inovar, seja em tecnologias ou em processos. 
            </p>
          </div>
        </v-col>
      </v-row>
      
      <list-skills :title="titleSkills" :skills="skills" />
      <list-experiences :title="titleExperiences" :experiences="experiences" />

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
        titleExperiences: 'Principais experiências',
        titleSkills: 'Principais habilidades'
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
  .content-title {
    color: #187888;
    margin-top: 15px;
    margin-bottom: 15px;
  }
  .grey-section {
    background: #ebebeb
  }
</style>

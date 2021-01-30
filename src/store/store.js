import Vue from 'vue'
import Vuex from 'vuex'

import * as project from './modules/project'
import * as projectCategory from './modules/projectCategory'
import * as post from './modules/post'
import * as postCategory from './modules/postCategory'
import * as experience from './modules/experience'
import * as skill from './modules/skill'
import * as academicFormation from './modules/academicFormation'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    project,
    projectCategory,
    post,
    postCategory,
    experience,
    skill,
    academicFormation
  },
  state: {
    socialNetworks: [
      { 
        icon: 'mdi-linkedin', 
        link: 'https://www.linkedin.com/in/danielgmateus/' 
      },
      { 
        icon: 'mdi-facebook',
        link: 'https://www.facebook.com/danielgmateus/' 
      },
      { 
        icon: 'mdi-github',
        link: 'https://github.com/danielgomesmateus' 
      },
    ],
    items: [
      { title: 'Home', path: '/' },
      { title: 'Postagens', path: '/postagens' },
      { title: 'Projetos', path: '/projetos' },
      { title: 'Entre em contato', path: '/entre-em-contato' }
    ]
  }
})
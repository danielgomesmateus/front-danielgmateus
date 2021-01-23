import Vue from 'vue'
import Vuex from 'vuex'

import * as project from './modules/project'
import * as projectCategory from './modules/projectCategory'
import * as post from './modules/post'
import * as postCategory from './modules/postCategory'
import * as page from './modules/page'
import * as experience from './modules/experience'
import * as skill from './modules/skill'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    project,
    projectCategory,
    post,
    postCategory,
    page,
    experience,
    skill
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
    ],
    items: [
      { title: 'Home', action: 'mdi-home', path: '/' },
      { title: 'Postagens', action: 'mdi-newspaper', path: '/postagens' },
      { title: 'Projetos', action: 'mdi-projector', path: '/projetos' },
      { title: 'Fale Conosco', action: 'mdi-email-newsletter', path: '/fale-conosco'  }
    ]
  }
})
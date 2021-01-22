import Vue from 'vue'
import Vuex from 'vuex'

import * as project from './modules/project'
import * as post from './modules/post'
import * as page from './modules/page'
import * as projectCategory from './modules/projectCategory'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    project,
    post,
    page,
    projectCategory
  },
  state: {
    socialNetworks: [
      { 
        icon: 'mdi-linkedin', 
        link: 'https://www.linkedin.com/in/thaís-minas-b529a679/' 
      },
      { 
        icon: 'mdi-instagram',
        link: 'https://www.instagram.com/thaisminas/' 
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
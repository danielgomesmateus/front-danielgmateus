import Vue from 'vue'
import Vuex from 'vuex'

import * as project from './modules/project'
import * as album from './modules/album'
import * as page from './modules/page'
import * as projectCategory from './modules/projectCategory'
import * as slide from './modules/slide'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    project,
    album,
    page,
    projectCategory,
    slide
  },
  state: {
  }
})
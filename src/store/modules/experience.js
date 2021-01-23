import ExperienceService from '../../services/ExperienceService'

import _ from 'lodash'

export const namespaced = true

export const state = {
  experiences: [],
  page: {}
}

export const mutations = {
  SET_EXPERIENCES(state, experiences) {
    state.experiences = experiences
  },
  SET_EXPERIENCE(state, page) {
    state.page = page
  }
}

export const actions = {
  getExperiences({ commit }) {  
    return ExperienceService.getExperiences()
      .then(response => {
        commit('SET_EXPERIENCES', response.data)
      })
      .catch(e => {
        console.error(e.message)
      })
  },
  getExperienceBySlug({ commit, getters, state }, slug) {
    if (slug == state.page.slug) {
      return state.page
    }

    if (state.experiences.count >= 1) {
      let page = getters.getExperienceBySlug(slug)

      if (page) {
        commit('SET_EXPERIENCE', page)
        return page
      }
    }

    return ExperienceService.getExperienceBySlug(slug)
      .then(response => {
        commit('SET_EXPERIENCE', response.data)
        return response.data
      })
  }
}

export const getters = {
  getExperiences: state => {
    return state.experiences
  },  
  getExperienceBySlug: state => slug => {
    const experiences = state.experiences.results
    return _.find(experiences, function(page) { return page.slug == slug })
  }
}
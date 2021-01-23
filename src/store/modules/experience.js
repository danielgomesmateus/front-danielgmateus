import ExperienceService from '../../services/ExperienceService'

import _ from 'lodash'

export const namespaced = true

export const state = {
  experiences: [],
  experience: {}
}

export const mutations = {
  SET_EXPERIENCES(state, experiences) {
    state.experiences = experiences
  },
  SET_EXPERIENCE(state, experience) {
    state.experience = experience
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
    if (slug == state.experience.slug) {
      return state.experience
    }

    if (state.experiences.count >= 1) {
      let experience = getters.getExperienceBySlug(slug)

      if (experience) {
        commit('SET_EXPERIENCE', experience)
        return experience
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
    return _.find(experiences, function(experience) { return experience.slug == slug })
  }
}
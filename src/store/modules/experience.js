import ExperienceService from '../../services/ExperienceService'

export const namespaced = true

export const state = {
  experiences: []
}

export const mutations = {
  SET_EXPERIENCES(state, experiences) {
    state.experiences = experiences
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
  }
}

export const getters = {
  getExperiences: state => {
    return state.experiences
  }
}
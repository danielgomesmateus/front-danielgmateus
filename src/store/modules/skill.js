import SkillService from '../../services/SkillService'

export const namespaced = true

export const state = {
  skills: []
}

export const mutations = {
  SET_SKILLS(state, skills) {
    state.skills = skills
  }
}

export const actions = {
  getSkills({ commit }) {  
    return SkillService.getSkills()
      .then(response => {
        commit('SET_SKILLS', response.data)
      })
      .catch(e => {
        console.error(e.message)
      })
  }
}

export const getters = {
  getSkills: state => {
    return state.skills
  }
}
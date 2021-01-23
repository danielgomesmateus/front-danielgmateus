import SkillService from '../../services/SkillService'

import _ from 'lodash'

export const namespaced = true

export const state = {
  skills: [],
  skill: {}
}

export const mutations = {
  SET_SKILLS(state, skills) {
    state.skills = skills
  },
  SET_SKILL(state, skill) {
    state.skill = skill
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
  },
  getSkillBySlug({ commit, getters, state }, slug) {
    if (slug == state.skill.slug) {
      return state.skill
    }

    if (state.skills.count >= 1) {
      let skill = getters.getSkillBySlug(slug)

      if (skill) {
        commit('SET_SKILL', skill)
        return skill
      }
    }

    return SkillService.getSkillBySlug(slug)
      .then(response => {
        commit('SET_SKILL', response.data)
        return response.data
      })
  }
}

export const getters = {
  getSkills: state => {
    return state.skills
  },  
  getSkillBySlug: state => slug => {
    const skills = state.skills.results
    return _.find(skills, function(skill) { return skill.slug == slug })
  }
}
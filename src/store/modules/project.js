import ProjectService from '../../services/ProjectService'

import _ from 'lodash'

export const namespaced = true

export const state = {
  projects: [],
  project: {}
}

export const mutations = {
  SET_PROJECTS(state, projects) {
    state.projects = projects
  },
  SET_PROJECT(state, project) {
    state.project = project
  }
}

export const actions = {
  getProjects({ commit }) {  
    return ProjectService.getProjects()
      .then(response => {
        commit('SET_PROJECTS', response.data)
      })
      .catch(e => {
        console.error(e.message)
      })
  },
  getProjectBySlug({ commit, getters, state }, slug) {
    if (slug == state.project.slug) {
      return state.project
    }

    if (state.projects.count >= 1) {
      let project = getters.getProjectBySlug(slug)

      if (project) {
        commit('SET_PROJECT', project)
        return project
      }
    }

    return ProjectService.getProjectBySlug(slug)
      .then(response => {
        commit('SET_PROJECT', response.data)
        return response.data
      })
      .catch(e => {
        console.error(e.message)
      })
  }
}

export const getters = {
  getProjects: state => {
    return state.projects
  },  
  getProjectBySlug: state => slug => {
    const projects = state.projects.results
    return _.find(projects, function(project) { return project.slug == slug })
  }
}
import ProjectCategoryService from '../../services/ProjectCategoryService'

export const namespaced = true

export const state = {
  projectsCategories: [],
  projectCategory: {}
}

export const mutations = {
  SET_PROJECTS_CATEGORIES(state, projectsCategories) {
    state.projectsCategories = projectsCategories
  },
  SET_PROJECT_CATEGORY(state, projectCategory) {
    state.projectCategory = projectCategory
  }
}

export const actions = {
  getProjectsCategories({ commit }) {
    return ProjectCategoryService.getProjectsCategories()
      .then(response => {
        commit('SET_PROJECTS_CATEGORIES', response.data)
      })
      .catch(e => {
        console.error(e.message)
      })
  },
  getProjectCategoryBySlug({ commit, state }, slug) {
    if (slug == state.projectCategory.slug) {
      return state.projectCategory
    }

    return ProjectCategoryService.getProjectCategoryBySlug(slug)
      .then(response => {
        commit('SET_PROJECT_CATEGORY', response.data)
        return response.data
      })
      .catch(e => {
        console.error(e.message)
      })
  }
}

export const getters = {
  getProjectsCategories: state => {
    return state.projectsCategories
  },  
  getProjectCategoryBySlug: state => {
    return state.projectCategory
  }
}
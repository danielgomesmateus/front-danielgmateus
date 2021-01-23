import PostCategoryService from '../../services/PostCategoryService'

export const namespaced = true

export const state = {
  postsCategories: [],
  postCategory: {}
}

export const mutations = {
  SET_POSTS_CATEGORIES(state, postsCategories) {
    state.postsCategories = postsCategories
  },
  SET_POST_CATEGORY(state, postCategory) {
    state.postCategory = postCategory
  }
}

export const actions = {
  getPostsCategories({ commit }) {
    return PostCategoryService.getPostsCategories()
      .then(response => {
        commit('SET_POSTS_CATEGORIES', response.data)
      })
      .catch(e => {
        console.error(e.message)
      })
  },
  getPostCategoryBySlug({ commit, state }, slug) {
    if (slug == state.postCategory.slug) {
      return state.postCategory
    }

    return PostCategoryService.getPostCategoryBySlug(slug)
      .then(response => {
        commit('SET_POST_CATEGORY', response.data)
        return response.data
      })
      .catch(e => {
        console.error(e.message)
      })
  }
}

export const getters = {
  getPostsCategories: state => {
    return state.postsCategories
  },  
  getPostCategoryBySlug: state => {
    return state.postCategory
  }
}
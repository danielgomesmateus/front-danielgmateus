import PostService from '../../services/PostService'

import _ from 'lodash'

export const namespaced = true

export const state = {
  posts: [],
  post: {}
}

export const mutations = {
  SET_POSTS(state, posts) {
    state.posts = posts
  },
  SET_POST(state, post) {
    state.post = post
  }
}

export const actions = {
  getPosts({ commit }) {  
    return PostService.getPosts()
      .then(response => {
        commit('SET_POSTS', response.data)
      })
      .catch(e => {
        console.error(e.message)
      })
  },
  getPostBySlug({ commit, getters, state }, slug) {
    if (slug == state.post.slug) {
      return state.post
    }

    if (state.posts.count >= 1) {
      let post = getters.getPostBySlug(slug)

      if (post) {
        commit('SET_POST', post)
        return post
      }
    }

    return PostService.getPostBySlug(slug)
      .then(response => {
        commit('SET_POST', response.data)
        return response.data
      })
      .catch(e => {
        console.error(e.message)
      })
  }
}

export const getters = {
  getPosts: state => {
    return state.posts
  },  
  getPostBySlug: state => slug => {
    const posts = state.posts.results
    return _.find(posts, function(post) { return post.slug == slug })
  }
}
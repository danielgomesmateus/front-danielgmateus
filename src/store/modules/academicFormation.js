import AcademicFormationService from '../../services/AcademicFormationService'

export const namespaced = true

export const state = {
  academicFormations: []
}

export const mutations = {
  SET_ACADEMIC_FORMATIONS(state, academicFormations) {
    state.academicFormations = academicFormations
  }
}

export const actions = {
  getAcademicFormations({ commit }) {  
    return AcademicFormationService.getAcademicFormations()
      .then(response => {
        commit('SET_ACADEMIC_FORMATIONS', response.data)
      })
      .catch(e => {
        console.error(e.message)
      })
  }
}

export const getters = {
  getAcademicFormations: state => {
    return state.academicFormations
  }
}
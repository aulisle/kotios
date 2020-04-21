import { debounce } from 'lodash'

const DEBOUNCE_RATE = 1000

export const state = () => ({
  sessionId: null
})

export const mutations = {
  setSessionId(state, value) {
    state.sessionId = value
  }
}

export const getters = {}

export const actions = {
  save({ dispatch }) {
    dispatch('saveToApiDebounce')
  },

  saveToApiDebounce: debounce(({ dispatch }) => {
    dispatch('saveToApi')
  }, DEBOUNCE_RATE),

  saveToApi({ rootState }) {
    return this.$axios.put(`/api/session`, rootState)
  },

  loadFromApi({ commit }) {
    return this.$axios.get(`/api/session`).then(({ data }) => {
      if (data) {
        commit('setSessionId', data.id)
      }

      return data
    })
  }
}

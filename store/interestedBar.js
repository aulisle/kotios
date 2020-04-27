const INTERESTED_BAR_STORAGE_KEY = 'kotios-interested-bar-closed'
const WAIT_TIME = 15000

export const state = () => ({
  showBar: false
})

export const mutations = {
  setShowBar(state, value) {
    state.showBar = value
  }
}

export const getters = {}

export const actions = {
  initInterestedBar({ commit }) {
    if (process.server || sessionStorage.getItem(INTERESTED_BAR_STORAGE_KEY)) {
      return
    }

    setTimeout(() => {
      commit('setShowBar', true)
    }, WAIT_TIME)
  },

  closeInterestedBar({ commit }) {
    commit('setShowBar', false)
    sessionStorage.setItem(INTERESTED_BAR_STORAGE_KEY, 'true')
  }
}

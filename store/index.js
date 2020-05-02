export const actions = {
  async nuxtServerInit() {},

  async nuxtClientInit({ dispatch }) {
    await dispatch('getSessionState')
    await dispatch('interestedBar/initInterestedBar')
  },

  async getSessionState({ dispatch, commit }) {
    return dispatch('session/loadFromApi').then(data => {
      if (!data || !data.userData) {
        return
      }

      const { userData } = data
      commit('defineDream/fromStore', userData.defineDream)
      commit('interestMap/fromStore', userData.interestMap)
    })
  }
}
